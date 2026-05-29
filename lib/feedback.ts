import { scoreSolution } from "./calculations";
import { optimizeCuts } from "./optimizer";
import { DEFAULT_GRADE_STANDARDS } from "./specifications";
import type { FeedbackItem, GradeStandards, LogRule, PracticeLog, PriceTable, ScoredAttempt } from "./types";

const LOG_RULE_LABELS: Record<LogRule, string> = {
  international_1_4: "International 1/4",
  doyle: "Doyle",
  scribner: "Scribner"
};

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
  if (difference > 0) {
    feedback.push({
      tone: "missed_value",
      title: "Value below maximum",
      message: `The optimizer found a legal bucking pattern worth $${difference.toFixed(2)} more than your cuts. Compare the log lengths, grades, defects, sweep, diameter, and leftover sections to see where value was lost.`
    });
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
