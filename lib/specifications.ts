import type { GradeStandards } from "./types";

export const GRADE_STANDARD_STORAGE_KEY = "sumbuck-grade-standards-by-species-v1";
const VENEER_LENGTHS = [8, 9, 10];
const SAWLOG_LENGTHS = [8, 9, 10, 11, 12, 13, 14, 15, 16];

const CLEAR_FACE_DEFAULTS = {
  sawlogGradingBasis: "clear_faces" as const,
  minClearCuttingLengthFt: 3,
  maxClearCuttings: 2,
  minClearCuttingProportion: 2 / 3,
  allowSmallTrimDefects: false
};

export const DEFAULT_GRADE_STANDARDS: GradeStandards = {
  slicer_veneer: {
    product: "slicer_veneer",
    minSmallEndDiameterIn: 14,
    allowedNominalLengthsFt: VENEER_LENGTHS,
    ...CLEAR_FACE_DEFAULTS,
    minClearFaces: 4,
    maxHeartwoodPercent: 33,
    maxSweepIn: 1,
    notes: "Training rule: veneer is 8, 9, or 10 ft nominal, minimum 14 in small end, with 6 in trim not counted in board footage."
  },
  rotary_veneer: {
    product: "rotary_veneer",
    minSmallEndDiameterIn: 14,
    allowedNominalLengthsFt: VENEER_LENGTHS,
    ...CLEAR_FACE_DEFAULTS,
    minClearFaces: 3,
    maxHeartwoodPercent: 33,
    maxSweepIn: 1,
    notes: "Training rule: veneer is 8, 9, or 10 ft nominal, minimum 14 in small end, with 6 in trim not counted in board footage."
  },
  prime_sawlog: {
    product: "prime_sawlog",
    minSmallEndDiameterIn: 14,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    ...CLEAR_FACE_DEFAULTS,
    minClearFaces: 4,
    minClearCuttingLengthFt: 5,
    maxClearCuttings: 2,
    minClearCuttingProportion: 5 / 6,
    maxHeartwoodPercent: 40,
    maxSweepIn: 2,
    notes: "Baillie sheet: 14 in+, 10 ft 6 in+ one defect; or 15 in, 8 ft 6 in+ one defect. 40% heart max. No sawn-off limbs."
  },
  select_sawlog: {
    product: "select_sawlog",
    minSmallEndDiameterIn: 14,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    ...CLEAR_FACE_DEFAULTS,
    minClearFaces: 3,
    minClearCuttingLengthFt: 3,
    maxClearCuttings: 2,
    minClearCuttingProportion: 3 / 4,
    maxHeartwoodPercent: 40,
    maxSweepIn: 3,
    notes: "Baillie sheet: 14 in+, 8 ft 6 in+ one defect; or 13 in+, 10 ft 6 in butt log. 40% heart max. No sawn-off limbs."
  },
  number_1_sawlog: {
    product: "number_1_sawlog",
    minSmallEndDiameterIn: 10,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    ...CLEAR_FACE_DEFAULTS,
    minClearFaces: 3,
    minClearCuttingLengthFt: 3,
    maxClearCuttings: 2,
    minClearCuttingProportion: 2 / 3,
    maxHeartwoodPercent: 50,
    maxSweepIn: 4,
    notes: "Baillie sheet: 12 in+, 8 ft 6 in+ three clear faces; or 15 in+, 8 ft 6 in+ two clear faces. 50% heart max."
  },
  number_2_sawlog: {
    product: "number_2_sawlog",
    minSmallEndDiameterIn: 10,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    ...CLEAR_FACE_DEFAULTS,
    minClearFaces: 3,
    minClearCuttingLengthFt: 3,
    maxClearCuttings: 3,
    minClearCuttingProportion: 1 / 2,
    maxHeartwoodPercent: 33,
    maxSweepIn: 5,
    notes: "Baillie sheet: 10 in+, 8 ft 6 in min, three clear faces, 1/3 heart max; or 12 in+, two clear faces, 50% heart max. Must be straight and sound."
  },
  number_3_sawlog: {
    product: "number_3_sawlog",
    minSmallEndDiameterIn: 10,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    ...CLEAR_FACE_DEFAULTS,
    minClearFaces: 0,
    minClearCuttingLengthFt: 2,
    maxClearCuttings: null,
    minClearCuttingProportion: 1 / 3,
    maxHeartwoodPercent: null,
    maxSweepIn: null,
    notes: "Baillie sheet: 9 in+, 8 ft 6 in min. Must be straight and sound."
  },
  pallet_log: {
    product: "pallet_log",
    minSmallEndDiameterIn: 10,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    ...CLEAR_FACE_DEFAULTS,
    minClearFaces: 0,
    minClearCuttingLengthFt: 0,
    maxClearCuttings: null,
    minClearCuttingProportion: 0,
    maxHeartwoodPercent: null,
    maxSweepIn: null,
    notes: "Fallback low-grade product used when no higher grade matches. No scored log can be less than 10 in small end or shorter than 8 ft nominal."
  }
};
