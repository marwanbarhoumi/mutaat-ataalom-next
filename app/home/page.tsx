import { Stage } from "@/components/Stage";
import { Hotspot } from "@/components/Hotspot";
import { CategoryGrid } from "@/components/CategoryGrid";
import { asset } from "@/lib/basePath";

export default function HomePage() {
  return (
    <Stage screen="home">
      <section className="screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="bg"
          src={asset("/assets/ui/home.png")}
          width={1904}
          height={1072}
          alt="متعة التعلم — الكلمة، الحروف والمقاطع، الجمل، القواعد"
          draggable={false}
        />

        {/* Navigation haut-droite — assets séparés */}
        <Hotspot
          left={72.8}
          top={1}
          width={7.6}
          height={13.4}
          soon
          className="nav-ico"
          ariaLabel="الاشتراك"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/ui/home/nav-subscribe.png")}
            width={507}
            height={507}
            alt=""
            draggable={false}
          />
        </Hotspot>
        <Hotspot
          left={81.2}
          top={1}
          width={7.6}
          height={13.4}
          href="/lessons"
          className="nav-ico"
          ariaLabel="المحتوى"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/ui/home/nav-content.png")}
            width={338}
            height={338}
            alt=""
            draggable={false}
          />
        </Hotspot>
        <Hotspot
          left={89.6}
          top={1}
          width={7.6}
          height={13.4}
          href="/"
          className="nav-ico"
          ariaLabel="الرئيسية"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/ui/home/nav-home.png")}
            width={169}
            height={169}
            alt=""
            draggable={false}
          />
        </Hotspot>

        <CategoryGrid />
      </section>
    </Stage>
  );
}
