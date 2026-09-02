"use client";

import { useEffect, useState } from "react";
import {
  Fence,
  FlipHorizontal,
  BetweenVerticalStart,
  Lightbulb,
  Armchair,
  Component,
  Wallpaper,
  Home,
  Activity,
  Banknote,
  FileCheck,
  CheckSquare,
  Dumbbell,
  Utensils,
  House,
  GraduationCap,
  LampCeiling,
  Library,
  Scale3D,
  Layers2,
  Waves,
  ShowerHead,
  Lamp,
  InspectionPanel,
  Pickaxe,
  Columns2,
  Palette,
  Timer,
  Sticker,
  AudioLines,
  LogIn,
  Book,
  FlipHorizontal2,
  PanelBottom,
  History,
  Sprout,
  Coffee,
  HandCoins,
  Users,
  Presentation,
  Leaf,
  BrickWall,
  LeafyGreen,
  Brush,
  Box,
  Diamond,
  Landmark,
  Paintbrush,
  ScanLine,
  MonitorPlay,
  Wine,
  LampWallUp,
  PaintRoller,
  TentTree,
  Columns3,
  ComponentIcon,
  LampWallDown,
} from "lucide-react";

import { projects } from "../../../../data/commercialprojects";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProjectNotFound from "@/components/ProjectNotFoundResidencial";
import { motion } from "framer-motion";

const getProjectBySlug = (slug) => {
  if (!slug) return null;

  return projects.find(
    (project) => project?.slug?.toString() === slug?.toString()
  );
};

const highlightsIcon = {
  Fence,
  FlipHorizontal,
  BetweenVerticalStart,
  Lightbulb,
  Armchair,
  Component,
  Wallpaper,
  Home,
  Activity,
  Banknote,
  FileCheck,
  CheckSquare,
  Dumbbell,
  Utensils,
  House,
  GraduationCap,
  LampCeiling,
  Library,
  Scale3D,
  Layers2,
  Waves,
  ShowerHead,
  Lamp,
  InspectionPanel,
  Pickaxe,
  Columns2,
  Palette,
  Timer,
  Sticker,
  AudioLines,
  LogIn,
  Book,
  FlipHorizontal2,
  PanelBottom,
  History,
  Sprout,
  Coffee,
  HandCoins,
  Users,
  Presentation,
  Leaf,
  BrickWall,
  LeafyGreen,
  Brush,
  Box,
  Diamond,
  Landmark,
  Paintbrush,
  ScanLine,
  MonitorPlay,
  Wine,
  LampWallUp,
  PaintRoller,
  TentTree,
  Columns3,
  ComponentIcon,
  LampWallDown,
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug;

  const project = getProjectBySlug(slug);

  const [fullViewImage, setFullViewImage] = useState(null);

  /*
   * Lock body scroll when image modal is open.
   * Restore it when modal closes/unmounts.
   */
  useEffect(() => {
    if (fullViewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [fullViewImage]);

  if (!project) {
    return <ProjectNotFound />;
  }

  const openFullView = (image) => {
    if (!image) return;
    setFullViewImage(image);
  };

  const closeFullView = () => {
    setFullViewImage(null);
  };

  const galleryImages = Array.isArray(project.galleryImages)
    ? project.galleryImages
    : [];

  const videos = Array.isArray(project.videos) ? project.videos : [];

  const highlights = Array.isArray(project.highlights)
    ? project.highlights
    : [];

  const configuration = Array.isArray(project.configuration)
    ? project.configuration
    : [];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-amber-50 via-white to-white">
      <div className="w-full">
        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <section className="w-full px-4 py-10 sm:px-6 md:py-14 lg:px-16 lg:py-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-14">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full text-center lg:w-1/2 lg:text-left"
            >
              <h1 className="mt-4 mb-5 text-3xl font-extrabold leading-tight text-orange-800 sm:text-4xl md:text-5xl lg:mt-0">
                {project.title}
              </h1>

              {project.fullDescription && (
                <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-700 sm:text-base md:text-lg lg:mx-0">
                  {project.fullDescription}
                </p>
              )}
            </motion.div>

            {/* Hero Image */}
            {project.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full cursor-pointer lg:w-1/2"
                onClick={() => openFullView(project.image)}
              >
                <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title || "Commercial project"}
                    width={720}
                    height={480}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* =========================================================
            GALLERY
        ========================================================= */}
        {(videos.length > 0 || galleryImages.length > 0) && (
          <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12 sm:px-6 md:py-16 lg:px-16">
            <div className="mx-auto w-full max-w-7xl">
              <h2 className="mb-8 text-center text-2xl font-bold text-orange-800 sm:text-3xl md:mb-10 md:text-4xl">
                Gallery
              </h2>

              {/* Videos */}
              {videos.length > 0 && (
                <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                  {videos.map((video, index) => {
                    /*
                     * IMPORTANT:
                     * Stable key instead of key={index}
                     */
                    const videoKey =
                      video?.id ||
                      video?.url ||
                      video?.title ||
                      `video-${index}`;

                    return (
                      <motion.div
                        key={videoKey}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: Math.min(index * 0.1, 0.5),
                        }}
                        className="w-full"
                      >
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-lg transition hover:shadow-2xl">
                          {video?.url && (
                            <video
                              className="h-full w-full object-cover"
                              controls
                              preload="metadata"
                              poster={video?.thumbnail || undefined}
                            >
                              <source
                                src={video.url}
                                type="video/mp4"
                              />
                              Your browser does not support video playback.
                            </video>
                          )}
                        </div>

                        {video?.title && (
                          <p className="mt-3 text-center text-sm text-gray-600 sm:text-base">
                            {video.title}
                          </p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Gallery Images */}
              {galleryImages.length > 0 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {galleryImages.map((img, index) => {
                    /*
                     * Stable gallery key.
                     */
                    const imageKey =
                      img?.id ||
                      img?.image ||
                      img?.src ||
                      img?.alt ||
                      `gallery-image-${index}`;

                    const imageSource = img?.image || img?.src;

                    if (!imageSource) {
                      return null;
                    }

                    return (
                      <motion.div
                        key={imageKey}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                        className="relative aspect-square w-full cursor-pointer overflow-hidden rounded-xl shadow-md"
                        onClick={() => openFullView(imageSource)}
                      >
                        <Image
                          src={imageSource}
                          alt={
                            img?.alt ||
                            `${project.title || "Project"} gallery image ${
                              index + 1
                            }`
                          }
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover transition duration-500 hover:scale-110"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        )}

        {/* =========================================================
            PROJECT HIGHLIGHTS
        ========================================================= */}
        {highlights.length > 0 && (
          <section className="w-full bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-16">
            <div className="mx-auto w-full max-w-7xl">
              <h2 className="mb-8 text-center text-2xl font-bold text-orange-800 sm:text-3xl md:mb-12 md:text-4xl">
                Project Highlights
              </h2>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">
                {highlights.map((item, index) => {
                  /*
                   * Stable key for highlights.
                   */
                  const highlightKey =
                    item?.id ||
                    `${item?.icon || "highlight"}-${
                      item?.description || index
                    }`;

                  const Icon = item?.icon
                    ? highlightsIcon[item.icon]
                    : null;

                  return (
                    <motion.div
                      key={highlightKey}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: Math.min(index * 0.05, 0.4),
                      }}
                      whileHover={{ scale: 1.04 }}
                      className="flex min-h-[150px] flex-col items-center justify-center rounded-xl bg-white/70 p-4 text-center shadow-md backdrop-blur-md transition hover:shadow-lg sm:min-h-[170px] sm:p-6"
                    >
                      {Icon && (
                        <Icon
                          aria-hidden="true"
                          className="mb-3 h-8 w-8 text-amber-600 sm:h-10 sm:w-10"
                        />
                      )}

                      {item?.description && (
                        <p className="text-xs font-medium leading-5 text-gray-700 sm:text-sm">
                          {item.description}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            CONFIGURATION
        ========================================================= */}
        <section className="w-full bg-gradient-to-r from-orange-50 to-amber-100 px-4 py-12 sm:px-6 md:py-16 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-orange-800 sm:text-3xl md:mb-10 md:text-4xl">
              Configuration
            </h2>

            {configuration.length > 0 ? (
              <div className="w-full overflow-hidden rounded-xl shadow-lg">
                <div className="w-full overflow-x-auto">
                  <table className="min-w-[600px] w-full border-collapse bg-white/90 backdrop-blur-md">
                    <thead>
                      <tr className="bg-amber-700 text-xs text-white sm:text-sm md:text-base">
                        <th className="whitespace-nowrap px-4 py-3 text-center font-semibold">
                          Approx Area
                        </th>

                        <th className="whitespace-nowrap px-4 py-3 text-center font-semibold">
                          Project Duration
                        </th>

                        <th className="whitespace-nowrap px-4 py-3 text-center font-semibold">
                          Price
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {configuration.map((cfg, index) => {
                        /*
                         * Stable configuration key.
                         */
                        const configKey =
                          cfg?.id ||
                          `${cfg?.flat || "area"}-${
                            cfg?.carpet || "duration"
                          }-${index}`;

                        return (
                          <tr
                            key={configKey}
                            className="border-b border-gray-200 transition last:border-b-0 hover:bg-amber-50"
                          >
                            <td className="whitespace-nowrap px-4 py-4 text-center text-sm text-gray-700 sm:text-base">
                              {cfg?.flat || "-"}
                            </td>

                            <td className="whitespace-nowrap px-4 py-4 text-center text-sm text-gray-700 sm:text-base">
                              {cfg?.carpet || "-"}
                            </td>

                            <td className="px-4 py-4 text-center">
                              <Link
                                href="/contact"
                                className="inline-flex whitespace-nowrap rounded-lg bg-gradient-to-r from-amber-700 to-orange-700 px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg sm:px-5 sm:text-sm"
                              >
                                Get Quote
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="rounded-xl bg-white/80 p-6 text-center text-gray-600 shadow-md">
                Configuration details are currently unavailable.
              </div>
            )}
          </div>
        </section>

        {/* =========================================================
            FULL SCREEN IMAGE MODAL
        ========================================================= */}
        {fullViewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Full image view"
            onClick={closeFullView}
          >
            <div
              className="relative flex h-full w-full max-w-7xl items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[85vh] w-full">
                <Image
                  src={fullViewImage}
                  alt={`${project.title || "Project"} full view`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <button
                type="button"
                aria-label="Close image"
                onClick={closeFullView}
                className="absolute right-1 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-3xl leading-none text-white transition hover:bg-red-600 sm:right-2 sm:top-2"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}