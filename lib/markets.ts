import { DEFAULT_GRADE_STANDARDS } from "./specifications";
import { PRODUCT_CLASSES, SPECIES, type GradeStandards, type LogRule, type PricesBySpecies, type Species } from "./types";

export interface MarketPreset {
  name: string;
  logRule: LogRule;
  pricesBySpecies: PricesBySpecies;
  standardsBySpecies: Record<Species, GradeStandards>;
}

export const MARKET_MODE_STORAGE_KEY = "sumbuck-market-mode-v1";

const SAWLOG_LENGTHS = [8, 9, 10, 11, 12, 13, 14, 15, 16];
const SLICER_LENGTHS = [8, 9, 10, 12];
const ROTARY_LENGTHS = SAWLOG_LENGTHS;

const speciesPrices: PricesBySpecies = {
  "hard maple": prices(1925, 1175, 1050, 725, 525, 175, 125, 100),
  "black cherry": prices(950, 575, 500, 425, 300, 125, 100, 75),
  "soft maple": prices(0, 0, 625, 425, 325, 175, 125, 100),
  "yellow birch": prices(1150, 600, 500, 325, 225, 125, 100, 75),
  "white ash": prices(2400, 1000, 925, 850, 700, 275, 225, 150),
  "red oak": prices(1150, 925, 725, 500, 400, 175, 125, 100),
  "black oak": prices(1050, 800, 600, 375, 275, 125, 100, 75),
  "white oak": prices(1925, 1375, 1175, 825, 525, 200, 150, 100),
  hickory: prices(0, 0, 475, 250, 200, 75, 75, 50),
  "tulip poplar": prices(775, 0, 500, 250, 200, 0, 0, 0),
  walnut: prices(3850, 2825, 2700, 1850, 1175, 475, 375, 250)
};

export const NORTHERN_HARDWOODS_MARKET: MarketPreset = {
  name: "Northern Hardwoods Market",
  logRule: "international_1_4",
  pricesBySpecies: speciesPrices,
  standardsBySpecies: SPECIES.reduce((next, species) => {
    next[species] = standardsFor(species);
    return next;
  }, {} as Record<Species, GradeStandards>)
};

function prices(
  slicer: number,
  rotary: number,
  prime: number,
  select: number,
  number1: number,
  number2: number,
  number3: number,
  scrag: number
) {
  return {
    slicer_veneer: slicer,
    rotary_veneer: rotary,
    prime_plus_sawlog: 0,
    prime_sawlog: prime,
    select_sawlog: select,
    number_1_sawlog: number1,
    number_2_sawlog: number2,
    number_3_sawlog: number3,
    pallet_log: scrag
  };
}

function standardsFor(species: Species): GradeStandards {
  const standards = cloneStandards(DEFAULT_GRADE_STANDARDS);
  const upperHeartLimit = upperGradeHeartLimit(species);
  const veneerHeartLimit = veneerHeartLimitFor(species);
  const speciesNote = speciesQualityNote(species);

  standards.slicer_veneer = {
    ...standards.slicer_veneer,
    minSmallEndDiameterIn: 16,
    allowedNominalLengthsFt: SLICER_LENGTHS,
    minClearFaces: 4,
    maxHeartwoodPercent: veneerHeartLimit,
    maxSweepIn: 1,
    notes: `Northern Hardwoods Market: 16 in minimum small end. Accepted nominal lengths are 8, 9, 10, and 12 ft with 6 in trim. Clear four sides, no visible defect, good form, centered heart, and butt cut preferred. Buyer confirmation required for veneer. ${speciesNote}`
  };

  standards.rotary_veneer = {
    ...standards.rotary_veneer,
    minSmallEndDiameterIn: 12,
    allowedNominalLengthsFt: ROTARY_LENGTHS,
    minClearFaces: 3,
    maxHeartwoodPercent: veneerHeartLimit,
    maxSweepIn: 1,
    notes: `Northern Hardwoods Market: 12 in minimum small end, 8 ft nominal minimum with 6 in trim. One small defect allowed if otherwise suitable. Good form and centered heart preferred. No severe sweep, shake, rot, metal, fire damage, or excessive stain. Buyer confirmation required for veneer. ${speciesNote}`
  };

  standards.prime_plus_sawlog = {
    ...standards.prime_plus_sawlog,
    allowedNominalLengthsFt: [],
    notes: "Northern Hardwoods Market does not include a separate prime+ grade. Its price is set to zero and it is not used by the optimizer."
  };

  standards.prime_sawlog = {
    ...standards.prime_sawlog,
    minSmallEndDiameterIn: 14,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    minClearFaces: 4,
    maxHeartwoodPercent: upperHeartLimit,
    maxSweepIn: 2,
    notes: `Northern Hardwoods Market: 14 in minimum small end for 10 ft and longer logs; 16 in minimum for 8 ft logs. Clear or nearly clear four sides. One small defect allowed. No sawn-off limbs. Good form. ${speciesNote}`
  };

  standards.select_sawlog = {
    ...standards.select_sawlog,
    minSmallEndDiameterIn: 13,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    minClearFaces: 3,
    maxHeartwoodPercent: upperHeartLimit,
    maxSweepIn: 3,
    notes: `Northern Hardwoods Market: 13 in minimum small end for 10 ft butt logs; 14 in preferred for 8 ft and longer logs. Clear three sides. One defect allowed. No sawn-off limbs. Good form. ${speciesNote}`
  };

  standards.number_1_sawlog = {
    ...standards.number_1_sawlog,
    minSmallEndDiameterIn: 12,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    minClearFaces: 3,
    allowSmallTrimDefects: true,
    maxHeartwoodPercent: lowerGradeHeartLimit(species),
    maxSweepIn: 4,
    notes: "Northern Hardwoods Market: 12 in minimum small end and 8 ft nominal minimum. Three clear faces preferred; two clear faces allowed on larger logs. Moderate defects allowed if the log remains sound and merchantable. Up to two defects under 2 in may be included in trim without disqualifying a face."
  };

  standards.number_2_sawlog = {
    ...standards.number_2_sawlog,
    minSmallEndDiameterIn: 10,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    minClearFaces: 2,
    allowSmallTrimDefects: true,
    maxHeartwoodPercent: lowerGradeHeartLimit(species),
    maxSweepIn: 5,
    notes: "Northern Hardwoods Market: 10 in minimum small end and 8 ft nominal minimum. Two clear faces required. Sound knots, limited stain, limited sweep, and other moderate defects allowed if straight and sound enough for grade lumber recovery. Up to two defects under 2 in may be included in trim without disqualifying a face."
  };

  standards.number_3_sawlog = {
    ...standards.number_3_sawlog,
    minSmallEndDiameterIn: 10,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    minClearFaces: 1,
    allowSmallTrimDefects: true,
    maxHeartwoodPercent: null,
    maxSweepIn: null,
    notes: "Northern Hardwoods Market: 10 in minimum small end and 8 ft nominal minimum. One clear face required. Sound low-grade sawlogs. Defects accepted if the log is straight, sound, and sawable. No severe rot, shake, metal, char, or excessive sweep. Up to two defects under 2 in may be included in trim without disqualifying a face."
  };

  standards.pallet_log = {
    ...standards.pallet_log,
    minSmallEndDiameterIn: 8,
    allowedNominalLengthsFt: SAWLOG_LENGTHS,
    minClearFaces: 0,
    maxHeartwoodPercent: null,
    maxSweepIn: null,
    notes: "Northern Hardwoods Market scrag grade: small or low-grade logs suitable for scrag or pallet-type production. The market sheet lists 8 in minimum small end unless otherwise agreed, but SumBuck still applies its general 10 in minimum usable diameter rule unless that core rule is changed."
  };

  return standards;
}

function cloneStandards(standards: GradeStandards): GradeStandards {
  return PRODUCT_CLASSES.reduce((next, product) => {
    next[product] = { ...standards[product], allowedNominalLengthsFt: [...standards[product].allowedNominalLengthsFt] };
    return next;
  }, {} as GradeStandards);
}

function upperGradeHeartLimit(species: Species): number | null {
  if (species === "hard maple" || species === "soft maple") return 33;
  if (species === "white ash") return 33;
  return null;
}

function lowerGradeHeartLimit(species: Species): number | null {
  if (species === "hard maple" || species === "soft maple") return 50;
  return null;
}

function veneerHeartLimitFor(species: Species): number | null {
  if (species === "hard maple" || species === "soft maple" || species === "white ash") return 33;
  return null;
}

function speciesQualityNote(species: Species): string {
  const notes: Record<Species, string> = {
    "hard maple": "Prime and Select prefer 1/3 heart maximum. Veneer requires buyer confirmation for color, heart, mineral, and stain. Wormy maple is not accepted for upper grades.",
    "soft maple": "Prime and Select prefer 1/3 heart maximum. No veneer category is included for soft maple in this market sheet. Wormy soft maple is not accepted for upper grades.",
    "yellow birch": "Bright color preferred. Excessive red heart, stain, shake, or mineral may cause downgrade.",
    "white ash": "Upper-grade and veneer logs require buyer confirmation. Veneer ash uses a 1/3 heart limitation where white sapwood is required.",
    "tulip poplar": "Slicer veneer requires strong sapwood, using a 4 in minimum sapwood working standard.",
    "white oak": "Tight, sound heart required. Shake, ring separation, mineral, and excessive stain may cause downgrade. Veneer and rotary veneer require buyer confirmation.",
    "red oak": "Excessive stain, shake, frost crack, fire scar, or interior defect may cause downgrade. Veneer and rotary veneer require buyer confirmation.",
    "black oak": "Excessive stain, shake, frost crack, fire scar, or interior defect may cause downgrade. Veneer and rotary veneer require buyer confirmation.",
    "black cherry": "Color, gum, mineral, stain, and pin knots affect upper-grade placement. Veneer requires buyer confirmation.",
    hickory: "No veneer category is included for hickory in this market sheet.",
    walnut: "Color, sweep, knots, metal risk, shake, and heart placement strongly affect grade. Veneer requires buyer confirmation before cutting or shipping."
  };
  return notes[species];
}
