"use client";

import { Stage } from "@/components/Stage";
import { Hotspot } from "@/components/Hotspot";
import { LetterGrid } from "@/components/LetterGrid";
import { useAudio } from "@/components/AudioPlayer";
import { asset } from "@/lib/basePath";

export default function AlphabetGridPage() {
  const { playAll, running, speakingIndex } = useAudio();

  return (
    <Stage screen="alphabet">
      <section className="screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="bg"
          src={asset("/assets/alphabet/grid.jpg")}
          alt="اكتشف معانا — حروف الأبجدية العربية"
          draggable={false}
        />
        <Hotspot left={0.93} top={1.42} width={20.45} height={13.48} href="/" ariaLabel="متعة التعلم" />
        <Hotspot left={74.53} top={1.56} width={7.43} height={12.06} soon ariaLabel="اشترك" />
        <Hotspot left={82.81} top={1.56} width={7.06} height={12.06} href="/lessons" ariaLabel="المحتوى" />
        <Hotspot left={90.89} top={1.56} width={6.69} height={12.06} href="/" ariaLabel="الرئيسية" />
        <LetterGrid set="alphabet" speakingIndex={speakingIndex} />
        <Hotspot
          left={43.68}
          top={78.72}
          width={27.42}
          height={10.64}
          className={`pill${running === "alphabet" ? " is-playing" : ""}`}
          ariaLabel="استمع لكل الحروف"
          onClick={() => playAll("alphabet")}
        />
        <Hotspot
          left={1.67}
          top={64.96}
          width={17.38}
          height={10.92}
          className="pill"
          href="/lessons"
          ariaLabel="رجوع"
        />
      </section>
    </Stage>
  );
}
