'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './GetInTouch.module.css';

const CONTACT_ROWS = [
  { label: 'Call us', value: '+91 8356834380', href: 'tel:+918356834380' },
  { label: 'Email us', value: 'info@sdsbharat.com', href: 'mailto:info@sdsbharat.com' },
  { label: 'Visit us', value: 'Mumbai, Maharashtra', href: null },
];

const GetInTouch = () => {
  return (
    <section className="relative w-full h-screen min-h-[640px] bg-[#F4F1EA]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* ============ LEFT: CONTENT PANEL ============ */}
        <motion.div
          className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-20 md:py-0 bg-[#1C1C1A] text-white order-2 md:order-1 overflow-y-auto"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className={`${styles.monoLabel} text-[10px] tracking-[0.3em] text-white/45 mb-5`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            GET IN TOUCH
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-tight mb-6 max-w-lg"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Let&rsquo;s build something worth talking about
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg leading-relaxed text-white/65 max-w-lg mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            It would be great to hear from you. Share your project, your
            timelines, your questions — our team responds with clarity, not
            sales scripts.
          </motion.p>

          {/* Contact ledger rows, matching the monochrome ledger style */}
          <motion.div
            className="flex flex-col max-w-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {CONTACT_ROWS.map((row, i) => {
              const Wrapper = row.href ? motion.a : motion.div;
              return (
                <Wrapper
                  key={row.label}
                  href={row.href || undefined}
                  className={`${styles.contactRow} ${row.href ? styles.contactRowLink : ''}`}
                  whileHover={row.href ? { x: 4 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`${styles.monoLabel} ${styles.contactIndex}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.contactLabel}>{row.label}</span>
                  <span className={styles.contactValue}>{row.value}</span>
                  {row.href && (
                    <span className={styles.contactArrow} aria-hidden="true">
                      &rarr;
                    </span>
                  )}
                </Wrapper>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ============ RIGHT: IMAGE PANEL ============ */}
        <motion.div
          className="relative min-h-[40vh] md:min-h-0 order-1 md:order-2"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center grayscale-[0.15] contrast-[1.05]"
            style={{ backgroundImage: "url('/images/home/getinTouch.jpg')" }}
          />
          {/* thin fade toward the panel seam, no full tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent md:bg-gradient-to-l" />
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;