"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { audioSrc, LETTERS } from "@/lib/letters";

type AudioCtx = {
  say: (set: "alphabet" | "fatha", i: number, onEnd?: () => void) => void;
  playAll: (set: "alphabet" | "fatha") => void;
  stopAll: () => void;
  playingSet: "alphabet" | "fatha" | null;
  running: "alphabet" | "fatha" | null;
  speakingIndex: number | null;
};

const Ctx = createContext<AudioCtx | null>(null);

export function useAudio() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAudio must be used within AudioProvider");
  return v;
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const clipRef = useRef<HTMLAudioElement | null>(null);
  const [playingSet, setPlayingSet] = useState<"alphabet" | "fatha" | null>(
    null,
  );
  const [running, setRunning] = useState<"alphabet" | "fatha" | null>(null);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const runningRef = useRef<"alphabet" | "fatha" | null>(null);

  useEffect(() => {
    clipRef.current = new Audio();
    clipRef.current.preload = "none";
  }, []);

  const stopSound = useCallback(() => {
    const clip = clipRef.current;
    if (!clip) return;
    clip.onended = null;
    clip.onerror = null;
    if (!clip.paused) clip.pause();
    setPlayingSet(null);
  }, []);

  const stopAll = useCallback(() => {
    runningRef.current = null;
    setRunning(null);
    setSpeakingIndex(null);
    stopSound();
  }, [stopSound]);

  const say = useCallback(
    (set: "alphabet" | "fatha", i: number, onEnd?: () => void) => {
      const clip = clipRef.current;
      if (!clip) return;
      stopSound();
      setPlayingSet(set);
      clip.src = audioSrc(LETTERS[i].slug);
      const done = () => {
        setPlayingSet(null);
        if (onEnd) onEnd();
      };
      clip.onended = done;
      clip.onerror = done;
      const p = clip.play();
      if (p && p.catch) p.catch(done);
    },
    [stopSound],
  );

  const playAll = useCallback(
    (set: "alphabet" | "fatha") => {
      if (runningRef.current) {
        const same = runningRef.current === set;
        stopAll();
        if (same) return;
      }
      runningRef.current = set;
      setRunning(set);
      let i = 0;
      const next = () => {
        if (runningRef.current !== set || i >= LETTERS.length) {
          stopAll();
          return;
        }
        const idx = i++;
        setSpeakingIndex(idx);
        say(set, idx, () => {
          if (runningRef.current === set) setTimeout(next, 260);
        });
      };
      next();
    },
    [say, stopAll],
  );

  const value: AudioCtx = {
    say,
    playAll,
    stopAll,
    playingSet,
    running,
    speakingIndex,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/** Thin re-export alias expected by the brief */
export function AudioPlayer({ children }: { children: ReactNode }) {
  return <AudioProvider>{children}</AudioProvider>;
}
