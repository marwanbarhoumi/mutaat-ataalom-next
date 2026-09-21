"use client";

import { useRouter } from "next/navigation";
import { arNum } from "@/lib/letters";
import { LESSONS } from "@/lib/lessons";
import { LESSON_GRID } from "@/lib/grids";
import { useToast } from "./Stage";

export function LessonTiles() {
  const router = useRouter();
  const { show } = useToast();
  const g = LESSON_GRID;

  return (
    <div className="tiles" id="tiles-lessons">
      {LESSONS.filter((L) => L.n <= 14).map((L, i) => (
        <button
          key={L.n}
          type="button"
          className={`tile lesson${L.href ? "" : " locked"}`}
          aria-label={`الدرس ${arNum(L.n)} — ${L.title}`}
          aria-disabled={!L.href}
          style={{
            left: `${g.cols[Math.floor(i / 5)]}%`,
            top: `${g.rows[i % 5]}%`,
            width: `${g.w}%`,
            height: `${g.h}%`,
          }}
          onClick={() => {
            if (L.href) router.push(L.href);
            else show(`الدرس « ${L.title} » قادم قريبًا إن شاء الله 🌟`);
          }}
        />
      ))}
    </div>
  );
}
