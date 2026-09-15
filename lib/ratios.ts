export type ScreenKey =
  | "start"
  | "home"
  | "lessons"
  | "alphabet"
  | "fatha"
  | "letter";

export const RATIOS: Record<ScreenKey, [number, number]> = {
  start: [1920, 1080],
  home: [1904, 1072],
  lessons: [1600, 900],
  alphabet: [1076, 717],
  fatha: [1076, 717],
  letter: [1076, 717],
};

export const RATIO_DEFAULT: [number, number] = [1076, 717];
