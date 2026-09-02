'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

const PANELS = [
  {
    sheet: 'A-101',
    label: 'Architectural Design',
    alt: 'Modern architectural building facade',
    src: '/images/portfolio/architecture.jpg',
    className: 'lg:col-span-7 lg:row-span-2',
    priority: true,
  },
  {
    sheet: 'I-102',
    label: 'Interior Design',
    alt: "Interior of Ae'o Ward Village",
    src: '/images/portfolio/interior.jpeg',
    className: 'lg:col-span-5 lg:row-span-1',
    priority: true,
  },
  {
    sheet: 'C-103',
    label: 'Civil Construction',
    alt: 'Stadium civil construction project',
    src: '/images/portfolio/civil.jpg',
    className: 'lg:col-span-5 lg:row-span-1',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 16 },
  },
};

function RegistrationMarks() {
  const positions = [
    'top-1.5 left-1.5',
    'top-1.5 right-1.5 rotate-90',
    'bottom-1.5 left-1.5 -rotate-90',
    'bottom-1.5 right-1.5 rotate-180',
  ];
  return (
    <>
      {positions.map((pos) => (
        <svg
          key={pos}
          className={`pointer-events-none absolute hidden h-4 w-4 text-[#E7E5DE]/80 mix-blend-difference sm:block ${pos}`}
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

function Panel({ sheet, label, alt, src, className, priority }) {
  return (
    <motion.div
      variants={rise}
      className={`group relative h-64 overflow-hidden border border-[#1B1B18]/15 sm:h-80 md:h-96 lg:h-full ${className}`}
    >
      <Link
        href="/services/servicesdashboard"
        className="relative block h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24476E]"
        aria-label={`View ${label} projects`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          style={{ objectFit: 'cover' }}
          priority={priority}
          className="scale-105 grayscale-[15%] transition-all duration-700 ease-out group-hover:scale-100 group-hover:grayscale-0"
        />

        {/* Blueprint wash — fades on hover to reveal full color */}
        <div
          className="absolute inset-0 bg-[#24476E] mix-blend-multiply opacity-30 transition-opacity duration-500 group-hover:opacity-0"
          aria-hidden="true"
        />

        <span className="absolute left-3 top-3 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[#E7E5DE]">
          {sheet}
        </span>

        <RegistrationMarks />

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 border-t border-[#E7E5DE]/25 bg-[#1B1B18]/70 px-4 py-3 backdrop-blur-[2px]">
          <h3 className="font-[family-name:var(--font-display)] text-base font-medium text-[#E7E5DE] sm:text-lg">
            {label}
          </h3>
          <svg
            className="h-4 w-4 shrink-0 text-[#E7E5DE] transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}

const Portfolio = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="portfolio-heading"
      className={`${display.variable} ${mono.variable} bg-[#E7E5DE] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16`}
    >
      <h2 id="portfolio-heading" className="sr-only">
        Our Portfolio
      </h2>

      <motion.div
        className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:auto-rows-[15rem] lg:gap-6"
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? undefined : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.2 }}
      >
        {PANELS.map((panel) => (
          <Panel key={panel.sheet} {...panel} />
        ))}

        {/* Title block */}
        <motion.div
          variants={rise}
          className="flex flex-col gap-6 border border-[#1B1B18]/15 bg-[#1B1B18] px-5 py-6 text-[#E7E5DE] sm:px-8 sm:py-8 lg:col-span-12 lg:flex-row lg:items-center lg:justify-between lg:px-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 lg:gap-10">
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-[#E7E5DE]/50">
              SHEET 01&ndash;03
            </span>
            <p className="max-w-md font-[family-name:var(--font-display)] text-xl font-medium leading-snug sm:text-2xl">
              A portfolio built on scope, scale, and site.
            </p>
          </div>

          <Link
            href="/services/servicesdashboard"
            className="group inline-flex w-fit items-center gap-2 border border-[#E7E5DE]/30 px-5 py-2.5 font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] transition-colors duration-300 hover:border-[#C1440E] hover:text-[#C1440E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C1440E]"
          >
            SEE ALL WORK
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;