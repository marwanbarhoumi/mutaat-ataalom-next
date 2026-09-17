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

        {/* Navigation haut-droite — mêmes coords/comportements que l'original (start.jpg hotspots) */}
        <Hotspot
          left={65.52}
          top={0}
          width={8.85}
          height={15.74}
          soon
          className="nav-ico"
          ariaLabel="الاشتراك"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/ui/start/nav-subscribe.png")}
            width={169}
            height={169}
            alt=""
            draggable={false}
          />
        </Hotspot>
        <Hotspot
          left={77.08}
          top={0}
          width={8.85}
          height={15.74}
          href="/home"
          className="nav-ico"
          ariaLabel="المحتوى"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/ui/start/nav-content.png")}
            width={338}
            height={338}
            alt=""
            draggable={false}
          />
        </Hotspot>
        <Hotspot
          left={88.65}
          top={0}
          width={8.85}
          height={15.74}
          href="/"
          className="nav-ico"
          ariaLabel="الرئيسية"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/ui/start/nav-home.png")}
            width={169}
            height={169}
            alt=""
            draggable={false}
          />
        </Hotspot>

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
