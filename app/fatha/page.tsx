"use client";

import { Stage } from "@/components/Stage";
import { Hotspot } from "@/components/Hotspot";
import { LetterGrid } from "@/components/LetterGrid";
import { useAudio } from "@/components/AudioPlayer";
import { asset } from "@/lib/basePath";

export default function FathaGridPage() {
  const { playAll, running, speakingIndex } = useAudio();

  return (
    <Stage screen="fatha">
      <section className="screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="bg"
          src={asset("/assets/fatha/grid.jpg")}
          alt="الحروف مع الفتحة — حروف الأبجدية العربية"
          draggable={false}
        />
        <Hotspot left={1.4} top={1.1} width={21.5} height={14.2} href="/" ariaLabel="متعة التعلم" />
        <Hotspot left={84.4} top={1.2} width={6.9} height={12.7} href="/lessons" ariaLabel="المحتوى" />
        <Hotspot left={91.4} top={1.2} width={6.9} height={12.7} href="/" ariaLabel="الرئيسية" />
        <LetterGrid set="fatha" speakingIndex={speakingIndex} />
        <button
          type="button"
          className={`nav-btn play${running === "fatha" ? " is-playing" : ""}`}
          aria-label="استمع لكل الحروف"
          onClick={() => playAll("fatha")}
        >
          <svg className="i-play" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5.5 L18 12 L8 18.5 Z" fill="currentColor" />
          </svg>
          <svg className="i-stop" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="7" y="7" width="10" height="10" rx="2" fill="currentColor" />
          </svg>
        </button>
      </section>
    </Stage>
  );
}
