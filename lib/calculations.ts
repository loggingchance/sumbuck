import {
  PRODUCT_CLASSES,
  type CutSolution,
  type Defect,
  type Face,
  type GradeStandard,
  type GradeStandards,
  type LogRule,
  type LogSegment,
  type PracticeLog,
  type PriceTable,
  type ProductClass,
  type SegmentScore
} from "./types";
import { DEFAULT_GRADE_STANDARDS } from "./specifications";

export const TRIM_FT = 0.5;
export const SAWLOG_TRIM_ALLOWANCE_IN = 1;
export const SAWLOG_TRIM_ALLOWANCE_FT = SAWLOG_TRIM_ALLOWANCE_IN / 12;
export const MIN_LOG_DIAMETER_IN = 10;
export const MIN_NOMINAL_LOG_LENGTH_FT = 8;

const VENEER_PRODUCTS: ProductClass[] = ["slicer_veneer", "rotary_veneer"];
const NON_VENEER_PRODUCTS = PRODUCT_CLASSES.filter((product) => !VENEER_PRODUCTS.includes(product));

export function interpolateDiameter(log: PracticeLog, positionFt: number): number {
  const points = [...log.diameterPoints].sort((a, b) => a.positionFt - b.positionFt);
  if (positionFt <= points[0].positionFt) return points[0].diameterIn;
  if (positionFt >= points[points.length - 1].positionFt) return points[points.length - 1].diameterIn;

  const right = points.find((point) => point.positionFt >= positionFt);
  const left = [...points].reverse().find((point) => point.positionFt <= positionFt);
  if (!left || !right) return points[0].diameterIn;
  if (left.positionFt === right.positionFt) return left.diameterIn;

  const fraction = (positionFt - left.positionFt) / (right.positionFt - left.positionFt);
  return round(left.diameterIn + fraction * (right.diameterIn - left.diameterIn), 2);
}

export function interpolateHeartwoodDiameter(log: PracticeLog, positionFt: number): number {
  const points = log.heartwoodPoints;
  if (!points?.length) return fallbackHeartwoodDiameter(log, positionFt);
  const sorted = [...points].sort((a, b) => a.positionFt - b.positionFt);
  if (positionFt <= sorted[0].positionFt) return sorted[0].diameterIn;
  if (positionFt >= sorted[sorted.length - 1].positionFt) return sorted[sorted.length - 1].diameterIn;

  const right = sorted.find((point) => point.positionFt >= positionFt);
  const left = [...sorted].reverse().find((point) => point.positionFt <= positionFt);
  if (!left || !right) return sorted[0].diameterIn;
  if (left.positionFt === right.positionFt) return left.diameterIn;

  const fraction = (positionFt - left.positionFt) / (right.positionFt - left.positionFt);
  return round(left.diameterIn + fraction * (right.diameterIn - left.diameterIn), 2);
}

export function calculateHeartwoodPercent(log: PracticeLog, positionFt: number): number {
  const diameter = interpolateDiameter(log, positionFt);
  if (diameter <= 0) return 0;
  return round((interpolateHeartwoodDiameter(log, positionFt) / diameter) * 100, 1);
}

export function makeSegments(log: PracticeLog, cutPositionsFt: number[]): LogSegment[] {
  const legalCuts = [...new Set(cutPositionsFt)]
    .filter((cut) => cut > 0 && cut < log.totalLengthFt)
    .sort((a, b) => a - b);
  const positions = [0, ...legalCuts, log.totalLengthFt];

  return positions.slice(0, -1).map((start, index) => {
    const end = positions[index + 1];
    const rawLength = end - start;
    const nominalLength = calculateNominalLengthFt(rawLength);
    const defects = allDefects(log).filter((defect) => overlaps(defect.startFt, defect.endFt, start, end));
    const smallEndDiameterIn = interpolateDiameter(log, end);
    const heartwoodDiameterIn = interpolateHeartwoodDiameter(log, end);

    return {
      id: `${log.id}-segment-${index + 1}`,
      startFt: start,
      endFt: end,
      stemLengthFt: log.totalLengthFt,
      nominalLengthFt: nominalLength,
      trimFt: round(rawLength - nominalLength, 2),
      smallEndDiameterIn,
      heartwoodDiameterIn,
      heartwoodPercent: round((heartwoodDiameterIn / smallEndDiameterIn) * 100, 1),
      sweepIn: calculateSegmentSweep(log, start, end),
      species: log.species,
      defects
    };
  });
}

export function calculateNominalLengthFt(rawLengthFt: number, trimRequirementFt = TRIM_FT): number {
  return Math.max(0, Math.floor(rawLengthFt - trimRequirementFt + 0.00001));
}

export function scoreSolution(
  log: PracticeLog,
  cutPositionsFt: number[],
  prices: PriceTable,
  logRule: LogRule = "international_1_4",
  standards: GradeStandards = DEFAULT_GRADE_STANDARDS
): CutSolution {
  const rawSegments = makeSegments(log, cutPositionsFt);
  const strictSegments = scoreSegmentSet(log, rawSegments, null, prices, logRule, standards);
  const allowanceOptions = rawSegments.map((_, index) =>
    scoreSegmentSet(log, rawSegments, index, prices, logRule, standards)
  );
  const segments = [strictSegments, ...allowanceOptions].sort(
    (a, b) => b.reduce((total, segment) => total + segment.value, 0) - a.reduce((total, segment) => total + segment.value, 0)
  )[0];

  return {
    cutPositionsFt: [...cutPositionsFt].sort((a, b) => a - b),
    segments,
    totalValue: round(segments.reduce((total, segment) => total + segment.value, 0), 2),
    logRule
  };
}

function scoreSegmentSet(
  log: PracticeLog,
  segments: LogSegment[],
  allowanceSegmentIndex: number | null,
  prices: PriceTable,
  logRule: LogRule,
  standards: GradeStandards
): SegmentScore[] {
  return segments
    .map((segment, index) => {
      const candidate = index === allowanceSegmentIndex ? withSawlogTrimAllowance(segment) : segment;
      if (!candidate) return null;
      if (
        candidate.nominalLengthFt < MIN_NOMINAL_LOG_LENGTH_FT ||
        candidate.smallEndDiameterIn < Math.max(MIN_LOG_DIAMETER_IN, log.minUsableTopDiameterIn)
      ) {
        return null;
      }
      return scoreSegment(
        candidate,
        prices,
        logRule,
        standards,
        candidate.trimAllowanceInches ? { allowedProducts: NON_VENEER_PRODUCTS } : undefined
      );
    })
    .filter((segment): segment is SegmentScore => Boolean(segment));
}

export function withSawlogTrimAllowance(segment: LogSegment): LogSegment | null {
  const rawLength = segment.endFt - segment.startFt;
  const adjustedTrimRequirement = TRIM_FT - SAWLOG_TRIM_ALLOWANCE_FT;
  const nominalLengthFt = calculateNominalLengthFt(rawLength, adjustedTrimRequirement);
  const trimFt = round(rawLength - nominalLengthFt, 2);
  if (nominalLengthFt <= segment.nominalLengthFt) return null;
  if (trimFt < adjustedTrimRequirement - 0.00001 || trimFt >= TRIM_FT) return null;
  return {
    ...segment,
    nominalLengthFt,
    trimFt,
    trimAllowanceInches: SAWLOG_TRIM_ALLOWANCE_IN
  };
}

export function scoreSegment(
  segment: LogSegment,
  prices: PriceTable,
  logRule: LogRule = "international_1_4",
  standards: GradeStandards = DEFAULT_GRADE_STANDARDS,
  options: { allowedProducts?: ProductClass[] } = {}
): SegmentScore {
  const notes: string[] = [];
  const eligibilityNotes: string[] = [];
  const product = chooseProduct(segment, prices, standards, notes, eligibilityNotes, options.allowedProducts);
  const grossVolumeBoardFeet = calculateBoardFootVolume(
    segment.smallEndDiameterIn,
    segment.nominalLengthFt,
    logRule
  );
  const scaleDeductionPercent = Math.min(
    70,
    calculateSweepScaleDeductionPercent(segment.sweepIn) + calculateHollowScaleDeductionPercent(segment)
  );
  const volumeBoardFeet = Math.round(grossVolumeBoardFeet * (1 - scaleDeductionPercent / 100));
  const volumeMbf = round(volumeBoardFeet / 1000, 3);
  const value = round(volumeMbf * prices[product], 2);

  return {
    ...segment,
    product,
    clearFaceCount: calculateClearFaceCount(segment, standards[product]),
    clearCuttingSummary: formatClearCuttingSummary(segment, standards[product]?.maxClearCuttings ?? null),
    scaleDeductionPercent,
    grossVolumeBoardFeet,
    volumeBoardFeet,
    volumeMbf,
    pricePerMbf: prices[product],
    value,
    defectNotes: notes,
    eligibilityNotes
  };
}

export function chooseProduct(
  segment: LogSegment,
  prices: PriceTable,
  standards: GradeStandards = DEFAULT_GRADE_STANDARDS,
  defectNotes: string[] = [],
  eligibilityNotes: string[] = [],
  allowedProducts: ProductClass[] = PRODUCT_CLASSES.slice()
): ProductClass {
  const byValue = allowedProducts.slice().sort((a, b) => prices[b] - prices[a]);
  for (const product of byValue) {
    const result = isProductEligible(segment, product, standards);
    eligibilityNotes.push(`${product}: ${result.reason}`);
    if (result.eligible) return product;
    defectNotes.push(result.reason);
  }
  return "pallet_log";
}

export function isProductEligible(
  segment: LogSegment,
  product: ProductClass,
  standards: GradeStandards = DEFAULT_GRADE_STANDARDS
): { eligible: boolean; reason: string } {
  const rule = standards[product];
  if (!rule) return { eligible: false, reason: "No rule exists for this product." };

  if (segment.smallEndDiameterIn < rule.minSmallEndDiameterIn) {
    return { eligible: false, reason: `Small end diameter is below ${rule.minSmallEndDiameterIn} in.` };
  }

  if (!rule.allowedNominalLengthsFt.includes(segment.nominalLengthFt)) {
    return { eligible: false, reason: `${segment.nominalLengthFt} ft is not an allowed nominal length.` };
  }

  if (rule.maxHeartwoodPercent !== null && segment.heartwoodPercent > rule.maxHeartwoodPercent) {
    return {
      eligible: false,
      reason: `Heart is ${segment.heartwoodPercent.toFixed(1)}% of diameter, above the ${rule.maxHeartwoodPercent}% limit.`
    };
  }

  if (product === "slicer_veneer" || product === "rotary_veneer") {
    if (segment.trimFt < TRIM_FT) {
      return { eligible: false, reason: "Veneer requires the full 6 in trim allowance." };
    }

    if (segment.startFt > 0.25 || segment.endFt > segment.stemLengthFt * 0.5) {
      return { eligible: false, reason: "Veneer must come from the butt or lower half of the stem." };
    }

    if (segment.sweepIn > 1) {
      return { eligible: false, reason: `Sweep is ${segment.sweepIn.toFixed(1)} in; veneer allows no more than 1.0 in.` };
    }

    const veneerBlocker = segment.defects.find(
      (defect) =>
        defect.impactClass === "veneer_and_sawlog" ||
        defect.productImpacts[product]?.eligible === false ||
        (defect.impactClass === "veneer_only" && defect.productImpacts[product]?.eligible !== true)
    );
    if (veneerBlocker) {
      return {
        eligible: false,
        reason: `${veneerBlocker.type.replaceAll("_", " ")} excludes ${product.replaceAll("_", " ")}.`
      };
    }
  }

  if (product.includes("sawlog")) {
    return simplifiedSawlogEligibility(segment, product, standards);
  }

  return { eligible: true, reason: "Meets prototype diameter, length, and defect requirements." };
}

function simplifiedSawlogEligibility(
  segment: LogSegment,
  product: ProductClass,
  standards: GradeStandards
): { eligible: boolean; reason: string } {
  const spec = standards[product];
  if (!spec) return { eligible: false, reason: "No sawlog grade specification exists for this product." };

  const clearFaces = calculateClearFaceCount(segment, spec);
  const clearCuttings = calculateClearCuttingGrade(segment, spec);
  if (spec.maxSweepIn !== null && segment.sweepIn > spec.maxSweepIn) {
    return {
      eligible: false,
      reason: `Sweep is ${segment.sweepIn.toFixed(1)} in, above the ${spec.maxSweepIn.toFixed(1)} in limit for ${product.replaceAll("_", " ")}.`
    };
  }

  if (product !== "pallet_log" && clearFaces === 0 && spec.sawlogGradingBasis === "clear_faces") {
    return {
      eligible: false,
      reason: "No clear faces remain, so this segment falls to pallet."
    };
  }

  if (spec.sawlogGradingBasis === "clear_cuttings" && product !== "pallet_log") {
    if (!clearCuttings.eligible) {
      return {
        eligible: false,
        reason: clearCuttings.reason
      };
    }
    return {
      eligible: true,
      reason: `${clearCuttings.summary}, ${segment.sweepIn.toFixed(1)} in sweep, and ${segment.smallEndDiameterIn.toFixed(1)} in small end meet the configured clear-cutting spec.`
    };
  }

  if (clearFaces < spec.minClearFaces) {
    return {
      eligible: false,
      reason: `${clearFaces} clear face(s) are below the ${spec.minClearFaces} required for ${product.replaceAll("_", " ")}.`
    };
  }

  return {
    eligible: true,
    reason: `${clearFaces} clear face(s), ${segment.sweepIn.toFixed(1)} in sweep, and ${segment.smallEndDiameterIn.toFixed(1)} in small end meet the configured grade spec.`
  };
}

export function calculateClearFaceCount(
  segment: LogSegment,
  spec?: Pick<GradeStandard, "allowSmallTrimDefects">
): number {
  const gradeDefects = segment.defects.filter(
    (defect) =>
      (defect.impactClass === "sawlog_grade" || defect.impactClass === "veneer_and_sawlog") &&
      !isAllowedSmallTrimDefect(segment, defect, spec)
  );
  const affectedFaces = new Set(gradeDefects.flatMap((defect) => defect.faces));
  return Math.max(0, 4 - affectedFaces.size);
}

function isAllowedSmallTrimDefect(
  segment: LogSegment,
  defect: Defect,
  spec?: Pick<GradeStandard, "allowSmallTrimDefects">
): boolean {
  if (!spec?.allowSmallTrimDefects) return false;

  const defectLengthIn = (defect.endFt - defect.startFt) * 12;
  if (defectLengthIn > 2.00001) return false;

  const epsilon = 0.00001;
  const inButtTrim = defect.startFt >= segment.startFt - epsilon && defect.endFt <= segment.startFt + TRIM_FT + epsilon;
  const inTopTrim = defect.startFt >= segment.endFt - TRIM_FT - epsilon && defect.endFt <= segment.endFt + epsilon;
  return inButtTrim || inTopTrim;
}

export function calculateClearCuttingGrade(
  segment: LogSegment,
  spec: { minClearCuttingLengthFt: number; maxClearCuttings: number | null; minClearCuttingProportion: number }
): { eligible: boolean; reason: string; summary: string } {
  if (spec.minClearCuttingProportion <= 0) {
    return { eligible: true, reason: "No clear-cutting minimum is required.", summary: "no clear-cutting minimum" };
  }

  const faces: Face[] = ["face_1", "face_2", "face_3", "face_4"];
  const faceResults = faces
    .map((face) => clearCuttingsForFace(segment, face, spec))
    .sort((a, b) => b.clearLengthFt - a.clearLengthFt);
  const gradingFaces = faceResults.slice(0, 3);
  const needed = segment.nominalLengthFt * spec.minClearCuttingProportion;
  const failedFace = gradingFaces.find((face) => face.clearLengthFt + 0.00001 < needed);
  const summary = gradingFaces
    .map((face) => `${face.clearLengthFt.toFixed(1)} ft/${segment.nominalLengthFt} ft`)
    .join(", ");

  if (failedFace) {
    return {
      eligible: false,
      reason: `Best three faces need ${formatProportion(spec.minClearCuttingProportion)} clear cuttings; one face has ${failedFace.clearLengthFt.toFixed(1)} ft of qualifying clear cutting.`,
      summary: `clear cuttings ${summary}`
    };
  }

  return {
    eligible: true,
    reason: `Best three faces meet ${formatProportion(spec.minClearCuttingProportion)} clear cutting requirements.`,
    summary: `clear cuttings ${summary}`
  };
}

function clearCuttingsForFace(
  segment: LogSegment,
  face: Face,
  spec: { minClearCuttingLengthFt: number; maxClearCuttings: number | null }
) {
  const gradingLengthFt = segment.nominalLengthFt;
  const gradeDefects = segment.defects
    .filter(
      (defect) =>
        defect.faces.includes(face) &&
        (defect.impactClass === "sawlog_grade" || defect.impactClass === "veneer_and_sawlog")
    )
    .map((defect) => ({
      startFt: Math.max(0, defect.startFt - segment.startFt),
      endFt: Math.min(gradingLengthFt, defect.endFt - segment.startFt)
    }))
    .filter((defect) => defect.endFt > 0 && defect.startFt < gradingLengthFt)
    .sort((a, b) => a.startFt - b.startFt);

  const clearRuns: number[] = [];
  let cursor = 0;
  for (const defect of gradeDefects) {
    const clearLength = Math.max(0, defect.startFt - cursor);
    if (clearLength >= spec.minClearCuttingLengthFt) clearRuns.push(clearLength);
    cursor = Math.max(cursor, defect.endFt);
  }
  const tailLength = Math.max(0, gradingLengthFt - cursor);
  if (tailLength >= spec.minClearCuttingLengthFt) clearRuns.push(tailLength);

  const allowedCuttings = spec.maxClearCuttings ?? clearRuns.length;
  const clearLengthFt = clearRuns
    .sort((a, b) => b - a)
    .slice(0, allowedCuttings)
    .reduce((total, length) => total + length, 0);

  return { face, clearLengthFt };
}

function formatClearCuttingSummary(segment: LogSegment, maxClearCuttings: number | null): string {
  const faces: Face[] = ["face_1", "face_2", "face_3", "face_4"];
  const clearLengths = faces
    .map((face) =>
      clearCuttingsForFace(segment, face, {
        minClearCuttingLengthFt: 0,
        maxClearCuttings
      }).clearLengthFt
    )
    .sort((a, b) => b - a)
    .slice(0, 3);
  return clearLengths.map((length) => `${length.toFixed(1)} ft`).join(", ");
}

function formatProportion(value: number) {
  if (Math.abs(value - 5 / 6) < 0.001) return "5/6";
  if (Math.abs(value - 3 / 4) < 0.001) return "3/4";
  if (Math.abs(value - 2 / 3) < 0.001) return "2/3";
  if (Math.abs(value - 1 / 2) < 0.001) return "1/2";
  if (Math.abs(value - 1 / 3) < 0.001) return "1/3";
  return `${Math.round(value * 100)}%`;
}

export function calculateInternationalQuarterVolume(smallEndDiameterIn: number, nominalLengthFt: number): number {
  if (smallEndDiameterIn < 6 || nominalLengthFt < 4) return 0;
  const diameter = Math.floor(smallEndDiameterIn);
  // Prototype approximation of the International 1/4 rule.
  // The previous formula was off by roughly a factor of four for common 16 ft hardwood logs.
  // This version is calibrated to a 16 ft small-end scale and then adjusted by log length.
  const volume = (0.796 * diameter * diameter - 1.375 * diameter - 1.23) * (nominalLengthFt / 16);
  return Math.max(0, Math.round(volume));
}

export function calculateBoardFootVolume(
  smallEndDiameterIn: number,
  nominalLengthFt: number,
  logRule: LogRule
): number {
  if (logRule === "doyle") return calculateDoyleVolume(smallEndDiameterIn, nominalLengthFt);
  if (logRule === "scribner") return calculateScribnerVolume(smallEndDiameterIn, nominalLengthFt);
  return calculateInternationalQuarterVolume(smallEndDiameterIn, nominalLengthFt);
}

function fallbackHeartwoodDiameter(log: PracticeLog, positionFt: number): number {
  const diameter = interpolateDiameter(log, positionFt);
  const fraction = log.totalLengthFt === 0 ? 0 : positionFt / log.totalLengthFt;
  return round(Math.max(1.4, diameter * (0.24 + fraction * 0.1)));
}

export function calculateDoyleVolume(smallEndDiameterIn: number, nominalLengthFt: number): number {
  if (smallEndDiameterIn < 6 || nominalLengthFt < 4) return 0;
  const diameter = Math.floor(smallEndDiameterIn);
  const volume = ((diameter - 4) * (diameter - 4) * nominalLengthFt) / 16;
  return Math.max(0, Math.round(volume));
}

export function calculateScribnerVolume(smallEndDiameterIn: number, nominalLengthFt: number): number {
  if (smallEndDiameterIn < 6 || nominalLengthFt < 4) return 0;
  const diameter = Math.floor(smallEndDiameterIn);
  const volume = (0.79 * diameter * diameter - 2 * diameter - 4) * (nominalLengthFt / 16);
  return Math.max(0, Math.round(volume));
}

export function calculateSegmentSweep(log: PracticeLog, startFt: number, endFt: number): number {
  const shapePoints = [...log.shapeProfile.shapePoints].sort((a, b) => a.positionFt - b.positionFt);
  const samplePositions = [
    startFt,
    endFt,
    ...shapePoints.map((point) => point.positionFt).filter((position) => position > startFt && position < endFt)
  ];
  const offsets = samplePositions.map((position) => interpolateSweepOffset(log, position));
  return round(Math.max(...offsets) - Math.min(...offsets), 2);
}

export function calculateSweepScaleDeductionPercent(sweepIn: number): number {
  if (sweepIn <= 1) return 0;
  if (sweepIn <= 2) return 5;
  if (sweepIn <= 3) return 10;
  if (sweepIn <= 4) return 15;
  return 20;
}

export function calculateHollowScaleDeductionPercent(segment: LogSegment): number {
  const hollow = segment.defects.find((defect) => defect.type === "hollow_center" && (defect.sourceSize ?? 0) > 0);
  if (!hollow?.sourceSize) return 0;

  const hollowDiameterRatio = hollow.sourceSize / Math.max(1, segment.smallEndDiameterIn);
  if (hollowDiameterRatio < 0.28) return 0;
  return Math.min(35, Math.round(hollowDiameterRatio * hollowDiameterRatio * 100));
}

function interpolateSweepOffset(log: PracticeLog, positionFt: number): number {
  const points = [...log.shapeProfile.shapePoints].sort((a, b) => a.positionFt - b.positionFt);
  if (positionFt <= points[0].positionFt) return points[0].sweepOffsetIn;
  if (positionFt >= points[points.length - 1].positionFt) return points[points.length - 1].sweepOffsetIn;
  const right = points.find((point) => point.positionFt >= positionFt);
  const left = [...points].reverse().find((point) => point.positionFt <= positionFt);
  if (!left || !right) return points[0].sweepOffsetIn;
  if (left.positionFt === right.positionFt) return left.sweepOffsetIn;
  const fraction = (positionFt - left.positionFt) / (right.positionFt - left.positionFt);
  return left.sweepOffsetIn + (right.sweepOffsetIn - left.sweepOffsetIn) * fraction;
}

export function compareCutPositions(userCuts: number[], modelCuts: number[]): number {
  const maxLength = Math.max(userCuts.length, modelCuts.length);
  let penalty = Math.abs(userCuts.length - modelCuts.length) * 2;
  for (let index = 0; index < Math.min(userCuts.length, modelCuts.length); index += 1) {
    penalty += Math.abs(userCuts[index] - modelCuts[index]);
  }
  return round(maxLength === 0 ? 0 : penalty, 2);
}

export function allDefects(log: PracticeLog): Defect[] {
  const defects = [
    ...log.visibleDefects,
    ...log.veneerOnlyDefects,
    ...log.sawlogAffectingDefects,
    ...log.bothVeneerAndSawlogDefects
  ];
  return defects.filter((defect, index) => defects.findIndex((item) => item.id === defect.id) === index);
}

export function overlaps(aStart: number, aEnd: number, bStart: number, bEnd: number): boolean {
  return aStart < bEnd && aEnd > bStart;
}

export function round(value: number, places = 2): number {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
}
