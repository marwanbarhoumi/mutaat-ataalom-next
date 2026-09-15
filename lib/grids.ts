export type LetterGridLayout = {
  cols: number[];
  rows: number[];
  w: number;
  h: number[];
};

export const GRIDS: Record<"alphabet" | "fatha", LetterGridLayout> = {
  alphabet: {
    cols: [79.28, 71.47, 63.75, 55.85, 47.77, 39.78, 31.69],
    rows: [26.1, 38.44, 50.64, 63.12],
    w: 7.81,
    h: [12.2, 12.2, 12.2, 12.2],
  },
  fatha: {
    cols: [82.34, 69.65, 57.0, 44.34, 31.68, 18.87, 6.17],
    rows: [20.71, 39.89, 57.92, 75.15],
    w: 11.05,
    h: [16.44, 15.35, 14.62, 14.37],
  },
};

export const LESSON_GRID = {
  cols: [63.2, 38.4, 13.9],
  rows: [31.5, 41.63, 51.76, 61.89, 72.02],
  w: 22.4,
  h: 8.0,
};
