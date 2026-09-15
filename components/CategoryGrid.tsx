"use client";

import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/lessons";
import { useToast } from "./Stage";

export function CategoryGrid() {
  const router = useRouter();
  const { show } = useToast();

  return (
    <div className="category-grid" role="navigation" aria-label="أقسام التعلم">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          className={`hs soft ${cat.href ? "hint" : ""}`.trim()}
          aria-label={cat.title}
          style={{
            left: `${cat.left}%`,
            top: `${cat.top}%`,
            width: `${cat.w}%`,
            height: `${cat.h}%`,
            pointerEvents: "auto",
          }}
          onClick={() => {
            if (cat.href) router.push(cat.href);
            else show(`قسم « ${cat.title} » قادم قريبًا إن شاء الله 🌟`);
          }}
        >
          <span className="sr-only">{cat.title}</span>
        </button>
      ))}
    </div>
  );
}
