import { scoreSolution } from "./calculations";
import { optimizeCuts } from "./optimizer";
import { DEFAULT_GRADE_STANDARDS } from "./specifications";
import { PRODUCT_LABELS, type FeedbackItem, type GradeStandards, type LogRule, type PracticeLog, type PriceTable, type ScoredAttempt, type SegmentScore } from "./types";

const LOG_RULE_LABELS: Record<LogRule, string> = {
  international_1_4: "International 1/4",
  doyle: "Doyle",
  scribner: "Scribner"
};
const DOLLAR_TIE_TOLERANCE = 2;
const PERCENT_TIE_TOLERANCE = 0.02;

export function scoreAttempt(
  log: PracticeLog,
  userCuts: number[],
  prices: PriceTable,
  logRule: LogRule = "international_1_4",
  standards: GradeStandards = DEFAULT_GRADE_STANDARDS
): ScoredAttempt {
  const user = scoreSolution(log, userCuts, prices, logRule, standards);
  const model = scoreSolution(log, log.modelSolutionCutPositionsFt, prices, logRule, standards);
  const optimized = optimizeCuts(log, prices, logRule, standards);
  const feedback: FeedbackItem[] = [];

  const difference = optimized.totalValue - user.totalValue;
  const tieTolerance = Math.max(DOLLAR_TIE_TOLERANCE, optimized.totalValue * PERCENT_TIE_TOLERANCE);
  if (difference > tieTolerance) {
    feedback.push({
      tone: "missed_value",
      title: "Value below maximum",
      message: `The optimizer found a legal bucking pattern worth about $${difference.toFixed(2)} more than your cuts. Compare the log lengths, grades, defects, sweep, diameter, and leftover sections to see where value was lost.`
    });
    const biggestMiss = biggestMissFeedback(user.segments, optimized.segments);
    if (biggestMiss) feedback.push(biggestMiss);
  } else {
    feedback.push({
      tone: "positive",
      title: "Maximum payout reached",
      message: "Your cuts match the best payout the optimizer found using the current species, specifications, prices, trim rules, and log rule."
    });
  }

  const usedVeneerOnly = user.segments.some((segment) =>
    segment.defects.some((defect) => defect.impactClass === "veneer_only")
  );
  const lowGradeNearVeneerOnly = user.segments.some(
    (segment) =>
      segment.defects.some((defect) => defect.impactClass === "veneer_only") &&
      ["number_2_sawlog", "number_3_sawlog", "pallet_log"].includes(segment.product)
  );

  if (usedVeneerOnly && lowGradeNearVeneerOnly) {
    feedback.push({
      tone: "warning",
      title: "Veneer-only mark over-weighted",
      message:
        "One of your lower-value sawlog segments contains a veneer-only defect. That mark blocks veneer, but the prototype sawlog grade does not count it against clear faces."
    });
  }

  const missedSawlogDefect = user.segments.some(
    (segment) =>
      segment.defects.some((defect) => defect.impactClass === "sawlog_grade") &&
      ["prime_sawlog", "select_sawlog"].includes(segment.product)
  );
  if (missedSawlogDefect) {
    feedback.push({
      tone: "warning",
      title: "Sawlog defect in a high-grade segment",
      message:
        "At least one high-grade sawlog segment includes a sawlog-affecting defect. Recheck the affected face before protecting that grade."
    });
  }

  feedback.push({
    tone: "info",
    title: "Optimal result",
    message: `The optimal result is the highest-value pattern SumBuck found for this stem under the current species specs, prices, trim rules, defects, sweep deductions, and ${LOG_RULE_LABELS[logRule]} rule. It is a comparison target, not a separate teaching model.`
  });

  return {
    user,
    model,
    optimized,
    differenceFromModel: difference,
    feedback
  };
}

function biggestMissFeedback(userSegments: SegmentScore[], optimalSegments: SegmentScore[]): FeedbackItem | null {
  let best:
    | {
        gap: number;
        user: SegmentScore;
        optimal: SegmentScore;
      }
    | null = null;

  for (const userSegment of userSegments) {
    const matchingOptimal = optimalSegments
      .map((optimalSegment) => ({
        segment: optimalSegment,
        overlap: overlapLength(userSegment.startFt, userSegment.endFt, optimalSegment.startFt, optimalSegment.endFt)
      }))
      .sort((left, right) => right.overlap - left.overlap)[0];
    if (!matchingOptimal || matchingOptimal.overlap <= 0) continue;
    const gap = matchingOptimal.segment.value - userSegment.value;
    if (gap > (best?.gap ?? 0)) best = { gap, user: userSegment, optimal: matchingOptimal.segment };
  }

  if (!best || best.gap <= DOLLAR_TIE_TOLERANCE) return null;
  const userLabel = PRODUCT_LABELS[best.user.product];
  const optimalLabel = PRODUCT_LABELS[best.optimal.product];
  return {
    tone: "info",
    title: "Biggest value difference",
    message: `The largest local difference is around your ${best.user.nominalLengthFt} ft ${userLabel} worth $${best.user.value.toFixed(2)}. The overlapping optimal log is a ${best.optimal.nominalLengthFt} ft ${optimalLabel} worth $${best.optimal.value.toFixed(2)}.`
  };
}

function overlapLength(aStart: number, aEnd: number, bStart: number, bEnd: number) {
  return Math.max(0, Math.min(aEnd, bEnd) - Math.max(aStart, bStart));
}
