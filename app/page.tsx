import { Stage } from "@/components/Stage";
import { Hotspot } from "@/components/Hotspot";
import { asset } from "@/lib/basePath";

export default function StartPage() {
  return (
    <Stage screen="start">
      <section className="screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="bg"
          src={asset("/assets/ui/start.png")}
          width={1920}
          height={1080}
          alt="تعلم .. إلعب .. أكتشف — اختر لغتك"
          draggable={false}
        />

        {/* Boutons de langue — assets séparés */}
        <Hotspot
          left={58.5}
          top={45}
          width={20}
          height={32.4}
          className="nav-ico hint"
          href="/home"
          ariaLabel="العربية"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/ui/start/lang-ar.png")}
            width={384}
            height={350}
            alt=""
            draggable={false}
          />
        </Hotspot>
        <Hotspot
          left={42.5}
          top={50}
          width={18.75}
          height={33.3}
          soon
          className="nav-ico"
          ariaLabel="Français"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/ui/start/lang-fr.png")}
            width={360}
            height={360}
            alt=""
            draggable={false}
          />
        </Hotspot>
        <Hotspot
          left={26.35}
          top={45}
          width={18.23}
          height={32.4}
          soon
          className="nav-ico"
          ariaLabel="English"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/ui/start/lang-en.png")}
            width={350}
            height={350}
            alt=""
            draggable={false}
          />
        </Hotspot>
      </section>
    </Stage>
  );
}
