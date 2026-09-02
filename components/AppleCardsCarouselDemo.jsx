"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, callback]);
}

export function Carousel({ items, initialScroll = 0 }) {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollBy = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (containerRef.current) {
      const cardWidth = window.innerWidth < 768 ? 240 : 320;
      containerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          ref={containerRef}
          onScroll={checkScrollability}
          className="flex w-full gap-4 overflow-x-scroll scroll-smooth px-4 pb-8 [scrollbar-width:none] md:gap-6 md:px-8 lg:px-12 xl:px-16 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="shrink-0 w-0 md:w-4" />
          {items.map((item, index) => (
            <motion.div
              key={"card" + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 * index }}
            >
              {item}
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-end gap-3 px-4 md:px-8 lg:px-12 xl:px-16">
          <span className="mr-auto font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] text-[#1B1B18]/40">
            {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy("left")}
            disabled={!canScrollLeft}
            className="flex h-10 w-10 items-center justify-center border border-[#1B1B18]/20 text-[#1B1B18] transition-colors duration-300 hover:border-[#24476E] hover:text-[#24476E] disabled:opacity-30 disabled:hover:border-[#1B1B18]/20 disabled:hover:text-[#1B1B18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24476E]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy("right")}
            disabled={!canScrollRight}
            className="flex h-10 w-10 items-center justify-center border border-[#1B1B18]/20 text-[#1B1B18] transition-colors duration-300 hover:border-[#24476E] hover:text-[#24476E] disabled:opacity-30 disabled:hover:border-[#1B1B18]/20 disabled:hover:text-[#1B1B18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24476E]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

function RegistrationMarks() {
  const positions = [
    "top-2 left-2",
    "top-2 right-2 rotate-90",
    "bottom-2 left-2 -rotate-90",
    "bottom-2 right-2 rotate-180",
  ];
  return (
    <>
      {positions.map((pos) => (
        <svg
          key={pos}
          className={`pointer-events-none absolute h-4 w-4 text-[#E7E5DE]/80 mix-blend-difference ${pos}`}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path d="M8 0V16M0 8H16" stroke="currentColor" strokeWidth="1" />
          <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1" />
        </svg>
      ))}
    </>
  );
}

export function Card({ card, index, layout = false }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose } = useContext(CarouselContext);
  const shouldReduceMotion = useReducedMotion();

  const sheetNumber = `S-${String(index + 1).padStart(3, "0")}`;

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  useEffect(() => {
    function handleKey(event) {
      if (event.key === "Escape") handleClose();
    }
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useOutsideClick(containerRef, () => open && handleClose());

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#1B1B18]/80 backdrop-blur-sm"
            />
            <motion.div
              ref={containerRef}
              layoutId={layout ? `card-${sheetNumber}` : undefined}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              className={`${display.variable} ${mono.variable} relative z-[60] mx-auto my-10 flex h-fit max-w-3xl flex-col border border-[#1B1B18]/10 bg-[#E7E5DE] p-0 md:my-16`}
            >
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center border border-[#E7E5DE]/40 bg-[#1B1B18]/60 text-[#E7E5DE] transition-colors duration-300 hover:border-[#C1440E] hover:text-[#C1440E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C1440E]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-64 w-full sm:h-80 md:h-96">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
                <RegistrationMarks />
                <span className="absolute left-4 top-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[#E7E5DE]">
                  {sheetNumber}
                </span>
              </div>

              <div className="border-t border-[#1B1B18]/10 px-6 py-8 sm:px-10 sm:py-10">
                <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-[#24476E]">
                  {card.category}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-medium leading-snug text-[#1B1B18] sm:text-3xl">
                  {card.title}
                </h3>
                {card.content && (
                  <div className="mt-6 text-base leading-relaxed text-[#1B1B18]/70">
                    {card.content}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        layoutId={layout ? `card-${sheetNumber}` : undefined}
        onClick={handleOpen}
        whileHover={shouldReduceMotion ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`${display.variable} ${mono.variable} group relative flex h-80 w-56 shrink-0 flex-col overflow-hidden border border-[#1B1B18]/15 bg-[#1B1B18] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24476E] sm:h-96 sm:w-64 md:h-[28rem] md:w-72`}
        aria-label={`Open ${card.title}`}
      >
        <div className="relative h-full w-full">
          <Image
            src={card.src}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 60vw, 280px"
            style={{ objectFit: "cover" }}
            className="scale-105 grayscale-[20%] transition-all duration-700 ease-out group-hover:scale-100 group-hover:grayscale-0"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B18] via-[#1B1B18]/10 to-transparent" />

          <div
            className="absolute inset-0 bg-[#24476E] mix-blend-multiply opacity-30 transition-opacity duration-500 group-hover:opacity-0"
            aria-hidden="true"
          />

          <span className="absolute left-4 top-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[#E7E5DE]">
            {sheetNumber}
          </span>

          <div className="absolute inset-x-0 bottom-0 px-4 pb-5 pt-10">
            <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[#E7E5DE]/70">
              {card.category}
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-base font-medium leading-snug text-[#E7E5DE] sm:text-lg">
              {card.title}
            </h3>
            <span className="mt-3 inline-flex items-center gap-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] text-[#E7E5DE]/60 transition-colors duration-300 group-hover:text-[#C1440E]">
              VIEW
              <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </motion.button>
    </>
  );
}