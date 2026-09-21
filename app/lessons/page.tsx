import { Stage } from "@/components/Stage";
import { LessonTiles } from "@/components/LessonTiles";
import Link from "next/link";
import { asset } from "@/lib/basePath";

export default function LessonsPage() {
  return (
    <Stage screen="lessons">
      <section className="screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="bg"
          src={asset("/assets/ui/lessons.png")}
          alt="الحروف والمقاطع — قائمة الدروس"
          draggable={false}
        />
        <LessonTiles />
        <Link href="/home" className="nav-btn back" aria-label="رجوع">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M14 5 L7 12 L14 19"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>
    </Stage>
  );
}
