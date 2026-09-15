export type Lesson = {
  n: number;
  title: string;
  href?: string;
};

export const LESSONS: Lesson[] = [
  { n: 1, title: "الحروف المجردة", href: "/alphabet" },
  { n: 2, title: "الحروف المنقطة" },
  { n: 3, title: "الحروف المجوفة" },
  { n: 4, title: "الحروف المجردة" },
  { n: 5, title: "الحروف مع الفتحة", href: "/fatha" },
  { n: 6, title: "الحروف مع الضمة" },
  { n: 7, title: "الحروف مع الكسرة" },
  { n: 8, title: "الحروف وسط الكلمة" },
  { n: 9, title: "الحروف أخر الكلمة" },
  { n: 10, title: "التدريب والتوظيف على الحركات القصيرة" },
  { n: 11, title: "مد الفتح" },
  { n: 12, title: "مد الضم" },
  { n: 13, title: "مد الكسر" },
  { n: 14, title: "تدريب حول المدود" },
  { n: 15, title: "السكون" },
];

export type Category = {
  id: string;
  title: string;
  href?: string;
  left: number;
  top: number;
  w: number;
  h: number;
};

export const CATEGORIES: Category[] = [
  { id: "kalima", title: "الكلمة", left: 20.5, top: 13.5, w: 27.5, h: 29.5 },
  {
    id: "huruf",
    title: "الحروف و المقاطع",
    href: "/lessons",
    left: 51.0,
    top: 13.5,
    w: 27.5,
    h: 29.5,
  },
  { id: "jumal", title: "الجمل", left: 20.5, top: 52.5, w: 27.5, h: 29.5 },
  { id: "qawaid", title: "القواعد", left: 51.0, top: 52.5, w: 27.5, h: 29.5 },
];
