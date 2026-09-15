"use client";

import { useState } from "react";
import Link from "next/link";
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
   sharp point. The tip of the pin still sits at the bottom of
   the viewBox (12, 31.2) — same as before — so the existing CSS
   that lifts the pin by half its height to land the TIP exactly
   on the x/y coordinate keeps working without any changes.
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
        {/* metallic gradient for the needle/stem */}
        <linearGradient id="pinStemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7a7a7a" />
          <stop offset="45%" stopColor="#3f3f3f" />
          <stop offset="100%" stopColor="#161616" />
        </linearGradient>

        {/* glossy red gradient for the ball */}
        <linearGradient id="pinBallGradient" x1="15%" y1="10%" x2="90%" y2="95%">
          <stop offset="0%" stopColor="#ff6a55" />
          <stop offset="35%" stopColor="#ee2a1e" />
          <stop offset="100%" stopColor="#9c0d08" />
        </linearGradient>
      </defs>

      {/* needle / stem, tapering to the tip at (12, 31.2) */}
      <path
        className={styles.pinStem}
        d="M10.1 14.6 L10.1 26.3 L12 31.2 L13.9 26.3 L13.9 14.6 Z"
        fill="url(#pinStemGradient)"
      />

      {/* ball */}
      <circle
        className={styles.pinBall}
        cx="12"
        cy="9.4"
        r="8.6"
        fill="url(#pinBallGradient)"
      />

      {/* glossy highlight */}
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
   PROJECT LOCATIONS

   NOTE: each location now needs an "image" (a representative
   photo for that location/project) and a "slug" (used to build
   the "VIEW ALL PROJECTS" link, e.g. /projects/delhi). Update
   the image paths below to real files under /public, and point
   the slug at whatever route in your app lists that location's
   projects.
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
      {
        id: "delhi-1",
        name: "Commercial Building Construction",
        type: "Civil Construction",
        status: "COMPLETED",
      },
      {
        id: "delhi-2",
        name: "Interior & Turnkey Works",
        type: "Turnkey Project",
        status: "ONGOING",
      },
      {
        id: "delhi-3",
        name: "Infrastructure Development",
        type: "Civil Works",
        status: "COMPLETED",
      },
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
      {
        id: "rajasthan-1",
        name: "Building Construction",
        type: "Civil Construction",
        status: "COMPLETED",
      },
      {
        id: "rajasthan-2",
        name: "Government Infrastructure Works",
        type: "Infrastructure",
        status: "ONGOING",
      },
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
      {
        id: "up-1",
        name: "Commercial Construction",
        type: "Building Construction",
        status: "ONGOING",
      },
      {
        id: "up-2",
        name: "Civil Infrastructure Works",
        type: "Infrastructure",
        status: "COMPLETED",
      },
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
      {
        id: "jharkhand-1",
        name: "Industrial Infrastructure Development",
        type: "Industrial Civil Works",
        status: "COMPLETED",
      },
      {
        id: "jharkhand-2",
        name: "Substation Construction",
        type: "Electrical Infrastructure",
        status: "ONGOING",
      },
      {
        id: "jharkhand-3",
        name: "Cable Trenching Works",
        type: "Infrastructure",
        status: "COMPLETED",
      },
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
      {
        id: "gujarat-1",
        name: "Industrial Civil Works",
        type: "Industrial Construction",
        status: "COMPLETED",
      },
      {
        id: "gujarat-2",
        name: "Substation Construction",
        type: "Infrastructure",
        status: "ONGOING",
      },
      {
        id: "gujarat-3",
        name: "Cable Trenching",
        type: "Civil Infrastructure",
        status: "COMPLETED",
      },
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
      {
        id: "raigad-1",
        name: "Industrial Infrastructure",
        type: "Industrial Civil Works",
        status: "COMPLETED",
      },
      {
        id: "raigad-2",
        name: "Substation Works",
        type: "Infrastructure",
        status: "ONGOING",
      },
      {
        id: "raigad-3",
        name: "Cable Trenching",
        type: "Civil Works",
        status: "COMPLETED",
      },
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
      {
        id: "mumbai-1",
        name: "Commercial Complex Construction",
        type: "Building Construction",
        status: "COMPLETED",
      },
      {
        id: "mumbai-2",
        name: "Interior Designing",
        type: "Interior Works",
        status: "ONGOING",
      },
      {
        id: "mumbai-3",
        name: "Turnkey Project",
        type: "Turnkey Construction",
        status: "COMPLETED",
      },
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
      {
        id: "pune-1",
        name: "Substation & Cable Trenching Works",
        type: "Infrastructure",
        status: "ONGOING",
      },
      {
        id: "pune-2",
        name: "Commercial Construction",
        type: "Building Construction",
        status: "COMPLETED",
      },
      {
        id: "pune-3",
        name: "Civil Infrastructure Works",
        type: "Civil Works",
        status: "COMPLETED",
      },
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
      {
        id: "odisha-1",
        name: "Substation & Cable Trenching Works",
        type: "Infrastructure",
        status: "ONGOING",
      },
      {
        id: "odisha-2",
        name: "Civil Infrastructure",
        type: "Civil Works",
        status: "COMPLETED",
      },
      {
        id: "odisha-3",
        name: "Industrial Construction",
        type: "Industrial Works",
        status: "COMPLETED",
      },
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
      {
        id: "bangalore-1",
        name: "Commercial Building Construction",
        type: "Building Construction",
        status: "COMPLETED",
      },
      {
        id: "bangalore-2",
        name: "Interior Designing",
        type: "Interior Works",
        status: "ONGOING",
      },
      {
        id: "bangalore-3",
        name: "Turnkey Projects",
        type: "Turnkey",
        status: "COMPLETED",
      },
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
      {
        id: "karnataka-1",
        name: "Civil Construction",
        type: "Civil Works",
        status: "COMPLETED",
      },
      {
        id: "karnataka-2",
        name: "Industrial Projects",
        type: "Industrial Construction",
        status: "ONGOING",
      },
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
      {
        id: "tamilnadu-1",
        name: "Civil Construction",
        type: "Civil Works",
        status: "COMPLETED",
      },
      {
        id: "tamilnadu-2",
        name: "Rainwater Harvesting",
        type: "Environmental Infrastructure",
        status: "ONGOING",
      },
      {
        id: "tamilnadu-3",
        name: "Sewage Waste Management",
        type: "Infrastructure",
        status: "COMPLETED",
      },
    ],
  },
];

/* ============================================================
   COMPONENT
============================================================ */

export default function IndiaMap() {
  const [activeLocation, setActiveLocation] = useState(null);

  /* ============================================================
     IS TOUCH DEVICE HELPER

     On touch devices there's no real "hover", so we keep the
     click-to-toggle behaviour. On pointer/mouse devices we open
     the card (image + "VIEW ALL PROJECTS" link) as soon as the
     cursor enters the marker, and close it again when the
     cursor leaves — no click required.
  ============================================================ */

  const isHoverCapable = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ============================================================
     LOCATION CLICK (touch / fallback)
  ============================================================ */

  const handleLocationClick = (location) => {
    // On hover-capable devices the click is redundant (hover already
    // opens it), but we keep it so keyboard/touch users can still
    // toggle the card manually.
    setActiveLocation((current) =>
      current?.id === location.id ? null : location,
    );
  };

  /* ============================================================
     MOUSE ENTER — open image + view link immediately
  ============================================================ */

  const handleMouseEnter = (location) => {
    if (isHoverCapable()) {
      setActiveLocation(location);
    }
  };

  /* ============================================================
     MOUSE LEAVE — close the card again when cursor leaves
     the marker/card area (hover-capable devices only)
  ============================================================ */

  const handleMouseLeave = (location) => {
    if (isHoverCapable()) {
      setActiveLocation((current) =>
        current?.id === location.id ? null : current,
      );
    }
  };

  /* ============================================================
     CLOSE PROJECT CARD (explicit close button / touch devices)
  ============================================================ */

  const closeCard = (event) => {
    event.stopPropagation();
    setActiveLocation(null);
  };

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <section
      className={`
        ${spaceGrotesk.variable}
        ${sourceSerif.variable}
        ${plexMono.variable}
        ${styles.indiaMapSection}
      `}
    >
      {/* ========================================================
          DECORATIVE LEDGER LINES
      ======================================================== */}

      <div className={styles.ledgerLines} aria-hidden="true" />

      {/* ========================================================
          CORNER MARKS
      ======================================================== */}

      <span
        className={`${styles.cornerMark} ${styles.cornerTl}`}
        aria-hidden="true"
      />

      <span
        className={`${styles.cornerMark} ${styles.cornerTr}`}
        aria-hidden="true"
      />

      <span
        className={`${styles.cornerMark} ${styles.cornerBl}`}
        aria-hidden="true"
      />

      <span
        className={`${styles.cornerMark} ${styles.cornerBr}`}
        aria-hidden="true"
      />

      <div className={styles.container}>
        {/* ======================================================
            HEADER
        ====================================================== */}

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

        {/* ======================================================
            MAP
        ====================================================== */}

        <div className={styles.mapArea}>
          <div className={styles.mapFrame}>
            {/* 
              IMPORTANT:
              Place your map image here:

              /public/images/home/india-map.png

              We are intentionally using a normal <img>
              instead of Next.js <Image> so that you don't
              need to provide width/height.
            */}

            <img
              src="/images/home/india-map.png"
              alt="India map showing SDS Bharat Infratech project locations"
              className={styles.mapImage}
              draggable="false"
            />

            {/* ==================================================
                INTERACTIVE LOCATION PINS
            ================================================== */}

            <div className={styles.mapOverlay}>
              {PROJECT_LOCATIONS.map((location) => {
                const isActive = activeLocation?.id === location.id;

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
                    {/* ==================================================
                        PIN MARKER

                        Push-pin (ball + needle) marker. Its tip sits
                        exactly on the location's x/y coordinate (see
                        .markerButton in the CSS), and the pulse is a
                        small ripple on the ground under the tip.
                    ================================================== */}

                    <button
                      type="button"
                      className={styles.markerButton}
                      onClick={() => handleLocationClick(location)}
                      aria-label={`View projects in ${location.city}`}
                      aria-expanded={isActive}
                    >
                      <span className={styles.markerPulse} aria-hidden="true" />

                      <MapPin className={styles.markerPin} />
                    </button>

                    {/* ==================================================
                        PROJECT CARD

                        Opens as soon as the cursor enters the marker
                        (see onMouseEnter on the wrapper above) and shows
                        the location image plus a "VIEW ALL PROJECTS"
                        link. It stays open while the cursor is anywhere
                        over the marker or the card itself, and closes on
                        mouse leave (or via the × button on touch).
                    ================================================== */}

                    <div
                      className={`
                        ${styles.projectCard}
                        ${isActive ? styles.projectCardActive : ""}
                        ${location.x > 55 ? styles.cardLeft : ""}
                      `}
                    >
                      {/* ==================================================
                          CARD HEADER
                      ================================================== */}

                      <div className={styles.cardHeader}>
                        <div>
                          <span className={styles.cardNumber}>
                            {String(location.id).padStart(2, "0")}
                          </span>

                          <h3>{location.city}</h3>

                          <p>{location.state}</p>
                        </div>

                        <button
                          type="button"
                          className={styles.closeButton}
                          onClick={closeCard}
                          aria-label={`Close ${location.city} project information`}
                        >
                          ×
                        </button>
                      </div>

                      {/* ==================================================
                          CARD DIVIDER
                      ================================================== */}

                      <div className={styles.cardDivider} />

                      {/* ==================================================
                          LOCATION IMAGE

                          Only rendered while this card is active, so the
                          image isn't fetched for every marker up front.
                      ================================================== */}

                      {isActive && (
                        <img
                          src={location.image}
                          alt={`${location.city} project site`}
                          className={styles.cardImage}
                          draggable="false"
                        />
                      )}

                      {/* ==================================================
                          VIEW PROJECTS LINK
                      ================================================== */}

                      <Link
                        href={`/projects/${location.slug}`}
                        className={styles.viewProjects}
                      >
                        <span>VIEW ALL PROJECTS</span>

                        <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ======================================================
              LEGEND
          ====================================================== */}

          <div className={styles.legend}>
            <div className={styles.legendProject}>
              <span className={styles.legendPin}>
                <MapPin className={styles.legendPinIcon} />
              </span>

              <span>PROJECT LOCATION</span>
            </div>

            <span className={styles.legendSeparator} aria-hidden="true" />

            <span>HOVER OR TAP ON A LOCATION TO VIEW PROJECTS</span>
          </div>
        </div>

        {/* ======================================================
            FOOTER
        ====================================================== */}

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