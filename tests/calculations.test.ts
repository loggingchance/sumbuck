import { describe, expect, it } from "vitest";
import { INSTRUCTION_LOGS } from "../data/instructionLogs";
import { PRACTICE_LOGS } from "../data/practiceLogs";
import {
  MIN_LOG_DIAMETER_IN,
  MIN_NOMINAL_LOG_LENGTH_FT,
  SAWLOG_TRIM_ALLOWANCE_IN,
  TRIM_FT,
  calculateInternationalQuarterVolume,
  calculateClearCuttingGrade,
  calculateClearFaceCount,
  calculateHollowScaleDeductionPercent,
  calculateHeartwoodPercent,
  calculateSegmentSweep,
  calculateSweepScaleDeductionPercent,
  calculateDoyleVolume,
  calculateScribnerVolume,
  compareCutPositions,
  interpolateDiameter,
  isProductEligible,
  makeSegments,
  scoreSolution,
  withSawlogTrimAllowance
} from "../lib/calculations";
import { optimizeCuts } from "../lib/optimizer";
import { NORTHERN_HARDWOODS_MARKET } from "../lib/markets";
import { DEFAULT_PRICES } from "../lib/prices";
import { DEFAULT_GRADE_STANDARDS } from "../lib/specifications";
import { PRODUCT_CLASSES, type GradeStandards, type LogSegment, type PracticeLog, type PriceTable } from "../lib/types";

const log = PRACTICE_LOGS[0];
const veneerLog = PRACTICE_LOGS.find((practiceLog) => practiceLog.veneerOnlyDefects.length > 0) ?? log;
const zeroPrices = PRODUCT_CLASSES.reduce((next, product) => {
  next[product] = 0;
  return next;
}, {} as PriceTable);

describe("hardwood bucking calculations", () => {
  it("uses the Northern Hardwoods Market as the resident market preset", () => {
    expect(NORTHERN_HARDWOODS_MARKET.name).toBe("Northern Hardwoods Market");
    expect(NORTHERN_HARDWOODS_MARKET.logRule).toBe("international_1_4");
    expect(NORTHERN_HARDWOODS_MARKET.pricesBySpecies["hard maple"].slicer_veneer).toBe(1925);
    expect(NORTHERN_HARDWOODS_MARKET.pricesBySpecies.walnut.prime_sawlog).toBe(2700);
    expect(NORTHERN_HARDWOODS_MARKET.pricesBySpecies.hickory.slicer_veneer).toBe(0);
    expect(NORTHERN_HARDWOODS_MARKET.pricesBySpecies["white ash"].pallet_log).toBe(150);
    expect(NORTHERN_HARDWOODS_MARKET.standardsBySpecies["hard maple"].number_1_sawlog.allowSmallTrimDefects).toBe(true);
    expect(NORTHERN_HARDWOODS_MARKET.standardsBySpecies["hard maple"].number_2_sawlog.minClearFaces).toBe(2);
    expect(NORTHERN_HARDWOODS_MARKET.standardsBySpecies["hard maple"].number_3_sawlog.minClearFaces).toBe(1);
  });

  it("keeps practice and instruction log sets separate", () => {
    expect(INSTRUCTION_LOGS).toHaveLength(50);
    expect(PRACTICE_LOGS.every((practiceLog) => practiceLog.teachingObjective === "")).toBe(true);
    expect(INSTRUCTION_LOGS.every((instructionLog) => instructionLog.teachingObjective.length > 0)).toBe(true);
  });

  it("preserves large source seams as visible multi-face defects", () => {
    const seamStem = PRACTICE_LOGS[52];
    const seam = seamStem.visibleDefects.find((defect) => defect.type === "deep_seam" && (defect.sourceSize ?? 0) >= 20);
    expect(seam).toBeDefined();
    if (!seam) throw new Error("Expected practice stem 053 to include a deep seam.");
    expect(seam?.sourceSize).toBeGreaterThanOrEqual(20);
    expect(seam.faces).toHaveLength(4);
    expect(seam.endFt - seam.startFt).toBeGreaterThan(3);
  });

  it("keeps seams common enough to match the HW Buck source pattern", () => {
    const seamStems = PRACTICE_LOGS.filter((practiceLog) => practiceLog.visibleDefects.some((defect) => defect.type === "deep_seam"));
    const buttSeamStems = seamStems.filter((practiceLog) =>
      practiceLog.visibleDefects.some((defect) => defect.type === "deep_seam" && defect.startFt <= 2)
    );

    expect(seamStems.length).toBeGreaterThanOrEqual(12);
    expect(buttSeamStems.length).toBeGreaterThanOrEqual(10);
  });

  it("includes HW Buck-style butt hollow centers that taper out", () => {
    const hollowStems = PRACTICE_LOGS.filter((practiceLog) => practiceLog.visibleDefects.some((defect) => defect.type === "hollow_center"));
    const buttHollowStems = hollowStems.filter((practiceLog) =>
      practiceLog.visibleDefects.some((defect) => defect.type === "hollow_center" && defect.startFt <= 1 && (defect.hollowTaperOutFt ?? 0) > 4)
    );

    expect(hollowStems.length).toBeGreaterThanOrEqual(20);
    expect(buttHollowStems.length).toBeGreaterThanOrEqual(18);
  });

  it("deducts scale for larger hollow centers but not small tolerated hollows", () => {
    const segment = makeSegments(log, [16.5])[0];
    expect(
      calculateHollowScaleDeductionPercent({
        ...segment,
        smallEndDiameterIn: 18,
        defects: [{ ...segment.defects[0], type: "hollow_center", sourceSize: 4 }]
      })
    ).toBe(0);
    expect(
      calculateHollowScaleDeductionPercent({
        ...segment,
        smallEndDiameterIn: 18,
        defects: [{ ...segment.defects[0], type: "hollow_center", sourceSize: 10 }]
      })
    ).toBeGreaterThan(0);
  });

  it("interpolates diameter along the stem profile", () => {
    const diameter = interpolateDiameter(log, log.totalLengthFt / 2);
    expect(diameter).toBeGreaterThan(10);
    expect(diameter).toBeLessThan(log.diameterPoints[0].diameterIn);
  });

  it("always keeps the butt and largest diameter at the left end", () => {
    for (const practiceLog of PRACTICE_LOGS) {
      const ordered = [...practiceLog.diameterPoints].sort((a, b) => a.positionFt - b.positionFt);
      const buttDiameter = ordered[0].diameterIn;
      expect(ordered[0].positionFt).toBe(0);
      expect(buttDiameter).toBe(Math.max(...ordered.map((point) => point.diameterIn)));
      for (let index = 1; index < ordered.length; index += 1) {
        expect(ordered[index].diameterIn).toBeLessThanOrEqual(ordered[index - 1].diameterIn);
      }
    }
  });

  it("builds stems that taper substantially from butt to top", () => {
    for (const practiceLog of PRACTICE_LOGS) {
      const ordered = [...practiceLog.diameterPoints].sort((a, b) => a.positionFt - b.positionFt);
      const buttDiameter = ordered[0].diameterIn;
      const topDiameter = ordered[ordered.length - 1].diameterIn;
      expect(buttDiameter - topDiameter).toBeGreaterThanOrEqual(4.75);
    }
  });

  it("makes upper stem sections more crooked than butt sections in nearly all examples", () => {
    const upperMoreCrookedCount = PRACTICE_LOGS.filter((practiceLog) => {
      const buttSweep = calculateSegmentSweep(practiceLog, 0, Math.min(8.5, practiceLog.totalLengthFt));
      const upperStart = Math.max(0, practiceLog.totalLengthFt - 8.5);
      const upperSweep = calculateSegmentSweep(practiceLog, upperStart, practiceLog.totalLengthFt);
      return upperSweep >= buttSweep;
    }).length;

    expect(upperMoreCrookedCount).toBeGreaterThanOrEqual(PRACTICE_LOGS.length * 0.85);
  });

  it("puts sawlog grade pressure in the upper half of every practice stem", () => {
    for (const practiceLog of PRACTICE_LOGS) {
      const upperSawlogDefects = practiceLog.visibleDefects.filter(
        (defect) => defect.startFt >= practiceLog.totalLengthFt * 0.5 && defect.impactClass === "sawlog_grade"
      );
      expect(upperSawlogDefects.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("generates log segments from cut positions", () => {
    const segments = makeSegments(log, [10.25, 20.5]);
    expect(segments).toHaveLength(3);
    expect(segments[0].startFt).toBe(0);
    expect(segments[1].startFt).toBe(10.25);
  });

  it("handles trim and nominal length", () => {
    const [segment] = makeSegments(log, [10.25]);
    expect(TRIM_FT).toBe(0.5);
    expect(segment.nominalLengthFt).toBe(9);
    expect(segment.trimFt).toBeCloseTo(1.25);
  });

  it("uses six inches of trim that does not count toward board footage length", () => {
    const [segment] = makeSegments(log, [8.5]);
    expect(segment.nominalLengthFt).toBe(8);
    const solution = scoreSolution(log, [8.5], DEFAULT_PRICES);
    expect(solution.segments[0].nominalLengthFt).toBe(8);
    expect(solution.segments[0].grossVolumeBoardFeet).toBe(calculateInternationalQuarterVolume(solution.segments[0].smallEndDiameterIn, 8));
  });

  it("ignores short buck-out cookies in scored results", () => {
    const solution = scoreSolution(log, [1.25, 9.75], DEFAULT_PRICES);

    expect(solution.segments.every((segment) => segment.nominalLengthFt >= MIN_NOMINAL_LOG_LENGTH_FT)).toBe(true);
    expect(solution.segments.some((segment) => segment.startFt < 1.25)).toBe(false);
  });

  it("allows only one sawlog per stem to scale with one inch less trim", () => {
    const cleanLog = {
      ...log,
      totalLengthFt: 16 + 10 / 12,
      visibleDefects: [],
      veneerOnlyDefects: [],
      sawlogAffectingDefects: [],
      bothVeneerAndSawlogDefects: []
    };
    const shortOpening = 8 + 5 / 12;
    const solution = scoreSolution(cleanLog, [shortOpening], DEFAULT_PRICES);
    const allowanceSegments = solution.segments.filter((segment) => segment.trimAllowanceInches === SAWLOG_TRIM_ALLOWANCE_IN);

    expect(allowanceSegments).toHaveLength(1);
    expect(solution.segments.filter((segment) => segment.nominalLengthFt === 8)).toHaveLength(1);
    expect(allowanceSegments[0].trimFt).toBeCloseTo(5 / 12, 2);
    expect(allowanceSegments[0].product.includes("veneer")).toBe(false);
  });

  it("does not apply the sawlog trim allowance to veneer", () => {
    const [strictSegment] = makeSegments(log, [8 + 5 / 12]);
    const allowanceSegment = withSawlogTrimAllowance({
      ...strictSegment,
      smallEndDiameterIn: 18,
      sweepIn: 0,
      defects: []
    });

    expect(allowanceSegment).not.toBeNull();
    expect(isProductEligible(allowanceSegment!, "slicer_veneer").eligible).toBe(false);
    expect(isProductEligible(allowanceSegment!, "rotary_veneer").eligible).toBe(false);
    expect(isProductEligible(allowanceSegment!, "number_1_sawlog").eligible).toBe(true);
  });

  it("calculates small-end diameter at the segment end", () => {
    const [segment] = makeSegments(log, [10.25]);
    expect(segment.smallEndDiameterIn).toBe(interpolateDiameter(log, 10.25));
  });

  it("measures segment sweep from the shape profile", () => {
    const segment = makeSegments(log, [16.5])[0];
    expect(segment.sweepIn).toBe(calculateSegmentSweep(log, 0, 16.5));
    expect(segment.sweepIn).toBeGreaterThanOrEqual(0);
  });

  it("rejects veneer above one inch of sweep", () => {
    const segment: LogSegment = {
      ...makeSegments(log, [8.5])[0],
      nominalLengthFt: 8,
      smallEndDiameterIn: 16,
      sweepIn: 1.1,
      defects: []
    };
    expect(isProductEligible(segment, "slicer_veneer").eligible).toBe(false);
    expect(isProductEligible({ ...segment, sweepIn: 1 }, "slicer_veneer").eligible).toBe(true);
  });

  it("rejects veneer outside the butt and lower half of the stem", () => {
    const buttSegment = {
      ...makeSegments(log, [8.5])[0],
      nominalLengthFt: 8,
      smallEndDiameterIn: 18,
      sweepIn: 0.5,
      defects: []
    };
    const upperSegment: LogSegment = {
      ...buttSegment,
      id: "upper-veneer-test",
      startFt: 42,
      endFt: 52,
      stemLengthFt: 52
    };
    expect(isProductEligible(buttSegment, "slicer_veneer").eligible).toBe(true);
    expect(isProductEligible(upperSegment, "slicer_veneer").eligible).toBe(false);
  });

  it("uses sweep to limit higher sawlog grades and deduct scale", () => {
    const segment: LogSegment = {
      ...makeSegments(log, [16.5])[0],
      nominalLengthFt: 16,
      smallEndDiameterIn: 18,
      sweepIn: 2.2,
      defects: []
    };
    expect(isProductEligible(segment, "prime_sawlog").eligible).toBe(false);
    expect(isProductEligible(segment, "select_sawlog").eligible).toBe(true);
    expect(calculateSweepScaleDeductionPercent(0.9)).toBe(0);
    expect(calculateSweepScaleDeductionPercent(2.2)).toBe(10);
    const score = scoreSolution({ ...log, visibleDefects: [], veneerOnlyDefects: [], sawlogAffectingDefects: [], bothVeneerAndSawlogDefects: [] }, [16.5], DEFAULT_PRICES).segments[0];
    expect(score.grossVolumeBoardFeet).toBeGreaterThanOrEqual(score.volumeBoardFeet);
  });

  it("enforces current length and diameter limits", () => {
    expect(MIN_NOMINAL_LOG_LENGTH_FT).toBe(8);
    expect(MIN_LOG_DIAMETER_IN).toBe(10);
    expect(isProductEligible({ ...makeSegments(log, [8.5])[0], nominalLengthFt: 7 }, "number_2_sawlog").eligible).toBe(false);
    expect(isProductEligible({ ...makeSegments(log, [8.5])[0], smallEndDiameterIn: 9.9 }, "pallet_log").eligible).toBe(false);
    expect(isProductEligible({ ...makeSegments(log, [8.5])[0], nominalLengthFt: 11 }, "slicer_veneer").eligible).toBe(false);
    expect(isProductEligible({ ...makeSegments(log, [8.5])[0], smallEndDiameterIn: 13.9 }, "rotary_veneer").eligible).toBe(false);
  });

  it("calculates International 1/4 volume", () => {
    expect(calculateInternationalQuarterVolume(16, 16)).toBeGreaterThanOrEqual(175);
    expect(calculateInternationalQuarterVolume(16, 16)).toBeLessThanOrEqual(185);
  });

  it("calculates alternative log rules", () => {
    expect(calculateDoyleVolume(16, 16)).toBe(144);
    expect(calculateScribnerVolume(16, 16)).toBeGreaterThan(150);
  });

  it("applies product-specific veneer-only defect logic", () => {
    const veneerDefect = veneerLog.veneerOnlyDefects[0];
    const segment = makeSegments(veneerLog, [Math.min(veneerLog.totalLengthFt - 1, veneerDefect.endFt + 1)])[0];
    const slicer = isProductEligible(segment, "slicer_veneer");
    const sawlog = isProductEligible(segment, "number_1_sawlog");
    expect(slicer.eligible).toBe(false);
    expect(sawlog.reason).toContain("clear face");
  });

  it("applies sawlog defect logic by face count", () => {
    const sawlogLog = PRACTICE_LOGS[3];
    const segment = makeSegments(sawlogLog, [30.25])[0];
    const prime = isProductEligible(segment, "prime_sawlog");
    expect(prime.eligible).toBe(false);
  });

  it("calculates value from product price and volume", () => {
    const solution = scoreSolution(log, [10.25, 20.5], DEFAULT_PRICES);
    expect(solution.totalValue).toBeGreaterThan(0);
    expect(solution.segments[0].volumeMbf).toBeCloseTo(solution.segments[0].volumeBoardFeet / 1000);
    expect(solution.segments[0].value).toBeCloseTo(
      solution.segments[0].volumeMbf * solution.segments[0].pricePerMbf,
      1
    );
  });

  it("compares a user pattern against the model pattern", () => {
    expect(compareCutPositions([10, 20], [10, 21])).toBe(1);
  });

  it("returns an optimized solution with value", () => {
    const optimized = optimizeCuts(log, DEFAULT_PRICES);
    expect(optimized.totalValue).toBeGreaterThan(0);
    expect(optimized.segments.length).toBeGreaterThan(0);
  });

  it("optimizer chooses the only high-value legal 16 ft pattern in a known-answer stem", () => {
    const knownLog = optimizerTestLog(16.5, 18);
    const prices: PriceTable = { ...zeroPrices, number_1_sawlog: 1000 };
    const standards: GradeStandards = {
      ...DEFAULT_GRADE_STANDARDS,
      number_1_sawlog: {
        ...DEFAULT_GRADE_STANDARDS.number_1_sawlog,
        allowedNominalLengthsFt: [16],
        minSmallEndDiameterIn: 10,
        minClearFaces: 4,
        maxSweepIn: null,
        maxHeartwoodPercent: null
      }
    };

    const optimized = optimizeCuts(knownLog, prices, "international_1_4", standards);

    expect(optimized.cutPositionsFt).toEqual([]);
    expect(optimized.segments).toHaveLength(1);
    expect(optimized.segments[0].nominalLengthFt).toBe(16);
    expect(optimized.segments[0].product).toBe("number_1_sawlog");
  });

  it("optimizer chooses two 8 ft logs when the known price table rewards only 8 ft logs", () => {
    const knownLog = optimizerTestLog(17, 18);
    const prices: PriceTable = { ...zeroPrices, number_1_sawlog: 1000 };
    const standards: GradeStandards = {
      ...DEFAULT_GRADE_STANDARDS,
      number_1_sawlog: {
        ...DEFAULT_GRADE_STANDARDS.number_1_sawlog,
        allowedNominalLengthsFt: [8],
        minSmallEndDiameterIn: 10,
        minClearFaces: 4,
        maxSweepIn: null,
        maxHeartwoodPercent: null
      }
    };

    const optimized = optimizeCuts(knownLog, prices, "international_1_4", standards);

    expect(optimized.cutPositionsFt).toEqual([8.5]);
    expect(optimized.segments.map((segment) => segment.nominalLengthFt)).toEqual([8, 8]);
    expect(optimized.segments.every((segment) => segment.product === "number_1_sawlog")).toBe(true);
  });

  it("optimizer can place an over-trim cut to keep a defect out of the next log", () => {
    const knownLog: PracticeLog = {
      ...optimizerTestLog(17.25, 18),
      visibleDefects: [
        sawlogDefect("butt-defect", 1, 1.2, "face_1"),
        sawlogDefect("boundary-defect", 8.6, 8.7, "face_2")
      ]
    };
    const prices: PriceTable = { ...zeroPrices, number_1_sawlog: 1000, number_2_sawlog: 100 };
    const standards: GradeStandards = {
      ...DEFAULT_GRADE_STANDARDS,
      number_1_sawlog: {
        ...DEFAULT_GRADE_STANDARDS.number_1_sawlog,
        allowedNominalLengthsFt: [8],
        minSmallEndDiameterIn: 10,
        minClearFaces: 4,
        maxSweepIn: null,
        maxHeartwoodPercent: null
      },
      number_2_sawlog: {
        ...DEFAULT_GRADE_STANDARDS.number_2_sawlog,
        allowedNominalLengthsFt: [8],
        minSmallEndDiameterIn: 10,
        minClearFaces: 0,
        maxSweepIn: null,
        maxHeartwoodPercent: null
      }
    };

    const minimumTrimPattern = scoreSolution(knownLog, [8.5], prices, "international_1_4", standards);
    const smarterOverTrimPattern = scoreSolution(knownLog, [8.75], prices, "international_1_4", standards);
    const optimized = optimizeCuts(knownLog, prices, "international_1_4", standards);

    expect(smarterOverTrimPattern.totalValue).toBeGreaterThan(minimumTrimPattern.totalValue);
    expect(optimized.totalValue).toBeGreaterThanOrEqual(smarterOverTrimPattern.totalValue);
    expect(optimized.cutPositionsFt[0]).toBeGreaterThanOrEqual(8.7);
    expect(optimized.segments[1].product).toBe("number_1_sawlog");
  });

  it("keeps veneer potential to no more than ten percent of practice logs", () => {
    const veneerPotentialLogs = PRACTICE_LOGS.filter(
      (practiceLog) => practiceLog.veneerOnlyDefects.length > 0 || practiceLog.bothVeneerAndSawlogDefects.length > 0
    );
    expect(veneerPotentialLogs.length).toBeLessThanOrEqual(PRACTICE_LOGS.length * 0.1);
  });

  it("keeps actual veneer-eligible butt cuts to no more than ten percent of practice logs", () => {
    const veneerEligibleLogs = PRACTICE_LOGS.filter((practiceLog) =>
      [8.5, 9.5, 10.5].some((cut) => {
        if (cut >= practiceLog.totalLengthFt) return false;
        const [buttSegment] = makeSegments(practiceLog, [cut]);
        return (
          isProductEligible(buttSegment, "slicer_veneer").eligible ||
          isProductEligible(buttSegment, "rotary_veneer").eligible
        );
      })
    );
    expect(veneerEligibleLogs.length).toBeLessThanOrEqual(PRACTICE_LOGS.length * 0.1);
  });

  it("places veneer training defects in the butt or lower half", () => {
    const veneerPotentialLogs = PRACTICE_LOGS.filter((practiceLog) => practiceLog.veneerOnlyDefects.length > 0);
    expect(veneerPotentialLogs.length).toBeGreaterThan(0);
    for (const practiceLog of veneerPotentialLogs) {
      for (const defect of practiceLog.veneerOnlyDefects) {
        expect(defect.startFt).toBeLessThanOrEqual(practiceLog.totalLengthFt * 0.5);
      }
    }
  });

  it("puts a series of upper-stem marks on every log that rule out veneer without reducing clear faces", () => {
    for (const practiceLog of PRACTICE_LOGS) {
      const upperVeneerBlockers = practiceLog.visibleDefects.filter(
        (defect) =>
          defect.startFt >= practiceLog.totalLengthFt * 0.5 &&
          defect.impactClass === "informational" &&
          defect.productImpacts.slicer_veneer?.eligible === false &&
          defect.productImpacts.sawlog?.gradeImpact === "none"
      );
      expect(upperVeneerBlockers.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("does not send a one-defect legal butt log to pallet", () => {
    const segment: LogSegment = {
      ...makeSegments(log, [16.5])[0],
      nominalLengthFt: 16,
      smallEndDiameterIn: 18,
      defects: [
        {
          id: "single-butt-knot",
          type: "overgrown_knot",
          startFt: 4,
          endFt: 5,
          faces: ["face_1"],
          severity: "moderate",
          visibility: "visible",
          impactClass: "sawlog_grade",
          productImpacts: {
            sawlog: { gradeImpact: "moderate", reason: "One affected face." }
          },
          notes: "One face defect should still leave clear sawlog faces."
        }
      ]
    };
    expect(calculateClearFaceCount(segment)).toBe(3);
    expect(isProductEligible(segment, "number_1_sawlog").eligible).toBe(true);
  });

  it("does not optimize below the authored model solutions", () => {
    for (const practiceLog of PRACTICE_LOGS) {
      const model = scoreSolution(practiceLog, practiceLog.modelSolutionCutPositionsFt, DEFAULT_PRICES);
      const optimized = optimizeCuts(practiceLog, DEFAULT_PRICES);
      expect(optimized.totalValue).toBeGreaterThanOrEqual(model.totalValue);
    }
  }, 30000);

  it("keeps sawlog eligibility when only veneer defects are present", () => {
    const segment: LogSegment = {
      ...makeSegments(veneerLog, [10.25])[0],
      defects: veneerLog.veneerOnlyDefects
    };
    expect(calculateClearFaceCount(segment)).toBe(4);
    expect(isProductEligible(segment, "number_1_sawlog").eligible).toBe(true);
  });

  it("can ignore small sawlog defects that are fully inside trim", () => {
    const base = makeSegments(log, [16.5])[0];
    const trimDefect = {
      id: "small-trim-defect",
      type: "overgrown_knot" as const,
      startFt: base.startFt + 0.12,
      endFt: base.startFt + 0.28,
      faces: ["face_1" as const],
      severity: "moderate" as const,
      visibility: "visible" as const,
      impactClass: "sawlog_grade" as const,
      productImpacts: {
        sawlog: { gradeImpact: "moderate" as const, reason: "Small defect in trim." }
      },
      notes: "Small sawlog defect fully inside trim."
    };
    const segment: LogSegment = {
      ...base,
      smallEndDiameterIn: 18,
      nominalLengthFt: 16,
      defects: [trimDefect]
    };
    const ruleWithTrimOption = {
      ...DEFAULT_GRADE_STANDARDS.number_1_sawlog,
      allowSmallTrimDefects: true
    };

    expect(calculateClearFaceCount(segment)).toBe(3);
    expect(calculateClearFaceCount(segment, ruleWithTrimOption)).toBe(4);
    expect(
      calculateClearFaceCount(
        {
          ...segment,
          defects: [{ ...trimDefect, startFt: base.startFt + TRIM_FT + 0.1, endFt: base.startFt + TRIM_FT + 0.25 }]
        },
        ruleWithTrimOption
      )
    ).toBe(3);
  });

  it("falls to pallet when no clear faces remain", () => {
    const base = makeSegments(log, [16.25])[0];
    const segment: LogSegment = {
      ...base,
      smallEndDiameterIn: 18,
      nominalLengthFt: 16,
      defects: ["face_1", "face_2", "face_3", "face_4"].map((face, index) => ({
        id: `blocking-${index}`,
        type: "open_knot",
        startFt: 1 + index,
        endFt: 2 + index,
        faces: [face as LogSegment["defects"][number]["faces"][number]],
        severity: "major",
        visibility: "visible",
        impactClass: "sawlog_grade",
        productImpacts: {
          sawlog: { gradeImpact: "severe", reason: "Blocks a clear face." }
        },
        notes: "Sawlog-grade face blocker."
      }))
    };

    expect(calculateClearFaceCount(segment)).toBe(0);
    expect(isProductEligible(segment, "number_3_sawlog").eligible).toBe(false);
  });

  it("can grade sawlogs by clear cuttings instead of clear faces", () => {
    const clearCuttingStandards = {
      ...DEFAULT_GRADE_STANDARDS,
      number_1_sawlog: {
        ...DEFAULT_GRADE_STANDARDS.number_1_sawlog,
        sawlogGradingBasis: "clear_cuttings" as const,
        minClearCuttingLengthFt: 3,
        maxClearCuttings: 2,
        minClearCuttingProportion: 2 / 3
      }
    };
    const base = {
      ...makeSegments(log, [16.5])[0],
      smallEndDiameterIn: 18,
      nominalLengthFt: 16,
      trimFt: 0.5
    };
    const scatteredDefects = ["face_1", "face_2", "face_3"].flatMap((face) =>
      [2, 6, 10, 14].map((startFt) => ({
        id: `${face}-${startFt}`,
        type: "overgrown_knot",
        startFt,
        endFt: startFt + 1,
        faces: [face as LogSegment["defects"][number]["faces"][number]],
        severity: "moderate" as const,
        visibility: "visible" as const,
        impactClass: "sawlog_grade" as const,
        productImpacts: {
          sawlog: { gradeImpact: "moderate" as const, reason: "Breaks clear cuttings." }
        },
        notes: "Breaks the grading face into short clear runs."
      }))
    );

    const failingSegment: LogSegment = { ...base, defects: scatteredDefects };
    expect(calculateClearCuttingGrade(failingSegment, clearCuttingStandards.number_1_sawlog).eligible).toBe(false);
    expect(isProductEligible(failingSegment, "number_1_sawlog", clearCuttingStandards).eligible).toBe(false);

    const passingSegment: LogSegment = { ...base, defects: scatteredDefects.filter((defect) => defect.faces[0] === "face_4") };
    expect(isProductEligible(passingSegment, "number_1_sawlog", clearCuttingStandards).eligible).toBe(true);
  });

  it("tracks and enforces heart limits by grade", () => {
    const segment = {
      ...makeSegments(log, [16.5])[0],
      smallEndDiameterIn: 18,
      heartwoodDiameterIn: 10,
      heartwoodPercent: 55.6,
      nominalLengthFt: 16,
      sweepIn: 0,
      defects: []
    };

    expect(calculateHeartwoodPercent(log, log.totalLengthFt / 2)).toBeGreaterThan(0);
    expect(isProductEligible(segment, "prime_sawlog").eligible).toBe(false);
    expect(isProductEligible({ ...segment, heartwoodDiameterIn: 5, heartwoodPercent: 27.8 }, "prime_sawlog").eligible).toBe(true);
  });
});

function optimizerTestLog(totalLengthFt: number, diameterIn: number): PracticeLog {
  return {
    id: `optimizer-test-${totalLengthFt}`,
    title: "optimizer test stem",
    species: "hard maple",
    totalLengthFt,
    diameterPoints: [
      { positionFt: 0, diameterIn },
      { positionFt: totalLengthFt, diameterIn }
    ],
    heartwoodPoints: [
      { positionFt: 0, diameterIn: diameterIn * 0.2 },
      { positionFt: totalLengthFt, diameterIn: diameterIn * 0.2 }
    ],
    shapeProfile: {
      sweepDirection: "left",
      ovality: 0,
      barkRidgeFrequency: 1,
      shapePoints: [
        { positionFt: 0, sweepOffsetIn: 0, topIrregularityIn: 0, bottomIrregularityIn: 0 },
        { positionFt: totalLengthFt, sweepOffsetIn: 0, topIrregularityIn: 0, bottomIrregularityIn: 0 }
      ]
    },
    minUsableTopDiameterIn: 10,
    visibleDefects: [],
    veneerOnlyDefects: [],
    sawlogAffectingDefects: [],
    bothVeneerAndSawlogDefects: [],
    modelSolutionCutPositionsFt: [],
    modelSolutionExplanation: "",
    difficulty: "intro",
    teachingObjective: ""
  };
}

function sawlogDefect(id: string, startFt: number, endFt: number, face: LogSegment["defects"][number]["faces"][number]) {
  return {
    id,
    type: "open_knot",
    startFt,
    endFt,
    faces: [face],
    severity: "moderate" as const,
    visibility: "visible" as const,
    impactClass: "sawlog_grade" as const,
    productImpacts: {
      sawlog: { gradeImpact: "moderate" as const, reason: "Blocks a clear face." }
    },
    notes: "Known-answer optimizer defect."
  };
}
