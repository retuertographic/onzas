"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Slide } from "./types";

type Variant = "haze" | "box" | "band";

interface ImageSliderProps {
  slides: Slide[];
  variant: Variant;
  /** ms entre diapositivas (la referencia usa 2000/3000) */
  interval: number;
  className?: string;
  dots?: boolean;
  label: string;
}

/** Carrusel con fundido, flechas al pasar el ratón y puntos, como los sliders Divi de la referencia. */
export function ImageSlider({ slides, variant, interval, className, dots = true, label }: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const [dragX, setDragX] = useState(0);
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  const swiped = useRef(false);

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), interval + 1000);
    return () => window.clearInterval(id);
  }, [go, interval, paused, index]);

  // Deslizar con el dedo (o arrastrar con el ratón) cambia de diapositiva.
  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if ((e.target as HTMLElement).closest("button")) return;
    start.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
    swiped.current = false;
    setPaused(true);
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const s = start.current;
    if (!s || s.id !== e.pointerId) return;
    const dx = e.clientX - s.x;
    if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(e.clientY - s.y)) {
      if (!swiped.current) e.currentTarget.setPointerCapture(e.pointerId);
      swiped.current = true;
      setDragX(dx);
    }
  }

  function onPointerEnd(e: PointerEvent<HTMLDivElement>) {
    const s = start.current;
    if (!s || s.id !== e.pointerId) return;
    const dx = e.clientX - s.x;
    if (swiped.current && Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    start.current = null;
    setDragX(0);
    if (e.pointerType !== "mouse") setPaused(false);
  }

  return (
    <div
      className={cn("group relative touch-pan-y overflow-hidden bg-neutral-800 select-none", className)}
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
      onMouseEnter={() => variant !== "band" && setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      onClickCapture={(e) => {
        // Un deslizamiento no debe abrir el enlace de la diapositiva.
        if (swiped.current) {
          e.preventDefault();
          e.stopPropagation();
          swiped.current = false;
        }
      }}
    >
      {slides.map((slide, i) => (
        <Link
          key={slide.title}
          href={slide.href}
          draggable={false}
          aria-hidden={i !== index}
          tabIndex={i === index ? 0 : -1}
          style={i === index && dragX ? { transform: `translateX(${dragX * 0.35}px)` } : undefined}
          className={cn(
            "absolute inset-0 block transition-opacity duration-1000 ease-in-out",
            i === index ? "z-10 opacity-100" : "z-0 opacity-0",
          )}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            draggable={false}
            sizes="(max-width: 1440px) 100vw, 1440px"
            className={cn("object-cover", variant === "haze" && "saturate-[0.55]")}
            style={slide.position ? { objectPosition: slide.position } : undefined}
          />
          {variant === "haze" && <HazeCaption slide={slide} />}
          {variant === "box" && <BoxCaption slide={slide} />}
          {variant === "band" && <BandCaption slide={slide} />}
        </Link>
      ))}

      {variant !== "band" && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => go(-1)}
            className="absolute top-1/2 left-[-48px] z-20 -translate-y-1/2 text-white opacity-0 transition-all duration-300 group-hover:left-4 group-hover:opacity-100 focus-visible:left-4 focus-visible:opacity-100"
          >
            <ChevronLeft className="size-12" strokeWidth={1.25} />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => go(1)}
            className="absolute top-1/2 right-[-48px] z-20 -translate-y-1/2 text-white opacity-0 transition-all duration-300 group-hover:right-4 group-hover:opacity-100 focus-visible:right-4 focus-visible:opacity-100"
          >
            <ChevronRight className="size-12" strokeWidth={1.25} />
          </button>
        </>
      )}

      {dots && slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-5 z-20 flex justify-center gap-[10px]">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Ir a ${slide.title}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn("size-[7px] rounded-full bg-white transition-opacity", i === index ? "opacity-100" : "opacity-50")}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function HazeCaption({ slide }: { slide: Slide }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/25 px-6 text-center text-white">
      <p className="font-condensed text-[clamp(40px,6vw,72px)] font-light uppercase leading-none tracking-[0.04em] [text-shadow:0_1px_12px_rgba(0,0,0,0.25)]">
        <span className="mr-2 opacity-80">|</span>
        {slide.title}
        <span className="ml-2 opacity-80">|</span>
      </p>
      <span className="mt-4 border-b border-white/80 px-2 pb-1 font-condensed text-[clamp(16px,1.6vw,22px)] font-light uppercase tracking-[0.08em]">
        {slide.subtitle}
      </span>
    </div>
  );
}

function BoxCaption({ slide }: { slide: Slide }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/20">
      <div className="bg-white/55 px-8 py-5 text-center text-[#5a5a5a] backdrop-blur-[1px]">
        <p className="font-condensed text-[clamp(40px,5vw,64px)] font-light uppercase leading-[0.95] tracking-[0.02em]">
          {slide.title}
        </p>
        <p className="mt-2 font-condensed text-[clamp(18px,2vw,26px)] font-light uppercase tracking-[0.06em]">
          | {slide.subtitle} |
        </p>
      </div>
    </div>
  );
}

function BandCaption({ slide }: { slide: Slide }) {
  return (
    <div className="absolute inset-x-0 bottom-[9%] bg-white/40 py-2 text-center">
      <p className="font-condensed text-[28px] font-medium uppercase leading-tight text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.25)]">
        {slide.title}
      </p>
    </div>
  );
}
