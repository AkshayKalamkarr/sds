"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDE_DURATION = 5000;

const IMAGES = [
  {
    id: "carnac",
    url: "/images/projects/CARNACBUNDER5B/carnac-5.jpeg",
    alt: "Carnac Bunder infrastructure project in Mumbai",
    subtitle: "Mumbai",
    tag: "Civil Works",
  },
  {
    id: "coastal-road",
    url: "/images/projects/horticultureprojects/COASTALROAD/costal-herosection.JPG",
    alt: "Coastal Road horticulture and infrastructure project",
    subtitle: "Coastal Road",
    tag: "Horticulture",
  },
  {
    id: "tamilnadu",
    url: "/images/projects/TATATAMILNADU/tataTamilnadu-22.jpg",
    alt: "Tata infrastructure project in Tamil Nadu",
    subtitle: "Tamil Nadu",
    tag: "Construction",
  },
  {
    id: "bengaluru",
    url: "/images/projects/TATAPOWERSOLARCIVILOFFICEANDBRICKOUTAREABANGOLARE/tataBanglore-19.jpg",
    alt: "Tata infrastructure project in Bengaluru",
    subtitle: "Bengaluru",
    tag: "Solar Civil",
  },
];

/* Keyframes are bundled here so the component works even if globals.css
   doesn't define them. Safe to remove if you already have them. */
const KEYFRAMES = `
@keyframes kenburns {
  from { transform: scale(1); }
  to   { transform: scale(1.08); }
}
@keyframes thumb-progress {
  from { width: 0%; }
  to   { width: 100%; }
}
@keyframes carousel-progress {
  from { width: 0%; }
  to   { width: 100%; }
}
@keyframes logo-breathe {
  0%, 100% { opacity: .85; transform: scale(1); }
  50%      { opacity: 1;   transform: scale(1.08); }
}
@media (prefers-reduced-motion: reduce) {
  .hero-anim, .hero-anim * { animation: none !important; transition-duration: 0.01ms !important; }
}
`;

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const totalSlides = IMAGES.length;

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setProgressKey((p) => p + 1);
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setProgressKey((p) => p + 1);
  }, [totalSlides]);

  const goToSlide = useCallback(
    (index) => {
      if (index < 0 || index >= totalSlides) return;
      setCurrentIndex(index);
      setProgressKey((p) => p + 1);
    },
    [totalSlides]
  );

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      setProgressKey((p) => p + 1);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <main
      className="hero-anim relative min-h-[640px] w-full overflow-hidden bg-black"
      style={{ height: "100svh" }}
      aria-label="Infrastructure projects carousel"
      suppressHydrationWarning
    >
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />

      {/* ================= BACKGROUND SLIDES (Ken Burns) ================= */}
      <div className="absolute inset-0">
        {IMAGES.map((image, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
                isActive ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <div
                className={`h-full w-full ${
                  isActive ? "animate-[kenburns_8s_ease-out_forwards]" : ""
                }`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Layered gradients for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/70" />
            </div>
          );
        })}
      </div>

      {/* ================= NOISE / GRAIN OVERLAY ================= */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* ================= LOGO (soft spotlight, no box) ================= */}
      <div
        className={`absolute left-5 top-5 z-50 transition-all duration-700 sm:left-9 sm:top-7 lg:left-14 lg:top-9 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
      >
        <div className="relative flex items-center justify-center p-3 sm:p-4 lg:p-5">
          {/* Warm outer glow that matches the orange in the logo */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-full blur-2xl sm:-inset-8"
            style={{
              background:
                "radial-gradient(circle, rgba(255,140,50,0.45) 0%, rgba(255,140,50,0.15) 45%, transparent 70%)",
            }}
          />

          {/* Feathered white spotlight: no hard edge, so dark letters stand out */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.85) 38%, rgba(255,255,255,0.35) 62%, rgba(255,255,255,0) 78%)",
              animation: "logo-breathe 4.5s ease-in-out infinite",
            }}
          />

          <Image
            src="/images/home/SDS.png"
            alt="Company logo"
            width={240}
            height={160}
            priority
            className="relative h-12 w-[4.5rem] object-contain sm:h-16 sm:w-24 lg:h-20 lg:w-32"
            style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.25))" }}
          />
        </div>
      </div>

      {/* ================= MAIN CONTENT (left aligned, bottom-heavy) ================= */}
      <div className="relative z-30 flex h-full items-end px-5 pb-24 sm:px-10 sm:pb-32 lg:px-16 lg:pb-36">
        <div className="relative w-full max-w-3xl md:pr-44 lg:pr-0">
          {IMAGES.map((image, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={`${image.id}-content`}
                className={`${
                  isActive
                    ? "relative pointer-events-auto opacity-100"
                    : "pointer-events-none absolute inset-0 opacity-0"
                } transition-all duration-700`}
              >
                {/* Tag + counter row */}
                <div
                  className={`mb-4 flex flex-wrap items-center gap-3 transition-all delay-100 duration-700 sm:mb-5 sm:gap-4 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.25em]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {image.tag}
                  </span>
                  <span className="font-mono text-xs tracking-widest text-white/50">
                    {String(currentIndex + 1).padStart(2, "0")} —{" "}
                    {String(totalSlides).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h1
                  className={`break-words text-4xl font-bold leading-[1] tracking-tight text-white drop-shadow-2xl transition-all delay-150 duration-700 min-[400px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {image.subtitle}
                </h1>

                {/* Description + CTA */}
                <div
                  className={`mt-5 flex flex-col items-start gap-5 transition-all delay-200 duration-700 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <p className="max-w-md text-sm font-light leading-relaxed text-white/80 sm:text-base">
                    Civil Infrastructure • Horticulture • Construction — engineered
                    with precision, delivered with pride.
                  </p>
                  <button
                    type="button"
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:px-6 sm:py-3"
                  >
                    View Project
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= VERTICAL THUMBNAIL RAIL (right side) ================= */}
      <div className="absolute right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 sm:right-8 md:flex lg:right-12">
        {IMAGES.map((image, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={image.id}
              type="button"
              onClick={() => goToSlide(index)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label={`Go to ${image.subtitle} slide`}
              aria-current={isActive}
              className={`group relative overflow-hidden rounded-xl border transition-all duration-500 ${
                isActive
                  ? "h-20 w-32 border-white/80 shadow-2xl"
                  : "h-14 w-24 border-white/20 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="128px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  isActive ? "bg-black/10" : "bg-black/40"
                }`}
              />
              {isActive && (
                <span
                  key={progressKey}
                  className="absolute bottom-0 left-0 h-[3px] bg-white"
                  style={{
                    animation: `thumb-progress ${SLIDE_DURATION}ms linear`,
                    animationPlayState: isAutoPlaying ? "running" : "paused",
                  }}
                />
              )}
              <span className="absolute bottom-1.5 left-2 text-[10px] font-medium uppercase tracking-wider text-white drop-shadow">
                {image.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* ================= MOBILE DOTS (small screens only) ================= */}
      <div className="absolute bottom-7 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 md:hidden">
        {IMAGES.map((image, index) => (
          <button
            key={image.id}
            type="button"
            aria-label={`Go to ${image.subtitle} slide`}
            aria-current={index === currentIndex}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* ================= PREV / NEXT ARROWS ================= */}
      <button
        type="button"
        onClick={goToPrevious}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Previous slide"
        className="group absolute left-2 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/20 bg-black/20 p-2 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white active:scale-95 sm:left-6 sm:p-3"
      >
        <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={goToNext}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Next slide"
        className="group absolute right-2 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/20 bg-black/20 p-2 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white active:scale-95 sm:right-6 sm:p-3 md:right-40 lg:right-44"
      >
        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ================= TOP THIN PROGRESS BAR ================= */}
      <div className="absolute left-0 top-0 z-50 h-[2px] w-full overflow-hidden bg-white/10">
        <div
          key={progressKey}
          className="h-full bg-white"
          style={{
            width: isAutoPlaying ? "100%" : "0%",
            animation: isAutoPlaying ? `carousel-progress ${SLIDE_DURATION}ms linear` : "none",
          }}
        />
      </div>
    </main>
  );
};

export default HeroCarousel;