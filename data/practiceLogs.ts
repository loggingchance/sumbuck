import { SPECIES, type Defect, type Face, type PracticeLog, type Species } from "@/lib/types";
import { GRADING_LOG_SEEDS, type GradingDefectSeed, type GradingLogSeed } from "./gradingLogSeeds";

const faces: Face[] = ["face_1", "face_2", "face_3", "face_4"];
const speciesList: Species[] = [...SPECIES];

const veneerTypes = [
  "minor_bird_peck",
  "minor_stain",
  "small_seam",
  "small_bark_distortion",
  "slight_overgrowth",
  "light_mineral_streak",
  "small_surface_check",
  "minor_pin_knot_trace"
];

const sawlogTypes = [
  "overgrown_knot",
  "open_knot",
  "frost_crack",
  "heavy_sweep_mark",
  "catface",
  "old_branch_stub"
];

const bothTypes = [
  "large_bark_distortion",
  "deep_seam",
  "rot_pocket",
  "major_stain_column",
  "wide_insect_channel"
];

const instructionObjectives = [
  "Identify the highest-value portion of the stem before placing any cuts.",
  "Protect the butt log when it carries the best diameter, quality, and value.",
  "Recognize veneer as a lower-stem opportunity, not an upper-stem product.",
  "Use visible defects to decide where a high-grade log should start and end.",
  "Compare one long sawlog against two shorter logs with better grade recovery.",
  "Account for six inches of trim before judging legal log length.",
  "Use the one-inch sawlog trim allowance only when it changes value.",
  "Avoid forcing short trim on veneer; veneer trim must be fully legal.",
  "Watch small-end diameter thresholds as the stem tapers.",
  "Stop chasing high grades after upper-stem defect frequency increases.",
  "Use sweep to downgrade unrealistic high-grade choices.",
  "Separate veneer-only defects from sawlog grade defects.",
  "Keep true sawlog defects out of the best clear faces when possible.",
  "Recognize when a low-value top should be left as pallet material.",
  "Use market prices to decide whether veneer risk is worth taking.",
  "Understand how scaling deductions reduce the value of crooked logs.",
  "Place cuts to isolate rot, seams, and major stain columns.",
  "Avoid wasting clean length around small upper-stem veneer blockers.",
  "Read taper before choosing a 14, 15, or 16 ft sawlog.",
  "Balance volume recovery against grade recovery.",
  "Understand why upper logs generally produce lower grades.",
  "Protect lower-half clear faces before maximizing top volume.",
  "Recognize when a defect affects both veneer and sawlogs.",
  "Use bucking to prevent high-value wood from becoming low-value product.",
  "Compare Doyle, Scribner, and International scale impacts through length and diameter.",
  "Identify the first legal cut that preserves an 8 ft product.",
  "Avoid cutting a veneer candidate from above the lower half of the stem.",
  "Recognize when sweep eliminates veneer even on a clean-looking butt log.",
  "Use clear-face count to separate select, #1, #2, and #3 sawlogs.",
  "Avoid making an undersized small-end log just to use the last stem length.",
  "Place cuts so defects fall in the least valuable segment.",
  "Protect a clean butt from upper-stem defect pressure.",
  "Choose a shorter high-grade log when a longer log crosses a defect zone.",
  "Recognize when the best value is not the most total footage.",
  "Use the end of a defect zone as a bucking boundary.",
  "Avoid splitting a clean high-value section with unnecessary cuts.",
  "Understand how price tables change the optimal bucking answer.",
  "Watch diameter loss across long logs in fast-tapering stems.",
  "Use grade limits before assuming every legal log should be cut.",
  "Keep upper veneer blockers visible while judging sawlog value correctly.",
  "Recognize when pallet recovery beats a weak sawlog attempt.",
  "Preserve a cleaner upper sawlog only after the butt value is protected.",
  "Use crook and sweep together when judging product class.",
  "Identify defects on different faces before deciding grade.",
  "Avoid using veneer labels for logs with upper-stem character.",
  "Use trim, diameter, sweep, defects, and price as one decision system.",
  "Read the whole stem before placing the first cut.",
  "Compare your bucking result against the maximum-payout solution.",
  "Use repeated practice to build value-recovery judgment.",
  "Integrate defect identification, scaling, grading, and expert bucking."
];

const practiceObjectives = [
  "Preserve a clean veneer candidate above a veneer-only mark.",
  "Ignore veneer-only defects when assigning sawlog clear-face value.",
  "Isolate a true sawlog defect on one face without wasting clean length.",
  "Choose between one long sawlog and two shorter higher-grade logs.",
  "Avoid chasing veneer when diameter and price make sawlog value stronger.",
  "Manage taper so the small-end diameter stays inside the target product class.",
  "Use the butt section efficiently while protecting a cleaner upper log.",
  "Recognize when a pallet top is better than forcing a weak sawlog."
];

const veneerObjectives = practiceObjectives.slice(0, 2);
const sawlogObjectives = practiceObjectives.slice(2);

const hwBuckSeamReferences: Record<string, Array<{ positionFt: number; around: number; size: number; rawSeverity: number }>> = {
  TREE3: [{ positionFt: 0, around: 6, size: 5, rawSeverity: 3 }],
  TREE6: [
    { positionFt: 0, around: 6, size: 6.3, rawSeverity: 6 },
    { positionFt: 0, around: 30, size: 6.3, rawSeverity: 30 }
  ],
  TREE7: [
    { positionFt: 0, around: 15, size: 7, rawSeverity: 15 },
    { positionFt: 0, around: 22, size: 7, rawSeverity: 22 }
  ],
  TREE15: [
    { positionFt: 0, around: 9, size: 7, rawSeverity: 9 },
    { positionFt: 0, around: 27, size: 7, rawSeverity: 27 },
    { positionFt: 10.6, around: 27, size: 26.1, rawSeverity: 25 }
  ],
  TREE16: [
    { positionFt: 0, around: 12, size: 5.5, rawSeverity: 12 },
    { positionFt: 0, around: 22, size: 10, rawSeverity: 22 }
  ],
  TREE22: [{ positionFt: 0, around: 34, size: 9, rawSeverity: 34 }],
  TREE41: [
    { positionFt: 0, around: 17, size: 9, rawSeverity: 17 },
    { positionFt: 0, around: 9, size: 9, rawSeverity: 9 }
  ],
  TREE53: [
    { positionFt: 0, around: 28, size: 8, rawSeverity: 29 },
    { positionFt: 30, around: 9, size: 33, rawSeverity: 6 }
  ],
  TREE55: [{ positionFt: 0, around: 7, size: 3, rawSeverity: 7 }],
  TREE82: [{ positionFt: 0, around: 10, size: 7, rawSeverity: 9 }],
  TREE88: [{ positionFt: 1.6, around: 27, size: 10, rawSeverity: 27 }],
  TREE91: [
    { positionFt: 0, around: 27, size: 15, rawSeverity: 1 },
    { positionFt: 0, around: 32, size: 15, rawSeverity: 2 }
  ],
  TREE92: [{ positionFt: 0, around: 14, size: 13, rawSeverity: 3 }],
  TREE94: [
    { positionFt: 0, around: 4, size: 11, rawSeverity: 5 },
    { positionFt: 0, around: 18, size: 11, rawSeverity: 18 }
  ],
  TREE115: [{ positionFt: 0, around: 2, size: 4, rawSeverity: 2 }],
  TREE134: [{ positionFt: 0, around: 6, size: 10, rawSeverity: 14 }]
};

const hwBuckHollowReferences: Record<string, Array<{ positionFt: number; around: number; size: number; rawSeverity: number }>> = {
  TREE8: [{ positionFt: 0, around: 3, size: 6, rawSeverity: 0 }],
  TREE9: [{ positionFt: 0, around: 11.6, size: 10, rawSeverity: 0 }],
  TREE12: [{ positionFt: 0, around: 6, size: 9, rawSeverity: 0 }],
  TREE15: [{ positionFt: 0, around: 4, size: 4, rawSeverity: 0 }],
  TREE17: [{ positionFt: 0, around: 1, size: 3, rawSeverity: 0 }],
  TREE18: [
    { positionFt: 0, around: 3, size: 10, rawSeverity: 0 },
    { positionFt: 23.3, around: 24.3, size: 0, rawSeverity: 2 }
  ],
  TREE21: [{ positionFt: 0, around: 9, size: 6, rawSeverity: 0 }],
  TREE26: [{ positionFt: 0, around: 6, size: 8, rawSeverity: 0 }],
  TREE28: [{ positionFt: 0, around: 2, size: 5, rawSeverity: 0 }],
  TREE31: [{ positionFt: 0, around: 8, size: 12, rawSeverity: 0 }],
  TREE38: [{ positionFt: 0, around: 12, size: 15, rawSeverity: 0 }],
  TREE53: [{ positionFt: 0, around: 9, size: 9, rawSeverity: 0 }],
  TREE88: [{ positionFt: 0, around: 10, size: 7, rawSeverity: 0 }],
  TREE89: [{ positionFt: 0, around: 8, size: 14, rawSeverity: 0 }],
  TREE90: [{ positionFt: 0, around: 3, size: 5, rawSeverity: 0 }],
  TREE91: [{ positionFt: 0, around: 2, size: 6, rawSeverity: 0 }],
  TREE92: [{ positionFt: 0, around: 2, size: 5, rawSeverity: 0 }],
  TREE94: [{ positionFt: 0, around: 11, size: 5, rawSeverity: 0 }],
  TREE104: [{ positionFt: 0, around: 1.5, size: 4, rawSeverity: 0 }],
  TREE108: [{ positionFt: 0, around: 8, size: 8, rawSeverity: 0 }],
  TREE109: [{ positionFt: 0, around: 3, size: 5, rawSeverity: 0 }],
  TREE128: [{ positionFt: 0, around: 7, size: 6, rawSeverity: 0 }],
  TREE139: [{ positionFt: 0, around: 6, size: 4, rawSeverity: 0 }],
  TREE142: [{ positionFt: 0, around: 4, size: 4, rawSeverity: 0 }],
  TREE143: [{ positionFt: 0, around: 4, size: 5, rawSeverity: 0 }],
  TREE149: [{ positionFt: 0, around: 4, size: 5, rawSeverity: 0 }]
};

function veneerDefect(id: string, startFt: number, face: Face, type: string, blocksRotary: boolean): Defect {
  return {
    id,
    type,
    startFt,
    endFt: round(startFt + 0.45 + (startFt % 1.4)),
    faces: [face],
    severity: "minor",
    visibility: startFt % 2 > 1 ? "subtle" : "visible",
    impactClass: "veneer_only",
    productImpacts: {
      slicer_veneer: { eligible: false, reason: `${humanize(type)} excludes slicer veneer in this segment.` },
      rotary_veneer: blocksRotary
        ? { eligible: false, reason: `${humanize(type)} also excludes rotary veneer in this segment.` }
        : { eligible: true, reason: `${humanize(type)} is tolerated for rotary veneer in this prototype case.` },
      sawlog: { gradeImpact: "none", reason: "This mark does not count against sawlog clear-face grade." }
    },
    notes: "Veneer-only defect. It blocks veneer where it occurs but should not reduce sawlog grade."
  };
}

function upperVeneerBlocker(id: string, startFt: number, face: Face, type: string): Defect {
  return {
    id,
    type,
    startFt,
    endFt: round(startFt + 0.45),
    faces: [face],
    severity: "minor",
    visibility: "visible",
    impactClass: "informational",
    productImpacts: {
      slicer_veneer: { eligible: false, reason: `${humanize(type)} rules out veneer in this upper stem section.` },
      rotary_veneer: { eligible: false, reason: `${humanize(type)} rules out veneer in this upper stem section.` },
      sawlog: { gradeImpact: "none", reason: "Small upper-stem veneer blocker; it does not remove a sawlog clear face." }
    },
    notes: "Small upper-stem mark. It rules out veneer but should not force a sawlog down-grade."
  };
}

function sawDefect(id: string, startFt: number, face: Face, type: string, severity: "minor" | "moderate" | "major"): Defect {
  return {
    id,
    type,
    startFt,
    endFt: round(startFt + (severity === "major" ? 1.6 : 1.05)),
    faces: [face],
    severity,
    visibility: "visible",
    impactClass: "sawlog_grade",
    productImpacts: {
      sawlog: {
        gradeImpact: severity === "major" ? "severe" : severity,
        reason: `${humanize(type)} counts against the simplified sawlog clear-face grade.`
      }
    },
    notes: "Sawlog-affecting defect. Its face assignment matters for clear-face grading."
  };
}

function bothDefect(id: string, startFt: number, face: Face, type: string): Defect {
  return {
    id,
    type,
    startFt,
    endFt: round(startFt + 1.15),
    faces: [face],
    severity: "major",
    visibility: "visible",
    impactClass: "veneer_and_sawlog",
    productImpacts: {
      slicer_veneer: { eligible: false, reason: `${humanize(type)} excludes slicer veneer.` },
      rotary_veneer: { eligible: false, reason: `${humanize(type)} excludes rotary veneer.` },
      sawlog: { gradeImpact: "severe", reason: `${humanize(type)} counts against sawlog grade.` }
    },
    notes: "This defect affects both veneer eligibility and sawlog grade."
  };
}

function makeLog(index: number, library: "practice" | "instruction"): PracticeLog {
  const zero = index - 1;
  const sourceIndex = library === "instruction" ? zero * 3 + 7 : zero;
  const source = normalizeButtLeft(GRADING_LOG_SEEDS[sourceIndex % GRADING_LOG_SEEDS.length], index + (library === "instruction" ? 400 : 0));
  const species = source.species ?? speciesList[zero % speciesList.length];
  const difficulty = index <= 32 ? "intro" : index <= 70 ? "intermediate" : "advanced";
  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  const instructionObjective = instructionObjectives[zero % instructionObjectives.length];
  const hasVeneerPotential =
    library === "instruction"
      ? /veneer|butt|lower|market/i.test(instructionObjective) || index % 8 === 0
      : index % 10 === 0;
  const objective =
    library === "instruction"
      ? instructionObjective
      : hasVeneerPotential
        ? veneerObjectives[Math.floor(index / 10) % veneerObjectives.length]
        : sawlogObjectives[zero % sawlogObjectives.length];
  const defects = defectsFromSource(source, index, hasVeneerPotential);

  const veneerOnlyDefects = defects.filter((defect) => defect.impactClass === "veneer_only");
  const sawlogAffectingDefects = defects.filter((defect) => defect.impactClass === "sawlog_grade");
  const bothVeneerAndSawlogDefects = defects.filter((defect) => defect.impactClass === "veneer_and_sawlog");
  const modelSolutionCutPositionsFt = modelCutsFor(index, totalLengthFt, objective, defects);

  return {
    id: `practice-${pad(index)}`,
    title: titleFor(index),
    species,
    totalLengthFt,
    diameterPoints: source.stations.map((station) => ({
      positionFt: station.positionFt,
      diameterIn: station.diameterIn
    })),
    heartwoodPoints: heartwoodPointsFor(source, index, species),
    shapeProfile: shapeProfileFromSource(source, index),
    minUsableTopDiameterIn: 10,
    visibleDefects: defects,
    veneerOnlyDefects,
    sawlogAffectingDefects,
    bothVeneerAndSawlogDefects,
    modelSolutionCutPositionsFt,
    modelSolutionExplanation: explanationFor(objective, veneerOnlyDefects.length, sawlogAffectingDefects.length, bothVeneerAndSawlogDefects.length),
    difficulty,
    teachingObjective: library === "instruction" ? objective : ""
  };
}

function normalizeButtLeft(source: GradingLogSeed, logIndex: number): GradingLogSeed {
  const stations = [...source.stations].sort((a, b) => a.positionFt - b.positionFt);
  const totalLengthFt = stations[stations.length - 1].positionFt;
  const shouldReverse = stations[stations.length - 1].diameterIn > stations[0].diameterIn;
  const orientedStations = shouldReverse
    ? stations
        .map((station) => ({ ...station, positionFt: round(totalLengthFt - station.positionFt) }))
        .sort((a, b) => a.positionFt - b.positionFt)
    : stations;
  const sourceNumber = Number(source.sourceId.replace(/\D/g, "")) || logIndex;
  const buttDiameter = clamp(
    Math.max(orientedStations[0].diameterIn, 17 + (sourceNumber % 7) + (logIndex % 4) * 0.75),
    16,
    30
  );
  const diameterDrop = clamp(totalLengthFt * (0.18 + (sourceNumber % 5) * 0.018), 5.5, 15.5);
  const topTarget = clamp(buttDiameter - diameterDrop, 8, Math.min(15, buttDiameter - 5));
  let previousDiameter = buttDiameter;
  const taperedStations = orientedStations.map((station, index) => {
    const fraction = totalLengthFt === 0 ? 0 : clamp(station.positionFt / totalLengthFt, 0, 1);
    const taperCurve = Math.pow(fraction, 0.84) * 0.72 + Math.pow(fraction, 1.85) * 0.28;
    const localNeck = Math.max(0, Math.sin((fraction * 3.8 + sourceNumber * 0.11) * Math.PI)) * fraction * 0.35;
    const rawDiameter = buttDiameter - (buttDiameter - topTarget) * taperCurve - localNeck;
    const diameterIn = index === 0 ? buttDiameter : Math.min(previousDiameter - 0.05, rawDiameter);
    previousDiameter = round(clamp(diameterIn, topTarget, buttDiameter));
    return { ...station, diameterIn: previousDiameter };
  });
  const defects = shouldReverse
    ? source.defects.map((defect) => ({ ...defect, positionFt: round(totalLengthFt - defect.positionFt) }))
    : source.defects;

  return {
    ...source,
    stations: taperedStations,
    defects
  };
}

function defectsFromSource(source: GradingLogSeed, logIndex: number, hasVeneerPotential: boolean): Defect[] {
  const sourceDefects = sourceGradeDefects(source.defects, source, logIndex);
  const defects = [
    ...sourceDefects,
    ...supplementalSeamDefects(source, logIndex, sourceDefects),
    ...supplementalHollowDefects(source, logIndex, sourceDefects),
    ...upperVeneerBlockers(source, logIndex),
    ...upperSawlogDefects(source, logIndex)
  ].sort((a, b) => a.startFt - b.startFt);
  if (!hasVeneerPotential) {
    return [lowerVeneerDisqualifier(source, logIndex), ...defects].sort((a, b) => a.startFt - b.startFt);
  }

  const firstFace = "face_1";
  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  return [
    veneerDefect(
      `practice-${pad(logIndex)}-veneer-source-note`,
      lowerStemVeneerMarkPosition(totalLengthFt, logIndex),
      firstFace,
      veneerTypes[logIndex % veneerTypes.length],
      logIndex % 5 !== 0
    ),
    ...defects
  ];
}

function lowerVeneerDisqualifier(source: GradingLogSeed, logIndex: number): Defect {
  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  return upperVeneerBlocker(
    `practice-${pad(logIndex)}-lower-veneer-disqualifier`,
    keepInside(round(3.2 + (logIndex % 5) * 0.45), totalLengthFt),
    faces[logIndex % faces.length],
    veneerTypes[(logIndex + 3) % veneerTypes.length]
  );
}

function sourceGradeDefects(sourceDefects: GradingDefectSeed[], source: GradingLogSeed, logIndex: number): Defect[] {
  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  return sourceDefects
    .filter((defect) => defect.severity >= 5 || defect.code.toUpperCase() !== "K")
    .slice(0, 6)
    .map((defect) => defectFromSource(defect, source, logIndex, upperBiasedPosition(defect.positionFt, totalLengthFt, defect.index)));
}

function supplementalSeamDefects(source: GradingLogSeed, logIndex: number, existingDefects: Defect[]): Defect[] {
  const seamReferences = hwBuckSeamReferences[source.sourceId] ?? [];
  if (seamReferences.length === 0) return [];

  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  return seamReferences
    .filter(
      (reference) =>
        !existingDefects.some(
          (defect) =>
            defect.type === "deep_seam" &&
            Math.abs((defect.sourceSize ?? 0) - reference.size) < 0.15 &&
            Math.abs((defect.sourceAround ?? 0) - reference.around) < 0.15
        )
    )
    .map((reference, item) => {
      const isButtSeam = reference.positionFt <= 2;
      const severity: "minor" | "moderate" | "major" =
        reference.size >= 10 || reference.rawSeverity >= 15 ? "major" : reference.size >= 5 ? "moderate" : "minor";
      const startFt = isButtSeam
        ? round(0.65 + (item % 3) * 0.22)
        : Math.min(totalLengthFt - 5.5, Math.max(0.65, round(reference.positionFt)));
      const lengthFt = clamp(reference.size * 0.18, 0.9, 4.2);

      return {
        id: `practice-${pad(logIndex)}-${source.sourceId.toLowerCase()}-hw-seam-${item + 1}`,
        type: "deep_seam",
        startFt,
        endFt: Math.min(totalLengthFt - 0.25, round(startFt + lengthFt)),
        faces: facesFromAround(reference.around, true, reference.size),
        severity,
        visibility: "visible",
        impactClass: "sawlog_grade",
        sourceSize: reference.size,
        sourceAround: reference.around,
        visualOrientation: "horizontal",
        productImpacts: {
          slicer_veneer: { eligible: false, reason: "Deep seam excludes slicer veneer in this segment." },
          rotary_veneer: { eligible: false, reason: "Deep seam excludes rotary veneer in this segment." },
          sawlog: {
            gradeImpact: severity === "major" ? "severe" : severity,
            reason: "Deep seam is modeled from HW Buck seam frequency and counts against sawlog grade."
          }
        },
        notes: "Supplemental seam modeled from the HW Buck source set so butt seams appear at realistic frequency."
      };
    });
}

function supplementalHollowDefects(source: GradingLogSeed, logIndex: number, existingDefects: Defect[]): Defect[] {
  const hollowReferences = hwBuckHollowReferences[source.sourceId] ?? [];
  if (hollowReferences.length === 0) return [];

  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  return hollowReferences
    .filter(
      (reference) =>
        reference.size > 0 &&
        !existingDefects.some(
          (defect) =>
            defect.type === "hollow_center" &&
            Math.abs((defect.sourceSize ?? 0) - reference.size) < 0.15 &&
            Math.abs((defect.sourceAround ?? 0) - reference.around) < 0.15
        )
    )
    .map((reference, item) =>
      hollowCenterDefect(
        `practice-${pad(logIndex)}-${source.sourceId.toLowerCase()}-hw-hollow-${item + 1}`,
        source,
        reference,
        `Supplemental hollow-center reference modeled from ${source.sourceId}.def.`
      )
    )
    .filter((defect) => defect.startFt < totalLengthFt - 1);
}

function upperVeneerBlockers(source: GradingLogSeed, logIndex: number): Defect[] {
  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  const count = 4 + (logIndex % 3);
  return Array.from({ length: count }, (_, item) =>
    upperVeneerBlocker(
      `practice-${pad(logIndex)}-upper-veneer-blocker-${item + 1}`,
      upperStemDefectPosition(totalLengthFt, logIndex, item),
      faces[(logIndex + item) % faces.length],
      veneerTypes[(logIndex + item * 2) % veneerTypes.length]
    )
  );
}

function upperSawlogDefects(source: GradingLogSeed, logIndex: number): Defect[] {
  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  const count = 2 + (logIndex % 4);
  return Array.from({ length: count }, (_, item) => {
    const upperFraction = 0.56 + ((logIndex * 0.071 + item * 0.113) % 0.36);
    const severity: "minor" | "moderate" | "major" =
      upperFraction > 0.78 || item === count - 1 ? "moderate" : item % 3 === 0 ? "minor" : "moderate";
    return sawDefect(
      `practice-${pad(logIndex)}-upper-sawlog-defect-${item + 1}`,
      keepInside(round(totalLengthFt * upperFraction), totalLengthFt),
      faces[(logIndex + item * 2) % faces.length],
      sawlogTypes[(logIndex + item) % sawlogTypes.length],
      severity
    );
  });
}

function defectFromSource(defect: GradingDefectSeed, source: GradingLogSeed, logIndex: number, startOverrideFt?: number): Defect {
  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  const severity: "minor" | "moderate" | "major" = defect.severity >= 5 ? "major" : defect.severity >= 3 ? "moderate" : "minor";
  const type = sourceDefectType(defect.code, severity);
  const normalizedCode = defect.code.toUpperCase();
  if (normalizedCode === "DY" && defect.size > 0) {
    return hollowCenterDefect(
      `practice-${pad(logIndex)}-${source.sourceId.toLowerCase()}-${defect.index}`,
      source,
      { positionFt: defect.positionFt, around: defect.around, size: defect.size, rawSeverity: defect.severity },
      `Imported from ${source.sourceId}.def as a hollow-center decay pocket.`
    );
  }

  const startFt = keepInside(round(startOverrideFt ?? defect.positionFt), totalLengthFt);
  const isSeam = normalizedCode === "SE";
  const sizeLengthBonus = Math.min(1.1, Math.max(0, (defect.size - 6) * 0.12));
  const lengthFt = isSeam
    ? clamp(defect.size * 0.18, 1.1, 4.2)
    : (severity === "major" ? 1.45 : severity === "moderate" ? 1.05 : 0.75) + sizeLengthBonus;

  return {
    id: `practice-${pad(logIndex)}-${source.sourceId.toLowerCase()}-${defect.index}`,
    type,
    startFt,
    endFt: Math.min(totalLengthFt - 0.25, round(startFt + lengthFt)),
    faces: facesFromAround(defect.around, isSeam, defect.size),
    severity,
    visibility: "visible",
    impactClass: "sawlog_grade",
    sourceSize: defect.size,
    sourceAround: defect.around,
    visualOrientation: visualOrientationForSourceDefect(defect),
    productImpacts: {
      slicer_veneer: { eligible: false, reason: `${humanize(type)} excludes slicer veneer in this segment.` },
      rotary_veneer: { eligible: false, reason: `${humanize(type)} excludes rotary veneer in this segment.` },
      sawlog: {
        gradeImpact: severity === "major" ? "severe" : severity,
        reason: `${humanize(type)} is from the source defect file and counts against sawlog grade.`
      }
    },
    notes: `Imported from ${source.sourceId}.def and normalized for upper-stem defect frequency.`
  };
}

function hollowCenterDefect(
  id: string,
  source: GradingLogSeed,
  reference: { positionFt: number; around: number; size: number; rawSeverity: number },
  notes: string
): Defect {
  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  const isButtHollow = reference.positionFt <= 2;
  const startFt = isButtHollow ? 0.35 : keepInside(round(reference.positionFt), totalLengthFt);
  const taperOutFt = Math.min(totalLengthFt - 0.25, round(startFt + clamp(3.5 + reference.size * 0.45, 4.5, 11)));
  const severity: "minor" | "moderate" | "major" = reference.size >= 10 ? "major" : reference.size >= 6 ? "moderate" : "minor";
  const impactClass: Defect["impactClass"] = reference.size >= 7 ? "sawlog_grade" : "informational";
  const faceSet = reference.size >= 10 ? [...faces] : facesFromAround(reference.around, false, reference.size);

  return {
    id,
    type: "hollow_center",
    startFt,
    endFt: taperOutFt,
    faces: faceSet,
    severity,
    visibility: "visible",
    impactClass,
    sourceSize: reference.size,
    sourceAround: reference.around,
    hollowTaperOutFt: taperOutFt,
    visualOrientation: "horizontal",
    productImpacts: {
      slicer_veneer: { eligible: false, reason: "Hollow center excludes veneer unless it is fully bucked out." },
      rotary_veneer: { eligible: false, reason: "Hollow center excludes rotary veneer unless it is fully bucked out." },
      sawlog: {
        gradeImpact: impactClass === "informational" ? "none" : severity === "major" ? "severe" : "moderate",
        reason:
          impactClass === "informational"
            ? "Small butt hollow is visible but does not automatically remove a sawlog clear face."
            : "Hollow center can reduce sawlog grade and scale unless it is removed with the first cut."
      }
    },
    notes
  };
}

function upperBiasedPosition(positionFt: number, totalLengthFt: number, defectIndex: number): number {
  const fraction = clamp(positionFt / totalLengthFt, 0, 1);
  if (defectIndex === 1 && fraction < 0.38) return keepInside(round(positionFt), totalLengthFt);
  if (fraction >= 0.52) return keepInside(round(positionFt), totalLengthFt);
  const upperFraction = 0.55 + ((fraction * 0.7 + defectIndex * 0.11) % 0.37);
  return keepInside(round(totalLengthFt * upperFraction), totalLengthFt);
}

function upperStemDefectPosition(totalLengthFt: number, logIndex: number, item: number): number {
  const fraction = 0.6 + ((logIndex * 0.13 + item * 0.17) % 0.28);
  return keepInside(round(totalLengthFt * fraction), totalLengthFt);
}

function lowerStemVeneerMarkPosition(totalLengthFt: number, logIndex: number): number {
  const fraction = 0.12 + ((logIndex * 0.037) % 0.22);
  return keepInside(round(totalLengthFt * fraction), totalLengthFt);
}

function sourceDefectType(code: string, severity: "minor" | "moderate" | "major"): string {
  const normalized = code.toUpperCase();
  if (normalized === "BU") return "large_bark_distortion";
  if (normalized === "SE") return "deep_seam";
  if (normalized === "DY") return "hollow_center";
  if (normalized === "F") return "frost_crack";
  if (normalized === "SR") return "old_branch_stub";
  if (normalized === "BE") return "large_bark_distortion";
  if (normalized === "H") return "major_stain_column";
  if (normalized === "SN") return "wide_insect_channel";
  return severity === "major" ? "open_knot" : "overgrown_knot";
}

function faceFromAround(around: number): Face {
  if (!Number.isFinite(around) || around <= 0) return "face_1";
  const normalized = ((around % 36) + 36) % 36;
  return faces[Math.floor(normalized / 9) % faces.length];
}

function facesFromAround(around: number, wrapsSeam: boolean, size: number): Face[] {
  const primary = faceFromAround(around);
  if (!wrapsSeam || size < 8 || !Number.isFinite(around)) return [primary];
  if (size >= 20) return [...faces];

  const normalized = ((around % 36) + 36) % 36;
  const faceIndex = Math.floor(normalized / 9) % faces.length;
  const withinFace = normalized % 9;
  const wrappedIndex = withinFace < 4.5 ? (faceIndex + faces.length - 1) % faces.length : (faceIndex + 1) % faces.length;
  return [primary, faces[wrappedIndex]];
}

function visualOrientationForSourceDefect(defect: GradingDefectSeed): "horizontal" | "vertical" {
  const normalized = defect.code.toUpperCase();
  if (normalized === "SE" || normalized === "SN" || normalized === "H") return "horizontal";
  if (normalized === "SR" || normalized === "DY") return "vertical";
  return defect.around % 18 < 9 ? "horizontal" : "vertical";
}

function shapeProfileFromSource(source: GradingLogSeed, index: number): PracticeLog["shapeProfile"] {
  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  const direction = index % 2 === 0 ? 1 : -1;
  const sourceNumber = Number(source.sourceId.replace(/\D/g, "")) || index;
  const baseCrook = 8 + (sourceNumber % 6) * 1.35 + Math.max(0, (totalLengthFt - 34) * 0.16);
  return {
    sweepDirection: direction === 1 ? "right" : "left",
    ovality: round(0.84 + (index % 4) * 0.03),
    barkRidgeFrequency: 13 + (index % 5) * 3,
    shapePoints: source.stations.map((station, pointIndex) => {
      const fraction = totalLengthFt === 0 ? 0 : clamp(station.positionFt / totalLengthFt, 0, 1);
      const sourceDrift = (station.sweepOffsetIn - source.stations[0].sweepOffsetIn) * 0.14;
      const progressiveCrook = Math.pow(fraction, 1.72) * baseCrook * direction;
      const upperWobble = Math.sin(fraction * Math.PI * (2.6 + (index % 3) * 0.4) + index) * (0.35 + fraction * fraction * 4.2);
      const localBend = Math.sin(pointIndex * 1.7 + sourceNumber) * fraction * 0.85;
      return {
        positionFt: station.positionFt,
        sweepOffsetIn: round(progressiveCrook + sourceDrift + upperWobble + localBend),
        topIrregularityIn: round((station.sideOffsetIn - source.stations[0].sideOffsetIn) * 0.26 + Math.sin(index + pointIndex) * fraction * 1.35),
        bottomIrregularityIn: round((source.stations[0].sideOffsetIn - station.sideOffsetIn) * 0.24 + Math.cos(index * 0.7 + pointIndex) * fraction * 1.25)
      };
    })
  };
}

function heartwoodPointsFor(source: GradingLogSeed, index: number, species: Species): PracticeLog["heartwoodPoints"] {
  const totalLengthFt = source.stations[source.stations.length - 1].positionFt;
  const speciesBias: Record<Species, number> = {
    "hard maple": 0.2,
    "soft maple": 0.25,
    "red oak": 0.9,
    "black oak": 0.85,
    "white oak": 0.7,
    "white ash": 0.35,
    hickory: 0.45,
    "yellow birch": 0.55,
    "black cherry": 0.8,
    "tulip poplar": 0.22,
    walnut: 0.95
  };
  return source.stations.map((station, pointIndex) => {
    const fraction = totalLengthFt === 0 ? 0 : clamp(station.positionFt / totalLengthFt, 0, 1);
    const agePulse = ((index + pointIndex * 3) % 7) * 0.16;
    const proportion = 0.22 + speciesBias[species] * 0.025 + agePulse * 0.03 + fraction * 0.1;
    return {
      positionFt: station.positionFt,
      diameterIn: round(Math.min(station.diameterIn * 0.56, Math.max(1.2, station.diameterIn * proportion)))
    };
  });
}

function shapeProfileFor(index: number, totalLengthFt: number, taperStyle: number): PracticeLog["shapeProfile"] {
  const direction = index % 2 === 0 ? 1 : -1;
  const sweepStrength = 4.5 + (index % 7) * 1.05 + taperStyle * 0.65;
  return {
    sweepDirection: direction === 1 ? "right" : "left",
    ovality: round(0.82 + (index % 5) * 0.035),
    barkRidgeFrequency: 12 + (index % 6) * 3,
    shapePoints: [0, 0.2, 0.42, 0.66, 0.84, 1].map((fraction, pointIndex) => {
      const wave = Math.sin((index + pointIndex * 1.7) * 0.9);
      const crook = Math.sin(fraction * Math.PI) * sweepStrength * direction;
      return {
        positionFt: round(totalLengthFt * fraction),
        sweepOffsetIn: round(crook + wave * 1.15),
        topIrregularityIn: round(Math.sin(index * 0.6 + pointIndex) * 1.8),
        bottomIrregularityIn: round(Math.cos(index * 0.75 + pointIndex * 1.3) * 1.8)
      };
    })
  };
}

function modelCutsFor(index: number, totalLengthFt: number, objective: string, defects: Defect[]): number[] {
  const pattern = index % 8;
  const firstDefect = defects[0]?.startFt ?? 9;
  const base =
    pattern === 0
      ? [8.25, 16.5, 28.75, 41]
      : pattern === 1
        ? [10.25, 20.5, 32.75]
        : pattern === 2
          ? [12.25, 24.5, 34.75, 45]
          : pattern === 3
            ? [8.25, 18.5, 30.75]
            : pattern === 4
              ? [14.25, 24.5, 36.75]
              : pattern === 5
                ? [10.25, 22.5, 34.75, 47]
                : pattern === 6
                  ? [12.25, 20.5, 32.75, 43]
                  : [8.25, 20.5, 28.75, 41];

  const adjusted =
    objective.includes("Preserve a clean veneer")
      ? [round(Math.max(8.25, firstDefect - 0.5)), ...base.slice(1)]
      : objective.includes("true sawlog defect")
        ? base.map((cut, cutIndex) => (cutIndex === 1 ? round(cut + 2) : cut))
        : objective.includes("fewer long logs")
          ? [16.25, 32.5, 44.75]
          : base;

  return uniqueSorted(adjusted.filter((cut) => cut > 6 && cut < totalLengthFt - 6).map((cut) => round(cut)));
}

function titleFor(index: number, library: "practice" | "instruction" = "practice"): string {
  return `${library} stem ${pad(index)}`;
}

function explanationFor(objective: string, veneerCount: number, sawCount: number, bothCount: number): string {
  const parts = [
    `The model emphasizes this lesson: ${objective}`,
    veneerCount > 0
      ? "Veneer-only defects are treated as veneer blockers, not sawlog grade defects."
      : "No veneer-only defect is present, so the model focuses on diameter, length, and true grade defects.",
    sawCount > 0 ? "A true sawlog defect is isolated or kept out of the highest-grade face-sensitive log." : "",
    bothCount > 0 ? "A defect affecting both veneer and sawlogs is kept from driving an over-optimistic product assignment." : ""
  ];
  return parts.filter(Boolean).join(" ");
}

function keepInside(position: number, totalLengthFt: number): number {
  return Math.min(totalLengthFt - 5.5, Math.max(2.5, position));
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function uniqueSorted(values: number[]): number[] {
  return [...new Set(values)].sort((a, b) => a - b);
}

function humanize(value: string): string {
  return value.replaceAll("_", " ");
}

function pad(index: number): string {
  return String(index).padStart(3, "0");
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}

export const PRACTICE_LOGS: PracticeLog[] = Array.from({ length: GRADING_LOG_SEEDS.length }, (_, index) => ({
  ...makeLog(index + 1, "practice"),
  title: titleFor(index + 1, "practice")
}));

export const INSTRUCTION_LOGS: PracticeLog[] = Array.from({ length: 50 }, (_, index) => ({
  ...makeLog(index + 1, "instruction"),
  id: `instruction-${pad(index + 1)}`,
  title: titleFor(index + 1, "instruction"),
  difficulty: index < 16 ? "intro" : index < 34 ? "intermediate" : "advanced"
}));
