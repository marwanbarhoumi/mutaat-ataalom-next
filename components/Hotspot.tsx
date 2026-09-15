"use client";

import { useRouter } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import { useToast } from "./Stage";

type HotspotProps = {
  left: number | string;
  top: number | string;
  width: number | string;
  height: number | string;
  href?: string;
  soon?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel: string;
  children?: ReactNode;
};

function pct(v: number | string) {
  return typeof v === "number" ? `${v}%` : v;
}

export function Hotspot({
  left,
  top,
  width,
  height,
  href,
  soon,
  onClick,
  className = "",
  ariaLabel,
  children,
}: HotspotProps) {
  const router = useRouter();
  const { show } = useToast();

  const style: CSSProperties = {
    left: pct(left),
    top: pct(top),
    width: pct(width),
    height: pct(height),
  };

  const handleClick = () => {
    if (soon) {
      show("هذه الميزة قادمة قريبًا إن شاء الله 🌟");
      return;
    }
    if (onClick) {
      onClick();
      return;
    }
    if (href) router.push(href);
  };

  return (
    <button
      type="button"
      className={`hs ${className}`.trim()}
      style={style}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
