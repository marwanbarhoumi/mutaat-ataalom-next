"use client";

import { Stage } from "@/components/Stage";
import { LetterCard } from "@/components/LetterCard";

export function LetterCardPage({
  set,
  index,
}: {
  set: "alphabet" | "fatha";
  index: number;
}) {
  return (
    <Stage screen="letter">
      <LetterCard set={set} index={index} />
    </Stage>
  );
}
