"use client";

import { useRouter } from "next/navigation";
import { LETTERS } from "@/lib/letters";
import { GRIDS } from "@/lib/grids";

type Props = {
  set: "alphabet" | "fatha";
  speakingIndex?: number | null;
};

export function LetterGrid({ set, speakingIndex = null }: Props) {
  const router = useRouter();
  const g = GRIDS[set];
  const base = set === "alphabet" ? "/alphabet" : "/fatha";

  return (
    <div className="tiles">
      {LETTERS.map((L, i) => {
        const col = i % 7;
        const row = Math.floor(i / 7);
        return (
          <button
            key={L.slug}
            type="button"
            className={`tile${speakingIndex === i ? " is-speaking" : ""}`}
            aria-label={set === "fatha" ? `الحرف ${L.fat}` : `حرف ${L.name}`}
            style={{
              left: `${g.cols[col]}%`,
              top: `${g.rows[row]}%`,
              width: `${g.w}%`,
              height: `${g.h[row]}%`,
            }}
            onClick={() => router.push(`${base}/${i + 1}`)}
          />
        );
      })}
    </div>
  );
}
