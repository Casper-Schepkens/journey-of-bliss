"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { HeroSlide } from "@/lib/site";

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    if (paused) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  function go(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  return (
    <section
      className="relative h-[460px] overflow-hidden bg-black text-white sm:h-[520px] lg:h-[600px]"
      aria-roledescription="carousel"
      aria-label="Featured journeys"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((item, itemIndex) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-700 ${
            itemIndex === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={itemIndex !== index}
        >
          <Image
            src={item.image}
            alt={itemIndex === index ? item.alt : ""}
            fill
            priority={itemIndex === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {slide.eyebrow ? (
          <p className="font-display text-2xl font-bold text-white drop-shadow md:text-4xl">
            {slide.eyebrow}
          </p>
        ) : null}
        <h1
          className={`font-display max-w-4xl font-black tracking-wide drop-shadow ${
            slide.gold
              ? "text-4xl text-gold sm:text-6xl lg:text-7xl"
              : "text-3xl text-white sm:text-5xl lg:text-6xl"
          }`}
        >
          {slide.title}
        </h1>
        <Link
          href="/tours"
          className="mt-8 inline-flex items-center gap-2 bg-teal px-8 py-3 text-sm font-bold tracking-wider text-white uppercase hover:bg-teal-deep"
        >
          <EyeIcon />
          View Tours
        </Link>
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-3 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink hover:bg-white"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-3 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink hover:bg-white"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((item, itemIndex) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show slide ${itemIndex + 1}: ${item.title}`}
            aria-current={itemIndex === index}
            onClick={() => setIndex(itemIndex)}
            className={`h-2.5 w-2.5 rounded-full ${itemIndex === index ? "bg-teal" : "bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 5C6 5 2.1 9.1 1 12c1.1 2.9 5 7 11 7s9.9-4.1 11-7c-1.1-2.9-5-7-11-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
    </svg>
  );
}
