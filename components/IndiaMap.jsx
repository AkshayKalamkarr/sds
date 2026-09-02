"use client";

import { useState } from "react";
import {
  Space_Grotesk,
  Source_Serif_4,
  IBM_Plex_Mono,
} from "next/font/google";

import styles from "./IndiaMap.module.css";

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
   PROJECT LOCATIONS
============================================================ */

const PROJECT_LOCATIONS = [
  {
    id: 1,
    city: "Delhi",
    state: "Delhi",
    x: 36.45,
    y: 25.37,
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

  const handleLocationClick = (location) => {
    setActiveLocation((current) =>
      current?.id === location.id ? null : location
    );
  };

  const handleMouseEnter = (location) => {
    if (
      typeof window !== "undefined" &&
      window.innerWidth >= 769
    ) {
      setActiveLocation(location);
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
      <div
        className={styles.ledgerLines}
        aria-hidden="true"
      />

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
        {/* =====================================================
            HEADER
        ===================================================== */}

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
              Delivering civil construction, infrastructure and
              turnkey solutions across multiple states and regions
              in India.
            </p>

            <div className={styles.locationCount}>
              <span className={styles.countNumber}>
                {String(PROJECT_LOCATIONS.length).padStart(2, "0")}
              </span>

              <span className={styles.countLabel}>
                PROJECT LOCATIONS
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAP
        ===================================================== */}

        <div className={styles.mapArea}>
          <div className={styles.mapFrame}>

            {/* 
              IMPORTANT:
              The map must exist at:

              /public/images/home/india-map.png

              We intentionally use <img> instead of next/image
              here so the local public image works without
              width/height or image-loader configuration.
            */}

            <img
              src="/images/home/india-map.png"
              alt="India map showing SDS Bharat Infratech project locations"
              className={styles.mapImage}
              draggable="false"
            />

            {/* =================================================
                INTERACTIVE LOCATION PINS
            ================================================= */}

            <div className={styles.mapOverlay}>
              {PROJECT_LOCATIONS.map((location) => {
                const isActive =
                  activeLocation?.id === location.id;

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
                  >
                    {/* PIN */}

                    <button
                      type="button"
                      className={styles.markerButton}
                      onClick={() =>
                        handleLocationClick(location)
                      }
                      onMouseEnter={() =>
                        handleMouseEnter(location)
                      }
                      aria-label={`View projects in ${location.city}`}
                      aria-expanded={isActive}
                    >
                      <span
                        className={styles.markerPulse}
                        aria-hidden="true"
                      />

                      <span
                        className={styles.markerRing}
                        aria-hidden="true"
                      />

                      <span
                        className={styles.markerDot}
                        aria-hidden="true"
                      />
                    </button>

                    {/* PROJECT CARD */}

                    <div
                      className={`
                        ${styles.projectCard}
                        ${isActive ? styles.projectCardActive : ""}
                        ${
                          location.x > 55
                            ? styles.cardLeft
                            : ""
                        }
                      `}
                    >
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

                      <div
                        className={styles.cardDivider}
                      />

                      <span className={styles.cardLabel}>
                        PROJECTS
                      </span>

                      <div className={styles.projectList}>
                        {location.projects.map(
                          (project) => (
                            <div
                              className={
                                styles.projectItem
                              }
                              key={project.id}
                            >
                              <div
                                className={
                                  styles.projectIcon
                                }
                              >
                                ✓
                              </div>

                              <div
                                className={
                                  styles.projectInfo
                                }
                              >
                                <h4>
                                  {project.name}
                                </h4>

                                <p>
                                  {project.type}
                                </p>

                                <span
                                  className={`
                                    ${styles.status}
                                    ${
                                      project.status ===
                                      "ONGOING"
                                        ? styles.statusOngoing
                                        : styles.statusCompleted
                                    }
                                  `}
                                >
                                  {project.status}
                                </span>
                              </div>
                            </div>
                          )
                        )}
                      </div>

                      <button
                        type="button"
                        className={styles.viewProjects}
                      >
                        <span>VIEW ALL PROJECTS</span>
                        <span aria-hidden="true">
                          ↗
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              LEGEND
          ===================================================== */}

          <div className={styles.legend}>
            <div className={styles.legendProject}>
              <span className={styles.legendPin}>
                <span />
              </span>

              <span>PROJECT LOCATION</span>
            </div>

            <span
              className={styles.legendSeparator}
              aria-hidden="true"
            />

            <span>
              HOVER OR TAP ON A LOCATION TO VIEW PROJECTS
            </span>
          </div>
        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className={styles.bottomSection}>
          <div className={styles.bottomLine} />

          <div className={styles.bottomContent}>
            <span className={styles.monoLabel}>
              CIVIL · INFRASTRUCTURE · TURNKEY
            </span>

            <p>
              From urban developments to industrial
              infrastructure, SDS Bharat Infratech delivers
              construction solutions across India.
            </p>

            <span className={styles.monoLabel}>
              BUILDING THE NATION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}