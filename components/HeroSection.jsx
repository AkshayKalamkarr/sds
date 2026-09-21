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
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black"
      aria-label="Infrastructure projects carousel"
    >
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

      {/* ================= LOGO ================= */}
      <div
        className={`absolute left-5 top-5 z-50 transition-all duration-700 sm:left-8 sm:top-8 lg:left-12 lg:top-10 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
      >
        <Image
          src="/images/home/SDS.png"
          alt="Company logo"
          width={120}
          height={120}
          priority
          className="h-14 w-14 object-contain drop-shadow-2xl sm:h-16 sm:w-16 lg:h-20 lg:w-20"
        />
      </div>



      {/* ================= MAIN CONTENT (left aligned, bottom-heavy) ================= */}
      <div className="relative z-30 flex h-full items-end px-6 pb-28 sm:px-10 sm:pb-32 lg:px-16 lg:pb-36">
        <div className="max-w-3xl">
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
                  className={`mb-5 flex items-center gap-4 transition-all delay-100 duration-700 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-white backdrop-blur-md">
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
                  className={`text-5xl font-bold leading-[0.95] tracking-tight text-white drop-shadow-2xl transition-all delay-150 duration-700 sm:text-6xl md:text-7xl lg:text-8xl ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {image.subtitle}
                </h1>

                {/* Description + CTA */}
                <div
                  className={`mt-6 flex flex-wrap items-center gap-6 transition-all delay-200 duration-700 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <p className="max-w-md text-sm font-light leading-relaxed text-white/75 sm:text-base">
                    Civil Infrastructure • Horticulture • Construction — engineered
                    with precision, delivered with pride.
                  </p>
                  <button
                    type="button"
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
                  >
                    View Project
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
      <div className="absolute bottom-8 right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 sm:right-8 lg:right-12 md:flex">
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
      <div className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 md:hidden">
        {IMAGES.map((image, index) => (
          <button
            key={image.id}
            type="button"
            aria-label={`Go to ${image.subtitle} slide`}
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
        className="group absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/20 bg-black/20 p-3 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/15 active:scale-95 sm:left-6"
      >
        <svg className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={goToNext}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Next slide"
        className="group absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/20 bg-black/20 p-3 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/15 active:scale-95 sm:right-6 md:right-40 lg:right-44"
      >
        <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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