"use client";
import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import { Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import { guestprojects } from "../../../../data/guesthousedata";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProjectNotFound from "@/components/ProjectNotFoundGuestHouse";

// ---------------------------------------------------------------------------
// Design tokens — "Linen & Moss" direction
// ---------------------------------------------------------------------------
// ink     #26332B  – deep moss/pine, headings & dark surfaces
// paper   #F7F4ED  – warm linen background
// line    #DAD2BE  – soft hairline / dividers
// sage    #7C8B6F  – muted secondary accent
// gold    #B8874A  – brass/ochre, primary accent

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const ICON_MAP = Object.fromEntries(Object.entries(Icons));

const GRID = {
  gallery: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-10 w-full",
  highlights: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5",
  videos: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12",
};

const STYLES = {
  eyebrow: `font-[family-name:var(--font-plex-mono)] text-[11px] uppercase tracking-[0.3em] text-[#B8874A]`,
  title: `font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-semibold text-center text-[#26332B] mb-3`,
  divider: "mx-auto mb-10 flex items-center justify-center gap-3",
  button:
    "inline-flex items-center gap-1.5 border border-[#26332B] px-5 py-2 text-xs uppercase tracking-[0.15em] text-[#26332B] transition-colors duration-300 hover:bg-[#26332B] hover:text-[#F7F4ED]",
};

const SectionDivider = () => (
  <div className={STYLES.divider}>
    <span className="h-px w-10 bg-[#DAD2BE]" />
    <span className="h-1.5 w-1.5 rotate-45 bg-[#B8874A]" />
    <span className="h-px w-10 bg-[#DAD2BE]" />
  </div>
);

const cache = new Map();
const getProjectBySlug = (slug) => {
  if (!slug) return null;
  if (cache.has(slug)) return cache.get(slug);
  const project = guestprojects.find((p) => p.slug === slug);
  if (project) cache.set(slug, project);
  return project;
};

// ---------------------------------------------------------------------------
// VideoPlayer
// ---------------------------------------------------------------------------
const VideoPlayer = React.memo(({ video }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (error) {
    return (
      <div className="flex aspect-video items-center justify-center border border-[#DAD2BE] bg-[#F0EBDD] text-sm text-[#7C8B6F]">
        Video unavailable
      </div>
    );
  }

  return (
    <div ref={ref} className="relative aspect-video overflow-hidden border border-[#DAD2BE] bg-[#F0EBDD] shadow-sm">
      {show && (
        <video
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          controls
          poster={video.thumbnail}
          preload="metadata"
          onError={() => setError(true)}
        >
          <source src={video.url} type="video/mp4" />
        </video>
      )}
      {video.title && (
        <p
          className={`${plexMono.variable} mt-2 text-center font-[family-name:var(--font-plex-mono)] text-[11px] uppercase tracking-wider text-[#7C8B6F]`}
        >
          {video.title}
        </p>
      )}
    </div>
  );
});
VideoPlayer.displayName = "VideoPlayer";

// ---------------------------------------------------------------------------
// GalleryImage — framed, ledger-numbered
// ---------------------------------------------------------------------------
const GalleryImage = React.memo(({ item, index, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      onClick={() => !error && onClick(item.image)}
      className={`group relative aspect-square overflow-hidden border border-[#DAD2BE] bg-[#F0EBDD] p-1.5 ${
        error ? "" : "cursor-pointer"
      }`}
    >
      <div className="relative h-full w-full overflow-hidden">
        {!error ? (
          <>
            {!loaded && <div className="absolute inset-0 animate-pulse bg-[#E4DECC]" />}
            <Image
              src={item.image}
              alt={item.alt || "Gallery image"}
              fill
              loading="lazy"
              sizes="(max-width:768px)50vw,(max-width:1200px)33vw,25vw"
              className={`object-cover transition-all duration-500 group-hover:scale-[1.04] ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
            />
            <span
              className={`${plexMono.variable} absolute bottom-2 left-2 bg-[#26332B]/80 px-1.5 py-0.5 font-[family-name:var(--font-plex-mono)] text-[9px] tracking-wider text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[#7C8B6F]">
            Image unavailable
          </div>
        )}
      </div>
    </div>
  );
});
GalleryImage.displayName = "GalleryImage";

// ---------------------------------------------------------------------------
// HighlightItem — ledger-style amenity card
// ---------------------------------------------------------------------------
const HighlightItem = React.memo(({ item }) => {
  const Icon = ICON_MAP[item.icon];
  return (
    <div className="flex flex-col items-center border border-[#DAD2BE] bg-white/60 p-5 text-center transition-colors duration-300 hover:border-[#B8874A]">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#B8874A]/50 text-[#26332B]">
        {Icon ? <Icon className="h-5 w-5" strokeWidth={1.5} /> : <div className="h-5 w-5 rounded bg-[#DAD2BE]" />}
      </div>
      <p className="text-xs font-medium leading-snug text-[#3F4A40] sm:text-sm">{item.description}</p>
    </div>
  );
});
HighlightItem.displayName = "HighlightItem";

// ---------------------------------------------------------------------------
// ConfigRow — rate-card row
// ---------------------------------------------------------------------------
const ConfigRow = React.memo(({ config }) => (
  <tr className="border-b border-[#DAD2BE] transition-colors duration-200 hover:bg-[#F0EBDD]">
    <td className="px-4 py-4 text-center text-sm text-[#26332B]">{config.flat}</td>
    <td className="px-4 py-4 text-center text-sm text-[#26332B]">{config.carpet}</td>
    <td className="px-4 py-4 text-center">
      <Link href="/contact" className={STYLES.button}>
        Get quote
      </Link>
    </td>
  </tr>
));
ConfigRow.displayName = "ConfigRow";

// ---------------------------------------------------------------------------
// ImageModal
// ---------------------------------------------------------------------------
const ImageModal = ({ image, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      onClick={(e) => e.target === modalRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#181D19]/95"
    >
      <div className="relative h-full w-full max-w-6xl max-h-[90vh] p-6">
        <Image src={image} alt="Preview" fill sizes="100vw" className="object-contain" priority />
        <button
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-white/30 text-2xl text-white transition-colors duration-200 hover:border-[#B8874A] hover:text-[#B8874A]"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------
export default function ProjectPage() {
  const { slug } = useParams();
  const [fullImage, setFullImage] = useState(null);
  const project = useMemo(() => getProjectBySlug(slug), [slug]);

  const openImage = useCallback((src) => setFullImage(src), []);
  const closeImage = useCallback(() => setFullImage(null), []);

  if (!project) return <ProjectNotFound />;

  return (
    <div className={`${cormorant.variable} ${plexMono.variable} min-h-screen bg-[#F7F4ED]`}>
      {/* Hero */}
      <section className="px-6 py-12 lg:px-16">
        <div className="flex flex-col items-center gap-12 md:mt-20 lg:flex-row">
          <div className="text-center lg:w-1/2 lg:text-left">
            <p className={`${STYLES.eyebrow} mb-4`}>Guest House — Stay</p>
            <h1 className="mb-2 font-[family-name:var(--font-cormorant)] text-4xl font-semibold italic leading-tight text-[#26332B] md:text-6xl">
              {project.title}
            </h1>
            <span className="mx-auto mb-6 block h-px w-20 bg-[#B8874A] lg:mx-0" />
            <p className="text-base leading-relaxed text-[#3F4A40] md:text-lg">
              {project.fullDescription}
            </p>
          </div>

          <div className="relative cursor-pointer border border-[#DAD2BE] bg-white p-2 shadow-sm lg:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                onClick={() => setFullImage(project.image)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {(project.galleryImages || project.videos) && (
        <section className="border-y border-[#DAD2BE] bg-[#F0EBDD] px-6 py-16 lg:px-16">
          <p className={`${STYLES.eyebrow} text-center`}>Photos &amp; Film</p>
          <h2 className={STYLES.title}>Gallery</h2>
          <SectionDivider />

          {project.videos?.length > 0 && (
            <div className={GRID.videos}>
              {project.videos.map((v, i) => (
                <VideoPlayer key={i} video={v} />
              ))}
            </div>
          )}

          {project.galleryImages?.length > 0 && (
            <div className={GRID.gallery}>
              {project.galleryImages.map((img, i) => (
                <GalleryImage key={i} item={img} index={i} onClick={openImage} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Highlights */}
      {project.highlights?.length > 0 && (
        <section className="bg-[#F7F4ED] px-6 py-16 lg:px-16">
          <p className={`${STYLES.eyebrow} text-center`}>What&rsquo;s Included</p>
          <h2 className={STYLES.title}>Project Highlights</h2>
          <SectionDivider />
          <div className={GRID.highlights}>
            {project.highlights.map((h, i) => (
              <HighlightItem key={i} item={h} />
            ))}
          </div>
        </section>
      )}

      {/* Config */}
      {project.configuration?.length > 0 && (
        <section className="border-t border-[#DAD2BE] bg-[#F0EBDD] px-6 py-16 lg:px-16">
          <p className={`${STYLES.eyebrow} text-center`}>Rates &amp; Terms</p>
          <h2 className={STYLES.title}>Configuration</h2>
          <SectionDivider />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-sm">
              <thead>
                <tr className="border-b-2 border-[#26332B] text-xs uppercase tracking-[0.15em] text-[#26332B] md:text-sm">
                  <th className="px-4 py-3 font-[family-name:var(--font-plex-mono)] font-normal">
                    Approx Area
                  </th>
                  <th className="px-4 py-3 font-[family-name:var(--font-plex-mono)] font-normal">
                    Project Duration
                  </th>
                  <th className="px-4 py-3 font-[family-name:var(--font-plex-mono)] font-normal">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {project.configuration.map((c, i) => (
                  <ConfigRow key={i} config={c} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {fullImage && <ImageModal image={fullImage} onClose={closeImage} />}
    </div>
  );
}