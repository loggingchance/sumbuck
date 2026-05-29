export const SPECIES = [
  "hard maple",
  "soft maple",
  "red oak",
  "black oak",
  "white oak",
  "white ash",
  "hickory",
  "yellow birch",
  "black cherry",
  "tulip poplar",
  "walnut"
] as const;

export type Species = (typeof SPECIES)[number];

export const PRODUCT_CLASSES = [
  "slicer_veneer",
  "rotary_veneer",
  "prime_plus_sawlog",
  "prime_sawlog",
  "select_sawlog",
  "number_1_sawlog",
  "number_2_sawlog",
  "number_3_sawlog",
  "pallet_log"
] as const;

export type ProductClass = (typeof PRODUCT_CLASSES)[number];

export const PRODUCT_LABELS: Record<ProductClass, string> = {
  slicer_veneer: "slicer veneer",
  rotary_veneer: "rotary veneer",
  prime_plus_sawlog: "prime+ sawlog",
  prime_sawlog: "prime sawlog",
  select_sawlog: "select sawlog",
  number_1_sawlog: "#1 sawlog",
  number_2_sawlog: "#2 sawlog",
  number_3_sawlog: "#3 sawlog",
  pallet_log: "scrag"
};

export type DefectImpactClass =
  | "veneer_only"
  | "sawlog_grade"
  | "veneer_and_sawlog"
  | "informational";

export type Face = "face_1" | "face_2" | "face_3" | "face_4";
export type Severity = "minor" | "moderate" | "major";
export type Visibility = "visible" | "subtle" | "hidden";
export type LogRule = "international_1_4" | "doyle" | "scribner";

export interface DiameterPoint {
  positionFt: number;
  diameterIn: number;
}

export interface HeartwoodPoint {
  positionFt: number;
  diameterIn: number;
}

export interface ShapePoint {
  positionFt: number;
  sweepOffsetIn: number;
  topIrregularityIn: number;
  bottomIrregularityIn: number;
}

export interface LogShapeProfile {
  sweepDirection: "left" | "right";
  ovality: number;
  barkRidgeFrequency: number;
  shapePoints: ShapePoint[];
}

export interface ProductImpact {
  eligible?: boolean;
  reason: string;
  gradeImpact?: "none" | "minor" | "moderate" | "severe";
}

export interface Defect {
  id: string;
  type: string;
  startFt: number;
  endFt: number;
  faces: Face[];
  severity: Severity;
  visibility: Visibility;
  impactClass: DefectImpactClass;
  sourceSize?: number;
  sourceAround?: number;
  visualOrientation?: "horizontal" | "vertical";
  hollowTaperOutFt?: number;
  productImpacts: Partial<Record<ProductClass | "sawlog", ProductImpact>>;
  notes: string;
}

export interface PracticeLog {
  id: string;
  title: string;
  species: Species;
  totalLengthFt: number;
  diameterPoints: DiameterPoint[];
  heartwoodPoints?: HeartwoodPoint[];
  shapeProfile: LogShapeProfile;
  minUsableTopDiameterIn: number;
  visibleDefects: Defect[];
  veneerOnlyDefects: Defect[];
  sawlogAffectingDefects: Defect[];
  bothVeneerAndSawlogDefects: Defect[];
  modelSolutionCutPositionsFt: number[];
  modelSolutionExplanation: string;
  difficulty: "intro" | "intermediate" | "advanced";
  teachingObjective: string;
  instructionalPointTags?: string[];
  instructionalNote?: string;
}

export interface ProductRule {
  product: ProductClass;
  minSmallEndDiameterIn: number;
  allowedNominalLengthsFt: number[];
  allowedSpecies?: Species[];
}

export type GradeStandards = Record<ProductClass, GradeStandard>;
export type SawlogGradingBasis = "clear_faces" | "clear_cuttings";

export interface GradeStandard {
  product: ProductClass;
  minSmallEndDiameterIn: number;
  allowedNominalLengthsFt: number[];
  sawlogGradingBasis: SawlogGradingBasis;
  minClearFaces: number;
  minClearCuttingLengthFt: number;
  maxClearCuttings: number | null;
  minClearCuttingProportion: number;
  allowSmallTrimDefects: boolean;
  maxHeartwoodPercent: number | null;
  maxSweepIn: number | null;
  notes: string;
}

export type PriceTable = Record<ProductClass, number>;
export type PricesBySpecies = Record<Species, PriceTable>;

export interface CutLine {
  id: string;
  positionFt: number;
}

export interface LogSegment {
  id: string;
  startFt: number;
  endFt: number;
  stemLengthFt: number;
  nominalLengthFt: number;
  trimFt: number;
  trimAllowanceInches?: number;
  smallEndDiameterIn: number;
  heartwoodDiameterIn: number;
  heartwoodPercent: number;
  sweepIn: number;
  species: Species;
  defects: Defect[];
}

export interface SegmentScore extends LogSegment {
  product: ProductClass;
  clearFaceCount: number;
  clearCuttingSummary: string;
  heartwoodDiameterIn: number;
  heartwoodPercent: number;
  scaleDeductionPercent: number;
  grossVolumeBoardFeet: number;
  volumeBoardFeet: number;
  volumeMbf: number;
  pricePerMbf: number;
  value: number;
  defectNotes: string[];
  eligibilityNotes: string[];
}

export interface CutSolution {
  cutPositionsFt: number[];
  segments: SegmentScore[];
  totalValue: number;
  logRule: LogRule;
}

export interface FeedbackItem {
  tone: "positive" | "warning" | "missed_value" | "info";
  title: string;
  message: string;
}

export interface ScoredAttempt {
  user: CutSolution;
  model: CutSolution;
  optimized?: CutSolution;
  differenceFromModel: number;
  feedback: FeedbackItem[];
}
