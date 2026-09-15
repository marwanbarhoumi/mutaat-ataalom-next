"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { RATIOS, type ScreenKey } from "@/lib/ratios";

type ToastCtx = {
  show: (msg: string, ms?: number) => void;
};

const ToastContext = createContext<ToastCtx>({ show: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

type StageProps = {
  screen: ScreenKey;
  children: ReactNode;
};

export function Stage({ screen, children }: StageProps) {
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null);
  const [scaleVars, setScaleVars] = useState({
    arw: RATIOS[screen][0],
    arh: RATIOS[screen][1],
    s: `${RATIOS[screen][0]}px`,
    transform: "translate(-50%, -50%) scale(1)",
  });

  const show = useCallback((msg: string, ms = 3200) => {
    setToast({ msg, key: Date.now() });
    window.setTimeout(() => setToast(null), ms);
  }, []);

  const sizeStage = useCallback(() => {
    const [designW, designH] = RATIOS[screen] ?? [1076, 717];
    const vw = document.documentElement.clientWidth || window.innerWidth;
    const vh = document.documentElement.clientHeight || window.innerHeight;
    const portrait = window.matchMedia(
      "(orientation: portrait) and (pointer: coarse)",
    ).matches;

    let scale: number;
    let transform: string;
    if (portrait) {
      const scaleX = vh / designW;
      const scaleY = vw / designH;
      scale = Math.max(scaleX, scaleY);
      transform = `translate(-50%, -50%) rotate(90deg) scale(${scale})`;
    } else {
      const scaleX = vw / designW;
      const scaleY = vh / designH;
      scale = Math.max(scaleX, scaleY);
      transform = `translate(-50%, -50%) scale(${scale})`;
    }

    setScaleVars({
      arw: designW,
      arh: designH,
      s: `${designW * scale}px`,
      transform,
    });
  }, [screen]);

  useEffect(() => {
    sizeStage();
    window.addEventListener("resize", sizeStage);
    window.addEventListener("orientationchange", sizeStage);
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(sizeStage)
        : null;
    if (ro) ro.observe(document.documentElement);
    return () => {
      window.removeEventListener("resize", sizeStage);
      window.removeEventListener("orientationchange", sizeStage);
      ro?.disconnect();
    };
  }, [sizeStage]);

  useEffect(() => {
    if (
      window.matchMedia("(orientation: portrait) and (pointer: coarse)").matches
    ) {
      show("أدِر جهازك أفقيًا لعرض أوضح 📱", 4200);
    }
  }, [show]);

  const ctx = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={ctx}>
      <div
        className="stage"
        id="stage"
        style={
          {
            ["--arw" as string]: scaleVars.arw,
            ["--arh" as string]: scaleVars.arh,
            ["--s" as string]: scaleVars.s,
            transform: scaleVars.transform,
          } as React.CSSProperties
        }
      >
        {children}
        {toast ? (
          <div className="toast" key={toast.key}>
            {toast.msg}
          </div>
        ) : null}
      </div>
    </ToastContext.Provider>
  );
}
