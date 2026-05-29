import type { Species } from "@/lib/types";

export interface GradingDefectSeed {
  code: string;
  positionFt: number;
  around: number;
  size: number;
  severity: number;
  index: number;
}

export interface GradingLogSeed {
  sourceId: string;
  species: Species;
  stations: { positionFt: number; diameterIn: number; sweepOffsetIn: number; sideOffsetIn: number }[];
  defects: GradingDefectSeed[];
}

export const GRADING_LOG_SEEDS: GradingLogSeed[] = [
  {
    "sourceId": "TREE1",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 18,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 39.37,
        "diameterIn": 17,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 54.79,
        "diameterIn": 16,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 4,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 14.44,
        "around": 13,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 32.81,
        "around": 15,
        "size": 6,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 4.27,
        "around": 35,
        "size": 2,
        "severity": 5,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE2",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 19.69,
        "diameterIn": 17,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 48.23,
        "diameterIn": 16,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 0
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 13,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 4,
        "size": 3,
        "severity": 9,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 13,
        "size": 8,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 3.94,
        "around": 33,
        "size": 5,
        "severity": 2,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE3",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 6.56,
        "diameterIn": 16,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 22.97,
        "diameterIn": 15,
        "sweepOffsetIn": 13,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 27.89,
        "diameterIn": 15,
        "sweepOffsetIn": 14,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 48.23,
        "diameterIn": 15,
        "sweepOffsetIn": 14,
        "sideOffsetIn": 1
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 31,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 22,
        "size": 5,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 31,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 4,
        "size": 9,
        "severity": 2,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 13.12,
        "around": 31,
        "size": 2,
        "severity": 2,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 45.93,
        "around": 4,
        "size": 2,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 45.93,
        "around": 31,
        "size": 2,
        "severity": 6,
        "index": 7
      }
    ]
  },
  {
    "sourceId": "TREE4",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 41.67,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 13.12,
        "around": 4,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 19.69,
        "around": 22,
        "size": 9,
        "severity": 11,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 26.25,
        "around": 7,
        "size": 3,
        "severity": 6,
        "index": 3
      }
    ]
  },
  {
    "sourceId": "TREE5",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 41.67,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 4,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 4,
        "size": 4,
        "severity": 4,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE6",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 18,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 33.46,
        "diameterIn": 16,
        "sweepOffsetIn": -11,
        "sideOffsetIn": 1
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 6,
        "size": 6.3,
        "severity": 6,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 29.53,
        "around": 33,
        "size": 12,
        "severity": 3,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE7",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 19.69,
        "diameterIn": 20,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 28.54,
        "diameterIn": 20,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 35.1,
        "diameterIn": 20,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 0
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 1,
        "size": 7,
        "severity": 15,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 22,
        "size": 5,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 30.51,
        "around": 4,
        "size": 6,
        "severity": 12,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 31,
        "size": 6,
        "severity": 6,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 19.69,
        "around": 13,
        "size": 4,
        "severity": 4,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 19.69,
        "around": 4,
        "size": 4,
        "severity": 4,
        "index": 6
      }
    ]
  },
  {
    "sourceId": "TREE8",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 23,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 16.4,
        "diameterIn": 21,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 41.67,
        "diameterIn": 20,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 0
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 4,
        "size": 13,
        "severity": 12,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 4,
        "size": 2,
        "severity": 2,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 19.69,
        "around": 4,
        "size": 2,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 32.81,
        "around": 4,
        "size": 13,
        "severity": 9,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 13,
        "size": 11,
        "severity": 8,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 15,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 26.25,
        "around": 12,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 32.81,
        "around": 13,
        "size": 11,
        "severity": 11,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 29.53,
        "around": 31,
        "size": 4,
        "severity": 2,
        "index": 9
      }
    ]
  },
  {
    "sourceId": "TREE9",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": -25,
        "sideOffsetIn": 16
      },
      {
        "positionFt": 19.69,
        "diameterIn": 14,
        "sweepOffsetIn": -27,
        "sideOffsetIn": 17
      },
      {
        "positionFt": 35.1,
        "diameterIn": 13,
        "sweepOffsetIn": -25,
        "sideOffsetIn": 14
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 13,
        "size": 6,
        "severity": 6,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 13,
        "size": 2,
        "severity": 2,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 17,
        "size": 3,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 29.53,
        "around": 27,
        "size": 6,
        "severity": 2,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE10",
    "species": "yellow birch",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 19.69,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 39.37,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 54.79,
        "diameterIn": 13,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 0
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 1,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 29.53,
        "around": 13,
        "size": 3,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 12.14,
        "around": 4,
        "size": 6,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 14,
        "size": 6,
        "severity": 3,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE11",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 13.12,
        "diameterIn": 18,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 28.54,
        "diameterIn": 18,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 4,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 26.25,
        "around": 13,
        "size": 2,
        "severity": 2,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 4.27,
        "around": 27,
        "size": 3,
        "severity": 6,
        "index": 3
      }
    ]
  },
  {
    "sourceId": "TREE12",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 19.69,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 28.54,
        "diameterIn": 15,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 1
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 7,
        "size": 7,
        "severity": 9,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 19.69,
        "around": 4,
        "size": 9,
        "severity": 9,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 13.12,
        "around": 11,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 13,
        "size": 2,
        "severity": 3,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE13",
    "species": "yellow birch",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 19.69,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 39.37,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 54.79,
        "diameterIn": 13,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 0
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 4,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 2,
        "size": 4,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 39.37,
        "around": 4,
        "size": 3,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 45.93,
        "around": 4,
        "size": 2,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 21.98,
        "around": 15,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 30.51,
        "around": 11,
        "size": 10,
        "severity": 10,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 22,
        "size": 5,
        "severity": 2,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 49.21,
        "around": 31,
        "size": 5,
        "severity": 2,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 40.35,
        "around": 15,
        "size": 4,
        "severity": 12,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 13,
        "size": 3,
        "severity": 9,
        "index": 10
      }
    ]
  },
  {
    "sourceId": "TREE14",
    "species": "yellow birch",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 19.69,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 39.37,
        "diameterIn": 14,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 54.79,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 43.31,
        "around": 13,
        "size": 5,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 25,
        "size": 6,
        "severity": 3,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE15",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 19.69,
        "diameterIn": 18,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 28.54,
        "diameterIn": 17,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 0
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 23.95,
        "around": 11,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 13.12,
        "around": 13,
        "size": 4,
        "severity": 10,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE16",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 19.69,
        "diameterIn": 18,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 28.54,
        "diameterIn": 17,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 0
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 21.33,
        "around": 13,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 13.12,
        "around": 12,
        "size": 4,
        "severity": 10,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 8,
        "size": 2,
        "severity": 2,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 8.86,
        "around": 31,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 37,
        "size": 2,
        "severity": 2,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 38,
        "size": 5,
        "severity": 9,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 22,
        "size": 7,
        "severity": 5,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE17",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 12,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 16.4,
        "diameterIn": 11,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 19.69,
        "diameterIn": 11,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 28.54,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 13,
        "size": 5,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 25,
        "size": 6,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 4.59,
        "around": 17,
        "size": 2,
        "severity": 4,
        "index": 3
      }
    ]
  },
  {
    "sourceId": "TREE18",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 16.4,
        "diameterIn": 18,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 19.69,
        "diameterIn": 18,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 28.54,
        "diameterIn": 18,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 17,
        "size": 2,
        "severity": 2,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 19,
        "size": 3,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 8.53,
        "around": 2,
        "size": 2,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 31,
        "size": 8,
        "severity": 8,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 3,
        "size": 5,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 8,
        "size": 2,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 5,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 24.28,
        "around": 33,
        "size": 2,
        "severity": 5,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE19",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 23,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 6.56,
        "diameterIn": 23,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 16.4,
        "diameterIn": 21,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 22.97,
        "diameterIn": 21,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 35.1,
        "diameterIn": 21,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 33.14,
        "around": 26,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 29,
        "size": 6,
        "severity": 8,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE20",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 16.4,
        "diameterIn": 14,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 35.1,
        "diameterIn": 13,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 9,
        "size": 2,
        "severity": 2,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 26.25,
        "around": 8,
        "size": 6,
        "severity": 6,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE21",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 16.4,
        "diameterIn": 19,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 26.25,
        "diameterIn": 18,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 35.1,
        "diameterIn": 18,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 5.58,
        "around": 0,
        "size": 2,
        "severity": 6,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 18,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 3,
        "size": 6,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 31,
        "size": 7,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 1,
        "size": 7,
        "severity": 14,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 29.53,
        "around": 15,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 7,
        "size": 4,
        "severity": 5,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 26.25,
        "around": 8,
        "size": 6,
        "severity": 6,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE22",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 9.84,
        "diameterIn": 20,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 19.69,
        "diameterIn": 19,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 26.25,
        "diameterIn": 17,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 48.23,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 9,
        "size": 7,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 34,
        "size": 6,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 29.53,
        "around": 34,
        "size": 7,
        "severity": 15,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 29.53,
        "around": 8,
        "size": 7,
        "severity": 7,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE23",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 13.12,
        "diameterIn": 16,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 26.25,
        "diameterIn": 15,
        "sweepOffsetIn": -11,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 32.81,
        "diameterIn": 14,
        "sweepOffsetIn": -13,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 42.65,
        "diameterIn": 14,
        "sweepOffsetIn": -9,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 48.23,
        "diameterIn": 14,
        "sweepOffsetIn": -8,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 10,
        "size": 7,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 8,
        "size": 7,
        "severity": 4,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE24",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 19.69,
        "diameterIn": 14,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 28.54,
        "diameterIn": 14,
        "sweepOffsetIn": 15,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 18,
        "size": 2,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 4,
        "size": 9,
        "severity": 7,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 36,
        "size": 8,
        "severity": 12,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 19.69,
        "around": 7,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 5,
        "size": 5,
        "severity": 6,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 10,
        "size": 3,
        "severity": 5,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 20,
        "size": 6,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 12,
        "size": 4,
        "severity": 4,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE25",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 13.12,
        "diameterIn": 18,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 28.54,
        "diameterIn": 18,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 10
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 35,
        "size": 3,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 30,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 12,
        "size": 3,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 13.12,
        "around": 13,
        "size": 4,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 14,
        "size": 4,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 34,
        "size": 6,
        "severity": 9,
        "index": 6
      }
    ]
  },
  {
    "sourceId": "TREE26",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 6.56,
        "diameterIn": 17,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 16.4,
        "diameterIn": 17,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 22.97,
        "diameterIn": 16,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 28.54,
        "diameterIn": 16,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 8
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 10,
        "size": 5,
        "severity": 8,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 19.69,
        "around": 12,
        "size": 5,
        "severity": 3,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE27",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 13.12,
        "diameterIn": 16,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 26.25,
        "diameterIn": 15,
        "sweepOffsetIn": 15,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 39.37,
        "diameterIn": 15,
        "sweepOffsetIn": 26,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 48.23,
        "diameterIn": 14,
        "sweepOffsetIn": 34,
        "sideOffsetIn": 2
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 29.53,
        "around": 1,
        "size": 9,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 4,
        "size": 9,
        "severity": 9,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 24,
        "size": 8,
        "severity": 5,
        "index": 3
      }
    ]
  },
  {
    "sourceId": "TREE28",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 13,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 19.69,
        "diameterIn": 12,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 26.25,
        "diameterIn": 12,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 35.1,
        "diameterIn": 11,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 13.78,
        "around": 7,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 31.17,
        "around": 22,
        "size": 5,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 5,
        "size": 3,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 30.51,
        "around": 33,
        "size": 2,
        "severity": 2,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE29",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 32,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 6.56,
        "diameterIn": 32,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 13.12,
        "diameterIn": 30,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 19.69,
        "diameterIn": 30,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 28.54,
        "diameterIn": 29,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 31,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 18,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 13.12,
        "around": 20,
        "size": 2,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 19.69,
        "around": 25,
        "size": 4,
        "severity": 4,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE30",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 22,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 13.12,
        "diameterIn": 17,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 26.25,
        "diameterIn": 16,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 35.1,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 31,
        "size": 7,
        "severity": 10,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 3.94,
        "around": 17,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 31.82,
        "around": 2,
        "size": 2,
        "severity": 2,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 15.75,
        "around": 11,
        "size": 3,
        "severity": 5,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 30.84,
        "around": 3,
        "size": 3,
        "severity": 4,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 12,
        "size": 4,
        "severity": 2,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 26.25,
        "around": 33,
        "size": 2,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 34.45,
        "around": 1,
        "size": 2,
        "severity": 2,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE31",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 24,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 13.12,
        "diameterIn": 22,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 26.25,
        "diameterIn": 22,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 35.1,
        "diameterIn": 22,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 29.53,
        "around": 9,
        "size": 2,
        "severity": 2,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 9,
        "size": 2,
        "severity": 2,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE32",
    "species": "red oak",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 18,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 39.37,
        "diameterIn": 17,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 54.79,
        "diameterIn": 16,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 1
      }
    ]
  },
  {
    "sourceId": "TREE33",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 41.67,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      }
    ],
    "defects": []
  },
  {
    "sourceId": "TREE34",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 41.67,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      }
    ],
    "defects": []
  },
  {
    "sourceId": "TREE35",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 35.1,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      }
    ],
    "defects": []
  },
  {
    "sourceId": "TREE36",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 16,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 35.1,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      }
    ],
    "defects": []
  },
  {
    "sourceId": "TREE37",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 16,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 28.54,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 22.97,
        "around": 26,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 3.28,
        "around": 0,
        "size": 2,
        "severity": 2,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE38",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 6.56,
        "diameterIn": 18,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 13.12,
        "diameterIn": 17,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 35.1,
        "diameterIn": 17,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 5
      }
    ],
    "defects": []
  },
  {
    "sourceId": "TREE39",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 28.54,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      }
    ],
    "defects": []
  },
  {
    "sourceId": "TREE40",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19.69,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 39.37,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 48.23,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 1
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 42.65,
        "around": 27,
        "size": 2,
        "severity": 2,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 6.56,
        "around": 4,
        "size": 2,
        "severity": 2,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE41",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 14,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 19.69,
        "diameterIn": 14,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 35.1,
        "diameterIn": 14,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 5
      }
    ],
    "defects": []
  },
  {
    "sourceId": "TREE42",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 14,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 19.69,
        "diameterIn": 14,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 35.1,
        "diameterIn": 14,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 9.84,
        "around": 0,
        "size": 2,
        "severity": 2,
        "index": 1
      }
    ]
  },
  {
    "sourceId": "TREE43",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 8,
        "diameterIn": 15,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 15,
        "diameterIn": 14,
        "sweepOffsetIn": -10,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 21,
        "diameterIn": 14,
        "sweepOffsetIn": -12,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 28,
        "diameterIn": 13,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 32,
        "diameterIn": 13,
        "sweepOffsetIn": -11,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 36,
        "diameterIn": 12,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 42,
        "diameterIn": 11,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 48,
        "diameterIn": 10,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 5.3,
        "around": 22,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "F",
        "positionFt": 19,
        "around": 26,
        "size": 0,
        "severity": 0,
        "index": 2
      },
      {
        "code": "F",
        "positionFt": 29,
        "around": 32,
        "size": 0,
        "severity": 0,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 35.2,
        "around": 5,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 39.7,
        "around": 1,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 40,
        "around": 28,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 42,
        "around": 16,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 45,
        "around": 32,
        "size": 7,
        "severity": 8,
        "index": 8
      },
      {
        "code": "BU",
        "positionFt": 47.5,
        "around": 2,
        "size": 3,
        "severity": 3,
        "index": 9
      }
    ]
  },
  {
    "sourceId": "TREE44",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 22,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 6,
        "diameterIn": 19,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 13,
        "diameterIn": 17,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 20,
        "diameterIn": 16,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 26,
        "diameterIn": 16,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 32,
        "diameterIn": 16,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 36,
        "diameterIn": 14,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 38.9,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 8.3,
        "around": 28,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 15,
        "around": 30,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "BU",
        "positionFt": 18.2,
        "around": 10,
        "size": 5,
        "severity": 9,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 24.5,
        "around": 21,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 27.7,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 28.7,
        "around": 12,
        "size": 9,
        "severity": 11,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 29.3,
        "around": 31,
        "size": 8,
        "severity": 12,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 30.3,
        "around": 35,
        "size": 9,
        "severity": 12,
        "index": 8
      },
      {
        "code": "BU",
        "positionFt": 30.5,
        "around": 30,
        "size": 7,
        "severity": 9,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 32,
        "around": 17,
        "size": 6,
        "severity": 11,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 33,
        "around": 31,
        "size": 7,
        "severity": 7,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 33.5,
        "around": 4,
        "size": 12,
        "severity": 12,
        "index": 12
      },
      {
        "code": "BU",
        "positionFt": 35,
        "around": 0,
        "size": 5,
        "severity": 5,
        "index": 13
      },
      {
        "code": "BU",
        "positionFt": 37,
        "around": 32,
        "size": 7,
        "severity": 7,
        "index": 14
      }
    ]
  },
  {
    "sourceId": "TREE45",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 8,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 20,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 29,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 34.6,
        "diameterIn": 11,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 2
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 11,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 12.9,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 20.1,
        "around": 2,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 22,
        "around": 3,
        "size": 5,
        "severity": 5,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 24.1,
        "around": 25,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 27.1,
        "around": 27,
        "size": 7,
        "severity": 7,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 27.3,
        "around": 9,
        "size": 5,
        "severity": 8,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 32.4,
        "around": 32,
        "size": 6,
        "severity": 6,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE46",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 4,
        "diameterIn": 17,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 10,
        "diameterIn": 16,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 18,
        "diameterIn": 16,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 25,
        "diameterIn": 14,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 28,
        "diameterIn": 13,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 31.6,
        "diameterIn": 12,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 11.2,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 11.6,
        "around": 5,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 13.3,
        "around": 34,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 15.3,
        "around": 35,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 17.5,
        "around": 33,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 17.6,
        "around": 27,
        "size": 3,
        "severity": 5,
        "index": 6
      },
      {
        "code": "BU",
        "positionFt": 20.6,
        "around": 11,
        "size": 5,
        "severity": 5,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 23.5,
        "around": 4,
        "size": 8,
        "severity": 8,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 26.9,
        "around": 9,
        "size": 7,
        "severity": 10,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 29,
        "around": 34,
        "size": 6,
        "severity": 6,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 30.4,
        "around": 27,
        "size": 6,
        "severity": 6,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 31.2,
        "around": 18,
        "size": 5,
        "severity": 5,
        "index": 12
      }
    ]
  },
  {
    "sourceId": "TREE47",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 7,
        "diameterIn": 17,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 14,
        "diameterIn": 16,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 23,
        "diameterIn": 14,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 31,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 35,
        "diameterIn": 12,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 38,
        "diameterIn": 11,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 40.4,
        "diameterIn": 10,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 19.2,
        "around": 0,
        "size": 6,
        "severity": 6,
        "index": 1
      },
      {
        "code": "BU",
        "positionFt": 20.5,
        "around": 30,
        "size": 6,
        "severity": 3,
        "index": 2
      },
      {
        "code": "BU",
        "positionFt": 24.2,
        "around": 30,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 28.2,
        "around": 25,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 28.9,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 29.7,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 32.3,
        "around": 9,
        "size": 11,
        "severity": 11,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 32.5,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 33.5,
        "around": 31,
        "size": 5,
        "severity": 5,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 33.8,
        "around": 2,
        "size": 6,
        "severity": 9,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 36,
        "around": 9,
        "size": 2,
        "severity": 2,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 36.5,
        "around": 29,
        "size": 3,
        "severity": 3,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 38.6,
        "around": 11,
        "size": 6,
        "severity": 6,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 38.7,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 14
      }
    ]
  },
  {
    "sourceId": "TREE48",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 6,
        "diameterIn": 16,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 14,
        "diameterIn": 15,
        "sweepOffsetIn": 16,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 20,
        "diameterIn": 15,
        "sweepOffsetIn": 15,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 25,
        "diameterIn": 15,
        "sweepOffsetIn": 13,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 28,
        "diameterIn": 15,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 30.5,
        "diameterIn": 14,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 10
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 4,
        "around": 1,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "BU",
        "positionFt": 15,
        "around": 30,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "BU",
        "positionFt": 16.5,
        "around": 35,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 22.5,
        "around": 30,
        "size": 6,
        "severity": 8,
        "index": 4
      },
      {
        "code": "BU",
        "positionFt": 25.8,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 27,
        "around": 21,
        "size": 6,
        "severity": 6,
        "index": 6
      }
    ]
  },
  {
    "sourceId": "TREE49",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 6,
        "diameterIn": 15,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 12,
        "diameterIn": 13,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 20,
        "diameterIn": 13,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 26,
        "diameterIn": 12,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 29.3,
        "diameterIn": 12,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 7.6,
        "around": 16,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 15.5,
        "around": 34,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 16,
        "around": 30,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 19.5,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 20.3,
        "around": 0,
        "size": 4,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 22.6,
        "around": 12,
        "size": 7,
        "severity": 7,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 22.7,
        "around": 6,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 24.9,
        "around": 7,
        "size": 3,
        "severity": 3,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 25.5,
        "around": 16,
        "size": 3,
        "severity": 3,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 27.8,
        "around": 14,
        "size": 5,
        "severity": 5,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 27.8,
        "around": 8,
        "size": 3,
        "severity": 3,
        "index": 11
      }
    ]
  },
  {
    "sourceId": "TREE50",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 8,
        "diameterIn": 15,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 16,
        "diameterIn": 14,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 21,
        "diameterIn": 14,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 27,
        "diameterIn": 13,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 33,
        "diameterIn": 12,
        "sweepOffsetIn": -8,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 39,
        "diameterIn": 10,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 41.8,
        "diameterIn": 9,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 15.4,
        "around": 30,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 7,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 22.6,
        "around": 25,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 24.5,
        "around": 1,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 25.4,
        "around": 27,
        "size": 8,
        "severity": 10,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 31,
        "around": 1,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 36.2,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 36.7,
        "around": 34,
        "size": 3,
        "severity": 3,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 38.4,
        "around": 32,
        "size": 6,
        "severity": 8,
        "index": 9
      }
    ]
  },
  {
    "sourceId": "TREE51",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 6,
        "diameterIn": 16,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 13,
        "diameterIn": 15,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 20,
        "diameterIn": 14,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 27,
        "diameterIn": 12,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 33,
        "diameterIn": 12,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 39.7,
        "diameterIn": 10,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 22.6,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 24,
        "around": 7,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 31.7,
        "around": 34,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 38.2,
        "around": 28,
        "size": 7,
        "severity": 8,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE52",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 7,
        "diameterIn": 15,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 14,
        "diameterIn": 14,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 20,
        "diameterIn": 13,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 25,
        "diameterIn": 11,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 30,
        "diameterIn": 11,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 33.6,
        "diameterIn": 11,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 5.3,
        "around": 34,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 20.5,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 23.3,
        "around": 27,
        "size": 6,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 23.7,
        "around": 10,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 27.8,
        "around": 9,
        "size": 4,
        "severity": 4,
        "index": 5
      },
      {
        "code": "BU",
        "positionFt": 31.9,
        "around": 34,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "DY",
        "positionFt": 25,
        "around": 33.6,
        "size": 0,
        "severity": 4,
        "index": 7
      }
    ]
  },
  {
    "sourceId": "TREE53",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 5,
        "diameterIn": 17,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 10,
        "diameterIn": 14,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 16,
        "diameterIn": 14,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 22,
        "diameterIn": 12,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 27,
        "diameterIn": 11,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 32,
        "diameterIn": 11,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 35,
        "diameterIn": 10,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 37.4,
        "diameterIn": 10,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 15,
        "around": 16,
        "size": 6,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 16,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 9,
        "size": 11,
        "severity": 11,
        "index": 4
      },
      {
        "code": "SE",
        "positionFt": 30,
        "around": 9,
        "size": 33,
        "severity": 6,
        "index": 5
      }
    ]
  },
  {
    "sourceId": "TREE54",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 7,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 15,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 22,
        "diameterIn": 13,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 28,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 33,
        "diameterIn": 10,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 37.5,
        "diameterIn": 9,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 13.5,
        "around": 5,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 16.3,
        "around": 32,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 22.3,
        "around": 32,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 23,
        "around": 6,
        "size": 5,
        "severity": 5,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 27.1,
        "around": 32,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 28,
        "around": 1,
        "size": 7,
        "severity": 7,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 29,
        "around": 27,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 32.6,
        "around": 7,
        "size": 3,
        "severity": 3,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 33.7,
        "around": 1,
        "size": 5,
        "severity": 8,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 35.7,
        "around": 28,
        "size": 6,
        "severity": 6,
        "index": 10
      }
    ]
  },
  {
    "sourceId": "TREE55",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 6,
        "diameterIn": 18,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 9,
        "diameterIn": 17,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 12,
        "diameterIn": 15,
        "sweepOffsetIn": 13,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 18,
        "diameterIn": 15,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 25,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 30,
        "diameterIn": 13,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 36.2,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 18,
        "around": 33,
        "size": 5,
        "severity": 7,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 20.6,
        "around": 27,
        "size": 5,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 22,
        "around": 31,
        "size": 5,
        "severity": 6,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 23.8,
        "around": 28,
        "size": 7,
        "severity": 8,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 23.8,
        "around": 4,
        "size": 7,
        "severity": 9,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 25.6,
        "around": 31,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 27.4,
        "around": 12,
        "size": 6,
        "severity": 6,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 29.3,
        "around": 6,
        "size": 5,
        "severity": 5,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 29.6,
        "around": 35,
        "size": 7,
        "severity": 7,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 30.9,
        "around": 0,
        "size": 5,
        "severity": 5,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 31.8,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 32.2,
        "around": 1,
        "size": 4,
        "severity": 4,
        "index": 13
      }
    ]
  },
  {
    "sourceId": "TREE56",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 6,
        "diameterIn": 14,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 12,
        "diameterIn": 13,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 17,
        "diameterIn": 13,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 22,
        "diameterIn": 13,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 28,
        "diameterIn": 13,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 33,
        "diameterIn": 13,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 37.1,
        "diameterIn": 12,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 10.9,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 15.6,
        "around": 5,
        "size": 7,
        "severity": 7,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 19.7,
        "around": 1,
        "size": 5,
        "severity": 9,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 22.1,
        "around": 32,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 28.2,
        "around": 16,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 29.8,
        "around": 32,
        "size": 7,
        "severity": 10,
        "index": 6
      },
      {
        "code": "BU",
        "positionFt": 33,
        "around": 6,
        "size": 5,
        "severity": 5,
        "index": 7
      },
      {
        "code": "BU",
        "positionFt": 34.8,
        "around": 7,
        "size": 3,
        "severity": 3,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE57",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 6,
        "diameterIn": 16,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 12,
        "diameterIn": 14,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 18,
        "diameterIn": 14,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 24,
        "diameterIn": 13,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 30,
        "diameterIn": 12,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 34,
        "diameterIn": 11,
        "sweepOffsetIn": -8,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 21,
        "around": 16,
        "size": 6,
        "severity": 6,
        "index": 1
      },
      {
        "code": "BU",
        "positionFt": 23.3,
        "around": 6,
        "size": 3,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 29,
        "around": 9,
        "size": 5,
        "severity": 7,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 29.7,
        "around": 2,
        "size": 5,
        "severity": 5,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 31.1,
        "around": 24,
        "size": 6,
        "severity": 6,
        "index": 5
      },
      {
        "code": "SR",
        "positionFt": 32,
        "around": 33,
        "size": 5,
        "severity": 14,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 32.7,
        "around": 5,
        "size": 7,
        "severity": 11,
        "index": 7
      }
    ]
  },
  {
    "sourceId": "TREE58",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 9,
        "diameterIn": 14,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 14,
        "diameterIn": 13,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 20,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 22,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 24.5,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 5.5,
        "around": 33,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 9,
        "around": 10,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 11,
        "around": 8,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 11.6,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "BU",
        "positionFt": 12.6,
        "around": 32,
        "size": 6,
        "severity": 6,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 13.1,
        "around": 3,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 11.9,
        "around": 15,
        "size": 5,
        "severity": 5,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 14.5,
        "around": 13,
        "size": 5,
        "severity": 5,
        "index": 8
      },
      {
        "code": "BU",
        "positionFt": 17,
        "around": 30,
        "size": 7,
        "severity": 7,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 18,
        "around": 16,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 18.2,
        "around": 2,
        "size": 3,
        "severity": 3,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 16.9,
        "around": 35,
        "size": 4,
        "severity": 5,
        "index": 12
      },
      {
        "code": "BU",
        "positionFt": 18.2,
        "around": 30,
        "size": 6,
        "severity": 6,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 19,
        "around": 4,
        "size": 2,
        "severity": 2,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 21.1,
        "around": 4,
        "size": 10,
        "severity": 10,
        "index": 15
      },
      {
        "code": "BU",
        "positionFt": 20.2,
        "around": 15,
        "size": 4,
        "severity": 4,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 23.1,
        "around": 26,
        "size": 8,
        "severity": 8,
        "index": 17
      },
      {
        "code": "K",
        "positionFt": 23.6,
        "around": 34,
        "size": 6,
        "severity": 10,
        "index": 18
      }
    ]
  },
  {
    "sourceId": "TREE59",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 6,
        "diameterIn": 17,
        "sweepOffsetIn": -10,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 12,
        "diameterIn": 16,
        "sweepOffsetIn": -12,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 23,
        "diameterIn": 14,
        "sweepOffsetIn": -14,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 32,
        "diameterIn": 13,
        "sweepOffsetIn": -15,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 38,
        "diameterIn": 13,
        "sweepOffsetIn": -14,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 41,
        "diameterIn": 11,
        "sweepOffsetIn": -14,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 47.7,
        "diameterIn": 10,
        "sweepOffsetIn": -9,
        "sideOffsetIn": 10
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 47.1,
        "around": 11,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 42.7,
        "around": 18,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 40,
        "around": 27,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 39.5,
        "around": 28,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 38.5,
        "around": 12,
        "size": 6,
        "severity": 6,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 39.3,
        "around": 18,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 38.4,
        "around": 20,
        "size": 8,
        "severity": 8,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 33.6,
        "around": 25,
        "size": 4,
        "severity": 6,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 33,
        "around": 29,
        "size": 7,
        "severity": 11,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 32,
        "around": 19,
        "size": 3,
        "severity": 3,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 28.1,
        "around": 0,
        "size": 8,
        "severity": 8,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 27,
        "around": 18,
        "size": 6,
        "severity": 8,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 25.2,
        "around": 21,
        "size": 9,
        "severity": 9,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 25.1,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 24.4,
        "around": 8,
        "size": 5,
        "severity": 5,
        "index": 15
      },
      {
        "code": "BU",
        "positionFt": 21.5,
        "around": 27,
        "size": 9,
        "severity": 9,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 17,
        "around": 18,
        "size": 6,
        "severity": 8,
        "index": 17
      },
      {
        "code": "K",
        "positionFt": 16.7,
        "around": 30,
        "size": 5,
        "severity": 5,
        "index": 18
      },
      {
        "code": "K",
        "positionFt": 14.3,
        "around": 5,
        "size": 6,
        "severity": 6,
        "index": 19
      },
      {
        "code": "BE",
        "positionFt": 7,
        "around": 9.5,
        "size": 0,
        "severity": 0,
        "index": 20
      }
    ]
  },
  {
    "sourceId": "TREE60",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 6,
        "diameterIn": 16,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 13,
        "diameterIn": 15,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 19,
        "diameterIn": 14,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 21,
        "diameterIn": 14,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 25,
        "diameterIn": 14,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 30.5,
        "diameterIn": 12,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 21.8,
        "around": 10,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 16.5,
        "around": 4,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 12,
        "around": 32,
        "size": 10,
        "severity": 10,
        "index": 3
      }
    ]
  },
  {
    "sourceId": "TREE61",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 6,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 12,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 18,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 23,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 25.9,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 24.8,
        "around": 4,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 24.1,
        "around": 32,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 20.9,
        "around": 26,
        "size": 6,
        "severity": 6,
        "index": 3
      }
    ]
  },
  {
    "sourceId": "TREE62",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 14,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 6,
        "diameterIn": 13,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 12,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 16,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 21,
        "diameterIn": 11,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 26,
        "diameterIn": 10,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 31,
        "diameterIn": 10,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 36.8,
        "diameterIn": 10,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 34,
        "around": 11,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 34.3,
        "around": 0,
        "size": 2,
        "severity": 2,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 32.9,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 32.1,
        "around": 28,
        "size": 5,
        "severity": 5,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 30.6,
        "around": 5,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 30,
        "around": 27,
        "size": 6,
        "severity": 8,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 29.9,
        "around": 26,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 28.2,
        "around": 0,
        "size": 6,
        "severity": 6,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 27.6,
        "around": 4,
        "size": 3,
        "severity": 3,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 23,
        "around": 12,
        "size": 7,
        "severity": 12,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 23.1,
        "around": 31,
        "size": 7,
        "severity": 7,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 20.6,
        "around": 4,
        "size": 5,
        "severity": 5,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 20.2,
        "around": 30,
        "size": 3,
        "severity": 3,
        "index": 13
      },
      {
        "code": "BU",
        "positionFt": 13.7,
        "around": 34,
        "size": 4,
        "severity": 6,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 9.9,
        "around": 27,
        "size": 3,
        "severity": 3,
        "index": 15
      }
    ]
  },
  {
    "sourceId": "TREE63",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 4,
        "diameterIn": 20,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 11,
        "diameterIn": 19,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 17,
        "diameterIn": 17,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 25,
        "diameterIn": 15,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 31,
        "diameterIn": 15,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 36,
        "diameterIn": 14,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 39.7,
        "diameterIn": 14,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 20.5,
        "around": 12,
        "size": 7,
        "severity": 9,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 27.5,
        "around": 26,
        "size": 7,
        "severity": 7,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 29.5,
        "around": 33,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 29.8,
        "around": 18,
        "size": 7,
        "severity": 7,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 30.7,
        "around": 10,
        "size": 6,
        "severity": 6,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 33.4,
        "around": 17,
        "size": 8,
        "severity": 8,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 34.1,
        "around": 29,
        "size": 8,
        "severity": 8,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 36,
        "around": 5,
        "size": 4,
        "severity": 4,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 39.2,
        "around": 12,
        "size": 7,
        "severity": 7,
        "index": 9
      }
    ]
  },
  {
    "sourceId": "TREE64",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 22,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 5,
        "diameterIn": 19,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 14,
        "diameterIn": 17,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 22,
        "diameterIn": 16,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 26,
        "diameterIn": 15,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 33,
        "diameterIn": 13,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 38.5,
        "diameterIn": 12,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 13.5,
        "around": 26,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 13.8,
        "around": 12,
        "size": 6,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 25.1,
        "around": 9,
        "size": 8,
        "severity": 14,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 26,
        "around": 34,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 31.3,
        "around": 27,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 34.5,
        "around": 5,
        "size": 5,
        "severity": 8,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 37.8,
        "around": 33,
        "size": 2,
        "severity": 2,
        "index": 7
      }
    ]
  },
  {
    "sourceId": "TREE65",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 23,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 2,
        "diameterIn": 23,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 5,
        "diameterIn": 21,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 9,
        "diameterIn": 20,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 14,
        "diameterIn": 19,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 20,
        "diameterIn": 18,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 26,
        "diameterIn": 18,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 32,
        "diameterIn": 17,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 37,
        "diameterIn": 16,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 41.6,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 40.9,
        "around": 6,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 39.2,
        "around": 30,
        "size": 7,
        "severity": 7,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 36.9,
        "around": 19,
        "size": 8,
        "severity": 8,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 33.3,
        "around": 35,
        "size": 8,
        "severity": 11,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 33.4,
        "around": 3,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 28.1,
        "around": 10,
        "size": 6,
        "severity": 6,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 25.9,
        "around": 2,
        "size": 5,
        "severity": 5,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 26.7,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 17.4,
        "around": 0,
        "size": 5,
        "severity": 5,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 15.6,
        "around": 27,
        "size": 6,
        "severity": 6,
        "index": 10
      }
    ]
  },
  {
    "sourceId": "TREE66",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 7,
        "diameterIn": 14,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 13,
        "diameterIn": 14,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 21,
        "diameterIn": 13,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 28,
        "diameterIn": 12,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 35,
        "diameterIn": 11,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 39.4,
        "diameterIn": 10,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 5.7,
        "around": 30,
        "size": 3,
        "severity": 6,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 8.8,
        "around": 1,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 13.6,
        "around": 1,
        "size": 3,
        "severity": 6,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 17.3,
        "around": 25,
        "size": 9,
        "severity": 13,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 19.4,
        "around": 16,
        "size": 6,
        "severity": 6,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 19.9,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 23.3,
        "around": 24,
        "size": 11,
        "severity": 10,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 24.3,
        "around": 10,
        "size": 5,
        "severity": 5,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 26.5,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 29.5,
        "around": 4,
        "size": 5,
        "severity": 5,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 30,
        "around": 34,
        "size": 4,
        "severity": 4,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 30.2,
        "around": 27,
        "size": 7,
        "severity": 7,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 31.7,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 33.4,
        "around": 35,
        "size": 3,
        "severity": 3,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 36.6,
        "around": 2,
        "size": 4,
        "severity": 4,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 36.6,
        "around": 5,
        "size": 4,
        "severity": 4,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 36.4,
        "around": 35,
        "size": 3,
        "severity": 3,
        "index": 17
      },
      {
        "code": "K",
        "positionFt": 37.7,
        "around": 13,
        "size": 9,
        "severity": 9,
        "index": 18
      }
    ]
  },
  {
    "sourceId": "TREE67",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 7,
        "diameterIn": 13,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 14,
        "diameterIn": 12,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 20,
        "diameterIn": 12,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 23,
        "diameterIn": 12,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 25,
        "diameterIn": 11,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 27,
        "diameterIn": 10,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 28.9,
        "diameterIn": 10,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 17.8,
        "around": 20,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 23.7,
        "around": 7,
        "size": 8,
        "severity": 10,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 26.4,
        "around": 22,
        "size": 6,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 28,
        "around": 16,
        "size": 6,
        "severity": 6,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE68",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 13.12,
        "diameterIn": 17,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 32.81,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 49.21,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 66.93,
        "diameterIn": 14,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 18.04,
        "around": 29,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 30.84,
        "around": 16,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 35.76,
        "around": 3,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 60.7,
        "around": 10,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 62.66,
        "around": 34,
        "size": 5,
        "severity": 5,
        "index": 5
      }
    ]
  },
  {
    "sourceId": "TREE69",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 5,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 10,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 18,
        "diameterIn": 12,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 23,
        "diameterIn": 11,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 28,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 32.1,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 30,
        "around": 13,
        "size": 7,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 26.4,
        "around": 32,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 21.4,
        "around": 28,
        "size": 5,
        "severity": 8,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 21.2,
        "around": 12,
        "size": 6,
        "severity": 6,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 17.4,
        "around": 34,
        "size": 8,
        "severity": 8,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 16.3,
        "around": 17,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "BU",
        "positionFt": 13,
        "around": 30,
        "size": 6,
        "severity": 6,
        "index": 7
      },
      {
        "code": "BU",
        "positionFt": 12.6,
        "around": 9,
        "size": 5,
        "severity": 5,
        "index": 8
      },
      {
        "code": "BU",
        "positionFt": 7.9,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 9
      }
    ]
  },
  {
    "sourceId": "TREE70",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 6,
        "diameterIn": 15,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 12,
        "diameterIn": 14,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 17,
        "diameterIn": 13,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 23,
        "diameterIn": 12,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 30,
        "diameterIn": 12,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 2
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 24.8,
        "around": 20,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 21.6,
        "around": 31,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "BU",
        "positionFt": 15,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 3
      }
    ]
  },
  {
    "sourceId": "TREE71",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 8,
        "diameterIn": 14,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 15,
        "diameterIn": 13,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 22,
        "diameterIn": 12,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 27,
        "diameterIn": 11,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 32.7,
        "diameterIn": 10,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 19.2,
        "around": 0,
        "size": 5,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 22.5,
        "around": 33,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 24.6,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 25.4,
        "around": 33,
        "size": 10,
        "severity": 10,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 26,
        "around": 10,
        "size": 7,
        "severity": 7,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 27.4,
        "around": 27,
        "size": 9,
        "severity": 10,
        "index": 6
      }
    ]
  },
  {
    "sourceId": "TREE72",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 6,
        "diameterIn": 14,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 11,
        "diameterIn": 14,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 16,
        "diameterIn": 13,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 24,
        "diameterIn": 12,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 28,
        "diameterIn": 11,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 32,
        "diameterIn": 11,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 34,
        "diameterIn": 10,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 15,
        "around": 7,
        "size": 5,
        "severity": 7,
        "index": 1
      },
      {
        "code": "BU",
        "positionFt": 20,
        "around": 31,
        "size": 6,
        "severity": 6,
        "index": 2
      },
      {
        "code": "BU",
        "positionFt": 22.7,
        "around": 26,
        "size": 6,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 26.7,
        "around": 20,
        "size": 7,
        "severity": 10,
        "index": 4
      },
      {
        "code": "BU",
        "positionFt": 29.8,
        "around": 31,
        "size": 5,
        "severity": 6,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 29.6,
        "around": 16,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 32.3,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 7
      },
      {
        "code": "BU",
        "positionFt": 33.7,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE73",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 6,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 13,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 20,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 27,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 29,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 31,
        "diameterIn": 12,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 32.6,
        "diameterIn": 11,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 34.4,
        "diameterIn": 11,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 15.2,
        "around": 8,
        "size": 6,
        "severity": 9,
        "index": 1
      },
      {
        "code": "BU",
        "positionFt": 25,
        "around": 30,
        "size": 4,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 27.3,
        "around": 33,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 33,
        "around": 26,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "BU",
        "positionFt": 34,
        "around": 29,
        "size": 4,
        "severity": 4,
        "index": 5
      }
    ]
  },
  {
    "sourceId": "TREE74",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 6,
        "diameterIn": 15,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 11,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 14,
        "diameterIn": 13,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 19,
        "diameterIn": 13,
        "sweepOffsetIn": 14,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 23,
        "diameterIn": 12,
        "sweepOffsetIn": 16,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 26,
        "diameterIn": 11,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 28,
        "diameterIn": 11,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 30.6,
        "diameterIn": 10,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "SR",
        "positionFt": 18.5,
        "around": 20,
        "size": 5,
        "severity": 9,
        "index": 1
      },
      {
        "code": "BU",
        "positionFt": 19,
        "around": 4,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "BU",
        "positionFt": 21.5,
        "around": 4,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 21.6,
        "around": 25,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 28.3,
        "around": 9,
        "size": 4,
        "severity": 4,
        "index": 5
      }
    ]
  },
  {
    "sourceId": "TREE75",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 2,
        "diameterIn": 18,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 7,
        "diameterIn": 16,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 13,
        "diameterIn": 15,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 18,
        "diameterIn": 15,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 20,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 24,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 28,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 31,
        "diameterIn": 12,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 34,
        "diameterIn": 12,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 36.6,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 9
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 34.5,
        "around": 9,
        "size": 6,
        "severity": 6,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 34.1,
        "around": 32,
        "size": 1,
        "severity": 1,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 32,
        "around": 3,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 31.6,
        "around": 26,
        "size": 5,
        "severity": 7,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 29.4,
        "around": 10,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 24.5,
        "around": 4,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 23.5,
        "around": 17,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 21.6,
        "around": 16,
        "size": 5,
        "severity": 5,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 21.4,
        "around": 7,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 21.3,
        "around": 2,
        "size": 5,
        "severity": 5,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 19.9,
        "around": 3,
        "size": 3,
        "severity": 3,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 14.4,
        "around": 11,
        "size": 5,
        "severity": 7,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 13,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 13
      }
    ]
  },
  {
    "sourceId": "TREE76",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 14,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 6,
        "diameterIn": 13,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 14,
        "diameterIn": 13,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 20,
        "diameterIn": 12,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 28,
        "diameterIn": 11,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 33,
        "diameterIn": 11,
        "sweepOffsetIn": -8,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 36,
        "diameterIn": 11,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 37.9,
        "diameterIn": 10,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 9
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 35.4,
        "around": 5,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 30,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 27.1,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 15.6,
        "around": 30,
        "size": 5,
        "severity": 5,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE77",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 6,
        "diameterIn": 15,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 12,
        "diameterIn": 14,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 20,
        "diameterIn": 14,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 27,
        "diameterIn": 12,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 30,
        "diameterIn": 10,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 35,
        "diameterIn": 10,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 41.1,
        "diameterIn": 8,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 9
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 40.4,
        "around": 30,
        "size": 7,
        "severity": 9,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 39,
        "around": 4,
        "size": 5,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 37.8,
        "around": 25,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 34.2,
        "around": 2,
        "size": 5,
        "severity": 6,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 29.5,
        "around": 7,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 28.7,
        "around": 29,
        "size": 5,
        "severity": 6,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 28,
        "around": 8,
        "size": 6,
        "severity": 11,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 27.6,
        "around": 31,
        "size": 6,
        "severity": 10,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE78",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 4,
        "diameterIn": 16,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 8,
        "diameterIn": 15,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 11,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 15.5,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 18,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 21,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 25,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 30,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 35,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 39.3,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 38.3,
        "around": 10,
        "size": 4,
        "severity": 8,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 36.8,
        "around": 4,
        "size": 6,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 34.4,
        "around": 2,
        "size": 9,
        "severity": 9,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 16,
        "around": 4,
        "size": 9,
        "severity": 12,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE79",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 5,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 10,
        "diameterIn": 14,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 15,
        "diameterIn": 13,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 19,
        "diameterIn": 13,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 24.2,
        "diameterIn": 12,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 23.5,
        "around": 5,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 23.1,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 21.5,
        "around": 28,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 21.2,
        "around": 10,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "BU",
        "positionFt": 19.5,
        "around": 31,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "BU",
        "positionFt": 7.1,
        "around": 28,
        "size": 3,
        "severity": 5,
        "index": 6
      }
    ]
  },
  {
    "sourceId": "TREE80",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 6,
        "diameterIn": 15,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 12,
        "diameterIn": 14,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 18,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 20,
        "diameterIn": 13,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 24,
        "diameterIn": 13,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 29,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 31.3,
        "diameterIn": 13,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 30.2,
        "around": 7,
        "size": 4,
        "severity": 9,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 30.2,
        "around": 17,
        "size": 5,
        "severity": 8,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 30.1,
        "around": 30,
        "size": 4,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 28.9,
        "around": 20,
        "size": 6,
        "severity": 8,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 27.5,
        "around": 16,
        "size": 4,
        "severity": 4,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 26,
        "around": 26,
        "size": 5,
        "severity": 6,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 25.4,
        "around": 25,
        "size": 4,
        "severity": 4,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 24.9,
        "around": 3,
        "size": 4,
        "severity": 6,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 24.1,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 23,
        "around": 33,
        "size": 7,
        "severity": 7,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 18,
        "size": 5,
        "severity": 6,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 18.7,
        "around": 31,
        "size": 3,
        "severity": 3,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 11.4,
        "around": 21,
        "size": 7,
        "severity": 7,
        "index": 13
      },
      {
        "code": "BU",
        "positionFt": 10.8,
        "around": 31,
        "size": 3,
        "severity": 3,
        "index": 14
      },
      {
        "code": "BU",
        "positionFt": 10.8,
        "around": 29,
        "size": 3,
        "severity": 3,
        "index": 15
      }
    ]
  },
  {
    "sourceId": "TREE81",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 5,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 12,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 20,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 27,
        "diameterIn": 12,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 32,
        "diameterIn": 11,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 35.7,
        "diameterIn": 11,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 35.5,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 34.4,
        "around": 10,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 32.6,
        "around": 35,
        "size": 4,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 29.6,
        "around": 28,
        "size": 7,
        "severity": 7,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 28,
        "around": 17,
        "size": 6,
        "severity": 12,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 26.8,
        "around": 31,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 22.6,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 24,
        "around": 20,
        "size": 4,
        "severity": 4,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 21.7,
        "around": 22,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 20.3,
        "around": 25,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 18.6,
        "around": 18,
        "size": 6,
        "severity": 6,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 16.7,
        "around": 20,
        "size": 7,
        "severity": 7,
        "index": 12
      }
    ]
  },
  {
    "sourceId": "TREE82",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 3,
        "diameterIn": 19,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 6,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 11,
        "diameterIn": 15,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 16,
        "diameterIn": 14,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 21,
        "diameterIn": 13,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 27,
        "diameterIn": 12,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 32,
        "diameterIn": 11,
        "sweepOffsetIn": -8,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 34.4,
        "diameterIn": 10,
        "sweepOffsetIn": -9,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 32.8,
        "around": 28,
        "size": 7,
        "severity": 10,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 31.4,
        "around": 5,
        "size": 7,
        "severity": 8,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 30.5,
        "around": 27,
        "size": 5,
        "severity": 7,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 29.1,
        "around": 16,
        "size": 7,
        "severity": 7,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 27.2,
        "around": 20,
        "size": 8,
        "severity": 12,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 26.5,
        "around": 32,
        "size": 8,
        "severity": 9,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 26.2,
        "around": 7,
        "size": 4,
        "severity": 4,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 25.1,
        "around": 32,
        "size": 6,
        "severity": 8,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 22.2,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 21.8,
        "around": 5,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 21.3,
        "around": 26,
        "size": 7,
        "severity": 11,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 20.5,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 17.9,
        "around": 4,
        "size": 6,
        "severity": 6,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 16.9,
        "around": 32,
        "size": 5,
        "severity": 5,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 15.3,
        "around": 0,
        "size": 2,
        "severity": 2,
        "index": 15
      },
      {
        "code": "BU",
        "positionFt": 9.1,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 16
      }
    ]
  },
  {
    "sourceId": "TREE83",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 5,
        "diameterIn": 15,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 9,
        "diameterIn": 14,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 14,
        "diameterIn": 13,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 19,
        "diameterIn": 13,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 23,
        "diameterIn": 13,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 27,
        "diameterIn": 12,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 30.6,
        "diameterIn": 12,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 27.5,
        "around": 35,
        "size": 6,
        "severity": 6,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 24.1,
        "around": 7,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 23.3,
        "around": 2,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 16.4,
        "around": 7,
        "size": 6,
        "severity": 6,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 11.7,
        "around": 26,
        "size": 3,
        "severity": 3,
        "index": 5
      }
    ]
  },
  {
    "sourceId": "TREE84",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 5,
        "diameterIn": 16,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 10,
        "diameterIn": 15,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 15,
        "diameterIn": 14,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 20,
        "diameterIn": 14,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 25,
        "diameterIn": 13,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 32,
        "diameterIn": 13,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 34.7,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 32.8,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 32.7,
        "around": 28,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 31.1,
        "around": 27,
        "size": 5,
        "severity": 7,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 30.4,
        "around": 27,
        "size": 5,
        "severity": 7,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 23.2,
        "around": 0,
        "size": 4,
        "severity": 8,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 21.4,
        "around": 18,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 0,
        "size": 4,
        "severity": 8,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 15.4,
        "around": 18,
        "size": 4,
        "severity": 7,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE85",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 6,
        "diameterIn": 14,
        "sweepOffsetIn": -10,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 11,
        "diameterIn": 14,
        "sweepOffsetIn": -14,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 15,
        "diameterIn": 14,
        "sweepOffsetIn": -10,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 18,
        "diameterIn": 13,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 23,
        "diameterIn": 13,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 28,
        "diameterIn": 12,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 33,
        "diameterIn": 11,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 37,
        "diameterIn": 10,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 40.3,
        "diameterIn": 9,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 10
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 38.6,
        "around": 0,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 39.5,
        "around": 27,
        "size": 2,
        "severity": 2,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 38.3,
        "around": 9,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 38.8,
        "around": 15,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 34.4,
        "around": 34,
        "size": 4,
        "severity": 4,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 34.1,
        "around": 28,
        "size": 5,
        "severity": 5,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 33.5,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 33.2,
        "around": 16,
        "size": 7,
        "severity": 7,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 32.9,
        "around": 12,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 32,
        "around": 15,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 31.9,
        "around": 20,
        "size": 6,
        "severity": 6,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 30,
        "around": 27,
        "size": 3,
        "severity": 3,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 30.1,
        "around": 18,
        "size": 3,
        "severity": 3,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 28.7,
        "around": 3,
        "size": 3,
        "severity": 3,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 26.7,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 26.4,
        "around": 10,
        "size": 4,
        "severity": 4,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 25.3,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 17
      },
      {
        "code": "K",
        "positionFt": 22.1,
        "around": 16,
        "size": 5,
        "severity": 5,
        "index": 18
      }
    ]
  },
  {
    "sourceId": "TREE86",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 3,
        "diameterIn": 16,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 8,
        "diameterIn": 15,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 15,
        "diameterIn": 13,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 22,
        "diameterIn": 12,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 29,
        "diameterIn": 12,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 35,
        "diameterIn": 11,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 38.3,
        "diameterIn": 11,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 10
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 29.1,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 25.5,
        "around": 30,
        "size": 11,
        "severity": 24,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE87",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 3,
        "diameterIn": 17,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 9,
        "diameterIn": 15,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 14,
        "diameterIn": 14,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 22,
        "diameterIn": 14,
        "sweepOffsetIn": -8,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 28,
        "diameterIn": 13,
        "sweepOffsetIn": -8,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 32,
        "diameterIn": 13,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 34.4,
        "diameterIn": 12,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 18,
        "around": 1,
        "size": 8,
        "severity": 8,
        "index": 1
      }
    ]
  },
  {
    "sourceId": "TREE88",
    "species": "yellow birch",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 3,
        "diameterIn": 17,
        "sweepOffsetIn": -9,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 5,
        "diameterIn": 16,
        "sweepOffsetIn": -13,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 7,
        "diameterIn": 16,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 13
      },
      {
        "positionFt": 10,
        "diameterIn": 16,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 12
      },
      {
        "positionFt": 12,
        "diameterIn": 14,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 16,
        "diameterIn": 13,
        "sweepOffsetIn": -12,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 20,
        "diameterIn": 13,
        "sweepOffsetIn": -10,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 24,
        "diameterIn": 12,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 26,
        "diameterIn": 12,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 29,
        "diameterIn": 11,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 32.3,
        "diameterIn": 11,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 1
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 22,
        "around": 3,
        "size": 10,
        "severity": 23,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 14,
        "around": 6,
        "size": 5,
        "severity": 8,
        "index": 2
      },
      {
        "code": "SE",
        "positionFt": 1.6,
        "around": 27,
        "size": 10,
        "severity": 27,
        "index": 3
      }
    ]
  },
  {
    "sourceId": "TREE89",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 24,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 5,
        "diameterIn": 20,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 11,
        "diameterIn": 18,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 15,
        "diameterIn": 18,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 20,
        "diameterIn": 15,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 26,
        "diameterIn": 14,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 30.8,
        "diameterIn": 13,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 30.3,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 26.9,
        "around": 32,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 20.3,
        "around": 4,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 16.5,
        "around": 12,
        "size": 10,
        "severity": 36,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 12.1,
        "around": 3,
        "size": 3,
        "severity": 3,
        "index": 5
      }
    ]
  },
  {
    "sourceId": "TREE90",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 3,
        "diameterIn": 16,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 6,
        "diameterIn": 15,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 12,
        "diameterIn": 15,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 17,
        "diameterIn": 15,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 20,
        "diameterIn": 15,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 23.5,
        "diameterIn": 15,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 26.6,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 25.8,
        "around": 9,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 22.6,
        "around": 0,
        "size": 10,
        "severity": 10,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 17.7,
        "around": 9,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 13.4,
        "around": 8,
        "size": 5,
        "severity": 5,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE91",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 5,
        "diameterIn": 18,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 9,
        "diameterIn": 17,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 14,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 20,
        "diameterIn": 15,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 26,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 30,
        "diameterIn": 15,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 34,
        "diameterIn": 14,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 37,
        "diameterIn": 14,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 35.5,
        "around": 8,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 34.8,
        "around": 32,
        "size": 10,
        "severity": 10,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 32.8,
        "around": 28,
        "size": 10,
        "severity": 10,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 32.3,
        "around": 11,
        "size": 7,
        "severity": 7,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 30,
        "around": 27,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 30,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 28.5,
        "around": 27,
        "size": 10,
        "severity": 10,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 27.2,
        "around": 10,
        "size": 4,
        "severity": 4,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 26.6,
        "around": 2,
        "size": 5,
        "severity": 5,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 25.2,
        "around": 3,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 22.9,
        "around": 15,
        "size": 5,
        "severity": 5,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 22.6,
        "around": 32,
        "size": 10,
        "severity": 10,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 18.9,
        "around": 16,
        "size": 6,
        "severity": 6,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 18.8,
        "around": 34,
        "size": 3,
        "severity": 3,
        "index": 14
      }
    ]
  },
  {
    "sourceId": "TREE92",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 5,
        "diameterIn": 17,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 10,
        "diameterIn": 16,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 16,
        "diameterIn": 15,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 21,
        "diameterIn": 14,
        "sweepOffsetIn": 13,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 23,
        "diameterIn": 14,
        "sweepOffsetIn": 13,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 26,
        "diameterIn": 14,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 29,
        "diameterIn": 13,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 33,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 36,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 38.8,
        "diameterIn": 11,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 36.8,
        "around": 22,
        "size": 10,
        "severity": 10,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 33.7,
        "around": 35,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 32.3,
        "around": 30,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 28.4,
        "around": 2,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 24.3,
        "around": 5,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 22.4,
        "around": 10,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 21,
        "around": 8,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 16.1,
        "around": 12,
        "size": 6,
        "severity": 6,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE93",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 5,
        "diameterIn": 19,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 11,
        "diameterIn": 17,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 16,
        "diameterIn": 16,
        "sweepOffsetIn": 17,
        "sideOffsetIn": 13
      },
      {
        "positionFt": 20,
        "diameterIn": 16,
        "sweepOffsetIn": 22,
        "sideOffsetIn": 21
      },
      {
        "positionFt": 22.8,
        "diameterIn": 16,
        "sweepOffsetIn": 24,
        "sideOffsetIn": 23
      },
      {
        "positionFt": 23.5,
        "diameterIn": 16,
        "sweepOffsetIn": 23,
        "sideOffsetIn": 20
      },
      {
        "positionFt": 24,
        "diameterIn": 13,
        "sweepOffsetIn": 19,
        "sideOffsetIn": 16
      },
      {
        "positionFt": 26,
        "diameterIn": 11,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 27.5,
        "diameterIn": 10,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 29,
        "diameterIn": 9,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 33.8,
        "diameterIn": 9,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 31.3,
        "around": 8,
        "size": 2,
        "severity": 2,
        "index": 1
      },
      {
        "code": "SR",
        "positionFt": 30.8,
        "around": 6,
        "size": 8,
        "severity": 12,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 27.9,
        "around": 16,
        "size": 6,
        "severity": 11,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 24.9,
        "around": 16,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 24.1,
        "around": 11,
        "size": 10,
        "severity": 10,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 25,
        "around": 20,
        "size": 5,
        "severity": 5,
        "index": 6
      },
      {
        "code": "F",
        "positionFt": 23,
        "around": 24,
        "size": 0,
        "severity": 0,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 20,
        "around": 3,
        "size": 3,
        "severity": 3,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 16.4,
        "around": 26,
        "size": 7,
        "severity": 10,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 15.5,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 13.6,
        "around": 2,
        "size": 5,
        "severity": 8,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 7.3,
        "around": 3,
        "size": 3,
        "severity": 3,
        "index": 12
      }
    ]
  },
  {
    "sourceId": "TREE94",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 23,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 6,
        "diameterIn": 18,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 10,
        "diameterIn": 18,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 12,
        "diameterIn": 16,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 17,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 23,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 28,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 33,
        "diameterIn": 11,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 37,
        "diameterIn": 11,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 39.7,
        "diameterIn": 11,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 38,
        "around": 18,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 36,
        "around": 31,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 30.2,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "F",
        "positionFt": 38,
        "around": 39.7,
        "size": 0,
        "severity": 0,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE95",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 4,
        "diameterIn": 16,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 8,
        "diameterIn": 15,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 14,
        "diameterIn": 13,
        "sweepOffsetIn": -8,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 17,
        "diameterIn": 13,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 19,
        "diameterIn": 13,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 22,
        "diameterIn": 13,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 27,
        "diameterIn": 13,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 32,
        "diameterIn": 12,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 37,
        "diameterIn": 10,
        "sweepOffsetIn": -8,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 41.7,
        "diameterIn": 10,
        "sweepOffsetIn": -8,
        "sideOffsetIn": 8
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 41.2,
        "around": 5,
        "size": 7,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 39.6,
        "around": 4,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 36.3,
        "around": 8,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 33.3,
        "around": 3,
        "size": 8,
        "severity": 14,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 34.4,
        "around": 33,
        "size": 4,
        "severity": 6,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 31.9,
        "around": 35,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 31.4,
        "around": 2,
        "size": 4,
        "severity": 4,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 29.2,
        "around": 10,
        "size": 8,
        "severity": 13,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 29.3,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 28.6,
        "around": 0,
        "size": 7,
        "severity": 7,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 27,
        "around": 8,
        "size": 3,
        "severity": 3,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 21.9,
        "around": 29,
        "size": 3,
        "severity": 3,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 7,
        "size": 5,
        "severity": 5,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 18.3,
        "around": 8,
        "size": 7,
        "severity": 7,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 12.3,
        "around": 4,
        "size": 3,
        "severity": 3,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 6.6,
        "around": 1,
        "size": 2,
        "severity": 2,
        "index": 16
      }
    ]
  },
  {
    "sourceId": "TREE96",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 22,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 2,
        "diameterIn": 20,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 7,
        "diameterIn": 18,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 13,
        "diameterIn": 18,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 20,
        "diameterIn": 17,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 26,
        "diameterIn": 16,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 35,
        "diameterIn": 15,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 37,
        "diameterIn": 13,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 39,
        "diameterIn": 13,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 42,
        "diameterIn": 12,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 44.6,
        "diameterIn": 12,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 43.3,
        "around": 7,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 42.8,
        "around": 33,
        "size": 6,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 41.7,
        "around": 34,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 40.6,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 40.6,
        "around": 32,
        "size": 8,
        "severity": 15,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 39.9,
        "around": 7,
        "size": 6,
        "severity": 6,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 36.1,
        "around": 26,
        "size": 7,
        "severity": 12,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 35.3,
        "around": 18,
        "size": 5,
        "severity": 5,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 33.2,
        "around": 5,
        "size": 3,
        "severity": 3,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 31.4,
        "around": 33,
        "size": 6,
        "severity": 6,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 31.1,
        "around": 15,
        "size": 11,
        "severity": 11,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 29.6,
        "around": 28,
        "size": 6,
        "severity": 6,
        "index": 12
      },
      {
        "code": "BU",
        "positionFt": 28.2,
        "around": 25,
        "size": 8,
        "severity": 8,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 24.4,
        "around": 26,
        "size": 9,
        "severity": 12,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 20,
        "around": 27,
        "size": 1,
        "severity": 1,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 18.3,
        "around": 30,
        "size": 2,
        "severity": 2,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 16.7,
        "around": 32,
        "size": 4,
        "severity": 4,
        "index": 17
      },
      {
        "code": "K",
        "positionFt": 12.3,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 18
      }
    ]
  },
  {
    "sourceId": "TREE97",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 4,
        "diameterIn": 15,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 9,
        "diameterIn": 14,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 15,
        "diameterIn": 13,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 20,
        "diameterIn": 12,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 24,
        "diameterIn": 12,
        "sweepOffsetIn": -9,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 26.4,
        "diameterIn": 12,
        "sweepOffsetIn": -11,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 30,
        "diameterIn": 12,
        "sweepOffsetIn": -10,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 33.5,
        "diameterIn": 12,
        "sweepOffsetIn": -9,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 36,
        "diameterIn": 11,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 39,
        "diameterIn": 11,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 42.8,
        "diameterIn": 11,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 42.2,
        "around": 7,
        "size": 7,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 39.5,
        "around": 18,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 37.6,
        "around": 15,
        "size": 7,
        "severity": 7,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 37,
        "around": 29,
        "size": 6,
        "severity": 6,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 33.6,
        "around": 0,
        "size": 7,
        "severity": 7,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 12,
        "around": 4,
        "size": 3,
        "severity": 3,
        "index": 6
      }
    ]
  },
  {
    "sourceId": "TREE98",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 29,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 4,
        "diameterIn": 23,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 6,
        "diameterIn": 22,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 7.8,
        "diameterIn": 21,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 12,
        "diameterIn": 21,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 16,
        "diameterIn": 21,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 26,
        "diameterIn": 19,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 31,
        "diameterIn": 18,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 35,
        "diameterIn": 18,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 38,
        "diameterIn": 17,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 42,
        "diameterIn": 17,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 44.1,
        "diameterIn": 17,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 40.5,
        "around": 21,
        "size": 5,
        "severity": 8,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 37.5,
        "around": 3,
        "size": 7,
        "severity": 7,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 34.4,
        "around": 30,
        "size": 6,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 33.9,
        "around": 10,
        "size": 13,
        "severity": 13,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 31.2,
        "around": 27,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 27.6,
        "around": 27,
        "size": 3,
        "severity": 3,
        "index": 6
      }
    ]
  },
  {
    "sourceId": "TREE99",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 5,
        "diameterIn": 16,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 10,
        "diameterIn": 14,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 15,
        "diameterIn": 13,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 20,
        "diameterIn": 13,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 23,
        "diameterIn": 13,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 28,
        "diameterIn": 12,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 32,
        "diameterIn": 12,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 38.6,
        "diameterIn": 11,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 43,
        "diameterIn": 10,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 47.9,
        "diameterIn": 10,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 47.2,
        "around": 10,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 46,
        "around": 26,
        "size": 6,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 45.9,
        "around": 8,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 44.5,
        "around": 35,
        "size": 6,
        "severity": 9,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 44.3,
        "around": 17,
        "size": 6,
        "severity": 8,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 43.9,
        "around": 22,
        "size": 6,
        "severity": 6,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 40.4,
        "around": 10,
        "size": 4,
        "severity": 4,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 39.5,
        "around": 30,
        "size": 9,
        "severity": 13,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 38,
        "around": 35,
        "size": 5,
        "severity": 5,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 37.2,
        "around": 9,
        "size": 5,
        "severity": 5,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 36.9,
        "around": 23,
        "size": 6,
        "severity": 6,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 34.3,
        "around": 0,
        "size": 6,
        "severity": 6,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 34.1,
        "around": 17,
        "size": 3,
        "severity": 3,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 33.4,
        "around": 3,
        "size": 7,
        "severity": 7,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 29.8,
        "around": 32,
        "size": 9,
        "severity": 9,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 29.5,
        "around": 9,
        "size": 5,
        "severity": 5,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 27.3,
        "around": 20,
        "size": 7,
        "severity": 7,
        "index": 17
      },
      {
        "code": "K",
        "positionFt": 15.2,
        "around": 30,
        "size": 6,
        "severity": 6,
        "index": 18
      },
      {
        "code": "BU",
        "positionFt": 10.8,
        "around": 6,
        "size": 7,
        "severity": 7,
        "index": 19
      },
      {
        "code": "K",
        "positionFt": 8.7,
        "around": 11,
        "size": 4,
        "severity": 4,
        "index": 20
      }
    ]
  },
  {
    "sourceId": "TREE100",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": -5,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 3,
        "diameterIn": 18,
        "sweepOffsetIn": -1,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 8,
        "diameterIn": 15,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 14
      },
      {
        "positionFt": 13,
        "diameterIn": 15,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 16
      },
      {
        "positionFt": 17,
        "diameterIn": 14,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 17
      },
      {
        "positionFt": 19,
        "diameterIn": 14,
        "sweepOffsetIn": -2,
        "sideOffsetIn": 14
      },
      {
        "positionFt": 22,
        "diameterIn": 13,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 13
      },
      {
        "positionFt": 26,
        "diameterIn": 13,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 14
      },
      {
        "positionFt": 31,
        "diameterIn": 13,
        "sweepOffsetIn": -10,
        "sideOffsetIn": 12
      },
      {
        "positionFt": 36,
        "diameterIn": 13,
        "sweepOffsetIn": -9,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 39,
        "diameterIn": 12,
        "sweepOffsetIn": -11,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 41.6,
        "diameterIn": 11,
        "sweepOffsetIn": -10,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 38.5,
        "around": 9,
        "size": 8,
        "severity": 16,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 36.8,
        "around": 30,
        "size": 7,
        "severity": 7,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 36.2,
        "around": 25,
        "size": 8,
        "severity": 11,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 36.6,
        "around": 7,
        "size": 6,
        "severity": 6,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 34.5,
        "around": 9,
        "size": 2,
        "severity": 2,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 32.3,
        "around": 5,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 30.6,
        "around": 11,
        "size": 7,
        "severity": 7,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 31.7,
        "around": 20,
        "size": 8,
        "severity": 12,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 20.7,
        "around": 27,
        "size": 7,
        "severity": 10,
        "index": 9
      },
      {
        "code": "SR",
        "positionFt": 19.3,
        "around": 7,
        "size": 11,
        "severity": 19,
        "index": 10
      }
    ]
  },
  {
    "sourceId": "TREE101",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 5,
        "diameterIn": 18,
        "sweepOffsetIn": -3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 11,
        "diameterIn": 18,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 17,
        "diameterIn": 18,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 25,
        "diameterIn": 16,
        "sweepOffsetIn": -7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 31,
        "diameterIn": 15,
        "sweepOffsetIn": -11,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 37.8,
        "diameterIn": 15,
        "sweepOffsetIn": -9,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 41,
        "diameterIn": 12,
        "sweepOffsetIn": -6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 46,
        "diameterIn": 12,
        "sweepOffsetIn": -4,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 44.6,
        "around": 14,
        "size": 7,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 42.2,
        "around": 22,
        "size": 7,
        "severity": 7,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 38.6,
        "around": 15,
        "size": 10,
        "severity": 10,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 38.4,
        "around": 35,
        "size": 8,
        "severity": 8,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 38.4,
        "around": 27,
        "size": 8,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 36.8,
        "around": 3,
        "size": 10,
        "severity": 10,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 36.6,
        "around": 9,
        "size": 8,
        "severity": 8,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 34.1,
        "around": 18,
        "size": 9,
        "severity": 9,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 31.9,
        "around": 30,
        "size": 7,
        "severity": 7,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 30.3,
        "around": 7,
        "size": 6,
        "severity": 6,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 29.3,
        "around": 14,
        "size": 7,
        "severity": 7,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 27.8,
        "around": 17,
        "size": 6,
        "severity": 6,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 25.7,
        "around": 35,
        "size": 8,
        "severity": 8,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 26,
        "around": 9,
        "size": 8,
        "severity": 8,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 26.2,
        "around": 20,
        "size": 6,
        "severity": 6,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 21.1,
        "around": 9,
        "size": 9,
        "severity": 9,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 20,
        "around": 9,
        "size": 9,
        "severity": 9,
        "index": 17
      },
      {
        "code": "K",
        "positionFt": 18.7,
        "around": 17,
        "size": 9,
        "severity": 9,
        "index": 18
      },
      {
        "code": "K",
        "positionFt": 13.6,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 19
      },
      {
        "code": "K",
        "positionFt": 12.7,
        "around": 9,
        "size": 8,
        "severity": 8,
        "index": 20
      }
    ]
  },
  {
    "sourceId": "TREE102",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 25,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 4,
        "diameterIn": 23,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 9,
        "diameterIn": 21,
        "sweepOffsetIn": 24,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 13,
        "diameterIn": 21,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 20,
        "diameterIn": 20,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 24,
        "diameterIn": 19,
        "sweepOffsetIn": 15,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 29,
        "diameterIn": 19,
        "sweepOffsetIn": 16,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 35,
        "diameterIn": 17,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 40,
        "diameterIn": 17,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 10
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 38.4,
        "around": 10,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 33.4,
        "around": 11,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 30.7,
        "around": 29,
        "size": 9,
        "severity": 14,
        "index": 3
      }
    ]
  },
  {
    "sourceId": "TREE103",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 3,
        "diameterIn": 19,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 8,
        "diameterIn": 19,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 12,
        "diameterIn": 18,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 17,
        "diameterIn": 17,
        "sweepOffsetIn": 13,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 22,
        "diameterIn": 16,
        "sweepOffsetIn": 15,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 27,
        "diameterIn": 15,
        "sweepOffsetIn": 19,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 31,
        "diameterIn": 14,
        "sweepOffsetIn": 19,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 35,
        "diameterIn": 14,
        "sweepOffsetIn": 20,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 37,
        "diameterIn": 12,
        "sweepOffsetIn": 15,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 40,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 43.3,
        "diameterIn": 11,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 13
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 36.5,
        "around": 9,
        "size": 11,
        "severity": 11,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 36.4,
        "around": 0,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 35.7,
        "around": 3,
        "size": 7,
        "severity": 7,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 34.3,
        "around": 33,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 34.2,
        "around": 16,
        "size": 4,
        "severity": 4,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 33.8,
        "around": 2,
        "size": 6,
        "severity": 8,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 29.5,
        "around": 2,
        "size": 5,
        "severity": 5,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 29.5,
        "around": 28,
        "size": 3,
        "severity": 3,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 33.4,
        "around": 2,
        "size": 5,
        "severity": 8,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 28.3,
        "around": 10,
        "size": 5,
        "severity": 6,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 28.2,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 23.7,
        "around": 4,
        "size": 4,
        "severity": 6,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 24.5,
        "around": 28,
        "size": 3,
        "severity": 4,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 23,
        "around": 27,
        "size": 5,
        "severity": 7,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 16.2,
        "around": 28,
        "size": 5,
        "severity": 5,
        "index": 15
      },
      {
        "code": "BU",
        "positionFt": 11.7,
        "around": 27,
        "size": 5,
        "severity": 7,
        "index": 16
      }
    ]
  },
  {
    "sourceId": "TREE106",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 4,
        "diameterIn": 18,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 9,
        "diameterIn": 18,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 12,
        "diameterIn": 16,
        "sweepOffsetIn": 19,
        "sideOffsetIn": 15
      },
      {
        "positionFt": 14.5,
        "diameterIn": 16,
        "sweepOffsetIn": 20,
        "sideOffsetIn": 15
      },
      {
        "positionFt": 16,
        "diameterIn": 16,
        "sweepOffsetIn": 14,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 18,
        "diameterIn": 14,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 22,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 27,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 32,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 36,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 39.7,
        "diameterIn": 11,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 38.2,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 36.8,
        "around": 3,
        "size": 6,
        "severity": 6,
        "index": 2
      },
      {
        "code": "BU",
        "positionFt": 35.4,
        "around": 8,
        "size": 5,
        "severity": 8,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 34.4,
        "around": 29,
        "size": 8,
        "severity": 16,
        "index": 4
      },
      {
        "code": "BU",
        "positionFt": 33.6,
        "around": 12,
        "size": 4,
        "severity": 4,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 29,
        "around": 30,
        "size": 5,
        "severity": 7,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 27.7,
        "around": 1,
        "size": 8,
        "severity": 13,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 24.6,
        "around": 4,
        "size": 5,
        "severity": 7,
        "index": 8
      },
      {
        "code": "BU",
        "positionFt": 21.3,
        "around": 9,
        "size": 5,
        "severity": 6,
        "index": 9
      },
      {
        "code": "BU",
        "positionFt": 19.5,
        "around": 33,
        "size": 5,
        "severity": 5,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 8.9,
        "around": 2,
        "size": 6,
        "severity": 14,
        "index": 11
      }
    ]
  },
  {
    "sourceId": "TREE107",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 23,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 1.3,
        "diameterIn": 20,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 6,
        "diameterIn": 18,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 10,
        "diameterIn": 17,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 12,
        "diameterIn": 17,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 15,
        "diameterIn": 16,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 20,
        "diameterIn": 14,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 22,
        "diameterIn": 14,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 24,
        "diameterIn": 14,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 28,
        "diameterIn": 13,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 32,
        "diameterIn": 13,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 34,
        "diameterIn": 13,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 33.2,
        "around": 9,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 30.4,
        "around": 30,
        "size": 7,
        "severity": 14,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 29.2,
        "around": 9,
        "size": 8,
        "severity": 11,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 26.1,
        "around": 1,
        "size": 6,
        "severity": 10,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 25.4,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 25.1,
        "around": 7,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 18.7,
        "around": 1,
        "size": 6,
        "severity": 6,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 17.3,
        "around": 6,
        "size": 5,
        "severity": 5,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 16.3,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 9.3,
        "around": 10,
        "size": 10,
        "severity": 10,
        "index": 10
      }
    ]
  },
  {
    "sourceId": "TREE108",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 23,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 3,
        "diameterIn": 21,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 7,
        "diameterIn": 19,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 12,
        "diameterIn": 18,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 16,
        "diameterIn": 17,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 20,
        "diameterIn": 16,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 26,
        "diameterIn": 16,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 30,
        "diameterIn": 15,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 32.5,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 28.5,
        "around": 28,
        "size": 7,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 28.3,
        "around": 9,
        "size": 7,
        "severity": 7,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 24.7,
        "around": 30,
        "size": 6,
        "severity": 6,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 18.3,
        "around": 30,
        "size": 7,
        "severity": 7,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 14.4,
        "around": 31,
        "size": 8,
        "severity": 8,
        "index": 5
      }
    ]
  },
  {
    "sourceId": "TREE109",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 22,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 4,
        "diameterIn": 17,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 10,
        "diameterIn": 16,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 17,
        "diameterIn": 15,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 24,
        "diameterIn": 14,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 28,
        "diameterIn": 14,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 31,
        "diameterIn": 13,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 36,
        "diameterIn": 12,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 39,
        "diameterIn": 12,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 43,
        "diameterIn": 11,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 46.4,
        "diameterIn": 10,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 40,
        "around": 2,
        "size": 7,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 38.2,
        "around": 0,
        "size": 5,
        "severity": 7,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 35.4,
        "around": 35,
        "size": 5,
        "severity": 7,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 39.7,
        "around": 26,
        "size": 8,
        "severity": 16,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 35.3,
        "around": 16,
        "size": 6,
        "severity": 7,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 32.2,
        "around": 35,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 32,
        "around": 9,
        "size": 5,
        "severity": 5,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 29.2,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 28.5,
        "around": 28,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 28,
        "around": 14,
        "size": 6,
        "severity": 6,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 26.4,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 22.7,
        "around": 35,
        "size": 3,
        "severity": 3,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 21.1,
        "around": 25,
        "size": 4,
        "severity": 4,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 26,
        "size": 3,
        "severity": 3,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 20.6,
        "around": 10,
        "size": 3,
        "severity": 3,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 19.8,
        "around": 6,
        "size": 4,
        "severity": 4,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 17.5,
        "around": 35,
        "size": 3,
        "severity": 3,
        "index": 17
      },
      {
        "code": "K",
        "positionFt": 16.2,
        "around": 31,
        "size": 7,
        "severity": 7,
        "index": 18
      },
      {
        "code": "K",
        "positionFt": 13,
        "around": 31,
        "size": 3,
        "severity": 3,
        "index": 19
      },
      {
        "code": "K",
        "positionFt": 12.5,
        "around": 32,
        "size": 3,
        "severity": 3,
        "index": 20
      }
    ]
  },
  {
    "sourceId": "TREE110",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 6,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 12,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 18,
        "diameterIn": 14,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 23,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 25.6,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 25.4,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 23.6,
        "around": 10,
        "size": 6,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 7.3,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 3
      }
    ]
  },
  {
    "sourceId": "TREE111",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 26,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 5,
        "diameterIn": 23,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 11,
        "diameterIn": 19,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 17,
        "diameterIn": 17,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 24,
        "diameterIn": 17,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 30,
        "diameterIn": 15,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 34,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 41,
        "diameterIn": 13,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 45,
        "diameterIn": 12,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 48.9,
        "diameterIn": 11,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 46.1,
        "around": 8,
        "size": 6,
        "severity": 8,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 45.6,
        "around": 30,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 43.7,
        "around": 30,
        "size": 7,
        "severity": 11,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 41.1,
        "around": 13,
        "size": 8,
        "severity": 13,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 40.4,
        "around": 7,
        "size": 9,
        "severity": 11,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 39.9,
        "around": 25,
        "size": 8,
        "severity": 11,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 38.4,
        "around": 11,
        "size": 9,
        "severity": 12,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 36.5,
        "around": 31,
        "size": 8,
        "severity": 13,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 36.5,
        "around": 18,
        "size": 10,
        "severity": 10,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 33.7,
        "around": 9,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 32,
        "around": 31,
        "size": 8,
        "severity": 11,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 31.4,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 30.5,
        "around": 34,
        "size": 6,
        "severity": 6,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 28.7,
        "around": 15,
        "size": 8,
        "severity": 12,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 27.7,
        "around": 24,
        "size": 7,
        "severity": 11,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 26.7,
        "around": 5,
        "size": 3,
        "severity": 3,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 18.2,
        "around": 14,
        "size": 7,
        "severity": 7,
        "index": 17
      },
      {
        "code": "K",
        "positionFt": 13.8,
        "around": 9,
        "size": 4,
        "severity": 4,
        "index": 18
      },
      {
        "code": "K",
        "positionFt": 13.7,
        "around": 10,
        "size": 5,
        "severity": 5,
        "index": 19
      },
      {
        "code": "K",
        "positionFt": 10.3,
        "around": 7,
        "size": 4,
        "severity": 4,
        "index": 20
      }
    ]
  },
  {
    "sourceId": "TREE112",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 23,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 4,
        "diameterIn": 22,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 9,
        "diameterIn": 21,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 13,
        "diameterIn": 20,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 20,
        "diameterIn": 19,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 29,
        "diameterIn": 17,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 34,
        "diameterIn": 17,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 39,
        "diameterIn": 16,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 43.8,
        "diameterIn": 16,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 43.7,
        "around": 9,
        "size": 6,
        "severity": 6,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 41.6,
        "around": 32,
        "size": 12,
        "severity": 16,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 33.7,
        "around": 7,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 36.4,
        "around": 31,
        "size": 7,
        "severity": 7,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 25.5,
        "around": 27,
        "size": 11,
        "severity": 11,
        "index": 5
      }
    ]
  },
  {
    "sourceId": "TREE113",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 2,
        "diameterIn": 17,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 6,
        "diameterIn": 16,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 13,
        "diameterIn": 15,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 19,
        "diameterIn": 15,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 12
      },
      {
        "positionFt": 25,
        "diameterIn": 14,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 27,
        "diameterIn": 14,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 16
      },
      {
        "positionFt": 29,
        "diameterIn": 13,
        "sweepOffsetIn": 13,
        "sideOffsetIn": 20
      },
      {
        "positionFt": 30,
        "diameterIn": 10,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 19
      },
      {
        "positionFt": 34,
        "diameterIn": 9,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 14
      },
      {
        "positionFt": 36,
        "diameterIn": 9,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 39.1,
        "diameterIn": 8,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 38.4,
        "around": 10,
        "size": 5,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 36.8,
        "around": 17,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 36.8,
        "around": 29,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 35.5,
        "around": 10,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 35.4,
        "around": 26,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 33.3,
        "around": 34,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "F",
        "positionFt": 28.4,
        "around": 30.5,
        "size": 0,
        "severity": 0,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 27.9,
        "around": 3,
        "size": 5,
        "severity": 5,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 26.2,
        "around": 12,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 25.5,
        "around": 34,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 23.7,
        "around": 9,
        "size": 4,
        "severity": 4,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 22,
        "around": 9,
        "size": 5,
        "severity": 5,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 20.1,
        "around": 10,
        "size": 6,
        "severity": 6,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 14.1,
        "around": 29,
        "size": 5,
        "severity": 5,
        "index": 14
      }
    ]
  },
  {
    "sourceId": "TREE114",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 2,
        "diameterIn": 20,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 6,
        "diameterIn": 18,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 10,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 14,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 20,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 27,
        "diameterIn": 14,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 29,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 30,
        "diameterIn": 13,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 31.4,
        "diameterIn": 13,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 8
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 30.9,
        "around": 8,
        "size": 7,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 29,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 26,
        "around": 4,
        "size": 8,
        "severity": 8,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 15.2,
        "around": 34,
        "size": 3,
        "severity": 6,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE115",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 23,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 3,
        "diameterIn": 20,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 9,
        "diameterIn": 18,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 16,
        "diameterIn": 18,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 20,
        "diameterIn": 17,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 25,
        "diameterIn": 16,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 30.8,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "F",
        "positionFt": 29.4,
        "around": 30.8,
        "size": 0,
        "severity": 0,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 25.6,
        "around": 26,
        "size": 10,
        "severity": 15,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 24.3,
        "around": 2,
        "size": 7,
        "severity": 7,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 21,
        "around": 5,
        "size": 6,
        "severity": 10,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 20,
        "around": 9,
        "size": 13,
        "severity": 18,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 17.4,
        "around": 31,
        "size": 7,
        "severity": 7,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 16.9,
        "around": 20,
        "size": 12,
        "severity": 16,
        "index": 7
      }
    ]
  },
  {
    "sourceId": "TREE116",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 6,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 10,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 16,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 20.5,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 23.6,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 26,
        "diameterIn": 14,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 28,
        "diameterIn": 13,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 31.8,
        "diameterIn": 12,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 26.9,
        "around": 1,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 16,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 13.9,
        "around": 17,
        "size": 4,
        "severity": 4,
        "index": 3
      }
    ]
  },
  {
    "sourceId": "TREE117",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 22,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 3,
        "diameterIn": 21,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 8,
        "diameterIn": 18,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 15,
        "diameterIn": 16,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 18,
        "diameterIn": 16,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 22,
        "diameterIn": 16,
        "sweepOffsetIn": 18,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 26,
        "diameterIn": 15,
        "sweepOffsetIn": 25,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 33,
        "diameterIn": 15,
        "sweepOffsetIn": 19,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 35,
        "diameterIn": 14,
        "sweepOffsetIn": 20,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 37,
        "diameterIn": 11,
        "sweepOffsetIn": 16,
        "sideOffsetIn": 12
      },
      {
        "positionFt": 41,
        "diameterIn": 9,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 12
      },
      {
        "positionFt": 45.8,
        "diameterIn": 9,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 11
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 40.3,
        "around": 13,
        "size": 6,
        "severity": 6,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 39.2,
        "around": 8,
        "size": 6,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 38.8,
        "around": 29,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 37.7,
        "around": 15,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "F",
        "positionFt": 35.2,
        "around": 37,
        "size": 0,
        "severity": 0,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 28.7,
        "around": 29,
        "size": 4,
        "severity": 4,
        "index": 6
      }
    ]
  },
  {
    "sourceId": "TREE118",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 4,
        "diameterIn": 17,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 10,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 15,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 20,
        "diameterIn": 15,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 25,
        "diameterIn": 14,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 30,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 35,
        "diameterIn": 13,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 40,
        "diameterIn": 12,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 43.1,
        "diameterIn": 11,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 9
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 41.8,
        "around": 0,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 41.5,
        "around": 13,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 39.6,
        "around": 6,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 37.9,
        "around": 29,
        "size": 5,
        "severity": 5,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 34.7,
        "around": 8,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 34.6,
        "around": 4,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 33.1,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 34.1,
        "around": 14,
        "size": 6,
        "severity": 6,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 33.7,
        "around": 16,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 31.4,
        "around": 15,
        "size": 5,
        "severity": 5,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 31.4,
        "around": 30,
        "size": 5,
        "severity": 5,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 30.9,
        "around": 5,
        "size": 4,
        "severity": 4,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 30.6,
        "around": 4,
        "size": 3,
        "severity": 3,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 29.2,
        "around": 28,
        "size": 5,
        "severity": 5,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 27.3,
        "around": 17,
        "size": 5,
        "severity": 5,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 24,
        "around": 27,
        "size": 7,
        "severity": 7,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 21,
        "around": 5,
        "size": 4,
        "severity": 4,
        "index": 17
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 7,
        "size": 5,
        "severity": 5,
        "index": 18
      },
      {
        "code": "K",
        "positionFt": 17.5,
        "around": 28,
        "size": 5,
        "severity": 5,
        "index": 19
      },
      {
        "code": "K",
        "positionFt": 17,
        "around": 8,
        "size": 5,
        "severity": 5,
        "index": 20
      }
    ]
  },
  {
    "sourceId": "TREE119",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 4,
        "diameterIn": 17,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 8,
        "diameterIn": 16,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 13,
        "diameterIn": 15,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 18,
        "diameterIn": 14,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 23,
        "diameterIn": 13,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 26,
        "diameterIn": 13,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 28,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 29,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 32,
        "diameterIn": 12,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 36.5,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "BU",
        "positionFt": 35,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 34.1,
        "around": 1,
        "size": 8,
        "severity": 8,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 30.6,
        "around": 17,
        "size": 9,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 28.4,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 27.4,
        "around": 3,
        "size": 8,
        "severity": 14,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 26.2,
        "around": 0,
        "size": 4,
        "severity": 6,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 23.9,
        "around": 7,
        "size": 4,
        "severity": 6,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 24.5,
        "around": 21,
        "size": 6,
        "severity": 6,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 21.6,
        "around": 9,
        "size": 7,
        "severity": 15,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 21.6,
        "around": 29,
        "size": 6,
        "severity": 9,
        "index": 10
      },
      {
        "code": "BU",
        "positionFt": 20.5,
        "around": 7,
        "size": 4,
        "severity": 16,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 21.6,
        "around": 3,
        "size": 4,
        "severity": 7,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 15.1,
        "around": 18,
        "size": 6,
        "severity": 6,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 14.5,
        "around": 28,
        "size": 4,
        "severity": 4,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 10,
        "around": 35,
        "size": 5,
        "severity": 10,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 8,
        "around": 19,
        "size": 6,
        "severity": 10,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 7.4,
        "around": 30,
        "size": 5,
        "severity": 5,
        "index": 17
      }
    ]
  },
  {
    "sourceId": "TREE120",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 5,
        "diameterIn": 17,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 9,
        "diameterIn": 16,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 11,
        "diameterIn": 16,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 14,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 16,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 19,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 21,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 25,
        "diameterIn": 11,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 28.6,
        "diameterIn": 11,
        "sweepOffsetIn": 13,
        "sideOffsetIn": 9
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 28.5,
        "around": 30,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 27.8,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 27.6,
        "around": 7,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 25.6,
        "around": 25,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 18.2,
        "around": 27,
        "size": 6,
        "severity": 6,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 15.6,
        "around": 1,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 13.7,
        "around": 28,
        "size": 9,
        "severity": 9,
        "index": 7
      },
      {
        "code": "F",
        "positionFt": 10.7,
        "around": 13.9,
        "size": 0,
        "severity": 0,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 9.6,
        "around": 4,
        "size": 7,
        "severity": 7,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 9.6,
        "around": 25,
        "size": 7,
        "severity": 12,
        "index": 10
      }
    ]
  },
  {
    "sourceId": "TREE121",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 5,
        "diameterIn": 15,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 10,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 14,
        "diameterIn": 13,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 18,
        "diameterIn": 13,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 22,
        "diameterIn": 13,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 24,
        "diameterIn": 13,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 27.1,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "F",
        "positionFt": 26.4,
        "around": 27.1,
        "size": 0,
        "severity": 0,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 25.4,
        "around": 5,
        "size": 6,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 23.1,
        "around": 9,
        "size": 6,
        "severity": 10,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 22.9,
        "around": 6,
        "size": 6,
        "severity": 9,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 21,
        "around": 31,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 21.6,
        "around": 12,
        "size": 6,
        "severity": 6,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 22.5,
        "around": 6,
        "size": 5,
        "severity": 5,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 19,
        "around": 0,
        "size": 7,
        "severity": 10,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 18.8,
        "around": 10,
        "size": 5,
        "severity": 5,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 13,
        "around": 4,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 16.7,
        "around": 19,
        "size": 4,
        "severity": 4,
        "index": 11
      },
      {
        "code": "BU",
        "positionFt": 11.5,
        "around": 30,
        "size": 9,
        "severity": 9,
        "index": 12
      }
    ]
  },
  {
    "sourceId": "TREE122",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 4,
        "diameterIn": 15,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 9,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 16,
        "diameterIn": 13,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 20,
        "diameterIn": 13,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 25,
        "diameterIn": 12,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 29,
        "diameterIn": 11,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 30,
        "diameterIn": 11,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 34.2,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 9
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 31,
        "around": 28,
        "size": 6,
        "severity": 6,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 23.2,
        "around": 2,
        "size": 10,
        "severity": 14,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 19,
        "around": 5,
        "size": 10,
        "severity": 12,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 18.4,
        "around": 27,
        "size": 7,
        "severity": 7,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 14.9,
        "around": 0,
        "size": 7,
        "severity": 10,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 13.2,
        "around": 30,
        "size": 9,
        "severity": 9,
        "index": 6
      },
      {
        "code": "SR",
        "positionFt": 10.8,
        "around": 4,
        "size": 6,
        "severity": 10,
        "index": 7
      }
    ]
  },
  {
    "sourceId": "TREE123",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 5,
        "diameterIn": 16,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 8,
        "diameterIn": 15,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 11,
        "diameterIn": 15,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 15,
        "diameterIn": 14,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 19,
        "diameterIn": 12,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 23,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 29,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 36,
        "diameterIn": 10,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 42,
        "diameterIn": 10,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 46.1,
        "diameterIn": 9,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 10
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 44.3,
        "around": 28,
        "size": 7,
        "severity": 10,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 38.8,
        "around": 29,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 37.6,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 36.5,
        "around": 31,
        "size": 5,
        "severity": 5,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 35.3,
        "around": 27,
        "size": 7,
        "severity": 7,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 30.4,
        "around": 27,
        "size": 2,
        "severity": 2,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 26.2,
        "around": 0,
        "size": 8,
        "severity": 7,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 22.4,
        "around": 34,
        "size": 6,
        "severity": 8,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 18.3,
        "around": 2,
        "size": 3,
        "severity": 3,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 13.9,
        "around": 31,
        "size": 6,
        "severity": 6,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 7.9,
        "around": 20,
        "size": 5,
        "severity": 9,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 6.3,
        "around": 35,
        "size": 3,
        "severity": 3,
        "index": 12
      }
    ]
  },
  {
    "sourceId": "TREE124",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 3,
        "diameterIn": 20,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 9,
        "diameterIn": 19,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 15,
        "diameterIn": 17,
        "sweepOffsetIn": 14,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 21,
        "diameterIn": 17,
        "sweepOffsetIn": 17,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 25,
        "diameterIn": 15,
        "sweepOffsetIn": 19,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 31,
        "diameterIn": 15,
        "sweepOffsetIn": 16,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 35,
        "diameterIn": 15,
        "sweepOffsetIn": 16,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 40,
        "diameterIn": 15,
        "sweepOffsetIn": 15,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 42,
        "diameterIn": 14,
        "sweepOffsetIn": 14,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 48,
        "diameterIn": 14,
        "sweepOffsetIn": 14,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 51.9,
        "diameterIn": 11,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 49.5,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 46.5,
        "around": 22,
        "size": 13,
        "severity": 24,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 42.5,
        "around": 35,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 39.4,
        "around": 9,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 33.2,
        "around": 9,
        "size": 9,
        "severity": 15,
        "index": 5
      },
      {
        "code": "BU",
        "positionFt": 30,
        "around": 27,
        "size": 10,
        "severity": 10,
        "index": 6
      },
      {
        "code": "SR",
        "positionFt": 1.2,
        "around": 8,
        "size": 7,
        "severity": 28,
        "index": 7
      }
    ]
  },
  {
    "sourceId": "TREE125",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 6,
        "diameterIn": 13,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 8,
        "diameterIn": 13,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 11,
        "diameterIn": 13,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 14,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 19,
        "diameterIn": 12,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 23,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 25,
        "diameterIn": 10,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 28,
        "diameterIn": 10,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 9
      }
    ],
    "defects": [
      {
        "code": "F",
        "positionFt": 27,
        "around": 28,
        "size": 0,
        "severity": 0,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 26.5,
        "around": 30,
        "size": 6,
        "severity": 8,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 26.3,
        "around": 5,
        "size": 4,
        "severity": 7,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 24.1,
        "around": 27,
        "size": 4,
        "severity": 9,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 22,
        "around": 11,
        "size": 2,
        "severity": 2,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 21,
        "around": 4,
        "size": 5,
        "severity": 5,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 25,
        "size": 6,
        "severity": 9,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 17.6,
        "around": 2,
        "size": 7,
        "severity": 12,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 17.7,
        "around": 21,
        "size": 11,
        "severity": 11,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 15.8,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 15.5,
        "around": 27,
        "size": 2,
        "severity": 2,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 15.4,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 13.9,
        "around": 9,
        "size": 5,
        "severity": 8,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 13.1,
        "around": 9,
        "size": 4,
        "severity": 4,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 13,
        "around": 0,
        "size": 5,
        "severity": 5,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 9.6,
        "around": 4,
        "size": 5,
        "severity": 7,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 9.2,
        "around": 29,
        "size": 4,
        "severity": 4,
        "index": 17
      }
    ]
  },
  {
    "sourceId": "TREE126",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 3,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 6,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 8,
        "diameterIn": 14,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 11,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 14,
        "diameterIn": 13,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 17,
        "diameterIn": 13,
        "sweepOffsetIn": 18,
        "sideOffsetIn": 13
      },
      {
        "positionFt": 21,
        "diameterIn": 11,
        "sweepOffsetIn": 23,
        "sideOffsetIn": 19
      },
      {
        "positionFt": 25,
        "diameterIn": 11,
        "sweepOffsetIn": 22,
        "sideOffsetIn": 18
      },
      {
        "positionFt": 27,
        "diameterIn": 11,
        "sweepOffsetIn": 18,
        "sideOffsetIn": 16
      },
      {
        "positionFt": 29,
        "diameterIn": 10,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 32.1,
        "diameterIn": 10,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 29.7,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 29.5,
        "around": 1,
        "size": 5,
        "severity": 6,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 28.5,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 25.7,
        "around": 28,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 24.3,
        "around": 30,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 21.3,
        "around": 30,
        "size": 5,
        "severity": 5,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 15.6,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 15.6,
        "around": 6,
        "size": 5,
        "severity": 5,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 14.7,
        "around": 3,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 11,
        "around": 35,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 11,
        "around": 33,
        "size": 3,
        "severity": 3,
        "index": 11
      }
    ]
  },
  {
    "sourceId": "TREE127",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 2,
        "diameterIn": 15,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 6,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 10,
        "diameterIn": 14,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 15,
        "diameterIn": 13,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 20,
        "diameterIn": 13,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 25,
        "diameterIn": 13,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 31,
        "diameterIn": 11,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 34,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 37.7,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      }
    ],
    "defects": [
      {
        "code": "F",
        "positionFt": 36.5,
        "around": 37.7,
        "size": 0,
        "severity": 0,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 35,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 33.1,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 30.2,
        "around": 28,
        "size": 8,
        "severity": 18,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 27.2,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 26.7,
        "around": 10,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 26,
        "around": 1,
        "size": 4,
        "severity": 7,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 24.1,
        "around": 6,
        "size": 4,
        "severity": 8,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 23.5,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 21.3,
        "around": 34,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 21.2,
        "around": 11,
        "size": 7,
        "severity": 7,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 11.4,
        "around": 1,
        "size": 4,
        "severity": 4,
        "index": 12
      }
    ]
  },
  {
    "sourceId": "TREE128",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 3,
        "diameterIn": 18,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 7,
        "diameterIn": 16,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 11.7,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 16,
        "diameterIn": 14,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 20,
        "diameterIn": 11,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 23,
        "diameterIn": 11,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 26,
        "diameterIn": 11,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 27.7,
        "diameterIn": 11,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 9
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 26.6,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 19,
        "around": 0,
        "size": 10,
        "severity": 13,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 16.9,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 14.7,
        "around": 7,
        "size": 9,
        "severity": 13,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 12.8,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 10.4,
        "around": 10,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 10.5,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 8.4,
        "around": 35,
        "size": 4,
        "severity": 4,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 5.9,
        "around": 27,
        "size": 6,
        "severity": 8,
        "index": 9
      }
    ]
  },
  {
    "sourceId": "TREE129",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 5,
        "diameterIn": 16,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 9,
        "diameterIn": 15,
        "sweepOffsetIn": 20,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 11,
        "diameterIn": 14,
        "sweepOffsetIn": 36,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 12,
        "diameterIn": 13,
        "sweepOffsetIn": 38,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 14,
        "diameterIn": 12,
        "sweepOffsetIn": 38,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 16,
        "diameterIn": 12,
        "sweepOffsetIn": 34,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 20,
        "diameterIn": 12,
        "sweepOffsetIn": 32,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 24,
        "diameterIn": 11,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 27,
        "diameterIn": 10,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 30.7,
        "diameterIn": 10,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 29.7,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 26.3,
        "around": 4,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 21.1,
        "around": 4,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "SR",
        "positionFt": 3.3,
        "around": 17,
        "size": 12,
        "severity": 24,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE130",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 5,
        "diameterIn": 16,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 11,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 18,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 23,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 28,
        "diameterIn": 12,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 33,
        "diameterIn": 11,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 36,
        "diameterIn": 11,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 42,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 41,
        "around": 6,
        "size": 6,
        "severity": 6,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 39,
        "around": 15,
        "size": 7,
        "severity": 13,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 38.9,
        "around": 29,
        "size": 7,
        "severity": 7,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 37.3,
        "around": 4,
        "size": 6,
        "severity": 9,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 35.8,
        "around": 12,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 6.2,
        "around": 22,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 33.5,
        "around": 35,
        "size": 4,
        "severity": 4,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 32.8,
        "around": 16,
        "size": 4,
        "severity": 4,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 31.4,
        "around": 5,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 28.9,
        "around": 22,
        "size": 4,
        "severity": 4,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 27,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 26.1,
        "around": 21,
        "size": 5,
        "severity": 5,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 26.2,
        "around": 10,
        "size": 5,
        "severity": 5,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 23.5,
        "around": 27,
        "size": 3,
        "severity": 3,
        "index": 14
      },
      {
        "code": "K",
        "positionFt": 21.8,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 15
      },
      {
        "code": "K",
        "positionFt": 19.9,
        "around": 17,
        "size": 5,
        "severity": 5,
        "index": 16
      },
      {
        "code": "K",
        "positionFt": 14.6,
        "around": 20,
        "size": 5,
        "severity": 7,
        "index": 17
      },
      {
        "code": "K",
        "positionFt": 13.8,
        "around": 31,
        "size": 3,
        "severity": 3,
        "index": 18
      },
      {
        "code": "K",
        "positionFt": 12,
        "around": 18,
        "size": 6,
        "severity": 6,
        "index": 19
      },
      {
        "code": "SR",
        "positionFt": 4,
        "around": 4,
        "size": 8,
        "severity": 22,
        "index": 20
      }
    ]
  },
  {
    "sourceId": "TREE131",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 3,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 8,
        "diameterIn": 16,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 14,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 19,
        "diameterIn": 14,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 24,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 29,
        "diameterIn": 12,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 33.2,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 31.4,
        "around": 2,
        "size": 6,
        "severity": 10,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 28.5,
        "around": 29,
        "size": 6,
        "severity": 9,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 23.8,
        "around": 14,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 0,
        "size": 13,
        "severity": 21,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 16.3,
        "around": 15,
        "size": 7,
        "severity": 7,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 9.8,
        "around": 29,
        "size": 5,
        "severity": 7,
        "index": 6
      }
    ]
  },
  {
    "sourceId": "TREE132",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 4,
        "diameterIn": 16,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 9,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 16,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 22,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 27,
        "diameterIn": 12,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 30.8,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "F",
        "positionFt": 29.6,
        "around": 30.8,
        "size": 0,
        "severity": 0,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 27.6,
        "around": 9,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 26.1,
        "around": 25,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 24.4,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 24.2,
        "around": 0,
        "size": 1,
        "severity": 1,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 23.9,
        "around": 5,
        "size": 1,
        "severity": 1,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 22.6,
        "around": 6,
        "size": 4,
        "severity": 4,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 20.4,
        "around": 6,
        "size": 1,
        "severity": 1,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 19.3,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 13.5,
        "around": 10,
        "size": 5,
        "severity": 5,
        "index": 10
      }
    ]
  },
  {
    "sourceId": "TREE133",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 4,
        "diameterIn": 17,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 7,
        "diameterIn": 16,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 9,
        "diameterIn": 16,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 13,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 18,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 23,
        "diameterIn": 15,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 27,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 33,
        "diameterIn": 13,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 39.5,
        "diameterIn": 13,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 38.6,
        "around": 5,
        "size": 8,
        "severity": 8,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 39.3,
        "around": 26,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 37,
        "around": 10,
        "size": 7,
        "severity": 7,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 35.3,
        "around": 28,
        "size": 8,
        "severity": 8,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 34.3,
        "around": 27,
        "size": 6,
        "severity": 6,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 30.7,
        "around": 16,
        "size": 7,
        "severity": 7,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 28.4,
        "around": 27,
        "size": 6,
        "severity": 10,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 26.2,
        "around": 4,
        "size": 5,
        "severity": 7,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 24.2,
        "around": 30,
        "size": 6,
        "severity": 8,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 21.1,
        "around": 31,
        "size": 7,
        "severity": 7,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 21.3,
        "around": 18,
        "size": 11,
        "severity": 11,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 19.6,
        "around": 25,
        "size": 7,
        "severity": 7,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 18.7,
        "around": 7,
        "size": 6,
        "severity": 6,
        "index": 13
      },
      {
        "code": "K",
        "positionFt": 14.7,
        "around": 35,
        "size": 4,
        "severity": 4,
        "index": 14
      }
    ]
  },
  {
    "sourceId": "TREE134",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 16,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 9.84,
        "diameterIn": 14,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 19.69,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 36.09,
        "diameterIn": 12,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 42.65,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 52.49,
        "diameterIn": 12,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 62.34,
        "diameterIn": 12,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 67.26,
        "diameterIn": 11,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 64.96,
        "around": 34,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 63.65,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 54.46,
        "around": 7,
        "size": 6,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 32.48,
        "around": 28,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 14.44,
        "around": 26,
        "size": 10,
        "severity": 10,
        "index": 5
      }
    ]
  },
  {
    "sourceId": "TREE135",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 24,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 4,
        "diameterIn": 21,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 9,
        "diameterIn": 19,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 15,
        "diameterIn": 18,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 21,
        "diameterIn": 18,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 28,
        "diameterIn": 16,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 34,
        "diameterIn": 16,
        "sweepOffsetIn": 13,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 41.5,
        "diameterIn": 15,
        "sweepOffsetIn": 15,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 45,
        "diameterIn": 13,
        "sweepOffsetIn": 16,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 49.6,
        "diameterIn": 12,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 6
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 41.5,
        "around": 27,
        "size": 8,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 38.8,
        "around": 26,
        "size": 8,
        "severity": 8,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE136",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 4,
        "diameterIn": 15,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 9,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 14,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 17,
        "diameterIn": 12,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 21,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 25.4,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 24,
        "around": 17,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 22.7,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 22,
        "size": 8,
        "severity": 8,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 14.8,
        "around": 27,
        "size": 6,
        "severity": 6,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 11.7,
        "around": 27,
        "size": 1,
        "severity": 1,
        "index": 5
      }
    ]
  },
  {
    "sourceId": "TREE137",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 13.12,
        "diameterIn": 16,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 26.25,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 39.37,
        "diameterIn": 14,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 52.49,
        "diameterIn": 13,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 62.34,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 65.62,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 77.1,
        "diameterIn": 11,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 75.13,
        "around": 34,
        "size": 7,
        "severity": 10,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 72.83,
        "around": 26,
        "size": 9,
        "severity": 9,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 59.71,
        "around": 3,
        "size": 7,
        "severity": 7,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 27.23,
        "around": 7,
        "size": 6,
        "severity": 6,
        "index": 4
      }
    ]
  },
  {
    "sourceId": "TREE138",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 4,
        "diameterIn": 16,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 7,
        "diameterIn": 16,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 8,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 13,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 16,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 19,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 23,
        "diameterIn": 12,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 25,
        "diameterIn": 9,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 28,
        "diameterIn": 9,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 15
      },
      {
        "positionFt": 33.6,
        "diameterIn": 9,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 11
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 32.1,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 32.2,
        "around": 10,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 30.1,
        "around": 29,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 29.8,
        "around": 0,
        "size": 2,
        "severity": 2,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 27.2,
        "around": 29,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 27.1,
        "around": 9,
        "size": 7,
        "severity": 9,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 23.7,
        "around": 35,
        "size": 10,
        "severity": 14,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 17.1,
        "around": 9,
        "size": 5,
        "severity": 5,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 15.8,
        "around": 26,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 15.6,
        "around": 4,
        "size": 5,
        "severity": 5,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 12.8,
        "around": 27,
        "size": 6,
        "severity": 6,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 12.4,
        "around": 7,
        "size": 3,
        "severity": 3,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 12.2,
        "around": 13,
        "size": 5,
        "severity": 5,
        "index": 13
      }
    ]
  },
  {
    "sourceId": "TREE139",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 3,
        "diameterIn": 17,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 8,
        "diameterIn": 16,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 13,
        "diameterIn": 15,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 15,
        "diameterIn": 15,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 17,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 21,
        "diameterIn": 13,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 14
      },
      {
        "positionFt": 23,
        "diameterIn": 12,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 17
      },
      {
        "positionFt": 26,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 17
      },
      {
        "positionFt": 29,
        "diameterIn": 11,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 32,
        "diameterIn": 10,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 33.8,
        "diameterIn": 10,
        "sweepOffsetIn": 13,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 27.6,
        "around": 0,
        "size": 7,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 23.6,
        "around": 2,
        "size": 5,
        "severity": 7,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE140",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 14,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 6,
        "diameterIn": 14,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 13
      },
      {
        "positionFt": 9.8,
        "diameterIn": 14,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 16
      },
      {
        "positionFt": 10.6,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 13
      },
      {
        "positionFt": 12,
        "diameterIn": 14,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 13,
        "diameterIn": 13,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 16,
        "diameterIn": 13,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 20,
        "diameterIn": 12,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 24,
        "diameterIn": 11,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 27,
        "diameterIn": 11,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 30.6,
        "diameterIn": 11,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 8
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 29.9,
        "around": 29,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 28.5,
        "around": 18,
        "size": 7,
        "severity": 7,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 25.9,
        "around": 2,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 26,
        "around": 28,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 24.7,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 22.1,
        "around": 27,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 20.8,
        "around": 5,
        "size": 5,
        "severity": 5,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 18.3,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 17.8,
        "around": 5,
        "size": 3,
        "severity": 3,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 17.3,
        "around": 14,
        "size": 8,
        "severity": 8,
        "index": 10
      }
    ]
  },
  {
    "sourceId": "TREE141",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 21,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 3,
        "diameterIn": 18,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 7,
        "diameterIn": 17,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 12,
        "diameterIn": 16,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 18.5,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 24,
        "diameterIn": 14,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 30,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 36.3,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 7
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 34.8,
        "around": 6,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 33,
        "around": 10,
        "size": 7,
        "severity": 10,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 32.4,
        "around": 2,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "BU",
        "positionFt": 32.2,
        "around": 26,
        "size": 6,
        "severity": 9,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 29.1,
        "around": 9,
        "size": 6,
        "severity": 6,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 19.2,
        "around": 9,
        "size": 7,
        "severity": 12,
        "index": 6
      }
    ]
  },
  {
    "sourceId": "TREE142",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 3,
        "diameterIn": 17,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 6,
        "diameterIn": 17,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 10,
        "diameterIn": 16,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 15,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 20,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 24,
        "diameterIn": 13,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 30,
        "diameterIn": 12,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 35,
        "diameterIn": 12,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 37.7,
        "diameterIn": 12,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 40,
        "diameterIn": 11,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 34,
        "around": 0,
        "size": 10,
        "severity": 15,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 32.8,
        "around": 8,
        "size": 7,
        "severity": 13,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 13.6,
        "around": 10,
        "size": 10,
        "severity": 26,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 9.4,
        "around": 7,
        "size": 4,
        "severity": 9,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 7.3,
        "around": 34,
        "size": 5,
        "severity": 4,
        "index": 5
      }
    ]
  },
  {
    "sourceId": "TREE143",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 2,
        "diameterIn": 16,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 8,
        "diameterIn": 14,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 12,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 16,
        "diameterIn": 12,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 21,
        "diameterIn": 12,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 23,
        "diameterIn": 12,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 24,
        "diameterIn": 11,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 25.4,
        "diameterIn": 11,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 28,
        "diameterIn": 11,
        "sweepOffsetIn": 11,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 31,
        "diameterIn": 11,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 35.5,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 35.4,
        "around": 9,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 33.1,
        "around": 23,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 27.1,
        "around": 34,
        "size": 6,
        "severity": 6,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 22.8,
        "around": 31,
        "size": 5,
        "severity": 5,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 20.5,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 20.4,
        "around": 32,
        "size": 3,
        "severity": 3,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 20.5,
        "around": 29,
        "size": 3,
        "severity": 3,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 17.1,
        "around": 31,
        "size": 4,
        "severity": 4,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 13.4,
        "around": 7,
        "size": 4,
        "severity": 7,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 9.8,
        "around": 28,
        "size": 3,
        "severity": 3,
        "index": 10
      }
    ]
  },
  {
    "sourceId": "TREE144",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": 10,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 4,
        "diameterIn": 17,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 8,
        "diameterIn": 15,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 12,
        "diameterIn": 15,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 16,
        "diameterIn": 15,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 20,
        "diameterIn": 15,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 22,
        "diameterIn": 14,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 28,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 32,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 34,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 38,
        "diameterIn": 11,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 42.1,
        "diameterIn": 11,
        "sweepOffsetIn": 15,
        "sideOffsetIn": 3
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 41.2,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 39.7,
        "around": 10,
        "size": 7,
        "severity": 9,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 37.5,
        "around": 12,
        "size": 7,
        "severity": 12,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 33,
        "around": 26,
        "size": 6,
        "severity": 14,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 31.2,
        "around": 8,
        "size": 10,
        "severity": 10,
        "index": 5
      },
      {
        "code": "BU",
        "positionFt": 20.8,
        "around": 1,
        "size": 6,
        "severity": 19,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 20.2,
        "around": 27,
        "size": 5,
        "severity": 10,
        "index": 7
      }
    ]
  },
  {
    "sourceId": "TREE145",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 19,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 4,
        "diameterIn": 16,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 8,
        "diameterIn": 15,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 12,
        "diameterIn": 14,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 16,
        "diameterIn": 14,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 21,
        "diameterIn": 13,
        "sweepOffsetIn": 17,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 25,
        "diameterIn": 13,
        "sweepOffsetIn": 17,
        "sideOffsetIn": 11
      },
      {
        "positionFt": 27,
        "diameterIn": 12,
        "sweepOffsetIn": 15,
        "sideOffsetIn": 14
      },
      {
        "positionFt": 28.5,
        "diameterIn": 12,
        "sweepOffsetIn": 12,
        "sideOffsetIn": 17
      },
      {
        "positionFt": 30,
        "diameterIn": 12,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 14
      },
      {
        "positionFt": 35,
        "diameterIn": 11,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 38.8,
        "diameterIn": 11,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 5
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 37.2,
        "around": 8,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 37.7,
        "around": 29,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 38.5,
        "around": 20,
        "size": 3,
        "severity": 3,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 35,
        "around": 19,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 34.3,
        "around": 0,
        "size": 4,
        "severity": 4,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 32.8,
        "around": 31,
        "size": 6,
        "severity": 6,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 33.3,
        "around": 19,
        "size": 10,
        "severity": 10,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 30.5,
        "around": 0,
        "size": 6,
        "severity": 6,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 30.7,
        "around": 34,
        "size": 4,
        "severity": 4,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 29,
        "around": 21,
        "size": 7,
        "severity": 7,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 26.6,
        "around": 27,
        "size": 6,
        "severity": 6,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 25.4,
        "around": 30,
        "size": 6,
        "severity": 6,
        "index": 12
      }
    ]
  },
  {
    "sourceId": "TREE146",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 15,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 4,
        "diameterIn": 13,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 9,
        "diameterIn": 13,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 12,
        "diameterIn": 12,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 8
      },
      {
        "positionFt": 14,
        "diameterIn": 12,
        "sweepOffsetIn": 0,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 15,
        "diameterIn": 12,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 18,
        "diameterIn": 11,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 22,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 24,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 26,
        "diameterIn": 11,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 29,
        "diameterIn": 10,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 31.5,
        "diameterIn": 10,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 8
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 30.4,
        "around": 0,
        "size": 7,
        "severity": 7,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 27.8,
        "around": 1,
        "size": 3,
        "severity": 3,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 25.1,
        "around": 4,
        "size": 6,
        "severity": 6,
        "index": 3
      },
      {
        "code": "BE",
        "positionFt": 22.2,
        "around": 23.6,
        "size": 0,
        "severity": 0,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 24,
        "around": 5,
        "size": 5,
        "severity": 5,
        "index": 5
      },
      {
        "code": "BU",
        "positionFt": 21.1,
        "around": 10,
        "size": 5,
        "severity": 5,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 18.4,
        "around": 9,
        "size": 5,
        "severity": 5,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 17.2,
        "around": 34,
        "size": 4,
        "severity": 4,
        "index": 8
      }
    ]
  },
  {
    "sourceId": "TREE147",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 4,
        "diameterIn": 16,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 9,
        "diameterIn": 16,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 15,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 18,
        "diameterIn": 14,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 21,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 25,
        "diameterIn": 13,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 28,
        "diameterIn": 10,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 32,
        "diameterIn": 10,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 36.5,
        "diameterIn": 10,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 10
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 36,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 34.4,
        "around": 9,
        "size": 2,
        "severity": 2,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 33,
        "around": 7,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 31.4,
        "around": 10,
        "size": 3,
        "severity": 3,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 31.1,
        "around": 7,
        "size": 2,
        "severity": 2,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 31.2,
        "around": 27,
        "size": 4,
        "severity": 4,
        "index": 6
      },
      {
        "code": "K",
        "positionFt": 29.8,
        "around": 21,
        "size": 7,
        "severity": 7,
        "index": 7
      },
      {
        "code": "K",
        "positionFt": 27.5,
        "around": 30,
        "size": 14,
        "severity": 17,
        "index": 8
      },
      {
        "code": "K",
        "positionFt": 26.4,
        "around": 9,
        "size": 7,
        "severity": 7,
        "index": 9
      },
      {
        "code": "K",
        "positionFt": 23.7,
        "around": 3,
        "size": 6,
        "severity": 6,
        "index": 10
      },
      {
        "code": "K",
        "positionFt": 23.3,
        "around": 26,
        "size": 6,
        "severity": 8,
        "index": 11
      },
      {
        "code": "K",
        "positionFt": 12.4,
        "around": 0,
        "size": 3,
        "severity": 3,
        "index": 12
      },
      {
        "code": "K",
        "positionFt": 7.7,
        "around": 4,
        "size": 6,
        "severity": 6,
        "index": 13
      }
    ]
  },
  {
    "sourceId": "TREE148",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 17,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 4,
        "diameterIn": 16,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 3
      },
      {
        "positionFt": 8,
        "diameterIn": 14,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 13,
        "diameterIn": 13,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 19,
        "diameterIn": 13,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 21,
        "diameterIn": 12,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 25,
        "diameterIn": 12,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 28,
        "diameterIn": 12,
        "sweepOffsetIn": 6,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 31,
        "diameterIn": 12,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 33,
        "diameterIn": 12,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 36,
        "diameterIn": 11,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 38.8,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 9
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 37.8,
        "around": 6,
        "size": 7,
        "severity": 11,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 33.4,
        "around": 10,
        "size": 5,
        "severity": 5,
        "index": 2
      },
      {
        "code": "BU",
        "positionFt": 31.4,
        "around": 9,
        "size": 4,
        "severity": 4,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 31.4,
        "around": 30,
        "size": 4,
        "severity": 4,
        "index": 4
      },
      {
        "code": "BU",
        "positionFt": 27.9,
        "around": 9,
        "size": 4,
        "severity": 4,
        "index": 5
      },
      {
        "code": "K",
        "positionFt": 19.5,
        "around": 6,
        "size": 6,
        "severity": 10,
        "index": 6
      }
    ]
  },
  {
    "sourceId": "TREE149",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 18,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 3,
        "diameterIn": 17,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 7,
        "diameterIn": 15,
        "sweepOffsetIn": 9,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 12,
        "diameterIn": 15,
        "sweepOffsetIn": 8,
        "sideOffsetIn": 4
      },
      {
        "positionFt": 18,
        "diameterIn": 14,
        "sweepOffsetIn": 7,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 23,
        "diameterIn": 13,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 27,
        "diameterIn": 12,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 31,
        "diameterIn": 12,
        "sweepOffsetIn": 2,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 35,
        "diameterIn": 11,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 37,
        "diameterIn": 11,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 10
      },
      {
        "positionFt": 41,
        "diameterIn": 11,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 9
      },
      {
        "positionFt": 45,
        "diameterIn": 10,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 10
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 41.7,
        "around": 6,
        "size": 4,
        "severity": 14,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 40.3,
        "around": 21,
        "size": 3,
        "severity": 3,
        "index": 2
      }
    ]
  },
  {
    "sourceId": "TREE150",
    "species": "hard maple",
    "stations": [
      {
        "positionFt": 0,
        "diameterIn": 20,
        "sweepOffsetIn": 3,
        "sideOffsetIn": 5
      },
      {
        "positionFt": 5,
        "diameterIn": 17,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 8,
        "diameterIn": 16,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 0
      },
      {
        "positionFt": 11,
        "diameterIn": 15,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 14,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 17,
        "diameterIn": 15,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 21,
        "diameterIn": 14,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 1
      },
      {
        "positionFt": 27,
        "diameterIn": 14,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 2
      },
      {
        "positionFt": 32,
        "diameterIn": 13,
        "sweepOffsetIn": 1,
        "sideOffsetIn": 6
      },
      {
        "positionFt": 36,
        "diameterIn": 13,
        "sweepOffsetIn": 4,
        "sideOffsetIn": 7
      },
      {
        "positionFt": 39,
        "diameterIn": 13,
        "sweepOffsetIn": 5,
        "sideOffsetIn": 9
      }
    ],
    "defects": [
      {
        "code": "K",
        "positionFt": 37.8,
        "around": 27,
        "size": 8,
        "severity": 11,
        "index": 1
      },
      {
        "code": "K",
        "positionFt": 37,
        "around": 5,
        "size": 4,
        "severity": 4,
        "index": 2
      },
      {
        "code": "K",
        "positionFt": 30.7,
        "around": 27,
        "size": 5,
        "severity": 5,
        "index": 3
      },
      {
        "code": "K",
        "positionFt": 29.9,
        "around": 9,
        "size": 7,
        "severity": 7,
        "index": 4
      },
      {
        "code": "K",
        "positionFt": 25.4,
        "around": 6,
        "size": 6,
        "severity": 6,
        "index": 5
      },
      {
        "code": "BU",
        "positionFt": 29,
        "around": 25,
        "size": 9,
        "severity": 16,
        "index": 6
      }
    ]
  }
];
