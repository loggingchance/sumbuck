import {
  MIN_LOG_DIAMETER_IN,
  MIN_NOMINAL_LOG_LENGTH_FT,
  SAWLOG_TRIM_ALLOWANCE_FT,
  TRIM_FT,
  allDefects,
  calculateSegmentSweep,
  interpolateDiameter,
  interpolateHeartwoodDiameter,
  overlaps,
  scoreSegment,
  scoreSolution,
  withSawlogTrimAllowance
} from "./calculations";
import { DEFAULT_GRADE_STANDARDS } from "./specifications";
import { PRODUCT_CLASSES, type CutSolution, type GradeStandards, type LogRule, type PracticeLog, type PriceTable, type ProductClass } from "./types";

const VENEER_PRODUCTS: ProductClass[] = ["slicer_veneer", "rotary_veneer"];
const NON_VENEER_PRODUCTS = PRODUCT_CLASSES.filter((product) => !VENEER_PRODUCTS.includes(product));

export function optimizeCuts(
  log: PracticeLog,
  prices: PriceTable,
  logRule: LogRule = "international_1_4",
  standards: GradeStandards = DEFAULT_GRADE_STANDARDS
): CutSolution {
  const memo = new Map<string, { cuts: number[]; totalValue: number }>();
  const legalLengths = Array.from(
    new Set(Object.values(standards).flatMap((standard) => standard.allowedNominalLengthsFt))
  ).sort((a, b) => a - b);

  function bestFrom(startFt: number, allowanceUsed: boolean): { cuts: number[]; totalValue: number } {
    const key = `${roundCut(startFt)}-${allowanceUsed ? "used" : "open"}`;
    const cached = memo.get(key);
    if (cached) return cached;

    let best = {
      cuts: [] as number[],
      totalValue: scoreCandidateSegment(log, startFt, log.totalLengthFt, prices, logRule, standards, false)
    };

    for (const nominalLength of legalLengths) {
      const endFt = roundCut(startFt + nominalLength + TRIM_FT);
      if (endFt > log.totalLengthFt + 0.01) continue;

      const segmentValue = scoreCandidateSegment(log, startFt, endFt, prices, logRule, standards, false);
      const next = endFt < log.totalLengthFt ? bestFrom(endFt, allowanceUsed) : { cuts: [] as number[], totalValue: 0 };
      const totalValue = segmentValue + next.totalValue;
      if (totalValue > best.totalValue) {
        best = {
          cuts: endFt < log.totalLengthFt ? [roundCut(endFt), ...next.cuts] : [],
          totalValue
        };
      }

      if (!allowanceUsed) {
        const allowanceEndFt = roundCut(startFt + nominalLength + TRIM_FT - SAWLOG_TRIM_ALLOWANCE_FT);
        if (allowanceEndFt > log.totalLengthFt + 0.01) continue;
        const allowanceSegmentValue = scoreCandidateSegment(log, startFt, allowanceEndFt, prices, logRule, standards, true);
        const allowanceNext = allowanceEndFt < log.totalLengthFt ? bestFrom(allowanceEndFt, true) : { cuts: [] as number[], totalValue: 0 };
        const allowanceTotalValue = allowanceSegmentValue + allowanceNext.totalValue;
        if (allowanceTotalValue > best.totalValue) {
          best = {
            cuts: allowanceEndFt < log.totalLengthFt ? [roundCut(allowanceEndFt), ...allowanceNext.cuts] : [],
            totalValue: allowanceTotalValue
          };
        }
      }
    }

    memo.set(key, best);
    return best;
  }

  const optimized = bestFrom(0, false);
  const cuts = optimized.cuts.filter((cut) => cut > 0 && cut < log.totalLengthFt);
  return scoreSolution(log, cuts, prices, logRule, standards);
}

function scoreCandidateSegment(
  log: PracticeLog,
  startFt: number,
  endFt: number,
  prices: PriceTable,
  logRule: LogRule,
  standards: GradeStandards,
  useSawlogTrimAllowance: boolean
): number {
  const rawLength = endFt - startFt;
  const nominalLengthFt = Math.max(0, Math.floor(rawLength - TRIM_FT));
  const smallEndDiameterIn = interpolateDiameter(log, endFt);
  const heartwoodDiameterIn = interpolateHeartwoodDiameter(log, endFt);

  const defects = allDefects(log).filter((defect) => overlaps(defect.startFt, defect.endFt, startFt, endFt));
  const segment = {
    id: `${log.id}-optimized-${startFt}-${endFt}`,
    startFt,
    endFt,
    stemLengthFt: log.totalLengthFt,
    nominalLengthFt,
    trimFt: Math.round((rawLength - nominalLengthFt) * 100) / 100,
    smallEndDiameterIn,
    heartwoodDiameterIn,
    heartwoodPercent: Math.round((heartwoodDiameterIn / smallEndDiameterIn) * 1000) / 10,
    sweepIn: calculateSegmentSweep(log, startFt, endFt),
    species: log.species,
    defects
  };
  const candidate = useSawlogTrimAllowance ? withSawlogTrimAllowance(segment) : segment;
  if (!candidate) return 0;
  if (candidate.nominalLengthFt < MIN_NOMINAL_LOG_LENGTH_FT || smallEndDiameterIn < Math.max(MIN_LOG_DIAMETER_IN, log.minUsableTopDiameterIn)) return 0;

  return scoreSegment(
    candidate,
    prices,
    logRule,
    standards,
    useSawlogTrimAllowance ? { allowedProducts: NON_VENEER_PRODUCTS } : undefined
  ).value;
}

function roundCut(value: number): number {
  return Math.round(value * 48) / 48;
}
