"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef } from "react";
import {
  LETTERS,
  PLATE_K,
  PLATES,
  arNum,
  letterBg,
  type Letter,
} from "@/lib/letters";
import { Hotspot } from "./Hotspot";
import { useAudio } from "./AudioPlayer";

type Props = {
  set: "alphabet" | "fatha";
  index: number;
};

function Chevron({ dir }: { dir: "prev" | "next" }) {
  const d =
    dir === "prev"
      ? "M15 4 L7 12 L15 20"
      : "M9 4 L17 12 L9 20";
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 5h7v6H4zM13 5h7v6h-7zM4 13h7v6H4zM13 13h7v6h-7z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LetterCard({ set, index }: Props) {
  const router = useRouter();
  const { say, stopAll, playingSet } = useAudio();
  const wrapRef = useRef<HTMLElement>(null);
  const n = LETTERS.length;
  const i = ((index % n) + n) % n;
  const L = LETTERS[i];
  const base = set === "alphabet" ? "/alphabet" : "/fatha";
  const gridHref = set === "alphabet" ? "/alphabet" : "/fatha";

  const go = useCallback(
    (ni: number) => {
      const next = ((ni % n) + n) % n;
      router.push(`${base}/${next + 1}`);
    },
    [base, n, router],
  );

  useEffect(() => {
    stopAll();
    say(set, i);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- play on letter change only
  }, [set, i]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(i - 1);
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "Escape") router.push(gridHref);
      if (e.key === " ") {
        e.preventDefault();
        stopAll();
        say(set, i);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go, gridHref, i, router, say, set, stopAll]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let x0: number | null = null;
    let y0: number | null = null;
    const onStart = (e: TouchEvent) => {
      x0 = e.changedTouches[0].clientX;
      y0 = e.changedTouches[0].clientY;
    };
    const onEnd = (e: TouchEvent) => {
      if (x0 === null || y0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      const rotated = window.matchMedia(
        "(orientation: portrait) and (pointer: coarse)",
      ).matches;
      const d = rotated ? dy : dx;
      if (Math.abs(d) > 60 && Math.abs(d) > Math.abs(rotated ? dx : dy)) {
        go(i + (d < 0 ? -1 : 1));
      }
      x0 = y0 = null;
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, [go, i]);

  const glyph = useMemo(() => glyphStyle(L), [L]);
  const bg = letterBg(set, L);
  const alt =
    set === "fatha"
      ? `الحرف ${L.fat} — ${L.word}`
      : `حرف ${L.name}`;

  return (
    <section className="screen" ref={wrapRef}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="bg" src={bg} alt={alt} draggable={false} />

      {glyph ? (
        <div
          className="glyph-wrap"
          style={
            {
              ["--gx" as string]: glyph.gx,
              ["--gw" as string]: glyph.gw,
              ["--gy" as string]: glyph.gy,
              ["--gh" as string]: glyph.gh,
            } as React.CSSProperties
          }
        >
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <text
              x="50"
              y="53"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="62"
              stroke="#ffffff"
              strokeWidth="4.2"
              strokeLinejoin="round"
              paintOrder="stroke"
              fill={glyph.color}
            >
              {L.ar}
            </text>
          </svg>
        </div>
      ) : null}

      {set === "alphabet" ? (
        <>
          <Hotspot left={1.4} top={3.5} width={19.1} height={12.6} href="/" ariaLabel="متعة التعلم" />
          <Hotspot left={73.33} top={3.9} width={6.97} height={11.72} soon ariaLabel="اشترك" />
          <Hotspot left={81.41} top={3.9} width={7.16} height={11.72} href="/lessons" ariaLabel="المحتوى" />
          <Hotspot left={89.68} top={3.9} width={7.06} height={11.72} href="/" ariaLabel="الرئيسية" />
          <Hotspot
            left={28.44}
            top={18.83}
            width={42.94}
            height={64.44}
            className={`round soft${playingSet === "alphabet" ? " is-playing" : ""}`}
            ariaLabel="استمع للحرف"
            onClick={() => {
              stopAll();
              say("alphabet", i);
            }}
          />
          <Hotspot
            left={43.31}
            top={75.03}
            width={11.62}
            height={17.15}
            className={`round${playingSet === "alphabet" ? " is-playing" : ""}`}
            ariaLabel="استمع للحرف"
            onClick={() => {
              stopAll();
              say("alphabet", i);
            }}
          />
          <Hotspot left={6.97} top={60.81} width={6.69} height={10.04} className="round" href="/alphabet" ariaLabel="رجوع" />
        </>
      ) : (
        <>
          <Hotspot left={80.8} top={0.8} width={8.4} height={13.8} href="/lessons" ariaLabel="المحتوى" />
          <Hotspot left={89.2} top={0.8} width={9.6} height={13.8} href="/" ariaLabel="الرئيسية" />
          <Hotspot
            left={55.2}
            top={22}
            width={28.6}
            height={54.5}
            className={`round soft${playingSet === "fatha" ? " is-playing" : ""}`}
            ariaLabel="استمع للحرف"
            onClick={() => {
              stopAll();
              say("fatha", i);
            }}
          />
          <Hotspot
            left={64.4}
            top={78.2}
            width={10.4}
            height={15.2}
            className={`round${playingSet === "fatha" ? " is-playing" : ""}`}
            ariaLabel="استمع للحرف"
            onClick={() => {
              stopAll();
              say("fatha", i);
            }}
          />
          <button
            type="button"
            className="nav-btn back"
            aria-label="رجوع إلى قائمة الحروف"
            onClick={() => router.push("/fatha")}
          >
            <GridIcon />
          </button>
        </>
      )}

      <div className="counter" aria-hidden="true">
        {arNum(i + 1)} من {arNum(n)}
      </div>

      <button
        type="button"
        className="nav-btn prev"
        aria-label="الحرف السابق"
        onClick={() => go(i - 1)}
      >
        <Chevron dir="prev" />
      </button>
      <button
        type="button"
        className="nav-btn next"
        aria-label="الحرف التالي"
        onClick={() => go(i + 1)}
      >
        <Chevron dir="next" />
      </button>
    </section>
  );
}

function glyphStyle(L: Letter) {
  if (L.img || !L.plate) return null;
  const p = PLATES[L.plate];
  return {
    gx: `${((p.cx - p.r) * 100).toFixed(2)}%`,
    gw: `${(p.r * 200).toFixed(2)}%`,
    gy: `${((p.cy - p.r * PLATE_K) * 100).toFixed(2)}%`,
    gh: `${(p.r * PLATE_K * 200).toFixed(2)}%`,
    color: p.color,
  };
}
