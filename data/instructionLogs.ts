import type { PracticeLog } from "@/lib/types";

export const INSTRUCTION_LOGS: PracticeLog[] = [
  {
    "id": "instruction-001",
    "title": "instruction log 1",
    "species": "hard maple",
    "totalLengthFt": 40.1,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 19.5
      },
      {
        "positionFt": 6,
        "diameterIn": 17.9
      },
      {
        "positionFt": 13,
        "diameterIn": 15.3
      },
      {
        "positionFt": 19,
        "diameterIn": 14.7
      },
      {
        "positionFt": 25,
        "diameterIn": 13.3
      },
      {
        "positionFt": 32,
        "diameterIn": 11.8
      },
      {
        "positionFt": 40.1,
        "diameterIn": 9.5
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 15,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.9,
          "topIrregularityIn": 0.9,
          "bottomIrregularityIn": 1.2
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 1.6,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": 5.2,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 3
        },
        {
          "positionFt": 19,
          "sweepOffsetIn": 8.3,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 2.4
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": 10.2,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 2.2
        },
        {
          "positionFt": 29,
          "sweepOffsetIn": 14.7,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 1.8
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": 12.2,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 0.1
        },
        {
          "positionFt": 40.1,
          "sweepOffsetIn": 12.5,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 0.8
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-001-d01",
        "type": "sweep/crook",
        "startFt": 17.2,
        "endFt": 24,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Primary lesson is to break the stem so sweep is not carried through a long log."
      },
      {
        "id": "instruction-001-d02",
        "type": "small knot cluster",
        "startFt": 28,
        "endFt": 30.4,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Secondary defect should not distract from sweep control."
      },
      {
        "id": "instruction-001-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.1,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 8,
        "sourceAround": 4,
        "hollowTaperOutFt": 8.1,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-001-d01",
        "type": "sweep/crook",
        "startFt": 17.2,
        "endFt": 24,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Primary lesson is to break the stem so sweep is not carried through a long log."
      },
      {
        "id": "instruction-001-d02",
        "type": "small knot cluster",
        "startFt": 28,
        "endFt": 30.4,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Secondary defect should not distract from sweep control."
      },
      {
        "id": "instruction-001-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.1,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 8,
        "sourceAround": 4,
        "hollowTaperOutFt": 8.1,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      8,
      16,
      24,
      32
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "intro",
    "teachingObjective": "Teach rule 1: minimize sweep and crook using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 1",
      "sweep/crook",
      "scale deduction",
      "grade loss",
      "whole-stem inspection"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #1, place bucking cuts to minimize sweep and crook. This stem is meant to make students compare longer scale volume against sweep deduction, grade loss, and visual straightness. Secondary points: examine the whole stem before cutting, judge sweep across all faces, and avoid letting a minor knot cluster distract from the main shape problem. Model solution discussion should focus on cut positions at 8, 16, 24, 32 ft. Key teaching cues: sweep/crook at 17.2-24.0 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-002",
    "title": "instruction log 2",
    "species": "red oak",
    "totalLengthFt": 36.5,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 29.5
      },
      {
        "positionFt": 6,
        "diameterIn": 27.1
      },
      {
        "positionFt": 12,
        "diameterIn": 26
      },
      {
        "positionFt": 17,
        "diameterIn": 24.5
      },
      {
        "positionFt": 22,
        "diameterIn": 23.5
      },
      {
        "positionFt": 29,
        "diameterIn": 21.6
      },
      {
        "positionFt": 36.5,
        "diameterIn": 20.4
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 18,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.7,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 1.5
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1.8,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -3.2,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 0.3
        },
        {
          "positionFt": 19,
          "sweepOffsetIn": -5.2,
          "topIrregularityIn": 1.8,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 26,
          "sweepOffsetIn": -7,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 33,
          "sweepOffsetIn": -7.2,
          "topIrregularityIn": 2.3,
          "bottomIrregularityIn": 0.6
        },
        {
          "positionFt": 36.5,
          "sweepOffsetIn": -7.2,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 1.5
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-002-d01",
        "type": "butt flare and stain",
        "startFt": 0,
        "endFt": 2.4,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Short jump butt may unlock a higher-value log above."
      },
      {
        "id": "instruction-002-d02",
        "type": "subtle bird peck",
        "startFt": 18.2,
        "endFt": 19.7,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good sawlog but veneer buyer may reject or discount."
      },
      {
        "id": "instruction-002-d03",
        "type": "open knot",
        "startFt": 27,
        "endFt": 28.4,
        "faces": [
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Defines upper end of the best log."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-002-d02",
        "type": "subtle bird peck",
        "startFt": 18.2,
        "endFt": 19.7,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good sawlog but veneer buyer may reject or discount."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-002-d03",
        "type": "open knot",
        "startFt": 27,
        "endFt": 28.4,
        "faces": [
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Defines upper end of the best log."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-002-d01",
        "type": "butt flare and stain",
        "startFt": 0,
        "endFt": 2.4,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Short jump butt may unlock a higher-value log above."
      }
    ],
    "modelSolutionCutPositionsFt": [
      4,
      16,
      24,
      32
    ],
    "modelSolutionExplanation": "Jump-butt the poor butt section, preserve the best middle log, then work the remaining material around that log instead of automatically starting with the longest butt log.",
    "difficulty": "intro",
    "teachingObjective": "Teach rule 2: find the best log in the stem section and work around it using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 2",
      "pumpkin log",
      "jump butt",
      "best log first",
      "veneer vs sawlog defects"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #2, find the best log in the stem section and work around that log rather than beginning mechanically at the butt. This is a pumpkin-log exercise: a short jump butt or non-obvious first cut preserves the highest-value section. Secondary points: separate veneer-only concerns from sawlog defects and discuss when the best log is above the butt. Model solution discussion should focus on cut positions at 4, 16, 24, 32 ft. Key teaching cues: butt flare and stain at 0-2.4 ft (veneer and sawlog); open knot at 27.0-28.4 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-003",
    "title": "instruction log 3",
    "species": "white oak",
    "totalLengthFt": 36.2,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 15.6
      },
      {
        "positionFt": 6,
        "diameterIn": 14
      },
      {
        "positionFt": 13,
        "diameterIn": 12.3
      },
      {
        "positionFt": 18,
        "diameterIn": 12
      },
      {
        "positionFt": 25,
        "diameterIn": 10.4
      },
      {
        "positionFt": 30,
        "diameterIn": 9.6
      },
      {
        "positionFt": 36.2,
        "diameterIn": 8.7
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 12,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.6,
          "topIrregularityIn": 2.3,
          "bottomIrregularityIn": 1.4
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -0.4,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -0.8,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 1.6
        },
        {
          "positionFt": 19,
          "sweepOffsetIn": -2.9,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 2.5
        },
        {
          "positionFt": 25,
          "sweepOffsetIn": -3.4,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 0.3
        },
        {
          "positionFt": 32,
          "sweepOffsetIn": -3.2,
          "topIrregularityIn": 1.3,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 36.2,
          "sweepOffsetIn": -3.1,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 2.9
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-003-d01",
        "type": "diameter threshold zone",
        "startFt": 17.4,
        "endFt": 20.3,
        "faces": [],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "Top diameter is near a minimum product threshold; measure before cutting."
      },
      {
        "id": "instruction-003-d02",
        "type": "sound knot",
        "startFt": 22.4,
        "endFt": 23.9,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Often better carried into the next lower-grade log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-003-d02",
        "type": "sound knot",
        "startFt": 22.4,
        "endFt": 23.9,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Often better carried into the next lower-grade log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      10,
      22,
      30
    ],
    "modelSolutionExplanation": "Measure the taper before committing; a shorter high-grade log that stays above the minimum top diameter is worth more than adding length and losing the product class.",
    "difficulty": "intro",
    "teachingObjective": "Teach diameter break: preserve product where top diameter barely meets the threshold using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "diameter break",
      "minimum top diameter",
      "measure before cutting",
      "product eligibility"
    ],
    "instructionalNote": "Primary instructional point: diameter-break judgment. Students must measure before cutting because the top diameter is close to a minimum threshold for a higher product class or grade. Secondary points: a shorter log can be worth more if it preserves eligibility, and a minor defect beyond the break may belong in the next, lower-grade log. Model solution discussion should focus on cut positions at 10, 22, 30 ft. Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-004",
    "title": "instruction log 4",
    "species": "white ash",
    "totalLengthFt": 40.1,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 15.9
      },
      {
        "positionFt": 6,
        "diameterIn": 14.1
      },
      {
        "positionFt": 11,
        "diameterIn": 13
      },
      {
        "positionFt": 18,
        "diameterIn": 12
      },
      {
        "positionFt": 25,
        "diameterIn": 10.9
      },
      {
        "positionFt": 32,
        "diameterIn": 9.1
      },
      {
        "positionFt": 40.1,
        "diameterIn": 8.1
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 17,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.5,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 1.5
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1,
          "topIrregularityIn": 2.3,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -2.6,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 2.8
        },
        {
          "positionFt": 19,
          "sweepOffsetIn": -6.4,
          "topIrregularityIn": 1.6,
          "bottomIrregularityIn": 0
        },
        {
          "positionFt": 25,
          "sweepOffsetIn": -10.6,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 31,
          "sweepOffsetIn": -9,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 40.1,
          "sweepOffsetIn": -9.9,
          "topIrregularityIn": 0.9,
          "bottomIrregularityIn": 1.4
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-004-d01",
        "type": "canker",
        "startFt": 15.6,
        "endFt": 18,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Fixed buck point forces the rest of the pattern."
      },
      {
        "id": "instruction-004-d02",
        "type": "small seam",
        "startFt": 28.5,
        "endFt": 30.5,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Tests whether the next log should be shorter."
      },
      {
        "id": "instruction-004-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 9,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 10,
        "sourceAround": 7,
        "hollowTaperOutFt": 9,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Large butt hollow can reduce grade and scale unless isolated.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Large butt hollow center; compare leaving it in the butt log against jumping the butt or cutting it out."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-004-d02",
        "type": "small seam",
        "startFt": 28.5,
        "endFt": 30.5,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Tests whether the next log should be shorter."
      },
      {
        "id": "instruction-004-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 9,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 10,
        "sourceAround": 7,
        "hollowTaperOutFt": 9,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Large butt hollow can reduce grade and scale unless isolated.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Large butt hollow center; compare leaving it in the butt log against jumping the butt or cutting it out."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-004-d01",
        "type": "canker",
        "startFt": 15.6,
        "endFt": 18,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Fixed buck point forces the rest of the pattern."
      }
    ],
    "modelSolutionCutPositionsFt": [
      8,
      17,
      25,
      35
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "intro",
    "teachingObjective": "Teach obligatory buck point: work around a fixed defect using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "obligatory buck point",
      "fixed defect",
      "canker/crook/hole",
      "pattern on both sides"
    ],
    "instructionalNote": "Primary instructional point: obligatory buck-point planning. A canker, crook, hole, or fixed severe defect creates a forced decision point, and the best solution is built on both sides of that point. Secondary points: do not drag the defect through a valuable log merely to gain footage, and then re-evaluate remaining length, diameter, and grade opportunities. Model solution discussion should focus on cut positions at 8, 17, 25, 35 ft. Key teaching cues: canker at 15.6-18.0 ft (veneer and sawlog); small seam at 28.5-30.5 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-005",
    "title": "instruction log 5",
    "species": "yellow birch",
    "totalLengthFt": 32.4,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 23
      },
      {
        "positionFt": 6,
        "diameterIn": 20.9
      },
      {
        "positionFt": 13,
        "diameterIn": 18.5
      },
      {
        "positionFt": 20,
        "diameterIn": 17.2
      },
      {
        "positionFt": 27,
        "diameterIn": 15.6
      },
      {
        "positionFt": 32.4,
        "diameterIn": 13.8
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 11,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.3,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 1.8
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -2.1,
          "topIrregularityIn": 1.6,
          "bottomIrregularityIn": 4.2
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -3.2,
          "topIrregularityIn": 3.3,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -4.3,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 2.7
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": -6.7,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 1.5
        },
        {
          "positionFt": 32.4,
          "sweepOffsetIn": -6.2,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 1.8
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-005-d01",
        "type": "overgrown knot",
        "startFt": 9.1,
        "endFt": 10.4,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Shorter first log may keep a higher grade."
      },
      {
        "id": "instruction-005-d02",
        "type": "mineral streak",
        "startFt": 18.8,
        "endFt": 20.8,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "hidden",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A likely veneer concern but only a weak sawlog signal."
      },
      {
        "id": "instruction-005-d03",
        "type": "small limb scar",
        "startFt": 26.9,
        "endFt": 28.2,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Can be absorbed by lower-grade upper log."
      },
      {
        "id": "instruction-005-d04",
        "type": "bark inclusion",
        "startFt": 3.9,
        "endFt": 5.2,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-005-d02",
        "type": "mineral streak",
        "startFt": 18.8,
        "endFt": 20.8,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "hidden",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A likely veneer concern but only a weak sawlog signal."
      },
      {
        "id": "instruction-005-d04",
        "type": "bark inclusion",
        "startFt": 3.9,
        "endFt": 5.2,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-005-d01",
        "type": "overgrown knot",
        "startFt": 9.1,
        "endFt": 10.4,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Shorter first log may keep a higher grade."
      },
      {
        "id": "instruction-005-d03",
        "type": "small limb scar",
        "startFt": 26.9,
        "endFt": 28.2,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Can be absorbed by lower-grade upper log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      12,
      24
    ],
    "modelSolutionExplanation": "Cut the longest log that keeps the grade; if two more feet would add a defective face and drop grade, leave those feet for the next log.",
    "difficulty": "intro",
    "teachingObjective": "Teach rule 3: longest log possible without lowering grade using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 3",
      "longest log without lowering grade",
      "clear faces",
      "grade vs length tradeoff"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #3 under clear-face grading rules, cut the longest log possible without lowering the grade. Students should test whether adding two feet creates another defective face or drops the log class. Secondary points: extra footage rarely compensates for a grade drop, and the leftover section may often be used on the next log. Model solution discussion should focus on cut positions at 12, 24 ft. Key teaching cues: overgrown knot at 9.1-10.4 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-006",
    "title": "instruction log 6",
    "species": "black cherry",
    "totalLengthFt": 31.9,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 25.1
      },
      {
        "positionFt": 6,
        "diameterIn": 22.7
      },
      {
        "positionFt": 11,
        "diameterIn": 21.3
      },
      {
        "positionFt": 17,
        "diameterIn": 20.3
      },
      {
        "positionFt": 24,
        "diameterIn": 18.8
      },
      {
        "positionFt": 31.9,
        "diameterIn": 16.6
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 15,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.3,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 0.5
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -0.1,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 0.6
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -2.7,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -2.7,
          "topIrregularityIn": 3.4,
          "bottomIrregularityIn": 0.5
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": -3.8,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 31.9,
          "sweepOffsetIn": -3.2,
          "topIrregularityIn": 3,
          "bottomIrregularityIn": 2.9
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-006-d01",
        "type": "frost crack seam",
        "startFt": 7.7,
        "endFt": 9.3,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Place near an end when clear-cutting rules or internal sawing reward it."
      },
      {
        "id": "instruction-006-d02",
        "type": "pin knots",
        "startFt": 19.5,
        "endFt": 20.7,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Veneer-sensitive cue on otherwise high-quality section."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-006-d02",
        "type": "pin knots",
        "startFt": 19.5,
        "endFt": 20.7,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Veneer-sensitive cue on otherwise high-quality section."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-006-d01",
        "type": "frost crack seam",
        "startFt": 7.7,
        "endFt": 9.3,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Place near an end when clear-cutting rules or internal sawing reward it."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      8,
      20
    ],
    "modelSolutionExplanation": "Set cuts so the principal seam is near a log end, improving clear cuttings under markets that reward board recovery or do not penalize end defects the same way.",
    "difficulty": "intro",
    "teachingObjective": "Teach place defects near log ends to improve clear cuttings where market rules allow using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "end-defect placement",
      "clear cuttings",
      "market-dependent grading",
      "board recovery"
    ],
    "instructionalNote": "Primary instructional point: place defects near log ends when the applicable market rewards clear cuttings or does not treat end defects the same way as mid-log face defects. Students should compare clear-face grading with board-recovery thinking. Secondary points: this rule is market-dependent, so it should be used only when the buyer, mill, or grading rule rewards the result. Model solution discussion should focus on cut positions at 8, 20 ft. Key teaching cues: frost crack seam at 7.7-9.3 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-007",
    "title": "instruction log 7",
    "species": "hard maple",
    "totalLengthFt": 36.4,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 17.8
      },
      {
        "positionFt": 6,
        "diameterIn": 16.1
      },
      {
        "positionFt": 13,
        "diameterIn": 14.2
      },
      {
        "positionFt": 20,
        "diameterIn": 12.8
      },
      {
        "positionFt": 26,
        "diameterIn": 11.5
      },
      {
        "positionFt": 36.4,
        "diameterIn": 9.5
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 14,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.5,
          "topIrregularityIn": 2.6,
          "bottomIrregularityIn": 2.1
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.5,
          "topIrregularityIn": 2.6,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": 1.9,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 3
        },
        {
          "positionFt": 19,
          "sweepOffsetIn": 1.8,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 1.6
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": 3.8,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 2.5
        },
        {
          "positionFt": 29,
          "sweepOffsetIn": 2.6,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 36.4,
          "sweepOffsetIn": 3.3,
          "topIrregularityIn": 1.8,
          "bottomIrregularityIn": 2.7
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-007-d02",
        "type": "excellent clear faces",
        "startFt": 3.6,
        "endFt": 11.7,
        "faces": [],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "The surrounding quality section is intentionally strong."
      },
      {
        "id": "instruction-007-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 9.9,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 12,
        "sourceAround": 10,
        "hollowTaperOutFt": 9.9,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Large butt hollow can reduce grade and scale unless isolated.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Large butt hollow center; compare leaving it in the butt log against jumping the butt or cutting it out."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-007-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 9.9,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 12,
        "sourceAround": 10,
        "hollowTaperOutFt": 9.9,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Large butt hollow can reduce grade and scale unless isolated.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Large butt hollow center; compare leaving it in the butt log against jumping the butt or cutting it out."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      12,
      24
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "intro",
    "teachingObjective": "Teach understand when a hole can remain in an otherwise valuable sawlog using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "large hole observation",
      "sawlog tolerance",
      "face evaluation",
      "avoid automatic cull"
    ],
    "instructionalNote": "Primary instructional point: do not automatically condemn a high-quality sawlog because of one large hole. Students should examine surrounding faces, diameter, and expected grade before removing too much wood. Secondary points: this reinforces the observation that fairly large holes can occur in valuable sawlogs, especially where the remaining quality section is strong. Model solution discussion should focus on cut positions at 12, 24 ft. Key teaching cues: butt hollow center from 0-9.9 ft (sawlog grade and possible scale deduction). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-008",
    "title": "instruction log 8",
    "species": "red oak",
    "totalLengthFt": 36.4,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 16.7
      },
      {
        "positionFt": 6,
        "diameterIn": 14.4
      },
      {
        "positionFt": 12,
        "diameterIn": 13.6
      },
      {
        "positionFt": 19,
        "diameterIn": 11.6
      },
      {
        "positionFt": 24,
        "diameterIn": 10.7
      },
      {
        "positionFt": 31,
        "diameterIn": 9.1
      },
      {
        "positionFt": 36.4,
        "diameterIn": 8.4
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 17,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 1,
          "topIrregularityIn": 0.2,
          "bottomIrregularityIn": 1.5
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.3,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 0.7
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": 2.3,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 17,
          "sweepOffsetIn": 3.4,
          "topIrregularityIn": 1.6,
          "bottomIrregularityIn": 0
        },
        {
          "positionFt": 23,
          "sweepOffsetIn": 5.7,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 1.5
        },
        {
          "positionFt": 28,
          "sweepOffsetIn": 7.4,
          "topIrregularityIn": 0.9,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 33,
          "sweepOffsetIn": 7.4,
          "topIrregularityIn": 1.6,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 36.4,
          "sweepOffsetIn": 7.8,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 2.9
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-008-d01",
        "type": "rotten section",
        "startFt": 16.4,
        "endFt": 20,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Remove the cull to raise grades on both sides."
      },
      {
        "id": "instruction-008-d02",
        "type": "sound knot",
        "startFt": 26.2,
        "endFt": 27.7,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Do not overreact after the cull section has already been isolated."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-008-d02",
        "type": "sound knot",
        "startFt": 26.2,
        "endFt": 27.7,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Do not overreact after the cull section has already been isolated."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-008-d01",
        "type": "rotten section",
        "startFt": 16.4,
        "endFt": 20,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Remove the cull to raise grades on both sides."
      }
    ],
    "modelSolutionCutPositionsFt": [
      12,
      16,
      20,
      30
    ],
    "modelSolutionExplanation": "Remove the central cull section when doing so upgrades the logs on both sides; this is the case where losing footage can recover more value.",
    "difficulty": "intro",
    "teachingObjective": "Teach remove a cull section when it raises the value of neighboring logs using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "cull removal",
      "isolate defect",
      "grade improvement",
      "value vs footage tradeoff"
    ],
    "instructionalNote": "Primary instructional point: cull removal can increase total value when isolating a bad section raises the grade of adjacent logs. Students should compare the lost footage against the grade improvement on both sides. Secondary points: remove cull deliberately to implement a rule of thumb, not as a reflex, and avoid overreacting to minor defects after the main cull has been isolated. Model solution discussion should focus on cut positions at 12, 16, 20, 30 ft. Key teaching cues: rotten section at 16.4-20.0 ft (veneer and sawlog). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-009",
    "title": "instruction log 9",
    "species": "white oak",
    "totalLengthFt": 40.4,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 15
      },
      {
        "positionFt": 6,
        "diameterIn": 14.1
      },
      {
        "positionFt": 13,
        "diameterIn": 12.9
      },
      {
        "positionFt": 20,
        "diameterIn": 11.8
      },
      {
        "positionFt": 25,
        "diameterIn": 10.7
      },
      {
        "positionFt": 31,
        "diameterIn": 9.4
      },
      {
        "positionFt": 40.4,
        "diameterIn": 8.2
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 12,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 1,
          "topIrregularityIn": 1.6,
          "bottomIrregularityIn": 2.8
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -0.2,
          "topIrregularityIn": 1.6,
          "bottomIrregularityIn": 0.3
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": 0.8,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 1.4
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": 2.2,
          "topIrregularityIn": 0.4,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": 3.3,
          "topIrregularityIn": 2.4,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 30,
          "sweepOffsetIn": 3.7,
          "topIrregularityIn": 1.3,
          "bottomIrregularityIn": 2
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": 3.4,
          "topIrregularityIn": 0.2,
          "bottomIrregularityIn": 1.9
        },
        {
          "positionFt": 40.4,
          "sweepOffsetIn": 3.8,
          "topIrregularityIn": 1.6,
          "bottomIrregularityIn": 0.2
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-009-d01",
        "type": "short punky streak",
        "startFt": 7.7,
        "endFt": 9.3,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "May be retained in trim or low-impact position to reach minimum length."
      },
      {
        "id": "instruction-009-d02",
        "type": "open knot",
        "startFt": 27.1,
        "endFt": 28.3,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Provides a contrast with a defect that should not enter the best log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-009-d01",
        "type": "short punky streak",
        "startFt": 7.7,
        "endFt": 9.3,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "May be retained in trim or low-impact position to reach minimum length."
      },
      {
        "id": "instruction-009-d02",
        "type": "open knot",
        "startFt": 27.1,
        "endFt": 28.3,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Provides a contrast with a defect that should not enter the best log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      10,
      22,
      34
    ],
    "modelSolutionExplanation": "Retain a small low-impact section when it is needed to reach a required log length and does not reduce the grade under the applicable market specifications.",
    "difficulty": "intro",
    "teachingObjective": "Teach retain small cull to reach minimum log length when grade is not harmed using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "cull retention",
      "minimum length",
      "trim allowance",
      "product specifications"
    ],
    "instructionalNote": "Primary instructional point: retain a small cull or low-quality section when it is needed to reach a required log length and does not lower the grade under the market rules. Students should distinguish between unacceptable cull and allowable trim or low-impact material. Secondary points: clear-face rules may treat this differently, so the decision depends on the product specification. Model solution discussion should focus on cut positions at 10, 22, 34 ft. Key teaching cues: short punky streak at 7.7-9.3 ft (sawlog grade); open knot at 27.1-28.3 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-010",
    "title": "instruction log 10",
    "species": "white ash",
    "totalLengthFt": 36.2,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 28.5
      },
      {
        "positionFt": 6,
        "diameterIn": 26.5
      },
      {
        "positionFt": 12,
        "diameterIn": 24.9
      },
      {
        "positionFt": 19,
        "diameterIn": 22.7
      },
      {
        "positionFt": 26,
        "diameterIn": 21.1
      },
      {
        "positionFt": 31,
        "diameterIn": 19.9
      },
      {
        "positionFt": 36.2,
        "diameterIn": 19.5
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 17,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.2,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 1.7,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": 1.4,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 19,
          "sweepOffsetIn": 3.5,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 2.8
        },
        {
          "positionFt": 26,
          "sweepOffsetIn": 5.1,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 1.2
        },
        {
          "positionFt": 32,
          "sweepOffsetIn": 5.6,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 2.1
        },
        {
          "positionFt": 36.2,
          "sweepOffsetIn": 5.6,
          "topIrregularityIn": 0.4,
          "bottomIrregularityIn": 0.8
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-010-d01",
        "type": "root flare",
        "startFt": 0,
        "endFt": 3.1,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "Presentation and butt trimming can affect buyer reaction."
      },
      {
        "id": "instruction-010-d02",
        "type": "subtle seam",
        "startFt": 18.8,
        "endFt": 20.6,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Buyer interpretation matters; discuss market specs and relationships."
      },
      {
        "id": "instruction-010-d03",
        "type": "small bird peck",
        "startFt": 26.8,
        "endFt": 27.5,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A reminder that veneer defects and sawlog defects are not identical."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-010-d03",
        "type": "small bird peck",
        "startFt": 26.8,
        "endFt": 27.5,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A reminder that veneer defects and sawlog defects are not identical."
      }
    ],
    "sawlogAffectingDefects": [],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-010-d02",
        "type": "subtle seam",
        "startFt": 18.8,
        "endFt": 20.6,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Buyer interpretation matters; discuss market specs and relationships."
      }
    ],
    "modelSolutionCutPositionsFt": [
      3,
      15,
      27
    ],
    "modelSolutionExplanation": "Start with market specifications: trim the butt for presentation, know minimum lengths and diameters, and avoid making a technically legal log that the buyer will discount.",
    "difficulty": "intro",
    "teachingObjective": "Teach know markets: trim, minimum lengths, buyer tolerance, presentation using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "market specs",
      "buyer tolerance",
      "trim",
      "minimums",
      "presentation",
      "veneer vs sawlog"
    ],
    "instructionalNote": "Primary instructional point: know the market before cutting. This stem is for discussing minimum lengths, trim, minimum top diameters, defect interpretation, buyer tolerance, and presentation. Secondary points: veneer and sawlog rules do not treat all defects the same way, and a technically legal log may still be discounted if it is poorly presented or mismatched to the buyer. Model solution discussion should focus on cut positions at 3, 15, 27 ft. Key teaching cues: root flare at 0-3.1 ft (informational); subtle seam at 18.8-20.6 ft (veneer and sawlog). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-011",
    "title": "instruction log 11",
    "species": "yellow birch",
    "totalLengthFt": 35.8,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 26.6
      },
      {
        "positionFt": 6,
        "diameterIn": 24.4
      },
      {
        "positionFt": 13,
        "diameterIn": 23.3
      },
      {
        "positionFt": 18,
        "diameterIn": 21.7
      },
      {
        "positionFt": 23,
        "diameterIn": 20.9
      },
      {
        "positionFt": 30,
        "diameterIn": 19
      },
      {
        "positionFt": 35.8,
        "diameterIn": 17.7
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 10,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.5,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 4.2
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 3.1,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 3.9
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": 4.9,
          "topIrregularityIn": 2.9,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 16,
          "sweepOffsetIn": 11.7,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 21,
          "sweepOffsetIn": 15.7,
          "topIrregularityIn": 3.9,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 28,
          "sweepOffsetIn": 14.1,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 35.8,
          "sweepOffsetIn": 13.5,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 0.5
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-011-d01",
        "type": "sweep/crook",
        "startFt": 15.4,
        "endFt": 21.5,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Primary lesson is to break the stem so sweep is not carried through a long log."
      },
      {
        "id": "instruction-011-d02",
        "type": "small knot cluster",
        "startFt": 25.1,
        "endFt": 27.2,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Secondary defect should not distract from sweep control."
      },
      {
        "id": "instruction-011-d03",
        "type": "bark inclusion",
        "startFt": 4.3,
        "endFt": 5.7,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      },
      {
        "id": "instruction-011-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 13,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-011-d03",
        "type": "bark inclusion",
        "startFt": 4.3,
        "endFt": 5.7,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-011-d01",
        "type": "sweep/crook",
        "startFt": 15.4,
        "endFt": 21.5,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Primary lesson is to break the stem so sweep is not carried through a long log."
      },
      {
        "id": "instruction-011-d02",
        "type": "small knot cluster",
        "startFt": 25.1,
        "endFt": 27.2,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Secondary defect should not distract from sweep control."
      },
      {
        "id": "instruction-011-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 13,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      8,
      16,
      24,
      32
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "intro",
    "teachingObjective": "Teach rule 1: minimize sweep and crook using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 1",
      "sweep/crook",
      "scale deduction",
      "grade loss",
      "whole-stem inspection"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #1, place bucking cuts to minimize sweep and crook. This stem is meant to make students compare longer scale volume against sweep deduction, grade loss, and visual straightness. Secondary points: examine the whole stem before cutting, judge sweep across all faces, and avoid letting a minor knot cluster distract from the main shape problem. Model solution discussion should focus on cut positions at 8, 16, 24, 32 ft. Key teaching cues: sweep/crook at 15.4-21.5 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-012",
    "title": "instruction log 12",
    "species": "black cherry",
    "totalLengthFt": 36.2,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 26.5
      },
      {
        "positionFt": 6,
        "diameterIn": 24.1
      },
      {
        "positionFt": 12,
        "diameterIn": 22.1
      },
      {
        "positionFt": 17,
        "diameterIn": 20.9
      },
      {
        "positionFt": 22,
        "diameterIn": 20.2
      },
      {
        "positionFt": 29,
        "diameterIn": 18
      },
      {
        "positionFt": 36.2,
        "diameterIn": 17.1
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 15,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.3,
          "topIrregularityIn": 3.4,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1.4,
          "topIrregularityIn": 3.9,
          "bottomIrregularityIn": 1.4
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": -1.5,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -2.3,
          "topIrregularityIn": 3,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": -2.8,
          "topIrregularityIn": 1.3,
          "bottomIrregularityIn": 2.5
        },
        {
          "positionFt": 30,
          "sweepOffsetIn": -2.4,
          "topIrregularityIn": 3.1,
          "bottomIrregularityIn": 4.4
        },
        {
          "positionFt": 36.2,
          "sweepOffsetIn": -3.9,
          "topIrregularityIn": 3.1,
          "bottomIrregularityIn": 3.3
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-012-d01",
        "type": "butt flare and stain",
        "startFt": 0,
        "endFt": 3.2,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Short jump butt may unlock a higher-value log above."
      },
      {
        "id": "instruction-012-d02",
        "type": "subtle bird peck",
        "startFt": 18.1,
        "endFt": 19.5,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good sawlog but veneer buyer may reject or discount."
      },
      {
        "id": "instruction-012-d03",
        "type": "open knot",
        "startFt": 26.8,
        "endFt": 28.2,
        "faces": [
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Defines upper end of the best log."
      },
      {
        "id": "instruction-012-d04",
        "type": "gum spot indicators",
        "startFt": 16.6,
        "endFt": 18.1,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good discussion point for species-specific veneer sensitivity."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-012-d02",
        "type": "subtle bird peck",
        "startFt": 18.1,
        "endFt": 19.5,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good sawlog but veneer buyer may reject or discount."
      },
      {
        "id": "instruction-012-d04",
        "type": "gum spot indicators",
        "startFt": 16.6,
        "endFt": 18.1,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good discussion point for species-specific veneer sensitivity."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-012-d03",
        "type": "open knot",
        "startFt": 26.8,
        "endFt": 28.2,
        "faces": [
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Defines upper end of the best log."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-012-d01",
        "type": "butt flare and stain",
        "startFt": 0,
        "endFt": 3.2,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Short jump butt may unlock a higher-value log above."
      }
    ],
    "modelSolutionCutPositionsFt": [
      4,
      16,
      24,
      32
    ],
    "modelSolutionExplanation": "Jump-butt the poor butt section, preserve the best middle log, then work the remaining material around that log instead of automatically starting with the longest butt log.",
    "difficulty": "intro",
    "teachingObjective": "Teach rule 2: find the best log in the stem section and work around it using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 2",
      "pumpkin log",
      "jump butt",
      "best log first",
      "veneer vs sawlog defects"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #2, find the best log in the stem section and work around that log rather than beginning mechanically at the butt. This is a pumpkin-log exercise: a short jump butt or non-obvious first cut preserves the highest-value section. Secondary points: separate veneer-only concerns from sawlog defects and discuss when the best log is above the butt. Model solution discussion should focus on cut positions at 4, 16, 24, 32 ft. Key teaching cues: butt flare and stain at 0-3.2 ft (veneer and sawlog); open knot at 26.8-28.2 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-013",
    "title": "instruction log 13",
    "species": "hard maple",
    "totalLengthFt": 39.9,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 21.6
      },
      {
        "positionFt": 6,
        "diameterIn": 19.2
      },
      {
        "positionFt": 12,
        "diameterIn": 17.7
      },
      {
        "positionFt": 18,
        "diameterIn": 16.3
      },
      {
        "positionFt": 24,
        "diameterIn": 14.8
      },
      {
        "positionFt": 31,
        "diameterIn": 12.6
      },
      {
        "positionFt": 39.9,
        "diameterIn": 11
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 14,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.3,
          "topIrregularityIn": 0.4,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1.3,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 1.5
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -0.9,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 0.3
        },
        {
          "positionFt": 20,
          "sweepOffsetIn": -1.8,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 2
        },
        {
          "positionFt": 27,
          "sweepOffsetIn": -1.9,
          "topIrregularityIn": 0.9,
          "bottomIrregularityIn": 2.2
        },
        {
          "positionFt": 34,
          "sweepOffsetIn": -2.6,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 2.7
        },
        {
          "positionFt": 39.9,
          "sweepOffsetIn": -3.5,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 1.2
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-013-d01",
        "type": "diameter threshold zone",
        "startFt": 19.1,
        "endFt": 22.3,
        "faces": [],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "Top diameter is near a minimum product threshold; measure before cutting."
      },
      {
        "id": "instruction-013-d02",
        "type": "sound knot",
        "startFt": 24.7,
        "endFt": 26.3,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Often better carried into the next lower-grade log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-013-d02",
        "type": "sound knot",
        "startFt": 24.7,
        "endFt": 26.3,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Often better carried into the next lower-grade log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      10,
      22,
      34
    ],
    "modelSolutionExplanation": "Measure the taper before committing; a shorter high-grade log that stays above the minimum top diameter is worth more than adding length and losing the product class.",
    "difficulty": "intro",
    "teachingObjective": "Teach diameter break: preserve product where top diameter barely meets the threshold using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "diameter break",
      "minimum top diameter",
      "measure before cutting",
      "product eligibility"
    ],
    "instructionalNote": "Primary instructional point: diameter-break judgment. Students must measure before cutting because the top diameter is close to a minimum threshold for a higher product class or grade. Secondary points: a shorter log can be worth more if it preserves eligibility, and a minor defect beyond the break may belong in the next, lower-grade log. Model solution discussion should focus on cut positions at 10, 22, 34 ft. Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-014",
    "title": "instruction log 14",
    "species": "red oak",
    "totalLengthFt": 35.7,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 24
      },
      {
        "positionFt": 6,
        "diameterIn": 22.6
      },
      {
        "positionFt": 12,
        "diameterIn": 21.5
      },
      {
        "positionFt": 17,
        "diameterIn": 20.2
      },
      {
        "positionFt": 23,
        "diameterIn": 18.7
      },
      {
        "positionFt": 28,
        "diameterIn": 18.7
      },
      {
        "positionFt": 35.7,
        "diameterIn": 17.3
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 18,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.4,
          "topIrregularityIn": 0.9,
          "bottomIrregularityIn": 1.8
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 1.6,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 12,
          "sweepOffsetIn": 2.6,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 17,
          "sweepOffsetIn": 5.5,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 22,
          "sweepOffsetIn": 6.8,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 27,
          "sweepOffsetIn": 11.7,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 1.4
        },
        {
          "positionFt": 35.7,
          "sweepOffsetIn": 8.1,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 1
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-014-d01",
        "type": "canker",
        "startFt": 13.9,
        "endFt": 16.1,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Fixed buck point forces the rest of the pattern."
      },
      {
        "id": "instruction-014-d02",
        "type": "small seam",
        "startFt": 25.4,
        "endFt": 27.2,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Tests whether the next log should be shorter."
      },
      {
        "id": "instruction-014-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 16,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-014-d02",
        "type": "small seam",
        "startFt": 25.4,
        "endFt": 27.2,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Tests whether the next log should be shorter."
      },
      {
        "id": "instruction-014-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 16,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-014-d01",
        "type": "canker",
        "startFt": 13.9,
        "endFt": 16.1,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Fixed buck point forces the rest of the pattern."
      }
    ],
    "modelSolutionCutPositionsFt": [
      8,
      15,
      23,
      33
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "intro",
    "teachingObjective": "Teach obligatory buck point: work around a fixed defect using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "obligatory buck point",
      "fixed defect",
      "canker/crook/hole",
      "pattern on both sides"
    ],
    "instructionalNote": "Primary instructional point: obligatory buck-point planning. A canker, crook, hole, or fixed severe defect creates a forced decision point, and the best solution is built on both sides of that point. Secondary points: do not drag the defect through a valuable log merely to gain footage, and then re-evaluate remaining length, diameter, and grade opportunities. Model solution discussion should focus on cut positions at 8, 15, 23, 33 ft. Key teaching cues: canker at 13.9-16.1 ft (veneer and sawlog); small seam at 25.4-27.2 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-015",
    "title": "instruction log 15",
    "species": "white oak",
    "totalLengthFt": 32.3,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 21.7
      },
      {
        "positionFt": 6,
        "diameterIn": 20.4
      },
      {
        "positionFt": 12,
        "diameterIn": 19.3
      },
      {
        "positionFt": 18,
        "diameterIn": 17.8
      },
      {
        "positionFt": 23,
        "diameterIn": 17.1
      },
      {
        "positionFt": 32.3,
        "diameterIn": 15.8
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 13,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.7,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -0.1,
          "topIrregularityIn": 2.7,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 12,
          "sweepOffsetIn": -1.7,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 17,
          "sweepOffsetIn": -2.1,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 2.2
        },
        {
          "positionFt": 23,
          "sweepOffsetIn": -3.2,
          "topIrregularityIn": 0,
          "bottomIrregularityIn": 2
        },
        {
          "positionFt": 28,
          "sweepOffsetIn": -3.1,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 2.5
        },
        {
          "positionFt": 32.3,
          "sweepOffsetIn": -3.6,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 0.7
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-015-d01",
        "type": "overgrown knot",
        "startFt": 9.1,
        "endFt": 10.3,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Shorter first log may keep a higher grade."
      },
      {
        "id": "instruction-015-d02",
        "type": "mineral streak",
        "startFt": 18.8,
        "endFt": 20.7,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "hidden",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A likely veneer concern but only a weak sawlog signal."
      },
      {
        "id": "instruction-015-d03",
        "type": "small limb scar",
        "startFt": 26.8,
        "endFt": 28.1,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Can be absorbed by lower-grade upper log."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-015-d02",
        "type": "mineral streak",
        "startFt": 18.8,
        "endFt": 20.7,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "hidden",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A likely veneer concern but only a weak sawlog signal."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-015-d01",
        "type": "overgrown knot",
        "startFt": 9.1,
        "endFt": 10.3,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Shorter first log may keep a higher grade."
      },
      {
        "id": "instruction-015-d03",
        "type": "small limb scar",
        "startFt": 26.8,
        "endFt": 28.1,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Can be absorbed by lower-grade upper log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      12,
      24
    ],
    "modelSolutionExplanation": "Cut the longest log that keeps the grade; if two more feet would add a defective face and drop grade, leave those feet for the next log.",
    "difficulty": "intro",
    "teachingObjective": "Teach rule 3: longest log possible without lowering grade using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 3",
      "longest log without lowering grade",
      "clear faces",
      "grade vs length tradeoff"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #3 under clear-face grading rules, cut the longest log possible without lowering the grade. Students should test whether adding two feet creates another defective face or drops the log class. Secondary points: extra footage rarely compensates for a grade drop, and the leftover section may often be used on the next log. Model solution discussion should focus on cut positions at 12, 24 ft. Key teaching cues: overgrown knot at 9.1-10.3 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-016",
    "title": "instruction log 16",
    "species": "white ash",
    "totalLengthFt": 40.3,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 18.9
      },
      {
        "positionFt": 6,
        "diameterIn": 17
      },
      {
        "positionFt": 11,
        "diameterIn": 15.9
      },
      {
        "positionFt": 18,
        "diameterIn": 13.8
      },
      {
        "positionFt": 24,
        "diameterIn": 12.7
      },
      {
        "positionFt": 30,
        "diameterIn": 10.9
      },
      {
        "positionFt": 35,
        "diameterIn": 10.1
      },
      {
        "positionFt": 40.3,
        "diameterIn": 8.9
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 17,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.3,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 1.4
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1.6,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -2.5,
          "topIrregularityIn": 2.3,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 20,
          "sweepOffsetIn": -3.6,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 26,
          "sweepOffsetIn": -5,
          "topIrregularityIn": 2.8,
          "bottomIrregularityIn": 2.2
        },
        {
          "positionFt": 33,
          "sweepOffsetIn": -5.7,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 1.1
        },
        {
          "positionFt": 40.3,
          "sweepOffsetIn": -5.1,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 2.5
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-016-d01",
        "type": "frost crack seam",
        "startFt": 9.7,
        "endFt": 11.7,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Place near an end when clear-cutting rules or internal sawing reward it."
      },
      {
        "id": "instruction-016-d02",
        "type": "pin knots",
        "startFt": 24.6,
        "endFt": 26.2,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Veneer-sensitive cue on otherwise high-quality section."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-016-d02",
        "type": "pin knots",
        "startFt": 24.6,
        "endFt": 26.2,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Veneer-sensitive cue on otherwise high-quality section."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-016-d01",
        "type": "frost crack seam",
        "startFt": 9.7,
        "endFt": 11.7,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Place near an end when clear-cutting rules or internal sawing reward it."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      8,
      20,
      32
    ],
    "modelSolutionExplanation": "Set cuts so the principal seam is near a log end, improving clear cuttings under markets that reward board recovery or do not penalize end defects the same way.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach place defects near log ends to improve clear cuttings where market rules allow using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "end-defect placement",
      "clear cuttings",
      "market-dependent grading",
      "board recovery"
    ],
    "instructionalNote": "Primary instructional point: place defects near log ends when the applicable market rewards clear cuttings or does not treat end defects the same way as mid-log face defects. Students should compare clear-face grading with board-recovery thinking. Secondary points: this rule is market-dependent, so it should be used only when the buyer, mill, or grading rule rewards the result. Model solution discussion should focus on cut positions at 8, 20, 32 ft. Key teaching cues: frost crack seam at 9.7-11.7 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-017",
    "title": "instruction log 17",
    "species": "yellow birch",
    "totalLengthFt": 40.1,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 25.1
      },
      {
        "positionFt": 6,
        "diameterIn": 23.4
      },
      {
        "positionFt": 12,
        "diameterIn": 22.5
      },
      {
        "positionFt": 18,
        "diameterIn": 21.5
      },
      {
        "positionFt": 25,
        "diameterIn": 20.3
      },
      {
        "positionFt": 32,
        "diameterIn": 19.9
      },
      {
        "positionFt": 40.1,
        "diameterIn": 18.3
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 10,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.5,
          "topIrregularityIn": 3.4,
          "bottomIrregularityIn": 1.6
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -0.6,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 1.5
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": -1.4,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 16,
          "sweepOffsetIn": -0.6,
          "topIrregularityIn": 2.7,
          "bottomIrregularityIn": 0.6
        },
        {
          "positionFt": 21,
          "sweepOffsetIn": -1.1,
          "topIrregularityIn": 2.6,
          "bottomIrregularityIn": 3.6
        },
        {
          "positionFt": 27,
          "sweepOffsetIn": -2.5,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 3.5
        },
        {
          "positionFt": 34,
          "sweepOffsetIn": -2.5,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 3.9
        },
        {
          "positionFt": 40.1,
          "sweepOffsetIn": -3.5,
          "topIrregularityIn": 2.7,
          "bottomIrregularityIn": 3.8
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-017-d02",
        "type": "excellent clear faces",
        "startFt": 4,
        "endFt": 12.8,
        "faces": [],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "The surrounding quality section is intentionally strong."
      },
      {
        "id": "instruction-017-d03",
        "type": "bark inclusion",
        "startFt": 4.8,
        "endFt": 6.4,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      },
      {
        "id": "instruction-017-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 19,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-017-d03",
        "type": "bark inclusion",
        "startFt": 4.8,
        "endFt": 6.4,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-017-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 19,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      12,
      24,
      36
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach understand when a hole can remain in an otherwise valuable sawlog using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "large hole observation",
      "sawlog tolerance",
      "face evaluation",
      "avoid automatic cull"
    ],
    "instructionalNote": "Primary instructional point: do not automatically condemn a high-quality sawlog because of one large hole. Students should examine surrounding faces, diameter, and expected grade before removing too much wood. Secondary points: this reinforces the observation that fairly large holes can occur in valuable sawlogs, especially where the remaining quality section is strong. Model solution discussion should focus on cut positions at 12, 24, 36 ft. Key teaching cues: butt hollow center from 0-8.6 ft (sawlog grade and possible scale deduction). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-018",
    "title": "instruction log 18",
    "species": "black cherry",
    "totalLengthFt": 43.8,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 20.8
      },
      {
        "positionFt": 6,
        "diameterIn": 19.1
      },
      {
        "positionFt": 11,
        "diameterIn": 17.9
      },
      {
        "positionFt": 17,
        "diameterIn": 17
      },
      {
        "positionFt": 23,
        "diameterIn": 15.5
      },
      {
        "positionFt": 28,
        "diameterIn": 14.9
      },
      {
        "positionFt": 34,
        "diameterIn": 14.1
      },
      {
        "positionFt": 39,
        "diameterIn": 13.4
      },
      {
        "positionFt": 43.8,
        "diameterIn": 12.2
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 14,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.7,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.5,
          "topIrregularityIn": 2.9,
          "bottomIrregularityIn": 3.4
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": 1.8,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 20,
          "sweepOffsetIn": 4.5,
          "topIrregularityIn": 3.8,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 27,
          "sweepOffsetIn": 3.9,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 1.2
        },
        {
          "positionFt": 34,
          "sweepOffsetIn": 5.4,
          "topIrregularityIn": 2.4,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 43.8,
          "sweepOffsetIn": 6.4,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 3.9
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-018-d01",
        "type": "rotten section",
        "startFt": 19.7,
        "endFt": 24.1,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Remove the cull to raise grades on both sides."
      },
      {
        "id": "instruction-018-d02",
        "type": "sound knot",
        "startFt": 31.5,
        "endFt": 33.3,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Do not overreact after the cull section has already been isolated."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-018-d02",
        "type": "sound knot",
        "startFt": 31.5,
        "endFt": 33.3,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Do not overreact after the cull section has already been isolated."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-018-d01",
        "type": "rotten section",
        "startFt": 19.7,
        "endFt": 24.1,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Remove the cull to raise grades on both sides."
      }
    ],
    "modelSolutionCutPositionsFt": [
      12,
      20,
      24,
      34
    ],
    "modelSolutionExplanation": "Remove the central cull section when doing so upgrades the logs on both sides; this is the case where losing footage can recover more value.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach remove a cull section when it raises the value of neighboring logs using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "cull removal",
      "isolate defect",
      "grade improvement",
      "value vs footage tradeoff"
    ],
    "instructionalNote": "Primary instructional point: cull removal can increase total value when isolating a bad section raises the grade of adjacent logs. Students should compare the lost footage against the grade improvement on both sides. Secondary points: remove cull deliberately to implement a rule of thumb, not as a reflex, and avoid overreacting to minor defects after the main cull has been isolated. Model solution discussion should focus on cut positions at 12, 20, 24, 34 ft. Key teaching cues: rotten section at 19.7-24.1 ft (veneer and sawlog). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-019",
    "title": "instruction log 19",
    "species": "hard maple",
    "totalLengthFt": 36,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 15.7
      },
      {
        "positionFt": 6,
        "diameterIn": 14
      },
      {
        "positionFt": 13,
        "diameterIn": 12.4
      },
      {
        "positionFt": 18,
        "diameterIn": 11
      },
      {
        "positionFt": 24,
        "diameterIn": 10.5
      },
      {
        "positionFt": 31,
        "diameterIn": 9.3
      },
      {
        "positionFt": 36,
        "diameterIn": 8
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 15,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.6,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 2.2
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -0.3,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": 1.3,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 17,
          "sweepOffsetIn": 2.4,
          "topIrregularityIn": 1.3,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 23,
          "sweepOffsetIn": 1.9,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 2.2
        },
        {
          "positionFt": 28,
          "sweepOffsetIn": 2.9,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": 1.8,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 0.4
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-019-d01",
        "type": "short punky streak",
        "startFt": 6.8,
        "endFt": 8.3,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "May be retained in trim or low-impact position to reach minimum length."
      },
      {
        "id": "instruction-019-d02",
        "type": "open knot",
        "startFt": 24.1,
        "endFt": 25.2,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Provides a contrast with a defect that should not enter the best log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-019-d01",
        "type": "short punky streak",
        "startFt": 6.8,
        "endFt": 8.3,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "May be retained in trim or low-impact position to reach minimum length."
      },
      {
        "id": "instruction-019-d02",
        "type": "open knot",
        "startFt": 24.1,
        "endFt": 25.2,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Provides a contrast with a defect that should not enter the best log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      10,
      22,
      34
    ],
    "modelSolutionExplanation": "Retain a small low-impact section when it is needed to reach a required log length and does not reduce the grade under the applicable market specifications.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach retain small cull to reach minimum log length when grade is not harmed using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "cull retention",
      "minimum length",
      "trim allowance",
      "product specifications"
    ],
    "instructionalNote": "Primary instructional point: retain a small cull or low-quality section when it is needed to reach a required log length and does not lower the grade under the market rules. Students should distinguish between unacceptable cull and allowable trim or low-impact material. Secondary points: clear-face rules may treat this differently, so the decision depends on the product specification. Model solution discussion should focus on cut positions at 10, 22, 34 ft. Key teaching cues: short punky streak at 6.8-8.3 ft (sawlog grade); open knot at 24.1-25.2 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-020",
    "title": "instruction log 20",
    "species": "red oak",
    "totalLengthFt": 41.6,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 23.2
      },
      {
        "positionFt": 6,
        "diameterIn": 21.7
      },
      {
        "positionFt": 12,
        "diameterIn": 19.6
      },
      {
        "positionFt": 17,
        "diameterIn": 19.1
      },
      {
        "positionFt": 23,
        "diameterIn": 17.7
      },
      {
        "positionFt": 30,
        "diameterIn": 16.9
      },
      {
        "positionFt": 37,
        "diameterIn": 15.3
      },
      {
        "positionFt": 41.6,
        "diameterIn": 14
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 17,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.8,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.1,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": -1.7,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 2.1
        },
        {
          "positionFt": 17,
          "sweepOffsetIn": -2.6,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 0.7
        },
        {
          "positionFt": 22,
          "sweepOffsetIn": -4.5,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 29,
          "sweepOffsetIn": -5.6,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 0.3
        },
        {
          "positionFt": 34,
          "sweepOffsetIn": -5,
          "topIrregularityIn": 1.8,
          "bottomIrregularityIn": 2.2
        },
        {
          "positionFt": 41.6,
          "sweepOffsetIn": -5.3,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 2.7
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-020-d01",
        "type": "root flare",
        "startFt": 0,
        "endFt": 2.5,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "Presentation and butt trimming can affect buyer reaction."
      },
      {
        "id": "instruction-020-d02",
        "type": "subtle seam",
        "startFt": 21.6,
        "endFt": 23.7,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Buyer interpretation matters; discuss market specs and relationships."
      },
      {
        "id": "instruction-020-d03",
        "type": "small bird peck",
        "startFt": 30.8,
        "endFt": 31.6,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A reminder that veneer defects and sawlog defects are not identical."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-020-d03",
        "type": "small bird peck",
        "startFt": 30.8,
        "endFt": 31.6,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A reminder that veneer defects and sawlog defects are not identical."
      }
    ],
    "sawlogAffectingDefects": [],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-020-d02",
        "type": "subtle seam",
        "startFt": 21.6,
        "endFt": 23.7,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Buyer interpretation matters; discuss market specs and relationships."
      }
    ],
    "modelSolutionCutPositionsFt": [
      3,
      15,
      27,
      39
    ],
    "modelSolutionExplanation": "Start with market specifications: trim the butt for presentation, know minimum lengths and diameters, and avoid making a technically legal log that the buyer will discount.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach know markets: trim, minimum lengths, buyer tolerance, presentation using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "market specs",
      "buyer tolerance",
      "trim",
      "minimums",
      "presentation",
      "veneer vs sawlog"
    ],
    "instructionalNote": "Primary instructional point: know the market before cutting. This stem is for discussing minimum lengths, trim, minimum top diameters, defect interpretation, buyer tolerance, and presentation. Secondary points: veneer and sawlog rules do not treat all defects the same way, and a technically legal log may still be discounted if it is poorly presented or mismatched to the buyer. Model solution discussion should focus on cut positions at 3, 15, 27, 39 ft. Key teaching cues: root flare at 0-2.5 ft (informational); subtle seam at 21.6-23.7 ft (veneer and sawlog). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-021",
    "title": "instruction log 21",
    "species": "white oak",
    "totalLengthFt": 39.8,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 19.8
      },
      {
        "positionFt": 6,
        "diameterIn": 17.6
      },
      {
        "positionFt": 12,
        "diameterIn": 16.4
      },
      {
        "positionFt": 19,
        "diameterIn": 14.5
      },
      {
        "positionFt": 26,
        "diameterIn": 12.9
      },
      {
        "positionFt": 32,
        "diameterIn": 11.7
      },
      {
        "positionFt": 39.8,
        "diameterIn": 9.4
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 14,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.7,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -2.3,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 12,
          "sweepOffsetIn": -5.7,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 3.2
        },
        {
          "positionFt": 19,
          "sweepOffsetIn": -7.1,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 1.4
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": -8.1,
          "topIrregularityIn": 0.2,
          "bottomIrregularityIn": 3
        },
        {
          "positionFt": 31,
          "sweepOffsetIn": -10.7,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 3
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": -11.8,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 0.6
        },
        {
          "positionFt": 39.8,
          "sweepOffsetIn": -11.9,
          "topIrregularityIn": 0.9,
          "bottomIrregularityIn": 1.4
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-021-d01",
        "type": "sweep/crook",
        "startFt": 17.1,
        "endFt": 23.9,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Primary lesson is to break the stem so sweep is not carried through a long log."
      },
      {
        "id": "instruction-021-d02",
        "type": "small knot cluster",
        "startFt": 27.8,
        "endFt": 30.2,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Secondary defect should not distract from sweep control."
      },
      {
        "id": "instruction-021-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 22,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-021-d01",
        "type": "sweep/crook",
        "startFt": 17.1,
        "endFt": 23.9,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Primary lesson is to break the stem so sweep is not carried through a long log."
      },
      {
        "id": "instruction-021-d02",
        "type": "small knot cluster",
        "startFt": 27.8,
        "endFt": 30.2,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Secondary defect should not distract from sweep control."
      },
      {
        "id": "instruction-021-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 22,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      8,
      16,
      24,
      32
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach rule 1: minimize sweep and crook using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 1",
      "sweep/crook",
      "scale deduction",
      "grade loss",
      "whole-stem inspection"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #1, place bucking cuts to minimize sweep and crook. This stem is meant to make students compare longer scale volume against sweep deduction, grade loss, and visual straightness. Secondary points: examine the whole stem before cutting, judge sweep across all faces, and avoid letting a minor knot cluster distract from the main shape problem. Model solution discussion should focus on cut positions at 8, 16, 24, 32 ft. Key teaching cues: sweep/crook at 17.1-23.9 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-022",
    "title": "instruction log 22",
    "species": "white ash",
    "totalLengthFt": 42.4,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 24.9
      },
      {
        "positionFt": 6,
        "diameterIn": 23.8
      },
      {
        "positionFt": 11,
        "diameterIn": 23.3
      },
      {
        "positionFt": 18,
        "diameterIn": 22.1
      },
      {
        "positionFt": 25,
        "diameterIn": 20.9
      },
      {
        "positionFt": 30,
        "diameterIn": 20.9
      },
      {
        "positionFt": 35,
        "diameterIn": 20.5
      },
      {
        "positionFt": 42.4,
        "diameterIn": 19.4
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 16,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.1,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 0.1
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.3,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 3.2
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": -2.3,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -2.7,
          "topIrregularityIn": 2.7,
          "bottomIrregularityIn": 2
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": -3.1,
          "topIrregularityIn": 1.6,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 29,
          "sweepOffsetIn": -3.2,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 35,
          "sweepOffsetIn": -4,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 42.4,
          "sweepOffsetIn": -4,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 0.3
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-022-d01",
        "type": "butt flare and stain",
        "startFt": 0,
        "endFt": 3.3,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Short jump butt may unlock a higher-value log above."
      },
      {
        "id": "instruction-022-d02",
        "type": "subtle bird peck",
        "startFt": 21.2,
        "endFt": 22.9,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good sawlog but veneer buyer may reject or discount."
      },
      {
        "id": "instruction-022-d03",
        "type": "open knot",
        "startFt": 31.4,
        "endFt": 33.1,
        "faces": [
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Defines upper end of the best log."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-022-d02",
        "type": "subtle bird peck",
        "startFt": 21.2,
        "endFt": 22.9,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good sawlog but veneer buyer may reject or discount."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-022-d03",
        "type": "open knot",
        "startFt": 31.4,
        "endFt": 33.1,
        "faces": [
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Defines upper end of the best log."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-022-d01",
        "type": "butt flare and stain",
        "startFt": 0,
        "endFt": 3.3,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Short jump butt may unlock a higher-value log above."
      }
    ],
    "modelSolutionCutPositionsFt": [
      4,
      18,
      30,
      38
    ],
    "modelSolutionExplanation": "Jump-butt the poor butt section, preserve the best middle log, then work the remaining material around that log instead of automatically starting with the longest butt log.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach rule 2: find the best log in the stem section and work around it using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 2",
      "pumpkin log",
      "jump butt",
      "best log first",
      "veneer vs sawlog defects"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #2, find the best log in the stem section and work around that log rather than beginning mechanically at the butt. This is a pumpkin-log exercise: a short jump butt or non-obvious first cut preserves the highest-value section. Secondary points: separate veneer-only concerns from sawlog defects and discuss when the best log is above the butt. Model solution discussion should focus on cut positions at 4, 18, 30, 38 ft. Key teaching cues: butt flare and stain at 0-3.3 ft (veneer and sawlog); open knot at 31.4-33.1 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-023",
    "title": "instruction log 23",
    "species": "yellow birch",
    "totalLengthFt": 50,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 26.7
      },
      {
        "positionFt": 6,
        "diameterIn": 25.1
      },
      {
        "positionFt": 12,
        "diameterIn": 23.3
      },
      {
        "positionFt": 19,
        "diameterIn": 22.3
      },
      {
        "positionFt": 26,
        "diameterIn": 20.6
      },
      {
        "positionFt": 32,
        "diameterIn": 19.8
      },
      {
        "positionFt": 37,
        "diameterIn": 19
      },
      {
        "positionFt": 44,
        "diameterIn": 17.5
      },
      {
        "positionFt": 50,
        "diameterIn": 16.6
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 10,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.9,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 1.2
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.5,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 0
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -1.2,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -1.6,
          "topIrregularityIn": 2.3,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": -3.2,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 4.1
        },
        {
          "positionFt": 30,
          "sweepOffsetIn": -3.7,
          "topIrregularityIn": 3.2,
          "bottomIrregularityIn": 3.7
        },
        {
          "positionFt": 35,
          "sweepOffsetIn": -4.1,
          "topIrregularityIn": 2.9,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 41,
          "sweepOffsetIn": -3.7,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 0.1
        },
        {
          "positionFt": 46,
          "sweepOffsetIn": -5.1,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 1.8
        },
        {
          "positionFt": 50,
          "sweepOffsetIn": -5.3,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 3.9
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-023-d01",
        "type": "diameter threshold zone",
        "startFt": 24,
        "endFt": 28,
        "faces": [],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "Top diameter is near a minimum product threshold; measure before cutting."
      },
      {
        "id": "instruction-023-d02",
        "type": "sound knot",
        "startFt": 31,
        "endFt": 33,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Often better carried into the next lower-grade log."
      },
      {
        "id": "instruction-023-d03",
        "type": "bark inclusion",
        "startFt": 6,
        "endFt": 8,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-023-d03",
        "type": "bark inclusion",
        "startFt": 6,
        "endFt": 8,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-023-d02",
        "type": "sound knot",
        "startFt": 31,
        "endFt": 33,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Often better carried into the next lower-grade log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      10,
      22,
      34,
      42
    ],
    "modelSolutionExplanation": "Measure the taper before committing; a shorter high-grade log that stays above the minimum top diameter is worth more than adding length and losing the product class.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach diameter break: preserve product where top diameter barely meets the threshold using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "diameter break",
      "minimum top diameter",
      "measure before cutting",
      "product eligibility"
    ],
    "instructionalNote": "Primary instructional point: diameter-break judgment. Students must measure before cutting because the top diameter is close to a minimum threshold for a higher product class or grade. Secondary points: a shorter log can be worth more if it preserves eligibility, and a minor defect beyond the break may belong in the next, lower-grade log. Model solution discussion should focus on cut positions at 10, 22, 34, 42 ft. Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-024",
    "title": "instruction log 24",
    "species": "black cherry",
    "totalLengthFt": 36.1,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 17
      },
      {
        "positionFt": 6,
        "diameterIn": 14.7
      },
      {
        "positionFt": 12,
        "diameterIn": 13.4
      },
      {
        "positionFt": 17,
        "diameterIn": 12.1
      },
      {
        "positionFt": 23,
        "diameterIn": 10.6
      },
      {
        "positionFt": 30,
        "diameterIn": 9.7
      },
      {
        "positionFt": 36.1,
        "diameterIn": 8.3
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 16,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.4,
          "topIrregularityIn": 3.4,
          "bottomIrregularityIn": 3.8
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 2,
          "topIrregularityIn": 3.4,
          "bottomIrregularityIn": 3.7
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": 4.5,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 16,
          "sweepOffsetIn": 4.4,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 21,
          "sweepOffsetIn": 10,
          "topIrregularityIn": 3.9,
          "bottomIrregularityIn": 3.3
        },
        {
          "positionFt": 26,
          "sweepOffsetIn": 9.1,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 3.8
        },
        {
          "positionFt": 32,
          "sweepOffsetIn": 10.6,
          "topIrregularityIn": 3.2,
          "bottomIrregularityIn": 2
        },
        {
          "positionFt": 36.1,
          "sweepOffsetIn": 10.3,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 3
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-024-d01",
        "type": "canker",
        "startFt": 14.1,
        "endFt": 16.2,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Fixed buck point forces the rest of the pattern."
      },
      {
        "id": "instruction-024-d02",
        "type": "small seam",
        "startFt": 25.6,
        "endFt": 27.4,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Tests whether the next log should be shorter."
      },
      {
        "id": "instruction-024-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 25,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-024-d02",
        "type": "small seam",
        "startFt": 25.6,
        "endFt": 27.4,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Tests whether the next log should be shorter."
      },
      {
        "id": "instruction-024-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 25,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-024-d01",
        "type": "canker",
        "startFt": 14.1,
        "endFt": 16.2,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Fixed buck point forces the rest of the pattern."
      }
    ],
    "modelSolutionCutPositionsFt": [
      8,
      15,
      23,
      33
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach obligatory buck point: work around a fixed defect using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "obligatory buck point",
      "fixed defect",
      "canker/crook/hole",
      "pattern on both sides"
    ],
    "instructionalNote": "Primary instructional point: obligatory buck-point planning. A canker, crook, hole, or fixed severe defect creates a forced decision point, and the best solution is built on both sides of that point. Secondary points: do not drag the defect through a valuable log merely to gain footage, and then re-evaluate remaining length, diameter, and grade opportunities. Model solution discussion should focus on cut positions at 8, 15, 23, 33 ft. Key teaching cues: canker at 14.1-16.2 ft (veneer and sawlog); small seam at 25.6-27.4 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-025",
    "title": "instruction log 25",
    "species": "hard maple",
    "totalLengthFt": 31.7,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 17.4
      },
      {
        "positionFt": 6,
        "diameterIn": 15.8
      },
      {
        "positionFt": 11,
        "diameterIn": 14.7
      },
      {
        "positionFt": 17,
        "diameterIn": 14.1
      },
      {
        "positionFt": 23,
        "diameterIn": 13.3
      },
      {
        "positionFt": 31.7,
        "diameterIn": 12
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 14,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.6,
          "topIrregularityIn": 1.8,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.7,
          "topIrregularityIn": 1.8,
          "bottomIrregularityIn": 1.4
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": 1.4,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 2.1
        },
        {
          "positionFt": 17,
          "sweepOffsetIn": 3.3,
          "topIrregularityIn": 0,
          "bottomIrregularityIn": 0.7
        },
        {
          "positionFt": 22,
          "sweepOffsetIn": 3.9,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 31.7,
          "sweepOffsetIn": 6,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 0.4
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-025-d01",
        "type": "overgrown knot",
        "startFt": 8.9,
        "endFt": 10.2,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Shorter first log may keep a higher grade."
      },
      {
        "id": "instruction-025-d02",
        "type": "mineral streak",
        "startFt": 18.4,
        "endFt": 20.3,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "hidden",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A likely veneer concern but only a weak sawlog signal."
      },
      {
        "id": "instruction-025-d03",
        "type": "small limb scar",
        "startFt": 26.3,
        "endFt": 27.6,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Can be absorbed by lower-grade upper log."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-025-d02",
        "type": "mineral streak",
        "startFt": 18.4,
        "endFt": 20.3,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "hidden",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A likely veneer concern but only a weak sawlog signal."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-025-d01",
        "type": "overgrown knot",
        "startFt": 8.9,
        "endFt": 10.2,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Shorter first log may keep a higher grade."
      },
      {
        "id": "instruction-025-d03",
        "type": "small limb scar",
        "startFt": 26.3,
        "endFt": 27.6,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Can be absorbed by lower-grade upper log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      12,
      24
    ],
    "modelSolutionExplanation": "Cut the longest log that keeps the grade; if two more feet would add a defective face and drop grade, leave those feet for the next log.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach rule 3: longest log possible without lowering grade using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 3",
      "longest log without lowering grade",
      "clear faces",
      "grade vs length tradeoff"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #3 under clear-face grading rules, cut the longest log possible without lowering the grade. Students should test whether adding two feet creates another defective face or drops the log class. Secondary points: extra footage rarely compensates for a grade drop, and the leftover section may often be used on the next log. Model solution discussion should focus on cut positions at 12, 24 ft. Key teaching cues: overgrown knot at 8.9-10.2 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-026",
    "title": "instruction log 26",
    "species": "red oak",
    "totalLengthFt": 44,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 20.8
      },
      {
        "positionFt": 6,
        "diameterIn": 19.2
      },
      {
        "positionFt": 12,
        "diameterIn": 17.8
      },
      {
        "positionFt": 18,
        "diameterIn": 16.7
      },
      {
        "positionFt": 25,
        "diameterIn": 15.5
      },
      {
        "positionFt": 30,
        "diameterIn": 15
      },
      {
        "positionFt": 35,
        "diameterIn": 13.8
      },
      {
        "positionFt": 44,
        "diameterIn": 12.4
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 19,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.7,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.1,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 1.1
        },
        {
          "positionFt": 12,
          "sweepOffsetIn": -1.3,
          "topIrregularityIn": 2.7,
          "bottomIrregularityIn": 2
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -2.3,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 1.8
        },
        {
          "positionFt": 25,
          "sweepOffsetIn": -3.8,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 30,
          "sweepOffsetIn": -4.3,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 1.9
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": -3.9,
          "topIrregularityIn": 2.3,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 44,
          "sweepOffsetIn": -4,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 2.8
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-026-d01",
        "type": "frost crack seam",
        "startFt": 10.6,
        "endFt": 12.7,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Place near an end when clear-cutting rules or internal sawing reward it."
      },
      {
        "id": "instruction-026-d02",
        "type": "pin knots",
        "startFt": 26.8,
        "endFt": 28.6,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Veneer-sensitive cue on otherwise high-quality section."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-026-d02",
        "type": "pin knots",
        "startFt": 26.8,
        "endFt": 28.6,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Veneer-sensitive cue on otherwise high-quality section."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-026-d01",
        "type": "frost crack seam",
        "startFt": 10.6,
        "endFt": 12.7,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Place near an end when clear-cutting rules or internal sawing reward it."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      8,
      20,
      32,
      40
    ],
    "modelSolutionExplanation": "Set cuts so the principal seam is near a log end, improving clear cuttings under markets that reward board recovery or do not penalize end defects the same way.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach place defects near log ends to improve clear cuttings where market rules allow using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "end-defect placement",
      "clear cuttings",
      "market-dependent grading",
      "board recovery"
    ],
    "instructionalNote": "Primary instructional point: place defects near log ends when the applicable market rewards clear cuttings or does not treat end defects the same way as mid-log face defects. Students should compare clear-face grading with board-recovery thinking. Secondary points: this rule is market-dependent, so it should be used only when the buyer, mill, or grading rule rewards the result. Model solution discussion should focus on cut positions at 8, 20, 32, 40 ft. Key teaching cues: frost crack seam at 10.6-12.7 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-027",
    "title": "instruction log 27",
    "species": "white oak",
    "totalLengthFt": 40.4,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 24.1
      },
      {
        "positionFt": 6,
        "diameterIn": 22.2
      },
      {
        "positionFt": 13,
        "diameterIn": 20.5
      },
      {
        "positionFt": 20,
        "diameterIn": 19.5
      },
      {
        "positionFt": 25,
        "diameterIn": 19
      },
      {
        "positionFt": 32,
        "diameterIn": 17.4
      },
      {
        "positionFt": 40.4,
        "diameterIn": 16.2
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 13,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.9,
          "topIrregularityIn": 2.3,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 1.1,
          "topIrregularityIn": 1.3,
          "bottomIrregularityIn": 2.8
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": 2.2,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 2
        },
        {
          "positionFt": 20,
          "sweepOffsetIn": 3.2,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 3
        },
        {
          "positionFt": 27,
          "sweepOffsetIn": 4.9,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 34,
          "sweepOffsetIn": 5.8,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 40.4,
          "sweepOffsetIn": 6.3,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 3.1
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-027-d02",
        "type": "excellent clear faces",
        "startFt": 4,
        "endFt": 12.9,
        "faces": [],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "The surrounding quality section is intentionally strong."
      },
      {
        "id": "instruction-027-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 28,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-027-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 28,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      12,
      24,
      36
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach understand when a hole can remain in an otherwise valuable sawlog using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "large hole observation",
      "sawlog tolerance",
      "face evaluation",
      "avoid automatic cull"
    ],
    "instructionalNote": "Primary instructional point: do not automatically condemn a high-quality sawlog because of one large hole. Students should examine surrounding faces, diameter, and expected grade before removing too much wood. Secondary points: this reinforces the observation that fairly large holes can occur in valuable sawlogs, especially where the remaining quality section is strong. Model solution discussion should focus on cut positions at 12, 24, 36 ft. Key teaching cues: butt hollow center from 0-8.6 ft (sawlog grade and possible scale deduction). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-028",
    "title": "instruction log 28",
    "species": "white ash",
    "totalLengthFt": 38,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 22
      },
      {
        "positionFt": 6,
        "diameterIn": 20.2
      },
      {
        "positionFt": 12,
        "diameterIn": 17.8
      },
      {
        "positionFt": 17,
        "diameterIn": 17.3
      },
      {
        "positionFt": 22,
        "diameterIn": 15.9
      },
      {
        "positionFt": 28,
        "diameterIn": 14
      },
      {
        "positionFt": 33,
        "diameterIn": 13.7
      },
      {
        "positionFt": 38,
        "diameterIn": 12.6
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 17,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.5,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 2.1
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1.7,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": -1.3,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 0.7
        },
        {
          "positionFt": 16,
          "sweepOffsetIn": -2.9,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 2.5
        },
        {
          "positionFt": 21,
          "sweepOffsetIn": -3.6,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 26,
          "sweepOffsetIn": -5.7,
          "topIrregularityIn": 1.6,
          "bottomIrregularityIn": 0.5
        },
        {
          "positionFt": 31,
          "sweepOffsetIn": -6.6,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 38,
          "sweepOffsetIn": -5.2,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 1.9
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-028-d01",
        "type": "rotten section",
        "startFt": 17.1,
        "endFt": 20.9,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Remove the cull to raise grades on both sides."
      },
      {
        "id": "instruction-028-d02",
        "type": "sound knot",
        "startFt": 27.3,
        "endFt": 28.9,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Do not overreact after the cull section has already been isolated."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-028-d02",
        "type": "sound knot",
        "startFt": 27.3,
        "endFt": 28.9,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Do not overreact after the cull section has already been isolated."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-028-d01",
        "type": "rotten section",
        "startFt": 17.1,
        "endFt": 20.9,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Remove the cull to raise grades on both sides."
      }
    ],
    "modelSolutionCutPositionsFt": [
      12,
      17,
      21,
      31
    ],
    "modelSolutionExplanation": "Remove the central cull section when doing so upgrades the logs on both sides; this is the case where losing footage can recover more value.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach remove a cull section when it raises the value of neighboring logs using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "cull removal",
      "isolate defect",
      "grade improvement",
      "value vs footage tradeoff"
    ],
    "instructionalNote": "Primary instructional point: cull removal can increase total value when isolating a bad section raises the grade of adjacent logs. Students should compare the lost footage against the grade improvement on both sides. Secondary points: remove cull deliberately to implement a rule of thumb, not as a reflex, and avoid overreacting to minor defects after the main cull has been isolated. Model solution discussion should focus on cut positions at 12, 17, 21, 31 ft. Key teaching cues: rotten section at 17.1-20.9 ft (veneer and sawlog). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-029",
    "title": "instruction log 29",
    "species": "yellow birch",
    "totalLengthFt": 38.2,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 25.8
      },
      {
        "positionFt": 6,
        "diameterIn": 24.9
      },
      {
        "positionFt": 11,
        "diameterIn": 23.7
      },
      {
        "positionFt": 16,
        "diameterIn": 23.2
      },
      {
        "positionFt": 23,
        "diameterIn": 22
      },
      {
        "positionFt": 29,
        "diameterIn": 20.8
      },
      {
        "positionFt": 38.2,
        "diameterIn": 20.1
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 10,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -1,
          "topIrregularityIn": 2.9,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.9,
          "topIrregularityIn": 3.5,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 12,
          "sweepOffsetIn": 1,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": 1.4,
          "topIrregularityIn": 3.2,
          "bottomIrregularityIn": 1.6
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": 2.5,
          "topIrregularityIn": 3.3,
          "bottomIrregularityIn": 4.1
        },
        {
          "positionFt": 30,
          "sweepOffsetIn": 3.1,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 3.8
        },
        {
          "positionFt": 35,
          "sweepOffsetIn": 3.4,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 3.8
        },
        {
          "positionFt": 38.2,
          "sweepOffsetIn": 3.2,
          "topIrregularityIn": 3.4,
          "bottomIrregularityIn": 0.7
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-029-d01",
        "type": "short punky streak",
        "startFt": 7.3,
        "endFt": 8.8,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "May be retained in trim or low-impact position to reach minimum length."
      },
      {
        "id": "instruction-029-d02",
        "type": "open knot",
        "startFt": 25.6,
        "endFt": 26.7,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Provides a contrast with a defect that should not enter the best log."
      },
      {
        "id": "instruction-029-d03",
        "type": "bark inclusion",
        "startFt": 4.6,
        "endFt": 6.1,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-029-d03",
        "type": "bark inclusion",
        "startFt": 4.6,
        "endFt": 6.1,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-029-d01",
        "type": "short punky streak",
        "startFt": 7.3,
        "endFt": 8.8,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "May be retained in trim or low-impact position to reach minimum length."
      },
      {
        "id": "instruction-029-d02",
        "type": "open knot",
        "startFt": 25.6,
        "endFt": 26.7,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Provides a contrast with a defect that should not enter the best log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      10,
      22,
      34
    ],
    "modelSolutionExplanation": "Retain a small low-impact section when it is needed to reach a required log length and does not reduce the grade under the applicable market specifications.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach retain small cull to reach minimum log length when grade is not harmed using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "cull retention",
      "minimum length",
      "trim allowance",
      "product specifications"
    ],
    "instructionalNote": "Primary instructional point: retain a small cull or low-quality section when it is needed to reach a required log length and does not lower the grade under the market rules. Students should distinguish between unacceptable cull and allowable trim or low-impact material. Secondary points: clear-face rules may treat this differently, so the decision depends on the product specification. Model solution discussion should focus on cut positions at 10, 22, 34 ft. Key teaching cues: short punky streak at 7.3-8.8 ft (sawlog grade); open knot at 25.6-26.7 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-030",
    "title": "instruction log 30",
    "species": "black cherry",
    "totalLengthFt": 39.8,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 20.1
      },
      {
        "positionFt": 6,
        "diameterIn": 18.9
      },
      {
        "positionFt": 11,
        "diameterIn": 18
      },
      {
        "positionFt": 16,
        "diameterIn": 17
      },
      {
        "positionFt": 22,
        "diameterIn": 15.7
      },
      {
        "positionFt": 29,
        "diameterIn": 15.3
      },
      {
        "positionFt": 34,
        "diameterIn": 14
      },
      {
        "positionFt": 39.8,
        "diameterIn": 13.3
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 15,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.7,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 4.3
        },
        {
          "positionFt": 12,
          "sweepOffsetIn": 1.6,
          "topIrregularityIn": 3.4,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 19,
          "sweepOffsetIn": 2.9,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 3.2
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": 4.3,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 29,
          "sweepOffsetIn": 4.1,
          "topIrregularityIn": 0.4,
          "bottomIrregularityIn": 3.2
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": 4.5,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 3.5
        },
        {
          "positionFt": 39.8,
          "sweepOffsetIn": 4.6,
          "topIrregularityIn": 3.2,
          "bottomIrregularityIn": 2.7
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-030-d01",
        "type": "root flare",
        "startFt": 0,
        "endFt": 2.3,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "Presentation and butt trimming can affect buyer reaction."
      },
      {
        "id": "instruction-030-d02",
        "type": "subtle seam",
        "startFt": 20.7,
        "endFt": 22.7,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Buyer interpretation matters; discuss market specs and relationships."
      },
      {
        "id": "instruction-030-d03",
        "type": "small bird peck",
        "startFt": 29.4,
        "endFt": 30.2,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A reminder that veneer defects and sawlog defects are not identical."
      },
      {
        "id": "instruction-030-d04",
        "type": "gum spot indicators",
        "startFt": 18.3,
        "endFt": 19.9,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good discussion point for species-specific veneer sensitivity."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-030-d03",
        "type": "small bird peck",
        "startFt": 29.4,
        "endFt": 30.2,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A reminder that veneer defects and sawlog defects are not identical."
      },
      {
        "id": "instruction-030-d04",
        "type": "gum spot indicators",
        "startFt": 18.3,
        "endFt": 19.9,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good discussion point for species-specific veneer sensitivity."
      }
    ],
    "sawlogAffectingDefects": [],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-030-d02",
        "type": "subtle seam",
        "startFt": 20.7,
        "endFt": 22.7,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Buyer interpretation matters; discuss market specs and relationships."
      }
    ],
    "modelSolutionCutPositionsFt": [
      3,
      15,
      27,
      39
    ],
    "modelSolutionExplanation": "Start with market specifications: trim the butt for presentation, know minimum lengths and diameters, and avoid making a technically legal log that the buyer will discount.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach know markets: trim, minimum lengths, buyer tolerance, presentation using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "market specs",
      "buyer tolerance",
      "trim",
      "minimums",
      "presentation",
      "veneer vs sawlog"
    ],
    "instructionalNote": "Primary instructional point: know the market before cutting. This stem is for discussing minimum lengths, trim, minimum top diameters, defect interpretation, buyer tolerance, and presentation. Secondary points: veneer and sawlog rules do not treat all defects the same way, and a technically legal log may still be discounted if it is poorly presented or mismatched to the buyer. Model solution discussion should focus on cut positions at 3, 15, 27, 39 ft. Key teaching cues: root flare at 0-2.3 ft (informational); subtle seam at 20.7-22.7 ft (veneer and sawlog). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-031",
    "title": "instruction log 31",
    "species": "hard maple",
    "totalLengthFt": 48.2,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 21.5
      },
      {
        "positionFt": 6,
        "diameterIn": 20.2
      },
      {
        "positionFt": 11,
        "diameterIn": 19.4
      },
      {
        "positionFt": 18,
        "diameterIn": 19.2
      },
      {
        "positionFt": 24,
        "diameterIn": 18
      },
      {
        "positionFt": 29,
        "diameterIn": 17.8
      },
      {
        "positionFt": 35,
        "diameterIn": 17.1
      },
      {
        "positionFt": 42,
        "diameterIn": 15.8
      },
      {
        "positionFt": 48.2,
        "diameterIn": 15.7
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 14,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.8,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1.1,
          "topIrregularityIn": 0.4,
          "bottomIrregularityIn": 2.8
        },
        {
          "positionFt": 12,
          "sweepOffsetIn": -2.8,
          "topIrregularityIn": 0,
          "bottomIrregularityIn": 2.7
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -4.5,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 25,
          "sweepOffsetIn": -7.3,
          "topIrregularityIn": 2.4,
          "bottomIrregularityIn": 2.5
        },
        {
          "positionFt": 31,
          "sweepOffsetIn": -10.1,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 37,
          "sweepOffsetIn": -13.6,
          "topIrregularityIn": 2.4,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 44,
          "sweepOffsetIn": -10.2,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 1.5
        },
        {
          "positionFt": 48.2,
          "sweepOffsetIn": -10.6,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 1.5
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-031-d01",
        "type": "sweep/crook",
        "startFt": 20.7,
        "endFt": 28.9,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Primary lesson is to break the stem so sweep is not carried through a long log."
      },
      {
        "id": "instruction-031-d02",
        "type": "small knot cluster",
        "startFt": 33.7,
        "endFt": 36.6,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Secondary defect should not distract from sweep control."
      },
      {
        "id": "instruction-031-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 31,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-031-d01",
        "type": "sweep/crook",
        "startFt": 20.7,
        "endFt": 28.9,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Primary lesson is to break the stem so sweep is not carried through a long log."
      },
      {
        "id": "instruction-031-d02",
        "type": "small knot cluster",
        "startFt": 33.7,
        "endFt": 36.6,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Secondary defect should not distract from sweep control."
      },
      {
        "id": "instruction-031-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 31,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      8,
      16,
      24,
      32,
      40
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach rule 1: minimize sweep and crook using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 1",
      "sweep/crook",
      "scale deduction",
      "grade loss",
      "whole-stem inspection"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #1, place bucking cuts to minimize sweep and crook. This stem is meant to make students compare longer scale volume against sweep deduction, grade loss, and visual straightness. Secondary points: examine the whole stem before cutting, judge sweep across all faces, and avoid letting a minor knot cluster distract from the main shape problem. Model solution discussion should focus on cut positions at 8, 16, 24, 32, 40 ft. Key teaching cues: sweep/crook at 20.7-28.9 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-032",
    "title": "instruction log 32",
    "species": "red oak",
    "totalLengthFt": 42.1,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 27.8
      },
      {
        "positionFt": 6,
        "diameterIn": 26.3
      },
      {
        "positionFt": 11,
        "diameterIn": 25.5
      },
      {
        "positionFt": 17,
        "diameterIn": 25
      },
      {
        "positionFt": 23,
        "diameterIn": 24
      },
      {
        "positionFt": 30,
        "diameterIn": 22.8
      },
      {
        "positionFt": 36,
        "diameterIn": 21.8
      },
      {
        "positionFt": 42.1,
        "diameterIn": 21
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 17,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.6,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -0.8,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -3.6,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -5,
          "topIrregularityIn": 1.8,
          "bottomIrregularityIn": 1.5
        },
        {
          "positionFt": 25,
          "sweepOffsetIn": -6.5,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 31,
          "sweepOffsetIn": -6.9,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": -6.9,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 1.6
        },
        {
          "positionFt": 42.1,
          "sweepOffsetIn": -8.2,
          "topIrregularityIn": 2.6,
          "bottomIrregularityIn": 0.9
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-032-d01",
        "type": "butt flare and stain",
        "startFt": 0,
        "endFt": 2.2,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Short jump butt may unlock a higher-value log above."
      },
      {
        "id": "instruction-032-d02",
        "type": "subtle bird peck",
        "startFt": 21,
        "endFt": 22.7,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good sawlog but veneer buyer may reject or discount."
      },
      {
        "id": "instruction-032-d03",
        "type": "open knot",
        "startFt": 31.1,
        "endFt": 32.8,
        "faces": [
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Defines upper end of the best log."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-032-d02",
        "type": "subtle bird peck",
        "startFt": 21,
        "endFt": 22.7,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good sawlog but veneer buyer may reject or discount."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-032-d03",
        "type": "open knot",
        "startFt": 31.1,
        "endFt": 32.8,
        "faces": [
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Defines upper end of the best log."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-032-d01",
        "type": "butt flare and stain",
        "startFt": 0,
        "endFt": 2.2,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Short jump butt may unlock a higher-value log above."
      }
    ],
    "modelSolutionCutPositionsFt": [
      4,
      18,
      30,
      38
    ],
    "modelSolutionExplanation": "Jump-butt the poor butt section, preserve the best middle log, then work the remaining material around that log instead of automatically starting with the longest butt log.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach rule 2: find the best log in the stem section and work around it using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 2",
      "pumpkin log",
      "jump butt",
      "best log first",
      "veneer vs sawlog defects"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #2, find the best log in the stem section and work around that log rather than beginning mechanically at the butt. This is a pumpkin-log exercise: a short jump butt or non-obvious first cut preserves the highest-value section. Secondary points: separate veneer-only concerns from sawlog defects and discuss when the best log is above the butt. Model solution discussion should focus on cut positions at 4, 18, 30, 38 ft. Key teaching cues: butt flare and stain at 0-2.2 ft (veneer and sawlog); open knot at 31.1-32.8 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-033",
    "title": "instruction log 33",
    "species": "white oak",
    "totalLengthFt": 32,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 26.5
      },
      {
        "positionFt": 6,
        "diameterIn": 24
      },
      {
        "positionFt": 13,
        "diameterIn": 21.8
      },
      {
        "positionFt": 20,
        "diameterIn": 19.8
      },
      {
        "positionFt": 26,
        "diameterIn": 18.3
      },
      {
        "positionFt": 32,
        "diameterIn": 16.7
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 13,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.2,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 3
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1.3,
          "topIrregularityIn": 2.3,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -3.7,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 0.1
        },
        {
          "positionFt": 19,
          "sweepOffsetIn": -4.4,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 0.1
        },
        {
          "positionFt": 26,
          "sweepOffsetIn": -4.5,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 1.2
        },
        {
          "positionFt": 32,
          "sweepOffsetIn": -6.1,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 0.1
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-033-d01",
        "type": "diameter threshold zone",
        "startFt": 15.4,
        "endFt": 17.9,
        "faces": [],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "Top diameter is near a minimum product threshold; measure before cutting."
      },
      {
        "id": "instruction-033-d02",
        "type": "sound knot",
        "startFt": 19.9,
        "endFt": 21.1,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Often better carried into the next lower-grade log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-033-d02",
        "type": "sound knot",
        "startFt": 19.9,
        "endFt": 21.1,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Often better carried into the next lower-grade log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      10,
      22,
      30
    ],
    "modelSolutionExplanation": "Measure the taper before committing; a shorter high-grade log that stays above the minimum top diameter is worth more than adding length and losing the product class.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach diameter break: preserve product where top diameter barely meets the threshold using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "diameter break",
      "minimum top diameter",
      "measure before cutting",
      "product eligibility"
    ],
    "instructionalNote": "Primary instructional point: diameter-break judgment. Students must measure before cutting because the top diameter is close to a minimum threshold for a higher product class or grade. Secondary points: a shorter log can be worth more if it preserves eligibility, and a minor defect beyond the break may belong in the next, lower-grade log. Model solution discussion should focus on cut positions at 10, 22, 30 ft. Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-034",
    "title": "instruction log 34",
    "species": "white ash",
    "totalLengthFt": 44.3,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 20.2
      },
      {
        "positionFt": 6,
        "diameterIn": 18.4
      },
      {
        "positionFt": 12,
        "diameterIn": 17.7
      },
      {
        "positionFt": 18,
        "diameterIn": 16.8
      },
      {
        "positionFt": 24,
        "diameterIn": 15.3
      },
      {
        "positionFt": 29,
        "diameterIn": 14.5
      },
      {
        "positionFt": 35,
        "diameterIn": 14
      },
      {
        "positionFt": 44.3,
        "diameterIn": 12.7
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 17,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.5,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.6,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": 1.4,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": 7,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 23,
          "sweepOffsetIn": 9.3,
          "topIrregularityIn": 2.7,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 29,
          "sweepOffsetIn": 6.8,
          "topIrregularityIn": 0.9,
          "bottomIrregularityIn": 0.5
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": 7.6,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 2.7
        },
        {
          "positionFt": 44.3,
          "sweepOffsetIn": 7.8,
          "topIrregularityIn": 2.6,
          "bottomIrregularityIn": 0.7
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-034-d01",
        "type": "canker",
        "startFt": 17.3,
        "endFt": 19.9,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Fixed buck point forces the rest of the pattern."
      },
      {
        "id": "instruction-034-d02",
        "type": "small seam",
        "startFt": 31.4,
        "endFt": 33.7,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Tests whether the next log should be shorter."
      },
      {
        "id": "instruction-034-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 34,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-034-d02",
        "type": "small seam",
        "startFt": 31.4,
        "endFt": 33.7,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Tests whether the next log should be shorter."
      },
      {
        "id": "instruction-034-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 34,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-034-d01",
        "type": "canker",
        "startFt": 17.3,
        "endFt": 19.9,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Fixed buck point forces the rest of the pattern."
      }
    ],
    "modelSolutionCutPositionsFt": [
      8,
      19,
      27,
      37
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach obligatory buck point: work around a fixed defect using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "obligatory buck point",
      "fixed defect",
      "canker/crook/hole",
      "pattern on both sides"
    ],
    "instructionalNote": "Primary instructional point: obligatory buck-point planning. A canker, crook, hole, or fixed severe defect creates a forced decision point, and the best solution is built on both sides of that point. Secondary points: do not drag the defect through a valuable log merely to gain footage, and then re-evaluate remaining length, diameter, and grade opportunities. Model solution discussion should focus on cut positions at 8, 19, 27, 37 ft. Key teaching cues: canker at 17.3-19.9 ft (veneer and sawlog); small seam at 31.4-33.7 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-035",
    "title": "instruction log 35",
    "species": "yellow birch",
    "totalLengthFt": 40,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 25.1
      },
      {
        "positionFt": 6,
        "diameterIn": 23.2
      },
      {
        "positionFt": 13,
        "diameterIn": 22.6
      },
      {
        "positionFt": 20,
        "diameterIn": 20.6
      },
      {
        "positionFt": 25,
        "diameterIn": 20.1
      },
      {
        "positionFt": 32,
        "diameterIn": 18.6
      },
      {
        "positionFt": 40,
        "diameterIn": 17.7
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 10,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.2,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 4.4
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.1,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 4
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": 0.9,
          "topIrregularityIn": 2.4,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 20,
          "sweepOffsetIn": 3.3,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 3
        },
        {
          "positionFt": 27,
          "sweepOffsetIn": 4.3,
          "topIrregularityIn": 3.8,
          "bottomIrregularityIn": 3.9
        },
        {
          "positionFt": 32,
          "sweepOffsetIn": 3.9,
          "topIrregularityIn": 1.6,
          "bottomIrregularityIn": 1.4
        },
        {
          "positionFt": 37,
          "sweepOffsetIn": 4.2,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 3.8
        },
        {
          "positionFt": 40,
          "sweepOffsetIn": 4.1,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 0.8
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-035-d01",
        "type": "overgrown knot",
        "startFt": 11.2,
        "endFt": 12.8,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Shorter first log may keep a higher grade."
      },
      {
        "id": "instruction-035-d02",
        "type": "mineral streak",
        "startFt": 23.2,
        "endFt": 25.6,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "hidden",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A likely veneer concern but only a weak sawlog signal."
      },
      {
        "id": "instruction-035-d03",
        "type": "small limb scar",
        "startFt": 33.2,
        "endFt": 34.8,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Can be absorbed by lower-grade upper log."
      },
      {
        "id": "instruction-035-d04",
        "type": "bark inclusion",
        "startFt": 4.8,
        "endFt": 6.4,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-035-d02",
        "type": "mineral streak",
        "startFt": 23.2,
        "endFt": 25.6,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "hidden",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A likely veneer concern but only a weak sawlog signal."
      },
      {
        "id": "instruction-035-d04",
        "type": "bark inclusion",
        "startFt": 4.8,
        "endFt": 6.4,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-035-d01",
        "type": "overgrown knot",
        "startFt": 11.2,
        "endFt": 12.8,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Shorter first log may keep a higher grade."
      },
      {
        "id": "instruction-035-d03",
        "type": "small limb scar",
        "startFt": 33.2,
        "endFt": 34.8,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Can be absorbed by lower-grade upper log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      12,
      24,
      32
    ],
    "modelSolutionExplanation": "Cut the longest log that keeps the grade; if two more feet would add a defective face and drop grade, leave those feet for the next log.",
    "difficulty": "intermediate",
    "teachingObjective": "Teach rule 3: longest log possible without lowering grade using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 3",
      "longest log without lowering grade",
      "clear faces",
      "grade vs length tradeoff"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #3 under clear-face grading rules, cut the longest log possible without lowering the grade. Students should test whether adding two feet creates another defective face or drops the log class. Secondary points: extra footage rarely compensates for a grade drop, and the leftover section may often be used on the next log. Model solution discussion should focus on cut positions at 12, 24, 32 ft. Key teaching cues: overgrown knot at 11.2-12.8 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-036",
    "title": "instruction log 36",
    "species": "black cherry",
    "totalLengthFt": 51.9,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 25.9
      },
      {
        "positionFt": 6,
        "diameterIn": 25
      },
      {
        "positionFt": 12,
        "diameterIn": 24
      },
      {
        "positionFt": 18,
        "diameterIn": 23.3
      },
      {
        "positionFt": 23,
        "diameterIn": 23.2
      },
      {
        "positionFt": 28,
        "diameterIn": 22.1
      },
      {
        "positionFt": 33,
        "diameterIn": 22
      },
      {
        "positionFt": 38,
        "diameterIn": 21.2
      },
      {
        "positionFt": 44,
        "diameterIn": 20.3
      },
      {
        "positionFt": 51.9,
        "diameterIn": 19.9
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 15,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.9,
          "topIrregularityIn": 2.9,
          "bottomIrregularityIn": 3.9
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -0.6,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 12,
          "sweepOffsetIn": -2.2,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 17,
          "sweepOffsetIn": -1.5,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 0.5
        },
        {
          "positionFt": 22,
          "sweepOffsetIn": -1.9,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 3.7
        },
        {
          "positionFt": 29,
          "sweepOffsetIn": -2.5,
          "topIrregularityIn": 3.7,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 35,
          "sweepOffsetIn": -3.8,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 2.2
        },
        {
          "positionFt": 40,
          "sweepOffsetIn": -4.6,
          "topIrregularityIn": 3.3,
          "bottomIrregularityIn": 4
        },
        {
          "positionFt": 47,
          "sweepOffsetIn": -3.8,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 3.2
        },
        {
          "positionFt": 51.9,
          "sweepOffsetIn": -5.5,
          "topIrregularityIn": 3.2,
          "bottomIrregularityIn": 2
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-036-d01",
        "type": "frost crack seam",
        "startFt": 12.4,
        "endFt": 15,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Place near an end when clear-cutting rules or internal sawing reward it."
      },
      {
        "id": "instruction-036-d02",
        "type": "pin knots",
        "startFt": 31.6,
        "endFt": 33.7,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Veneer-sensitive cue on otherwise high-quality section."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-036-d02",
        "type": "pin knots",
        "startFt": 31.6,
        "endFt": 33.7,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Veneer-sensitive cue on otherwise high-quality section."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-036-d01",
        "type": "frost crack seam",
        "startFt": 12.4,
        "endFt": 15,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Place near an end when clear-cutting rules or internal sawing reward it."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      8,
      20,
      32,
      40
    ],
    "modelSolutionExplanation": "Set cuts so the principal seam is near a log end, improving clear cuttings under markets that reward board recovery or do not penalize end defects the same way.",
    "difficulty": "advanced",
    "teachingObjective": "Teach place defects near log ends to improve clear cuttings where market rules allow using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "end-defect placement",
      "clear cuttings",
      "market-dependent grading",
      "board recovery"
    ],
    "instructionalNote": "Primary instructional point: place defects near log ends when the applicable market rewards clear cuttings or does not treat end defects the same way as mid-log face defects. Students should compare clear-face grading with board-recovery thinking. Secondary points: this rule is market-dependent, so it should be used only when the buyer, mill, or grading rule rewards the result. Model solution discussion should focus on cut positions at 8, 20, 32, 40 ft. Key teaching cues: frost crack seam at 12.4-15.0 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-037",
    "title": "instruction log 37",
    "species": "hard maple",
    "totalLengthFt": 51.8,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 20.1
      },
      {
        "positionFt": 6,
        "diameterIn": 18.8
      },
      {
        "positionFt": 13,
        "diameterIn": 17.4
      },
      {
        "positionFt": 20,
        "diameterIn": 15.6
      },
      {
        "positionFt": 27,
        "diameterIn": 14.9
      },
      {
        "positionFt": 34,
        "diameterIn": 13.6
      },
      {
        "positionFt": 41,
        "diameterIn": 12.3
      },
      {
        "positionFt": 47,
        "diameterIn": 11.5
      },
      {
        "positionFt": 51.8,
        "diameterIn": 11.2
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 14,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.7,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -0.4,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -1.1,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 2.2
        },
        {
          "positionFt": 20,
          "sweepOffsetIn": -0.9,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 0.6
        },
        {
          "positionFt": 26,
          "sweepOffsetIn": -1,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 3
        },
        {
          "positionFt": 31,
          "sweepOffsetIn": -1.8,
          "topIrregularityIn": 2.2,
          "bottomIrregularityIn": 2.5
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": -1.5,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 0.1
        },
        {
          "positionFt": 43,
          "sweepOffsetIn": -1.9,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 48,
          "sweepOffsetIn": -1.9,
          "topIrregularityIn": 2.3,
          "bottomIrregularityIn": 0.6
        },
        {
          "positionFt": 51.8,
          "sweepOffsetIn": -1.9,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 0.7
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-037-d02",
        "type": "excellent clear faces",
        "startFt": 5.2,
        "endFt": 16.6,
        "faces": [],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "The surrounding quality section is intentionally strong."
      },
      {
        "id": "instruction-037-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 37,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-037-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 37,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      12,
      24,
      36
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "advanced",
    "teachingObjective": "Teach understand when a hole can remain in an otherwise valuable sawlog using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "large hole observation",
      "sawlog tolerance",
      "face evaluation",
      "avoid automatic cull"
    ],
    "instructionalNote": "Primary instructional point: do not automatically condemn a high-quality sawlog because of one large hole. Students should examine surrounding faces, diameter, and expected grade before removing too much wood. Secondary points: this reinforces the observation that fairly large holes can occur in valuable sawlogs, especially where the remaining quality section is strong. Model solution discussion should focus on cut positions at 12, 24, 36 ft. Key teaching cues: butt hollow center from 0-8.6 ft (sawlog grade and possible scale deduction). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-038",
    "title": "instruction log 38",
    "species": "red oak",
    "totalLengthFt": 52.5,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 26.3
      },
      {
        "positionFt": 6,
        "diameterIn": 25
      },
      {
        "positionFt": 13,
        "diameterIn": 24.2
      },
      {
        "positionFt": 20,
        "diameterIn": 22.9
      },
      {
        "positionFt": 25,
        "diameterIn": 22.4
      },
      {
        "positionFt": 30,
        "diameterIn": 21.7
      },
      {
        "positionFt": 37,
        "diameterIn": 21.2
      },
      {
        "positionFt": 43,
        "diameterIn": 20.4
      },
      {
        "positionFt": 52.5,
        "diameterIn": 19.2
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 17,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.5,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1.1,
          "topIrregularityIn": 0.4,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 12,
          "sweepOffsetIn": -1.5,
          "topIrregularityIn": 2.4,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -2.4,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": -4.6,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 30,
          "sweepOffsetIn": -6.5,
          "topIrregularityIn": 2.7,
          "bottomIrregularityIn": 0.3
        },
        {
          "positionFt": 37,
          "sweepOffsetIn": -6.3,
          "topIrregularityIn": 0.9,
          "bottomIrregularityIn": 3
        },
        {
          "positionFt": 43,
          "sweepOffsetIn": -7,
          "topIrregularityIn": 2.6,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 48,
          "sweepOffsetIn": -8.1,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 2.5
        },
        {
          "positionFt": 52.5,
          "sweepOffsetIn": -8,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 2.3
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-038-d01",
        "type": "rotten section",
        "startFt": 23.6,
        "endFt": 28.9,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Remove the cull to raise grades on both sides."
      },
      {
        "id": "instruction-038-d02",
        "type": "sound knot",
        "startFt": 37.8,
        "endFt": 39.9,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Do not overreact after the cull section has already been isolated."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-038-d02",
        "type": "sound knot",
        "startFt": 37.8,
        "endFt": 39.9,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Do not overreact after the cull section has already been isolated."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-038-d01",
        "type": "rotten section",
        "startFt": 23.6,
        "endFt": 28.9,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Remove the cull to raise grades on both sides."
      }
    ],
    "modelSolutionCutPositionsFt": [
      12,
      24,
      29,
      39
    ],
    "modelSolutionExplanation": "Remove the central cull section when doing so upgrades the logs on both sides; this is the case where losing footage can recover more value.",
    "difficulty": "advanced",
    "teachingObjective": "Teach remove a cull section when it raises the value of neighboring logs using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "cull removal",
      "isolate defect",
      "grade improvement",
      "value vs footage tradeoff"
    ],
    "instructionalNote": "Primary instructional point: cull removal can increase total value when isolating a bad section raises the grade of adjacent logs. Students should compare the lost footage against the grade improvement on both sides. Secondary points: remove cull deliberately to implement a rule of thumb, not as a reflex, and avoid overreacting to minor defects after the main cull has been isolated. Model solution discussion should focus on cut positions at 12, 24, 29, 39 ft. Key teaching cues: rotten section at 23.6-28.9 ft (veneer and sawlog). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-039",
    "title": "instruction log 39",
    "species": "white oak",
    "totalLengthFt": 51.6,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 16.5
      },
      {
        "positionFt": 6,
        "diameterIn": 14.7
      },
      {
        "positionFt": 13,
        "diameterIn": 13.8
      },
      {
        "positionFt": 19,
        "diameterIn": 13.1
      },
      {
        "positionFt": 26,
        "diameterIn": 11.7
      },
      {
        "positionFt": 33,
        "diameterIn": 11
      },
      {
        "positionFt": 38,
        "diameterIn": 9.5
      },
      {
        "positionFt": 43,
        "diameterIn": 9.6
      },
      {
        "positionFt": 51.6,
        "diameterIn": 8.4
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 13,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.7,
          "topIrregularityIn": 0.4,
          "bottomIrregularityIn": 2.7
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": 0,
          "topIrregularityIn": 1.6,
          "bottomIrregularityIn": 1.2
        },
        {
          "positionFt": 20,
          "sweepOffsetIn": 2.1,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 1.2
        },
        {
          "positionFt": 26,
          "sweepOffsetIn": 1.8,
          "topIrregularityIn": 2.8,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 31,
          "sweepOffsetIn": 1.8,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 0.7
        },
        {
          "positionFt": 37,
          "sweepOffsetIn": 2.4,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 2.2
        },
        {
          "positionFt": 43,
          "sweepOffsetIn": 3.6,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 2.5
        },
        {
          "positionFt": 51.6,
          "sweepOffsetIn": 3.9,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 2.5
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-039-d01",
        "type": "short punky streak",
        "startFt": 9.8,
        "endFt": 11.9,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "May be retained in trim or low-impact position to reach minimum length."
      },
      {
        "id": "instruction-039-d02",
        "type": "open knot",
        "startFt": 34.6,
        "endFt": 36.1,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Provides a contrast with a defect that should not enter the best log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-039-d01",
        "type": "short punky streak",
        "startFt": 9.8,
        "endFt": 11.9,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "May be retained in trim or low-impact position to reach minimum length."
      },
      {
        "id": "instruction-039-d02",
        "type": "open knot",
        "startFt": 34.6,
        "endFt": 36.1,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Provides a contrast with a defect that should not enter the best log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      10,
      22,
      34
    ],
    "modelSolutionExplanation": "Retain a small low-impact section when it is needed to reach a required log length and does not reduce the grade under the applicable market specifications.",
    "difficulty": "advanced",
    "teachingObjective": "Teach retain small cull to reach minimum log length when grade is not harmed using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "cull retention",
      "minimum length",
      "trim allowance",
      "product specifications"
    ],
    "instructionalNote": "Primary instructional point: retain a small cull or low-quality section when it is needed to reach a required log length and does not lower the grade under the market rules. Students should distinguish between unacceptable cull and allowable trim or low-impact material. Secondary points: clear-face rules may treat this differently, so the decision depends on the product specification. Model solution discussion should focus on cut positions at 10, 22, 34 ft. Key teaching cues: short punky streak at 9.8-11.9 ft (sawlog grade); open knot at 34.6-36.1 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-040",
    "title": "instruction log 40",
    "species": "white ash",
    "totalLengthFt": 44,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 21.2
      },
      {
        "positionFt": 6,
        "diameterIn": 20
      },
      {
        "positionFt": 11,
        "diameterIn": 19
      },
      {
        "positionFt": 18,
        "diameterIn": 17
      },
      {
        "positionFt": 24,
        "diameterIn": 16.3
      },
      {
        "positionFt": 29,
        "diameterIn": 15.8
      },
      {
        "positionFt": 36,
        "diameterIn": 14.6
      },
      {
        "positionFt": 44,
        "diameterIn": 13
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 16,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.2,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1.2,
          "topIrregularityIn": 0.2,
          "bottomIrregularityIn": 0.6
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": -0.8,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 1.6
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -2,
          "topIrregularityIn": 1,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 23,
          "sweepOffsetIn": -2.4,
          "topIrregularityIn": 2.7,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 29,
          "sweepOffsetIn": -3.1,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 34,
          "sweepOffsetIn": -3.9,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 1.6
        },
        {
          "positionFt": 41,
          "sweepOffsetIn": -3.6,
          "topIrregularityIn": 2.8,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 44,
          "sweepOffsetIn": -2.5,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 0.9
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-040-d01",
        "type": "root flare",
        "startFt": 0,
        "endFt": 2,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "Presentation and butt trimming can affect buyer reaction."
      },
      {
        "id": "instruction-040-d02",
        "type": "subtle seam",
        "startFt": 22.9,
        "endFt": 25.1,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Buyer interpretation matters; discuss market specs and relationships."
      },
      {
        "id": "instruction-040-d03",
        "type": "small bird peck",
        "startFt": 32.6,
        "endFt": 33.5,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A reminder that veneer defects and sawlog defects are not identical."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-040-d03",
        "type": "small bird peck",
        "startFt": 32.6,
        "endFt": 33.5,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A reminder that veneer defects and sawlog defects are not identical."
      }
    ],
    "sawlogAffectingDefects": [],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-040-d02",
        "type": "subtle seam",
        "startFt": 22.9,
        "endFt": 25.1,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Buyer interpretation matters; discuss market specs and relationships."
      }
    ],
    "modelSolutionCutPositionsFt": [
      3,
      15,
      27,
      39
    ],
    "modelSolutionExplanation": "Start with market specifications: trim the butt for presentation, know minimum lengths and diameters, and avoid making a technically legal log that the buyer will discount.",
    "difficulty": "advanced",
    "teachingObjective": "Teach know markets: trim, minimum lengths, buyer tolerance, presentation using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "market specs",
      "buyer tolerance",
      "trim",
      "minimums",
      "presentation",
      "veneer vs sawlog"
    ],
    "instructionalNote": "Primary instructional point: know the market before cutting. This stem is for discussing minimum lengths, trim, minimum top diameters, defect interpretation, buyer tolerance, and presentation. Secondary points: veneer and sawlog rules do not treat all defects the same way, and a technically legal log may still be discounted if it is poorly presented or mismatched to the buyer. Model solution discussion should focus on cut positions at 3, 15, 27, 39 ft. Key teaching cues: root flare at 0-2.0 ft (informational); subtle seam at 22.9-25.1 ft (veneer and sawlog). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-041",
    "title": "instruction log 41",
    "species": "yellow birch",
    "totalLengthFt": 46.1,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 19.9
      },
      {
        "positionFt": 6,
        "diameterIn": 18.9
      },
      {
        "positionFt": 13,
        "diameterIn": 17.6
      },
      {
        "positionFt": 18,
        "diameterIn": 16.8
      },
      {
        "positionFt": 24,
        "diameterIn": 15.9
      },
      {
        "positionFt": 29,
        "diameterIn": 15.2
      },
      {
        "positionFt": 35,
        "diameterIn": 14.2
      },
      {
        "positionFt": 40,
        "diameterIn": 13.8
      },
      {
        "positionFt": 46.1,
        "diameterIn": 13.2
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 10,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.5,
          "topIrregularityIn": 3,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -2,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 3.4
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -6.2,
          "topIrregularityIn": 1.8,
          "bottomIrregularityIn": 4.3
        },
        {
          "positionFt": 19,
          "sweepOffsetIn": -13,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 2.8
        },
        {
          "positionFt": 25,
          "sweepOffsetIn": -11.3,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 2
        },
        {
          "positionFt": 31,
          "sweepOffsetIn": -15,
          "topIrregularityIn": 1.8,
          "bottomIrregularityIn": 1.8
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": -15.8,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 1.5
        },
        {
          "positionFt": 43,
          "sweepOffsetIn": -18.5,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 2.4
        },
        {
          "positionFt": 46.1,
          "sweepOffsetIn": -17.8,
          "topIrregularityIn": 1.2,
          "bottomIrregularityIn": 2.7
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-041-d01",
        "type": "sweep/crook",
        "startFt": 19.8,
        "endFt": 27.6,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Primary lesson is to break the stem so sweep is not carried through a long log."
      },
      {
        "id": "instruction-041-d02",
        "type": "small knot cluster",
        "startFt": 32.2,
        "endFt": 35,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Secondary defect should not distract from sweep control."
      },
      {
        "id": "instruction-041-d03",
        "type": "bark inclusion",
        "startFt": 5.5,
        "endFt": 7.4,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      },
      {
        "id": "instruction-041-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 40,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-041-d03",
        "type": "bark inclusion",
        "startFt": 5.5,
        "endFt": 7.4,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-041-d01",
        "type": "sweep/crook",
        "startFt": 19.8,
        "endFt": 27.6,
        "faces": [
          "face_1",
          "face_3"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Primary lesson is to break the stem so sweep is not carried through a long log."
      },
      {
        "id": "instruction-041-d02",
        "type": "small knot cluster",
        "startFt": 32.2,
        "endFt": 35,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Secondary defect should not distract from sweep control."
      },
      {
        "id": "instruction-041-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 40,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      8,
      16,
      24,
      32,
      40
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "advanced",
    "teachingObjective": "Teach rule 1: minimize sweep and crook using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 1",
      "sweep/crook",
      "scale deduction",
      "grade loss",
      "whole-stem inspection"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #1, place bucking cuts to minimize sweep and crook. This stem is meant to make students compare longer scale volume against sweep deduction, grade loss, and visual straightness. Secondary points: examine the whole stem before cutting, judge sweep across all faces, and avoid letting a minor knot cluster distract from the main shape problem. Model solution discussion should focus on cut positions at 8, 16, 24, 32, 40 ft. Key teaching cues: sweep/crook at 19.8-27.6 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-042",
    "title": "instruction log 42",
    "species": "black cherry",
    "totalLengthFt": 40.5,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 22.1
      },
      {
        "positionFt": 6,
        "diameterIn": 20.4
      },
      {
        "positionFt": 13,
        "diameterIn": 19.4
      },
      {
        "positionFt": 19,
        "diameterIn": 18.5
      },
      {
        "positionFt": 25,
        "diameterIn": 17.6
      },
      {
        "positionFt": 31,
        "diameterIn": 16.8
      },
      {
        "positionFt": 36,
        "diameterIn": 16
      },
      {
        "positionFt": 40.5,
        "diameterIn": 15.2
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 15,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0,
          "topIrregularityIn": 0,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1.4,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 1.2
        },
        {
          "positionFt": 12,
          "sweepOffsetIn": -1.1,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 3.3
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -2.6,
          "topIrregularityIn": 3.7,
          "bottomIrregularityIn": 0
        },
        {
          "positionFt": 23,
          "sweepOffsetIn": -3.5,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 1.1
        },
        {
          "positionFt": 30,
          "sweepOffsetIn": -2.7,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 3.4
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": -3.3,
          "topIrregularityIn": 3,
          "bottomIrregularityIn": 0.5
        },
        {
          "positionFt": 40.5,
          "sweepOffsetIn": -4.8,
          "topIrregularityIn": 1.8,
          "bottomIrregularityIn": 0.1
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-042-d01",
        "type": "butt flare and stain",
        "startFt": 0,
        "endFt": 2.2,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Short jump butt may unlock a higher-value log above."
      },
      {
        "id": "instruction-042-d02",
        "type": "subtle bird peck",
        "startFt": 20.2,
        "endFt": 21.8,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good sawlog but veneer buyer may reject or discount."
      },
      {
        "id": "instruction-042-d03",
        "type": "open knot",
        "startFt": 29.9,
        "endFt": 31.6,
        "faces": [
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Defines upper end of the best log."
      },
      {
        "id": "instruction-042-d04",
        "type": "gum spot indicators",
        "startFt": 18.6,
        "endFt": 20.2,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good discussion point for species-specific veneer sensitivity."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-042-d02",
        "type": "subtle bird peck",
        "startFt": 20.2,
        "endFt": 21.8,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good sawlog but veneer buyer may reject or discount."
      },
      {
        "id": "instruction-042-d04",
        "type": "gum spot indicators",
        "startFt": 18.6,
        "endFt": 20.2,
        "faces": [
          "face_2"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Good discussion point for species-specific veneer sensitivity."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-042-d03",
        "type": "open knot",
        "startFt": 29.9,
        "endFt": 31.6,
        "faces": [
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Defines upper end of the best log."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-042-d01",
        "type": "butt flare and stain",
        "startFt": 0,
        "endFt": 2.2,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Short jump butt may unlock a higher-value log above."
      }
    ],
    "modelSolutionCutPositionsFt": [
      4,
      16,
      24,
      32
    ],
    "modelSolutionExplanation": "Jump-butt the poor butt section, preserve the best middle log, then work the remaining material around that log instead of automatically starting with the longest butt log.",
    "difficulty": "advanced",
    "teachingObjective": "Teach rule 2: find the best log in the stem section and work around it using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 2",
      "pumpkin log",
      "jump butt",
      "best log first",
      "veneer vs sawlog defects"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #2, find the best log in the stem section and work around that log rather than beginning mechanically at the butt. This is a pumpkin-log exercise: a short jump butt or non-obvious first cut preserves the highest-value section. Secondary points: separate veneer-only concerns from sawlog defects and discuss when the best log is above the butt. Model solution discussion should focus on cut positions at 4, 16, 24, 32 ft. Key teaching cues: butt flare and stain at 0-2.2 ft (veneer and sawlog); open knot at 29.9-31.6 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-043",
    "title": "instruction log 43",
    "species": "hard maple",
    "totalLengthFt": 43.7,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 21.4
      },
      {
        "positionFt": 6,
        "diameterIn": 20.2
      },
      {
        "positionFt": 11,
        "diameterIn": 19.4
      },
      {
        "positionFt": 17,
        "diameterIn": 18.1
      },
      {
        "positionFt": 23,
        "diameterIn": 16.8
      },
      {
        "positionFt": 30,
        "diameterIn": 15.8
      },
      {
        "positionFt": 37,
        "diameterIn": 15.5
      },
      {
        "positionFt": 43.7,
        "diameterIn": 14.5
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 14,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.8,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 1.2
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -0.2,
          "topIrregularityIn": 1.8,
          "bottomIrregularityIn": 2.5
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": -1.1,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 16,
          "sweepOffsetIn": -2.9,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 0.3
        },
        {
          "positionFt": 23,
          "sweepOffsetIn": -3.5,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 3
        },
        {
          "positionFt": 30,
          "sweepOffsetIn": -3.2,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 2.7
        },
        {
          "positionFt": 37,
          "sweepOffsetIn": -4.6,
          "topIrregularityIn": 0.2,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 43.7,
          "sweepOffsetIn": -5.1,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 2.1
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-043-d01",
        "type": "diameter threshold zone",
        "startFt": 21,
        "endFt": 24.5,
        "faces": [],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "Top diameter is near a minimum product threshold; measure before cutting."
      },
      {
        "id": "instruction-043-d02",
        "type": "sound knot",
        "startFt": 27.1,
        "endFt": 28.8,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Often better carried into the next lower-grade log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-043-d02",
        "type": "sound knot",
        "startFt": 27.1,
        "endFt": 28.8,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Often better carried into the next lower-grade log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      10,
      22,
      34,
      42
    ],
    "modelSolutionExplanation": "Measure the taper before committing; a shorter high-grade log that stays above the minimum top diameter is worth more than adding length and losing the product class.",
    "difficulty": "advanced",
    "teachingObjective": "Teach diameter break: preserve product where top diameter barely meets the threshold using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "diameter break",
      "minimum top diameter",
      "measure before cutting",
      "product eligibility"
    ],
    "instructionalNote": "Primary instructional point: diameter-break judgment. Students must measure before cutting because the top diameter is close to a minimum threshold for a higher product class or grade. Secondary points: a shorter log can be worth more if it preserves eligibility, and a minor defect beyond the break may belong in the next, lower-grade log. Model solution discussion should focus on cut positions at 10, 22, 34, 42 ft. Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-044",
    "title": "instruction log 44",
    "species": "red oak",
    "totalLengthFt": 40.4,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 15.6
      },
      {
        "positionFt": 6,
        "diameterIn": 14.4
      },
      {
        "positionFt": 12,
        "diameterIn": 13.1
      },
      {
        "positionFt": 19,
        "diameterIn": 11.8
      },
      {
        "positionFt": 25,
        "diameterIn": 10.3
      },
      {
        "positionFt": 30,
        "diameterIn": 9.7
      },
      {
        "positionFt": 35,
        "diameterIn": 9.2
      },
      {
        "positionFt": 40.4,
        "diameterIn": 8.6
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 17,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.6,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 1.1
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 1.3,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": 2.8,
          "topIrregularityIn": 2.7,
          "bottomIrregularityIn": 2.4
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": 6.6,
          "topIrregularityIn": 2.6,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": 8.2,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 0.7
        },
        {
          "positionFt": 29,
          "sweepOffsetIn": 5.5,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 2.8
        },
        {
          "positionFt": 35,
          "sweepOffsetIn": 6,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 2.1
        },
        {
          "positionFt": 40.4,
          "sweepOffsetIn": 6.5,
          "topIrregularityIn": 1.3,
          "bottomIrregularityIn": 0.6
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-044-d01",
        "type": "canker",
        "startFt": 15.7,
        "endFt": 18.2,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Fixed buck point forces the rest of the pattern."
      },
      {
        "id": "instruction-044-d02",
        "type": "small seam",
        "startFt": 28.7,
        "endFt": 30.7,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Tests whether the next log should be shorter."
      },
      {
        "id": "instruction-044-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 43,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-044-d02",
        "type": "small seam",
        "startFt": 28.7,
        "endFt": 30.7,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Tests whether the next log should be shorter."
      },
      {
        "id": "instruction-044-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 43,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-044-d01",
        "type": "canker",
        "startFt": 15.7,
        "endFt": 18.2,
        "faces": [
          "face_1",
          "face_2"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Fixed buck point forces the rest of the pattern."
      }
    ],
    "modelSolutionCutPositionsFt": [
      8,
      17,
      25,
      35
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "advanced",
    "teachingObjective": "Teach obligatory buck point: work around a fixed defect using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "obligatory buck point",
      "fixed defect",
      "canker/crook/hole",
      "pattern on both sides"
    ],
    "instructionalNote": "Primary instructional point: obligatory buck-point planning. A canker, crook, hole, or fixed severe defect creates a forced decision point, and the best solution is built on both sides of that point. Secondary points: do not drag the defect through a valuable log merely to gain footage, and then re-evaluate remaining length, diameter, and grade opportunities. Model solution discussion should focus on cut positions at 8, 17, 25, 35 ft. Key teaching cues: canker at 15.7-18.2 ft (veneer and sawlog); small seam at 28.7-30.7 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-045",
    "title": "instruction log 45",
    "species": "white oak",
    "totalLengthFt": 41.8,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 17.6
      },
      {
        "positionFt": 6,
        "diameterIn": 15.6
      },
      {
        "positionFt": 13,
        "diameterIn": 14.2
      },
      {
        "positionFt": 19,
        "diameterIn": 13.1
      },
      {
        "positionFt": 24,
        "diameterIn": 12
      },
      {
        "positionFt": 31,
        "diameterIn": 11.5
      },
      {
        "positionFt": 37,
        "diameterIn": 10
      },
      {
        "positionFt": 41.8,
        "diameterIn": 9.4
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 13,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.8,
          "topIrregularityIn": 0.9,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.5,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": -1.2,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 0.1
        },
        {
          "positionFt": 17,
          "sweepOffsetIn": -0.7,
          "topIrregularityIn": 2.6,
          "bottomIrregularityIn": 0.6
        },
        {
          "positionFt": 23,
          "sweepOffsetIn": -2.2,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 1.6
        },
        {
          "positionFt": 28,
          "sweepOffsetIn": -2,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 33,
          "sweepOffsetIn": -3.1,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 41.8,
          "sweepOffsetIn": -3.7,
          "topIrregularityIn": 0.9,
          "bottomIrregularityIn": 1.7
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-045-d01",
        "type": "overgrown knot",
        "startFt": 11.7,
        "endFt": 13.4,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Shorter first log may keep a higher grade."
      },
      {
        "id": "instruction-045-d02",
        "type": "mineral streak",
        "startFt": 24.2,
        "endFt": 26.7,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "hidden",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A likely veneer concern but only a weak sawlog signal."
      },
      {
        "id": "instruction-045-d03",
        "type": "small limb scar",
        "startFt": 34.7,
        "endFt": 36.3,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Can be absorbed by lower-grade upper log."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-045-d02",
        "type": "mineral streak",
        "startFt": 24.2,
        "endFt": 26.7,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "hidden",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A likely veneer concern but only a weak sawlog signal."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-045-d01",
        "type": "overgrown knot",
        "startFt": 11.7,
        "endFt": 13.4,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Shorter first log may keep a higher grade."
      },
      {
        "id": "instruction-045-d03",
        "type": "small limb scar",
        "startFt": 34.7,
        "endFt": 36.3,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Can be absorbed by lower-grade upper log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      12,
      24,
      32,
      40
    ],
    "modelSolutionExplanation": "Cut the longest log that keeps the grade; if two more feet would add a defective face and drop grade, leave those feet for the next log.",
    "difficulty": "advanced",
    "teachingObjective": "Teach rule 3: longest log possible without lowering grade using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "Rule 3",
      "longest log without lowering grade",
      "clear faces",
      "grade vs length tradeoff"
    ],
    "instructionalNote": "Primary instructional point: Rule of Thumb #3 under clear-face grading rules, cut the longest log possible without lowering the grade. Students should test whether adding two feet creates another defective face or drops the log class. Secondary points: extra footage rarely compensates for a grade drop, and the leftover section may often be used on the next log. Model solution discussion should focus on cut positions at 12, 24, 32, 40 ft. Key teaching cues: overgrown knot at 11.7-13.4 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-046",
    "title": "instruction log 46",
    "species": "white ash",
    "totalLengthFt": 45.7,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 23.3
      },
      {
        "positionFt": 6,
        "diameterIn": 21
      },
      {
        "positionFt": 13,
        "diameterIn": 19.7
      },
      {
        "positionFt": 20,
        "diameterIn": 18.6
      },
      {
        "positionFt": 25,
        "diameterIn": 17.6
      },
      {
        "positionFt": 32,
        "diameterIn": 15.8
      },
      {
        "positionFt": 37,
        "diameterIn": 15
      },
      {
        "positionFt": 45.7,
        "diameterIn": 13.1
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 15,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.6,
          "topIrregularityIn": 2.7,
          "bottomIrregularityIn": 2.2
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1.1,
          "topIrregularityIn": 1.8,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 13,
          "sweepOffsetIn": -1.6,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 19,
          "sweepOffsetIn": -2,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": -2.7,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 30,
          "sweepOffsetIn": -1.6,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 1.1
        },
        {
          "positionFt": 35,
          "sweepOffsetIn": -3.3,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 2.3
        },
        {
          "positionFt": 42,
          "sweepOffsetIn": -2.3,
          "topIrregularityIn": 0.6,
          "bottomIrregularityIn": 0.5
        },
        {
          "positionFt": 45.7,
          "sweepOffsetIn": -3.4,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 1.1
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-046-d01",
        "type": "frost crack seam",
        "startFt": 11,
        "endFt": 13.3,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Place near an end when clear-cutting rules or internal sawing reward it."
      },
      {
        "id": "instruction-046-d02",
        "type": "pin knots",
        "startFt": 27.9,
        "endFt": 29.7,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Veneer-sensitive cue on otherwise high-quality section."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-046-d02",
        "type": "pin knots",
        "startFt": 27.9,
        "endFt": 29.7,
        "faces": [
          "face_3"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Veneer-sensitive cue on otherwise high-quality section."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-046-d01",
        "type": "frost crack seam",
        "startFt": 11,
        "endFt": 13.3,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Place near an end when clear-cutting rules or internal sawing reward it."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      8,
      20,
      32,
      40
    ],
    "modelSolutionExplanation": "Set cuts so the principal seam is near a log end, improving clear cuttings under markets that reward board recovery or do not penalize end defects the same way.",
    "difficulty": "advanced",
    "teachingObjective": "Teach place defects near log ends to improve clear cuttings where market rules allow using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "end-defect placement",
      "clear cuttings",
      "market-dependent grading",
      "board recovery"
    ],
    "instructionalNote": "Primary instructional point: place defects near log ends when the applicable market rewards clear cuttings or does not treat end defects the same way as mid-log face defects. Students should compare clear-face grading with board-recovery thinking. Secondary points: this rule is market-dependent, so it should be used only when the buyer, mill, or grading rule rewards the result. Model solution discussion should focus on cut positions at 8, 20, 32, 40 ft. Key teaching cues: frost crack seam at 11.0-13.3 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-047",
    "title": "instruction log 47",
    "species": "yellow birch",
    "totalLengthFt": 50.1,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 24.7
      },
      {
        "positionFt": 6,
        "diameterIn": 22.9
      },
      {
        "positionFt": 12,
        "diameterIn": 21.4
      },
      {
        "positionFt": 19,
        "diameterIn": 20.1
      },
      {
        "positionFt": 26,
        "diameterIn": 18.4
      },
      {
        "positionFt": 33,
        "diameterIn": 17.1
      },
      {
        "positionFt": 38,
        "diameterIn": 16
      },
      {
        "positionFt": 43,
        "diameterIn": 15.4
      },
      {
        "positionFt": 50.1,
        "diameterIn": 14.3
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 10,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.1,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 1.9
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0,
          "topIrregularityIn": 3.6,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": 1,
          "topIrregularityIn": 0.8,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": 1.9,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 3.6
        },
        {
          "positionFt": 24,
          "sweepOffsetIn": 2.5,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 29,
          "sweepOffsetIn": 4.5,
          "topIrregularityIn": 3.6,
          "bottomIrregularityIn": 1.1
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": 4.9,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 0.9
        },
        {
          "positionFt": 43,
          "sweepOffsetIn": 4.6,
          "topIrregularityIn": 2,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 50.1,
          "sweepOffsetIn": 4.4,
          "topIrregularityIn": 0.2,
          "bottomIrregularityIn": 3.8
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-047-d02",
        "type": "excellent clear faces",
        "startFt": 5,
        "endFt": 16,
        "faces": [],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "The surrounding quality section is intentionally strong."
      },
      {
        "id": "instruction-047-d03",
        "type": "bark inclusion",
        "startFt": 6,
        "endFt": 8,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      },
      {
        "id": "instruction-047-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 46,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-047-d03",
        "type": "bark inclusion",
        "startFt": 6,
        "endFt": 8,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "Yellow birch surface cues can be subtle and worth discussion."
      }
    ],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-047-butt-hollow",
        "type": "hollow_center",
        "startFt": 0.35,
        "endFt": 8.55,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "sourceSize": 9,
        "sourceAround": 46,
        "hollowTaperOutFt": 8.55,
        "visualOrientation": "horizontal",
        "productImpacts": {
          "slicer_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes veneer unless it is fully bucked out."
          },
          "rotary_veneer": {
            "eligible": false,
            "reason": "Butt hollow excludes rotary veneer unless it is fully bucked out."
          },
          "sawlog": {
            "eligible": true,
            "reason": "Moderate butt hollow may be tolerated or removed depending on grade and scale.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Moderate butt hollow center; it tapers out and may not justify sacrificing a valuable butt log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      12,
      24,
      36
    ],
    "modelSolutionExplanation": "Judge the butt hollow by size, scale loss, and surrounding quality; compare a short jump-butt or cull cut against keeping the hollow in an otherwise valuable sawlog.",
    "difficulty": "advanced",
    "teachingObjective": "Teach understand when a hole can remain in an otherwise valuable sawlog using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "large hole observation",
      "sawlog tolerance",
      "face evaluation",
      "avoid automatic cull"
    ],
    "instructionalNote": "Primary instructional point: do not automatically condemn a high-quality sawlog because of one large hole. Students should examine surrounding faces, diameter, and expected grade before removing too much wood. Secondary points: this reinforces the observation that fairly large holes can occur in valuable sawlogs, especially where the remaining quality section is strong. Model solution discussion should focus on cut positions at 12, 24, 36 ft. Key teaching cues: butt hollow center from 0-8.6 ft (sawlog grade and possible scale deduction). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-048",
    "title": "instruction log 48",
    "species": "black cherry",
    "totalLengthFt": 42.5,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 25.1
      },
      {
        "positionFt": 6,
        "diameterIn": 23.9
      },
      {
        "positionFt": 11,
        "diameterIn": 22.5
      },
      {
        "positionFt": 18,
        "diameterIn": 21.4
      },
      {
        "positionFt": 23,
        "diameterIn": 20.8
      },
      {
        "positionFt": 28,
        "diameterIn": 19.6
      },
      {
        "positionFt": 33,
        "diameterIn": 19
      },
      {
        "positionFt": 38,
        "diameterIn": 18.3
      },
      {
        "positionFt": 42.5,
        "diameterIn": 18.2
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 16,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.3,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 2,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 2.9
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": 2.5,
          "topIrregularityIn": 3.9,
          "bottomIrregularityIn": 1.8
        },
        {
          "positionFt": 17,
          "sweepOffsetIn": 4.2,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 4.1
        },
        {
          "positionFt": 23,
          "sweepOffsetIn": 6.4,
          "topIrregularityIn": 3.5,
          "bottomIrregularityIn": 3.3
        },
        {
          "positionFt": 30,
          "sweepOffsetIn": 6.8,
          "topIrregularityIn": 3.2,
          "bottomIrregularityIn": 0.8
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": 7.3,
          "topIrregularityIn": 1.5,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 42.5,
          "sweepOffsetIn": 7.4,
          "topIrregularityIn": 0.5,
          "bottomIrregularityIn": 3.1
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-048-d01",
        "type": "rotten section",
        "startFt": 19.1,
        "endFt": 23.4,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Remove the cull to raise grades on both sides."
      },
      {
        "id": "instruction-048-d02",
        "type": "sound knot",
        "startFt": 30.6,
        "endFt": 32.3,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Do not overreact after the cull section has already been isolated."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-048-d02",
        "type": "sound knot",
        "startFt": 30.6,
        "endFt": 32.3,
        "faces": [
          "face_4"
        ],
        "severity": "minor",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "minor"
          }
        },
        "notes": "Do not overreact after the cull section has already been isolated."
      }
    ],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-048-d01",
        "type": "rotten section",
        "startFt": 19.1,
        "endFt": 23.4,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "major",
        "visibility": "visible",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": false,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "severe"
          }
        },
        "notes": "Remove the cull to raise grades on both sides."
      }
    ],
    "modelSolutionCutPositionsFt": [
      12,
      19,
      23,
      33
    ],
    "modelSolutionExplanation": "Remove the central cull section when doing so upgrades the logs on both sides; this is the case where losing footage can recover more value.",
    "difficulty": "advanced",
    "teachingObjective": "Teach remove a cull section when it raises the value of neighboring logs using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "cull removal",
      "isolate defect",
      "grade improvement",
      "value vs footage tradeoff"
    ],
    "instructionalNote": "Primary instructional point: cull removal can increase total value when isolating a bad section raises the grade of adjacent logs. Students should compare the lost footage against the grade improvement on both sides. Secondary points: remove cull deliberately to implement a rule of thumb, not as a reflex, and avoid overreacting to minor defects after the main cull has been isolated. Model solution discussion should focus on cut positions at 12, 19, 23, 33 ft. Key teaching cues: rotten section at 19.1-23.4 ft (veneer and sawlog). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-049",
    "title": "instruction log 49",
    "species": "hard maple",
    "totalLengthFt": 39.7,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 23
      },
      {
        "positionFt": 6,
        "diameterIn": 20.5
      },
      {
        "positionFt": 13,
        "diameterIn": 19.4
      },
      {
        "positionFt": 19,
        "diameterIn": 17.3
      },
      {
        "positionFt": 26,
        "diameterIn": 15.8
      },
      {
        "positionFt": 31,
        "diameterIn": 15.3
      },
      {
        "positionFt": 39.7,
        "diameterIn": 13.3
      }
    ],
    "shapeProfile": {
      "sweepDirection": "left",
      "ovality": 0.86,
      "barkRidgeFrequency": 14,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": 0.1,
          "topIrregularityIn": 2.5,
          "bottomIrregularityIn": 2.6
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": -1,
          "topIrregularityIn": 1.3,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 11,
          "sweepOffsetIn": -1.9,
          "topIrregularityIn": 0.3,
          "bottomIrregularityIn": 1.8
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": -2.2,
          "topIrregularityIn": 1.7,
          "bottomIrregularityIn": 0.2
        },
        {
          "positionFt": 25,
          "sweepOffsetIn": -3.2,
          "topIrregularityIn": 0.2,
          "bottomIrregularityIn": 2
        },
        {
          "positionFt": 32,
          "sweepOffsetIn": -2.9,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 0.6
        },
        {
          "positionFt": 39.7,
          "sweepOffsetIn": -4.4,
          "topIrregularityIn": 1.4,
          "bottomIrregularityIn": 0
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-049-d01",
        "type": "short punky streak",
        "startFt": 7.5,
        "endFt": 9.1,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "May be retained in trim or low-impact position to reach minimum length."
      },
      {
        "id": "instruction-049-d02",
        "type": "open knot",
        "startFt": 26.6,
        "endFt": 27.8,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Provides a contrast with a defect that should not enter the best log."
      }
    ],
    "veneerOnlyDefects": [],
    "sawlogAffectingDefects": [
      {
        "id": "instruction-049-d01",
        "type": "short punky streak",
        "startFt": 7.5,
        "endFt": 9.1,
        "faces": [
          "face_3"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "May be retained in trim or low-impact position to reach minimum length."
      },
      {
        "id": "instruction-049-d02",
        "type": "open knot",
        "startFt": 26.6,
        "endFt": 27.8,
        "faces": [
          "face_1"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "sawlog_grade",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Counts against clear faces or clear cuttings and may lower sawlog grade.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Provides a contrast with a defect that should not enter the best log."
      }
    ],
    "bothVeneerAndSawlogDefects": [],
    "modelSolutionCutPositionsFt": [
      10,
      22,
      34
    ],
    "modelSolutionExplanation": "Retain a small low-impact section when it is needed to reach a required log length and does not reduce the grade under the applicable market specifications.",
    "difficulty": "advanced",
    "teachingObjective": "Teach retain small cull to reach minimum log length when grade is not harmed using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "cull retention",
      "minimum length",
      "trim allowance",
      "product specifications"
    ],
    "instructionalNote": "Primary instructional point: retain a small cull or low-quality section when it is needed to reach a required log length and does not lower the grade under the market rules. Students should distinguish between unacceptable cull and allowable trim or low-impact material. Secondary points: clear-face rules may treat this differently, so the decision depends on the product specification. Model solution discussion should focus on cut positions at 10, 22, 34 ft. Key teaching cues: short punky streak at 7.5-9.1 ft (sawlog grade); open knot at 26.6-27.8 ft (sawlog grade). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  },
  {
    "id": "instruction-050",
    "title": "instruction log 50",
    "species": "red oak",
    "totalLengthFt": 52.2,
    "diameterPoints": [
      {
        "positionFt": 0,
        "diameterIn": 26.9
      },
      {
        "positionFt": 6,
        "diameterIn": 25.6
      },
      {
        "positionFt": 13,
        "diameterIn": 23.2
      },
      {
        "positionFt": 19,
        "diameterIn": 22.8
      },
      {
        "positionFt": 25,
        "diameterIn": 21
      },
      {
        "positionFt": 30,
        "diameterIn": 20.2
      },
      {
        "positionFt": 35,
        "diameterIn": 20
      },
      {
        "positionFt": 42,
        "diameterIn": 18.2
      },
      {
        "positionFt": 52.2,
        "diameterIn": 17
      }
    ],
    "shapeProfile": {
      "sweepDirection": "right",
      "ovality": 0.86,
      "barkRidgeFrequency": 18,
      "shapePoints": [
        {
          "positionFt": 0,
          "sweepOffsetIn": -0.1,
          "topIrregularityIn": 2.4,
          "bottomIrregularityIn": 1.8
        },
        {
          "positionFt": 6,
          "sweepOffsetIn": 0.1,
          "topIrregularityIn": 2.1,
          "bottomIrregularityIn": 2
        },
        {
          "positionFt": 12,
          "sweepOffsetIn": 1,
          "topIrregularityIn": 2.6,
          "bottomIrregularityIn": 1.7
        },
        {
          "positionFt": 18,
          "sweepOffsetIn": 1,
          "topIrregularityIn": 2.8,
          "bottomIrregularityIn": 1
        },
        {
          "positionFt": 25,
          "sweepOffsetIn": 3.2,
          "topIrregularityIn": 1.1,
          "bottomIrregularityIn": 1.3
        },
        {
          "positionFt": 30,
          "sweepOffsetIn": 2.1,
          "topIrregularityIn": 0.2,
          "bottomIrregularityIn": 3.1
        },
        {
          "positionFt": 36,
          "sweepOffsetIn": 2.6,
          "topIrregularityIn": 0.7,
          "bottomIrregularityIn": 0.4
        },
        {
          "positionFt": 42,
          "sweepOffsetIn": 3.1,
          "topIrregularityIn": 1.9,
          "bottomIrregularityIn": 1.8
        },
        {
          "positionFt": 47,
          "sweepOffsetIn": 3.3,
          "topIrregularityIn": 1.3,
          "bottomIrregularityIn": 2.5
        },
        {
          "positionFt": 52.2,
          "sweepOffsetIn": 2.8,
          "topIrregularityIn": 0.1,
          "bottomIrregularityIn": 2.2
        }
      ]
    },
    "minUsableTopDiameterIn": 10,
    "visibleDefects": [
      {
        "id": "instruction-050-d01",
        "type": "root flare",
        "startFt": 0,
        "endFt": 2.5,
        "faces": [
          "face_1",
          "face_2",
          "face_3",
          "face_4"
        ],
        "severity": "moderate",
        "visibility": "visible",
        "impactClass": "informational",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Use as a visual cue or measurement issue rather than a direct grade defect.",
            "gradeImpact": "none"
          }
        },
        "notes": "Presentation and butt trimming can affect buyer reaction."
      },
      {
        "id": "instruction-050-d02",
        "type": "subtle seam",
        "startFt": 27.1,
        "endFt": 29.8,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Buyer interpretation matters; discuss market specs and relationships."
      },
      {
        "id": "instruction-050-d03",
        "type": "small bird peck",
        "startFt": 38.6,
        "endFt": 39.7,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A reminder that veneer defects and sawlog defects are not identical."
      }
    ],
    "veneerOnlyDefects": [
      {
        "id": "instruction-050-d03",
        "type": "small bird peck",
        "startFt": 38.6,
        "endFt": 39.7,
        "faces": [
          "face_1"
        ],
        "severity": "minor",
        "visibility": "subtle",
        "impactClass": "veneer_only",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "Visible sawlog faces can still meet grade if clear-face requirements are satisfied.",
            "gradeImpact": "none"
          }
        },
        "notes": "A reminder that veneer defects and sawlog defects are not identical."
      }
    ],
    "sawlogAffectingDefects": [],
    "bothVeneerAndSawlogDefects": [
      {
        "id": "instruction-050-d02",
        "type": "subtle seam",
        "startFt": 27.1,
        "endFt": 29.8,
        "faces": [
          "face_2"
        ],
        "severity": "moderate",
        "visibility": "subtle",
        "impactClass": "veneer_and_sawlog",
        "productImpacts": {
          "sawlog": {
            "eligible": true,
            "reason": "May remain in sawlog only if placed at an end or isolated from the highest-grade section.",
            "gradeImpact": "moderate"
          }
        },
        "notes": "Buyer interpretation matters; discuss market specs and relationships."
      }
    ],
    "modelSolutionCutPositionsFt": [
      3,
      15,
      27,
      39
    ],
    "modelSolutionExplanation": "Start with market specifications: trim the butt for presentation, know minimum lengths and diameters, and avoid making a technically legal log that the buyer will discount.",
    "difficulty": "advanced",
    "teachingObjective": "Teach know markets: trim, minimum lengths, buyer tolerance, presentation using a realistic stem with multiple faces, taper, and defect-placement tradeoffs.",
    "instructionalPointTags": [
      "market specs",
      "buyer tolerance",
      "trim",
      "minimums",
      "presentation",
      "veneer vs sawlog"
    ],
    "instructionalNote": "Primary instructional point: know the market before cutting. This stem is for discussing minimum lengths, trim, minimum top diameters, defect interpretation, buyer tolerance, and presentation. Secondary points: veneer and sawlog rules do not treat all defects the same way, and a technically legal log may still be discounted if it is poorly presented or mismatched to the buyer. Model solution discussion should focus on cut positions at 3, 15, 27, 39 ft. Key teaching cues: root flare at 0-2.5 ft (informational); subtle seam at 27.1-29.8 ft (veneer and sawlog). Ask students to first mark their own solution, then compare how their pattern changes scale, grade, product class, and buyer acceptability."
  }
];
