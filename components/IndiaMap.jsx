"use client";



import { useState } from "react";
import { Space_Grotesk, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";

import styles from "./IndiaMap.module.css";

/* ============================================================
   FONTS
============================================================ */

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

/* ============================================================
   MAP PIN

   Push-pin style marker: a red glossy ball on top with a soft
   highlight, sitting on a slim metallic needle that tapers to a
   sharp point. The tip of the pin sits at the bottom of the
   viewBox (12, 31.2), so the existing CSS that lifts the pin by
   half its height to land the TIP exactly on the x/y coordinate
   keeps working without any changes.
============================================================ */

function MapPin({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="pinStemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7a7a7a" />
          <stop offset="45%" stopColor="#3f3f3f" />
          <stop offset="100%" stopColor="#161616" />
        </linearGradient>

        <linearGradient id="pinBallGradient" x1="15%" y1="10%" x2="90%" y2="95%">
          <stop offset="0%" stopColor="#ff6a55" />
          <stop offset="35%" stopColor="#ee2a1e" />
          <stop offset="100%" stopColor="#9c0d08" />
        </linearGradient>
      </defs>

      <path
        className={styles.pinStem}
        d="M10.1 14.6 L10.1 26.3 L12 31.2 L13.9 26.3 L13.9 14.6 Z"
        fill="url(#pinStemGradient)"
      />

      <circle
        className={styles.pinBall}
        cx="12"
        cy="9.4"
        r="8.6"
        fill="url(#pinBallGradient)"
      />

      <ellipse
        className={styles.pinHighlight}
        cx="8.9"
        cy="6.1"
        rx="2.7"
        ry="2.15"
        fill="#ffdcd2"
        opacity="0.9"
      />
    </svg>
  );
}

/* ============================================================
   LOCATION ICON (used in the card footer)
============================================================ */

function LocationIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.6" />
    </svg>
  );
}

/* ============================================================
   PROJECT LOCATIONS

   Each location has an "image" (a representative photo, update
   the paths to real files under /public). The "slug" field is
   no longer used for a link but is kept in case you need it.
============================================================ */

const PROJECT_LOCATIONS = [
  {
    id: 1,
    city: "Delhi",
    state: "Delhi",
    x: 36.45,
    y: 25.37,
    slug: "delhi",
    image: "/images/locations/delhi.jpg",
    projects: [
      { id: "delhi-1", name: "Commercial Building Construction", type: "Civil Construction", status: "COMPLETED" },
      { id: "delhi-2", name: "Interior & Turnkey Works", type: "Turnkey Project", status: "ONGOING" },
      { id: "delhi-3", name: "Infrastructure Development", type: "Civil Works", status: "COMPLETED" },
    ],
  },
  {
    id: 3,
    city: "Rajasthan",
    state: "Rajasthan",
    x: 24.86,
    y: 35.02,
    slug: "rajasthan",
    image: "/images/locations/rajasthan.jpg",
    projects: [
      { id: "rajasthan-1", name: "Building Construction", type: "Civil Construction", status: "COMPLETED" },
      { id: "rajasthan-2", name: "Government Infrastructure Works", type: "Infrastructure", status: "ONGOING" },
    ],
  },
  {
    id: 4,
    city: "Uttar Pradesh",
    state: "Uttar Pradesh",
    x: 50.47,
    y: 37.32,
    slug: "uttar-pradesh",
    image: "/images/locations/uttar-pradesh.jpg",
    projects: [
      { id: "up-1", name: "Commercial Construction", type: "Building Construction", status: "ONGOING" },
      { id: "up-2", name: "Civil Infrastructure Works", type: "Infrastructure", status: "COMPLETED" },
    ],
  },
  {
    id: 5,
    city: "Jamshedpur",
    state: "Jharkhand",
    x: 58.86,
    y: 43.21,
    slug: "jharkhand",
    image: "/images/locations/jharkhand.jpg",
    projects: [
      { id: "jharkhand-1", name: "Industrial Infrastructure Development", type: "Industrial Civil Works", status: "COMPLETED" },
      { id: "jharkhand-2", name: "Substation Construction", type: "Electrical Infrastructure", status: "ONGOING" },
      { id: "jharkhand-3", name: "Cable Trenching Works", type: "Infrastructure", status: "COMPLETED" },
    ],
  },
  {
    id: 6,
    city: "Gujarat",
    state: "Gujarat",
    x: 18.21,
    y: 47.95,
    slug: "gujarat",
    image: "/images/locations/gujarat.jpg",
    projects: [
      { id: "gujarat-1", name: "Industrial Civil Works", type: "Industrial Construction", status: "COMPLETED" },
      { id: "gujarat-2", name: "Substation Construction", type: "Infrastructure", status: "ONGOING" },
      { id: "gujarat-3", name: "Cable Trenching", type: "Civil Infrastructure", status: "COMPLETED" },
    ],
  },
  {
    id: 7,
    city: "Raigad",
    state: "Maharashtra",
    x: 25.69,
    y: 59.75,
    slug: "raigad",
    image: "/images/locations/raigad.jpg",
    projects: [
      { id: "raigad-1", name: "Industrial Infrastructure", type: "Industrial Civil Works", status: "COMPLETED" },
      { id: "raigad-2", name: "Substation Works", type: "Infrastructure", status: "ONGOING" },
      { id: "raigad-3", name: "Cable Trenching", type: "Civil Works", status: "COMPLETED" },
    ],
  },
  {
    id: 8,
    city: "Mumbai",
    state: "Maharashtra",
    x: 23.24,
    y: 57.75,
    slug: "mumbai",
    image: "/images/locations/mumbai.jpg",
    projects: [
      { id: "mumbai-1", name: "Commercial Complex Construction", type: "Building Construction", status: "COMPLETED" },
      { id: "mumbai-2", name: "Interior Designing", type: "Interior Works", status: "ONGOING" },
      { id: "mumbai-3", name: "Turnkey Project", type: "Turnkey Construction", status: "COMPLETED" },
    ],
  },
  {
    id: 9,
    city: "Pune",
    state: "Maharashtra",
    x: 28.69,
    y: 59.75,
    slug: "pune",
    image: "/images/locations/pune.jpg",
    projects: [
      { id: "pune-1", name: "Substation & Cable Trenching Works", type: "Infrastructure", status: "ONGOING" },
      { id: "pune-2", name: "Commercial Construction", type: "Building Construction", status: "COMPLETED" },
      { id: "pune-3", name: "Civil Infrastructure Works", type: "Civil Works", status: "COMPLETED" },
    ],
  },
  {
    id: 10,
    city: "Odisha",
    state: "Odisha",
    x: 54.86,
    y: 59.08,
    slug: "odisha",
    image: "/images/locations/odisha.jpg",
    projects: [
      { id: "odisha-1", name: "Substation & Cable Trenching Works", type: "Infrastructure", status: "ONGOING" },
      { id: "odisha-2", name: "Civil Infrastructure", type: "Civil Works", status: "COMPLETED" },
      { id: "odisha-3", name: "Industrial Construction", type: "Industrial Works", status: "COMPLETED" },
    ],
  },
  {
    id: 11,
    city: "Bangalore",
    state: "Karnataka",
    x: 35.14,
    y: 72.85,
    slug: "bangalore",
    image: "/images/locations/bangalore.jpg",
    projects: [
      { id: "bangalore-1", name: "Commercial Building Construction", type: "Building Construction", status: "COMPLETED" },
      { id: "bangalore-2", name: "Interior Designing", type: "Interior Works", status: "ONGOING" },
      { id: "bangalore-3", name: "Turnkey Projects", type: "Turnkey", status: "COMPLETED" },
    ],
  },
  {
    id: 12,
    city: "Karnataka",
    state: "Karnataka",
    x: 34.1,
    y: 68.8,
    slug: "karnataka",
    image: "/images/locations/karnataka.jpg",
    projects: [
      { id: "karnataka-1", name: "Civil Construction", type: "Civil Works", status: "COMPLETED" },
      { id: "karnataka-2", name: "Industrial Projects", type: "Industrial Construction", status: "ONGOING" },
    ],
  },
  {
    id: 13,
    city: "Tamil Nadu",
    state: "Tamil Nadu",
    x: 40.2,
    y: 90.02,
    slug: "tamil-nadu",
    image: "/images/locations/tamil-nadu.jpg",
    projects: [
      { id: "tamilnadu-1", name: "Civil Construction", type: "Civil Works", status: "COMPLETED" },
      { id: "tamilnadu-2", name: "Rainwater Harvesting", type: "Environmental Infrastructure", status: "ONGOING" },
      { id: "tamilnadu-3", name: "Sewage Waste Management", type: "Infrastructure", status: "COMPLETED" },
    ],
  },
];

/* ============================================================
   CARD STYLES (kept in this file so the card needs no extra CSS)
============================================================ */

const CARD_CSS = `
.sds-cardMedia {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, #2b2b2b 0%, #161616 100%);
}

.sds-mediaImage {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.sds-mediaShade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 0.82) 0%,
    rgba(10, 10, 10, 0.25) 55%,
    rgba(10, 10, 10, 0) 100%
  );
  pointer-events: none;
}

.sds-mediaBadge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #161616;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.sds-mediaClose {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: background 0.2s ease;
}

.sds-mediaClose:hover {
  background: #ee2a1e;
}

.sds-mediaCaption {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
}

.sds-captionIcon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #ee2a1e;
  box-shadow: 0 4px 10px rgba(238, 42, 30, 0.45);
}

.sds-captionIconSvg {
  width: 17px;
  height: 17px;
}

.sds-captionText {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.sds-captionCity {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 17px;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sds-captionState {
  font-family: var(--font-body);
  font-size: 12px;
  opacity: 0.8;
}

/* ---------- project list ---------- */

.sds-projectList {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.sds-projectItem {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.sds-projectItem > i {
  margin-top: 6px;
}

.sds-projectText {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.sds-projectName {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 13px;
  line-height: 1.3;
  color: #161616;
}

.sds-projectType {
  font-family: var(--font-body);
  font-size: 11.5px;
  color: #7a7a7a;
}

/* ---------- progress summary ---------- */

.sds-progressWrap {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed rgba(0, 0, 0, 0.14);
}

.sds-progressBar {
  display: flex;
  height: 6px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.08);
}

.sds-progressDone {
  background: #1f9d55;
}

.sds-progressLive {
  background: #f5a524;
}

.sds-progressLegend {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #333;
}

.sds-progressLegend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* ---------- status dots ---------- */

.sds-dotDone,
.sds-dotLive {
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 50%;
  display: inline-block;
}

.sds-dotDone {
  background: #1f9d55;
}

.sds-dotLive {
  background: #f5a524;
  animation: sdsLivePulse 1.6s ease-in-out infinite;
}

@keyframes sdsLivePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.4); }
}

@media (prefers-reduced-motion: reduce) {
  .sds-dotLive { animation: none; }
}
`;

/* ============================================================
   COMPONENT
============================================================ */

export default function IndiaMap() {
  const [activeLocation, setActiveLocation] = useState(null);

  /* On touch devices there's no real "hover", so we keep the
     click-to-toggle behaviour. On pointer/mouse devices the card
     opens as soon as the cursor enters the marker and closes when
     the cursor leaves. */

  const isHoverCapable = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handleLocationClick = (location) => {
    setActiveLocation((current) =>
      current?.id === location.id ? null : location,
    );
  };

  const handleMouseEnter = (location) => {
    if (isHoverCapable()) {
      setActiveLocation(location);
    }
  };

  const handleMouseLeave = (location) => {
    if (isHoverCapable()) {
      setActiveLocation((current) =>
        current?.id === location.id ? null : current,
      );
    }
  };

  const closeCard = (event) => {
    event.stopPropagation();
    setActiveLocation(null);
  };

  return (
    <section
      className={`
        ${spaceGrotesk.variable}
        ${sourceSerif.variable}
        ${plexMono.variable}
        ${styles.indiaMapSection}
      `}
    >
      <style>{CARD_CSS}</style>

      {/* DECORATIVE LEDGER LINES */}
      <div className={styles.ledgerLines} aria-hidden="true" />

      {/* CORNER MARKS */}
      <span className={`${styles.cornerMark} ${styles.cornerTl}`} aria-hidden="true" />
      <span className={`${styles.cornerMark} ${styles.cornerTr}`} aria-hidden="true" />
      <span className={`${styles.cornerMark} ${styles.cornerBl}`} aria-hidden="true" />
      <span className={`${styles.cornerMark} ${styles.cornerBr}`} aria-hidden="true" />

      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>
              SDS BHARAT INFRATECH PVT. LTD. — NATIONAL PRESENCE
            </p>

            <h2 className={styles.title}>
              Building across
              <br />
              <span>India.</span>
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.description}>
              Delivering civil construction, infrastructure and turnkey
              solutions across multiple states and regions in India.
            </p>

            <div className={styles.locationCount}>
              <span className={styles.countNumber}>
                {String(PROJECT_LOCATIONS.length).padStart(2, "0")}
              </span>

              <span className={styles.countLabel}>PROJECT LOCATIONS</span>
            </div>
            <span className={styles.countNumber}>
              <h3>5 Lakh + SQ. FT. OF INTERIOR WORK</h3>
            </span>
            <span className={styles.countNumber}>
              <h3> 10 Lakh + SQ. FT. OF LANDSCAPE & GARDEN WORK</h3>
            </span>
            <span className={styles.countNumber}>
              <h3> 1 Lakh + SQ. FT. OF CIVIL CONSTRUCTION</h3>
            </span>
          </div>
        </div>

        {/* MAP */}
        <div className={styles.mapArea}>
          <div className={styles.mapFrame}>
            {/* Place your map image at /public/images/home/india-map.png */}
            <img
              src="/images/home/india-map.png"
              alt="India map showing SDS Bharat Infratech project locations"
              className={styles.mapImage}
              draggable="false"
            />

            {/* INTERACTIVE LOCATION PINS */}
            <div className={styles.mapOverlay}>
              {PROJECT_LOCATIONS.map((location) => {
                const isActive = activeLocation?.id === location.id;

                const completedCount = location.projects.filter(
                  (p) => p.status === "COMPLETED",
                ).length;
                const ongoingCount = location.projects.filter(
                  (p) => p.status === "ONGOING",
                ).length;
                const total = location.projects.length;

                return (
                  <div
                    key={`location-${location.id}`}
                    className={`
                      ${styles.markerWrapper}
                      ${isActive ? styles.markerActive : ""}
                    `}
                    style={{
                      left: `${location.x}%`,
                      top: `${location.y}%`,
                    }}
                    onMouseEnter={() => handleMouseEnter(location)}
                    onMouseLeave={() => handleMouseLeave(location)}
                  >
                    {/* PIN MARKER */}
                    <button
                      type="button"
                      className={styles.markerButton}
                      onClick={() => handleLocationClick(location)}
                      aria-label={`View details for ${location.city}`}
                      aria-expanded={isActive}
                    >
                      <span className={styles.markerPulse} aria-hidden="true" />
                      <MapPin className={styles.markerPin} />
                    </button>

                    {/* LOCATION CARD */}
                    <div
                      className={`
                        ${styles.projectCard}
                        ${isActive ? styles.projectCardActive : ""}
                        ${location.x > 55 ? styles.cardLeft : ""}
                      `}
                    >
                      {/* PHOTO HERO: image, gradient shade, badge, close, location caption */}
                      <div className={"sds-cardMedia"}>
                        {isActive && (
                          <img
                            src={location.image}
                            alt={`${location.city} project site`}
                            className={"sds-mediaImage"}
                            draggable="false"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        )}

                        <span className={"sds-mediaShade"} aria-hidden="true" />

                        <span className={"sds-mediaBadge"}>
                          {total} {total === 1 ? "Project" : "Projects"}
                        </span>

                        <button
                          type="button"
                          className={"sds-mediaClose"}
                          onClick={closeCard}
                          aria-label={`Close ${location.city} information`}
                        >
                          ×
                        </button>

                        <div className={"sds-mediaCaption"}>
                          <span className={"sds-captionIcon"}>
                            <LocationIcon className={"sds-captionIconSvg"} />
                          </span>
                          <div className={"sds-captionText"}>
                            <span className={"sds-captionCity"}>
                              {location.city}
                            </span>
                            <span className={"sds-captionState"}>
                              {location.state}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* PROJECT LIST */}
                      <ul className={"sds-projectList"}>
                        {location.projects.map((project) => (
                          <li key={project.id} className={"sds-projectItem"}>
                            <i
                              className={
                                project.status === "COMPLETED"
                                  ? "sds-dotDone"
                                  : "sds-dotLive"
                              }
                            />
                            <div className={"sds-projectText"}>
                              <span className={"sds-projectName"}>
                                {project.name}
                              </span>
                              <span className={"sds-projectType"}>
                                {project.type}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>

                      {/* PROGRESS SUMMARY */}
                      <div className={"sds-progressWrap"}>
                        <div className={"sds-progressBar"}>
                          <span
                            className={"sds-progressDone"}
                            style={{ width: `${(completedCount / total) * 100}%` }}
                          />
                          <span
                            className={"sds-progressLive"}
                            style={{ width: `${(ongoingCount / total) * 100}%` }}
                          />
                        </div>
                        <div className={"sds-progressLegend"}>
                          <span>
                            <i className={"sds-dotDone"} /> {completedCount} Completed
                          </span>
                          <span>
                            <i className={"sds-dotLive"} /> {ongoingCount} Ongoing
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* LEGEND */}
          <div className={styles.legend}>
            <div className={styles.legendProject}>
              <span className={styles.legendPin}>
                <MapPin className={styles.legendPinIcon} />
              </span>

              <span>PROJECT LOCATION</span>
            </div>

            <span className={styles.legendSeparator} aria-hidden="true" />

            <span>HOVER OR TAP A LOCATION FOR DETAILS</span>
          </div>
        </div>

        {/* FOOTER */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomLine} />

          <div className={styles.bottomContent}>
            <span className={styles.monoLabel}>
              CIVIL · INFRASTRUCTURE · TURNKEY
            </span>

            <p>
              From urban developments to industrial infrastructure, SDS Bharat
              Infratech delivers construction solutions across India.
            </p>

            <span className={styles.monoLabel}>BUILDING THE NATION</span>
          </div>
        </div>
      </div>
    </section>
  );
}