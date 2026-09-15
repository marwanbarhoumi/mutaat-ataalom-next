import { asset } from "./basePath";

export type PlateColor = "red" | "green" | "purple" | "blue" | "orange";

export type Letter = {
  slug: string;
  ar: string;
  name: string;
  fat: string;
  word: string;
  img?: string;
  plate?: PlateColor;
};

export const LETTERS: Letter[] = [
  { slug: "alef", ar: "أ", name: "أَلِف", fat: "أَ", word: "أَرْنَب", img: "alef" },
  { slug: "ba", ar: "ب", name: "بَاء", fat: "بَ", word: "بَقَرَة", img: "ba" },
  { slug: "ta", ar: "ت", name: "تَاء", fat: "تَ", word: "تَاج", img: "ta" },
  { slug: "tha", ar: "ث", name: "ثَاء", fat: "ثَ", word: "ثَوْر", img: "tha" },
  { slug: "jim", ar: "ج", name: "جِيم", fat: "جَ", word: "جَبَل", img: "jim" },
  { slug: "ha", ar: "ح", name: "حَاء", fat: "حَ", word: "حَاسُوب", img: "ha" },
  { slug: "kha", ar: "خ", name: "خَاء", fat: "خَ", word: "خَروف", img: "kha" },
  { slug: "dal", ar: "د", name: "دَال", fat: "دَ", word: "دَرَّاجَة", img: "dal" },
  { slug: "dhal", ar: "ذ", name: "ذَال", fat: "ذَ", word: "ذَهَب", img: "dhal" },
  { slug: "ra", ar: "ر", name: "رَاء", fat: "رَ", word: "رَأْس", img: "ra" },
  { slug: "zay", ar: "ز", name: "زَاي", fat: "زَ", word: "زَرَافَة", img: "zay" },
  { slug: "sin", ar: "س", name: "سِين", fat: "سَ", word: "سَاعَة", img: "sin" },
  { slug: "shin", ar: "ش", name: "شِين", fat: "شَ", word: "شَجَرَة", img: "shin" },
  { slug: "sad", ar: "ص", name: "صَاد", fat: "صَ", word: "صَحْن", plate: "blue" },
  { slug: "dad", ar: "ض", name: "ضَاد", fat: "ضَ", word: "ضَابِط", plate: "green" },
  { slug: "tah", ar: "ط", name: "طَاء", fat: "طَ", word: "طَائِرَة", plate: "red" },
  { slug: "zah", ar: "ظ", name: "ظَاء", fat: "ظَ", word: "ظَرْف", plate: "blue" },
  { slug: "ain", ar: "ع", name: "عَين", fat: "عَ", word: "عَظْم", plate: "orange" },
  { slug: "ghain", ar: "غ", name: "غَين", fat: "غَ", word: "غَزَال", plate: "purple" },
  { slug: "fa", ar: "ف", name: "فَاء", fat: "فَ", word: "فَأر", plate: "green" },
  { slug: "qaf", ar: "ق", name: "قَاف", fat: "قَ", word: "قَلَم", plate: "orange" },
  { slug: "kaf", ar: "ك", name: "كَاف", fat: "كَ", word: "كَلْب", plate: "purple" },
  { slug: "lam", ar: "ل", name: "لَام", fat: "لَ", word: "لَيْمُون", plate: "green" },
  { slug: "mim", ar: "م", name: "مِيم", fat: "مَ", word: "مَدْرَسَة", plate: "red" },
  { slug: "nun", ar: "ن", name: "نُون", fat: "نَ", word: "نَمِر", plate: "blue" },
  { slug: "hae", ar: "ه", name: "هَاء", fat: "هَ", word: "هَاتِف", plate: "orange" },
  { slug: "waw", ar: "و", name: "وَاو", fat: "وَ", word: "وَرْدَة", plate: "purple" },
  { slug: "ya", ar: "ي", name: "يَاء", fat: "يَ", word: "يَد", plate: "blue" },
];

export const PLATES: Record<
  PlateColor,
  { cx: number; cy: number; r: number; color: string }
> = {
  red: { cx: 0.4991, cy: 0.5091, r: 0.2017, color: "#fd3735" },
  green: { cx: 0.4991, cy: 0.5112, r: 0.2014, color: "#24b13d" },
  purple: { cx: 0.4991, cy: 0.5077, r: 0.2012, color: "#9746d7" },
  blue: { cx: 0.5, cy: 0.5042, r: 0.1991, color: "#0272f3" },
  orange: { cx: 0.5005, cy: 0.4923, r: 0.214, color: "#fd8201" },
};

export const PLATE_K = 1076 / 717;

export const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";

export function arNum(n: number): string {
  return String(n).replace(/\d/g, (d) => AR_DIGITS[+d]);
}

export function letterBg(set: "alphabet" | "fatha", letter: Letter): string {
  if (set === "fatha") return asset(`/assets/fatha/${letter.slug}.jpg`);
  if (letter.img) return asset(`/assets/alphabet/${letter.img}.jpg`);
  return asset(`/assets/alphabet/plate-${letter.plate}.jpg`);
}

export function audioSrc(slug: string): string {
  return asset(`/assets/fatha/audio/${slug}.mp3`);
}
