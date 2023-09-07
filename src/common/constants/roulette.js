export const RESULT_COLOR_ENUM_DRAGON_ROULETTE = {
  data: {
    Red: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
    Blue: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
    Zero: [0]
  },
  findPropertyFromValue(p) {
    return Object.keys(this.data).find(k => this.data[k].includes(p)) || "Closed";
  }
};

export const RESULT_COLOR_ENUM = {
  data: {
    Red: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
    Black: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
    Zero: [0]
  },
  findPropertyFromValue(p) {
    return Object.keys(this.data).find(k => this.data[k].includes(p)) || "Closed";
  }
};

export const mapDragonRouletteWin = {
  0: 0,
  1: 22,
  2: 4,
  3: 32,
  4: 0,
  5: 14,
  6: 4,
  7: 24,
  8: 8,
  9: 18,
  10: 8,
  11: 3,
  12: 21,
  13: -1,
  14: 11,
  15: -13,
  16: 5,
  17: -9,
  18: 11,
  19: -16,
  20: 4,
  21: -16,
  22: 6,
  23: -6,
  24: -4,
  25: -18,
  26: 10,
  27: -16,
  28: 4,
  29: 1,
  30: -15,
  31: -5,
  32: -31,
  33: -11,
  34: -25,
  35: -1,
  36: -23
}

export let RacetrackData = [
  {
    type: 33,
    colorClass: ["rtb-black"],
    path: "M118.44.5h32.06v36.99h-32.06z",
    transform: { x: 124.7, y: 25.6, cx: 122, cy: -75.9 }
  },

  {
    type: 16,
    colorClass: ["rtb-red"],
    path: "M94.5 37.49h23.88V.5H94.5q-4.11 0-8.12.35v37.23a58 58 0 0 1 8.12-.59z",
    transform: { x: 91.7, y: 25.6, cx: 90, cy: -75.9 }
  },
  {
    type: 24,
    colorClass: ["rtb-black"],
    path: "M51.69 10.79l14.24 34.37a56.72 56.72 0 0 1 20.43-7.09V.85a93.32 93.32 0 0 0-34.67 9.94z",
    transform: { x: 62.7, y: 28.6, cx: 59.5, cy: -72.9 }
  },
  {
    type: 5,
    colorClass: ["rtb-red"],
    path:
      "M28 28q-2 2-3.94 4.2l26.27 26.26q1.83-2.24 3.87-4.28a57.16 57.16 0 0 1 11.73-9L51.69 10.79A94 94 0 0 0 28 28z",
    transform: { x: 41.91, y: 41.6, cx: 34, cy: -59.9 }
  },
  {
    type: 10,
    colorClass: ["rtb-black"],
    path: "M24.09 32.22A93.68 93.68 0 0 0 6.5 61.41l34.22 14.18a56.53 56.53 0 0 1 9.61-17.13z",
    transform: { x: 17.7, y: 62.6, cx: 16, cy: -38.9 }
  },
  {
    type: 23,
    colorClass: ["rtb-red"],
    path: "M40.72 75.59L6.5 61.41a93.63 93.63 0 0 0-6 33.07h37a56.56 56.56 0 0 1 3.22-18.89z",
    transform: { x: 10.7, y: 88.6, cx: 8, cy: -13.5 }
  },
  {
    type: 8,
    colorClass: ["rtb-black"],
    path: "M37.5 94.48H.5a93.9 93.9 0 0 0 6 33.08l34.23-14.18a56.57 56.57 0 0 1-3.23-18.9z",
    transform: { x: 15.91, y: 113.6, cx: 8, cy: 13.5 }
  },
  {
    type: 30,
    colorClass: ["rtb-red"],
    path: "M6.49 127.56a93.85 93.85 0 0 0 17.6 29.18l26.24-26.23a56.65 56.65 0 0 1-9.61-17.13z",
    transform: { x: 18.7, y: 138.6, cx: 16, cy: 38.9 }
  },
  {
    type: 11,
    colorClass: ["rtb-black"],
    path: "M50.33 130.51l-26.24 26.23a94 94 0 0 0 27.6 21.42l14.24-34.36a57.17 57.17 0 0 1-15.6-13.29z",
    transform: { x: 36.7, y: 160.6, cx: 34, cy: 59.9 }
  },
  {
    type: 36,
    colorClass: ["rtb-red"],
    path: "M65.93 143.8l-14.24 34.35a93.13 93.13 0 0 0 34.63 9.95v-37.21a56.54 56.54 0 0 1-20.39-7.09z",
    transform: { x: 61.7, y: 172.6, cx: 59.5, cy: 72.9 }
  },
  {
    type: 13,
    colorClass: ["rtb-black"],
    path: "M94.5 151.47a57.39 57.39 0 0 1-8.18-.59v37.23q4 .36 8.18.36h23.88v-37z",
    transform: { x: 91.7, y: 175.6, cx: 90, cy: 75.9 }
  },
  {
    type: 27,
    colorClass: ["rtb-red"],
    path: "M118.44 151.48h32.06v36.99h-32.06z",
    transform: { x: 124.7, y: 176.6, cx: 122, cy: 75.9 }
  },
  {
    type: 6,
    colorClass: ["rtb-black"],
    path: "M150.5 151.44h55v37.02h-55z",
    transform: { x: 172.91, y: 176.6, cx: 165, cy: 75.9 }
  },
  {
    type: 34,
    colorClass: ["rtb-red"],
    path: "M205.5 151.5h54v36.99h-54z",
    transform: { x: 221.7, y: 176.6, cx: 220, cy: 75.9 }
  },
  {
    type: 17,
    colorClass: ["rtb-black"],
    path: "M259.5 151.51h55v36.99h-55z",
    transform: { x: 276.7, y: 176.6, cx: 275.5, cy: 75.9 }
  },
  {
    type: 25,
    colorClass: ["rtb-red"],
    path: "M314.5 151.48h34.56v36.99H314.5z",
    transform: { x: 321.7, y: 176.6, cx: 319.5, cy: 75.9 }
  },
  {
    type: 2,
    colorClass: ["rtb-black"],
    path: "M349.02 151.48h34.56v36.99h-34.56z",
    transform: { x: 360.91, y: 176.6, cx: 354.5, cy: 75.9 }
  },
  {
    type: 21,
    colorClass: ["rtb-red"],
    path: "M383.55 151.48h34.56v36.99h-34.56z",
    transform: { x: 391.7, y: 176.6, cx: 388.5, cy: 75.9 }
  },
  {
    type: 4,
    colorClass: ["rtb-black"],
    path: "M418.07 151.48h34.56v36.99h-34.56z",
    transform: { x: 429.91, y: 176.6, cx: 423, cy: 75.9 }
  },
  {
    type: 19,
    colorClass: ["rtb-red"],
    path: "M452.57 151.48h34.56v36.99h-34.56z",
    transform: { x: 458.7, y: 176.6, cx: 457.5, cy: 75.9 }
  },
  {
    type: 15,
    colorClass: ["rtb-black"],
    path: "M521.63 188.12v-37.24a56.7 56.7 0 0 1-8.13.59h-26.37v37h26.37q4.11 0 8.13-.35z",
    transform: { x: 493.7, y: 176.6, cx: 492, cy: 75.9 }
  },
  {
    type: 32,
    colorClass: ["rtb-red"],
    path: "M521.64 150.89v37.23a93.56 93.56 0 0 0 52.3-21.67l-21.83-30a56.79 56.79 0 0 1-30.47 14.44z",
    transform: { x: 533.7, y: 168.6, cx: 531, cy: 69.9 }
  },
  {
    type: 0,
    colorClass: ["rtb-green"],
    path:
      "M552.11 136.41l21.83 30q3.13-2.61 6-5.51a93.88 93.88 0 0 0 23.69-39.81l-35.21-11.44a57.09 57.09 0 0 1-16.31 26.76z",
    transform: { x: 572.91, y: 144.6, cx: 565, cy: 40.9 }
  },
  {
    type: 26,
    colorClass: ["rtb-black"],
    path: "M603.67 67.84l-35.22 11.44a57.48 57.48 0 0 1 0 30.41l35.21 11.44a94.45 94.45 0 0 0 0-53.29z",
    transform: { x: 577.7, y: 100.6, cx: 576, cy: 0 }
  },
  {
    type: 3,
    colorClass: ["rtb-red"],
    path: "M568.45 79.28l35.22-11.44A94.07 94.07 0 0 0 574 22.51l-21.89 30.05a57.09 57.09 0 0 1 16.34 26.72z",
    transform: { x: 572.91, y: 58.6, cx: 565, cy: -40.9 }
  },
  {
    type: 35,
    colorClass: ["rtb-black"],
    path: "M574 22.51A93.54 93.54 0 0 0 521.64.85v37.22a56.8 56.8 0 0 1 30.47 14.49z",
    transform: { x: 533.7, y: 32.6, cx: 531, cy: -69.9 }
  },
  {
    type: 12,
    colorClass: ["rtb-red"],
    path: "M521.63.85v37.23a58.18 58.18 0 0 0-8.13-.59h-26.37V.5h26.37q4.11 0 8.13.35z",
    transform: { x: 493.7, y: 25.6, cx: 492, cy: -75.9 }
  },
  {
    type: 28,
    colorClass: ["rtb-black"],
    path: "M452.57.5h34.56v36.99h-34.56z",
    transform: { x: 459.7, y: 25.6, cx: 457.5, cy: -75.9 }
  },
  {
    type: 7,
    colorClass: ["rtb-red"],
    path: "M418.07.5h34.56v36.99h-34.56z",
    transform: { x: 430.91, y: 25.6, cx: 423, cy: -75.9 }
  },
  {
    type: 29,
    colorClass: ["rtb-black"],
    path: "M383.55.5h34.56v36.99h-34.56z",
    transform: { x: 390.7, y: 25.6, cx: 388.5, cy: -75.9 }
  },
  {
    type: 18,
    colorClass: ["rtb-red"],
    path: "M349.49.5h35v36.99h-35z",
    transform: { x: 355.7, y: 25.6, cx: 354.5, cy: -75.9 }
  },
  {
    type: 22,
    colorClass: ["rtb-black"],
    path: "M314.5.5h34.56v36.99H314.5z",
    transform: { x: 321.7, y: 25.6, cx: 319.5, cy: -75.9 }
  },
  {
    type: 9,
    colorClass: ["rtb-red"],
    path: "M281.5.5h33v36.99h-33z",
    transform: { x: 292.91, y: 25.6, cx: 285.5, cy: -75.9 }
  },
  {
    type: 31,
    colorClass: ["rtb-black"],
    path: "M248.49.5h33v36.99h-33z",
    transform: { x: 255.7, y: 25.6, cx: 252.5, cy: -75.9 }
  },
  {
    type: 14,
    colorClass: ["rtb-red"],
    path: "M216.51.5h32v36.99h-32z",
    transform: { x: 222.7, y: 25.6, cx: 220, cy: -75.9 }
  },
  {
    type: 20,
    colorClass: ["rtb-black"],
    path: "M183.49.5h33v36.99h-33z",
    transform: { x: 189.7, y: 25.6, cx: 187.5, cy: -75.9 }
  },
  {
    type: 1,
    colorClass: ["rtb-red"],
    path: "M150.5.5h33v36.99h-33z",
    transform: { x: 162.91, y: 25.6, cx: 155, cy: -75.9 }
  }
];

export const RoundPhaseEnum = {
  None: -1,
  Closed: 0,
  PlaceYourBets: 1,
  LastBets: 2,
  NoMoreBets: 3,
  NumberSelected: 4,
  ResultReady: 5,
  Paused: 6,
  Canceled: 7,
  Lightning: 8,

  getPropertyFromValue: (v) => {
    return Object.keys(RoundPhaseEnum).find(x => {
      return RoundPhaseEnum[x] === v;
    });
  }
};
