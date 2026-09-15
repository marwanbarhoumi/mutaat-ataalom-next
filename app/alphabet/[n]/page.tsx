import { LETTERS } from "@/lib/letters";
import { LetterCardPage } from "./LetterCardPage";

export function generateStaticParams() {
  return LETTERS.map((_, i) => ({ n: String(i + 1) }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const index = Math.max(0, Math.min(LETTERS.length - 1, parseInt(n, 10) - 1));
  return <LetterCardPage set="alphabet" index={index} />;
}
