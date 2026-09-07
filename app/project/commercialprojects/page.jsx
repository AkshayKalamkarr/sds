'use client';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import { titleVariants } from '../../../utils/animation';
import { projects } from '../../../data/commercialprojects';
import Link from 'next/link';
import Image from 'next/image';
import IndiaMap from "@/components/IndiaMap";


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const suggestionVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.2 },
};

const toRef = (project, index) => {
  const n = (project.id ?? index + 1).toString().padStart(3, '0');
  return `NO.${n}`;
};

// ---------------------------------------------------------------------------
// Crop-mark corner brackets — the signature element
// ---------------------------------------------------------------------------
const CropMarks = () => (
  <>
    <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-[#E85D2C]/0 transition-colors duration-300 group-hover:border-[#E85D2C]" />
    <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-[#E85D2C]/0 transition-colors duration-300 group-hover:border-[#E85D2C]" />
    <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#E85D2C]/0 transition-colors duration-300 group-hover:border-[#E85D2C]" />
    <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#E85D2C]/0 transition-colors duration-300 group-hover:border-[#E85D2C]" />
  </>
);

// ---------------------------------------------------------------------------
// ProjectCard
// ---------------------------------------------------------------------------
const ProjectCard = React.memo(({ project, index }) => (
  <Link href={`/project/commercialprojects/${project.slug}`} className="block group">
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeInUpVariant}
      className="relative flex h-full flex-col bg-white ring-1 ring-inset ring-[#D7DEDD] transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_rgba(22,35,58,0.35)]"
    >
      {/* Image with crop marks */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E9EDEC] p-3">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover grayscale-[15%] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        <CropMarks />

        {/* Reference number, bottom-left of image, mono */}
        <div
          className={`${plexMono.variable} absolute bottom-5 left-5 rounded-sm bg-[#16233A] px-2 py-1 font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.1em] text-white`}
        >
          {toRef(project, index)}
        </div>

        {project.category && (
          <div
            className={`${plexMono.variable} absolute bottom-5 right-5 rounded-sm border border-[#16233A]/20 bg-white/90 px-2 py-1 font-[family-name:var(--font-plex-mono)] text-[10px] uppercase tracking-[0.1em] text-[#16233A]`}
          >
            {project.category}
          </div>
        )}
      </div>

      {/* Dimension-style divider: hairline with tick marks on each end */}
      <div className="flex items-center px-5">
        <span className="h-1.5 w-px bg-[#D7DEDD]" />
        <span className="h-px flex-1 bg-[#D7DEDD]" />
        <span className="h-1.5 w-px bg-[#D7DEDD]" />
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col justify-between p-5 sm:p-6">
        <div>
          {project.location && (
            <p
              className={`${plexMono.variable} mb-2 flex items-center gap-1.5 font-[family-name:var(--font-plex-mono)] text-[10px] uppercase tracking-[0.15em] text-[#5B6A72]`}
            >
              <span className="inline-block h-1 w-1 rounded-full bg-[#E85D2C]" />
              {project.location}
            </p>
          )}
          <h3
            className={`${spaceGrotesk.variable} mb-2 font-[family-name:var(--font-grotesk)] text-lg font-semibold leading-snug tracking-tight text-[#16233A] line-clamp-2 sm:text-xl`}
          >
            {project.title}
          </h3>
          <p className="mb-5 line-clamp-3 text-xs leading-relaxed text-[#5B6A72] sm:text-sm">
            {project.description}
          </p>
        </div>

        <div
          className={`${plexMono.variable} flex items-center justify-between border-t border-[#D7DEDD] pt-4 font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.1em] text-[#16233A] transition-colors duration-300 group-hover:text-[#E85D2C]`}
        >
          View project
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.article>
  </Link>
));

ProjectCard.displayName = 'ProjectCard';

// ---------------------------------------------------------------------------
// HeroSection — blueprint navy with dimension line
// ---------------------------------------------------------------------------
const HeroSection = React.memo(() => (
  <div className="relative w-full overflow-hidden bg-[#16233A]">
   <IndiaMap/>
  </div>
));

HeroSection.displayName = 'HeroSection';

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------
const SearchIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 absolute left-4 text-[#5B6A72]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
));
SearchIcon.displayName = 'SearchIcon';

const ClearIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
));
ClearIcon.displayName = 'ClearIcon';

// ---------------------------------------------------------------------------
// Debounce hook
// ---------------------------------------------------------------------------
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
const CommercialProject = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const suggestions = useMemo(() => {
    const keywords = new Set();
    projects.forEach((project) => {
      const words = project.title
        .toLowerCase()
        .split(/[\s,.-]+/)
        .filter((word) => word.length > 3 && word.length < 15);

      words.forEach((word) => keywords.add(word));

      if (project.category) keywords.add(project.category.toLowerCase());
      if (project.location) keywords.add(project.location.toLowerCase());
    });

    return Array.from(keywords).slice(0, 8);
  }, []);

  const filteredProjects = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return projects;

    const searchLower = debouncedSearchTerm.toLowerCase();
    return projects.filter((project) => {
      const titleMatch = project.title.toLowerCase().includes(searchLower);
      const descriptionMatch = project.description?.toLowerCase().includes(searchLower);
      const categoryMatch = project.category?.toLowerCase().includes(searchLower);
      const locationMatch = project.location?.toLowerCase().includes(searchLower);

      return titleMatch || descriptionMatch || categoryMatch || locationMatch;
    });
  }, [debouncedSearchTerm]);

  const noResults = debouncedSearchTerm.trim() && filteredProjects.length === 0;

  const handleSearchChange = useCallback((e) => setSearchTerm(e.target.value), []);
  const clearSearch = useCallback(() => setSearchTerm(''), []);
  const handleSuggestionClick = useCallback((suggestion) => setSearchTerm(suggestion), []);
  const handleSuggestionKeyDown = useCallback(
    (e, suggestion) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSuggestionClick(suggestion);
      }
    },
    [handleSuggestionClick]
  );

  return (
    <div
      className={`${spaceGrotesk.variable} ${plexMono.variable} min-h-screen bg-[#F4F6F4]`}
      style={{
        backgroundImage:
          'linear-gradient(to right, #E4E9E8 1px, transparent 1px), linear-gradient(to bottom, #E4E9E8 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    >
      <HeroSection />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="mt-12 mb-6 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="flex items-center">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search projects by name, city, or category..."
                className="w-full border border-[#D7DEDD] bg-white p-3 pl-11 text-sm text-[#16233A] placeholder:text-[#9AA5A9] shadow-sm transition-all duration-200 focus:border-[#E85D2C] focus:outline-none focus:ring-1 focus:ring-[#E85D2C]/30"
                value={searchTerm}
                onChange={handleSearchChange}
                aria-label="Search projects"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 rounded-full p-1 text-[#9AA5A9] transition-colors duration-200 hover:bg-[#F4F6F4] hover:text-[#E85D2C]"
                  aria-label="Clear search"
                  type="button"
                >
                  <ClearIcon />
                </button>
              )}
            </div>

            <AnimatePresence>
              {noResults && (
                <motion.div
                  {...suggestionVariants}
                  className="absolute z-10 mt-2 w-full border border-[#D7DEDD] bg-white shadow-lg"
                >
                  <div className="p-4">
                    <div className="mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5 text-[#E85D2C]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="font-medium text-[#16233A]">
                        No results found for &ldquo;{debouncedSearchTerm}&rdquo;
                      </p>
                    </div>

                    <p className="mb-3 text-sm text-[#5B6A72]">Try searching for:</p>

                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((suggestion, index) => (
                        <motion.button
                          key={`${suggestion}-${index}`}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => handleSuggestionClick(suggestion)}
                          onKeyDown={(e) => handleSuggestionKeyDown(e, suggestion)}
                          className={`${plexMono.variable} border border-[#D7DEDD] bg-[#F4F6F4] px-3 py-1 font-[family-name:var(--font-plex-mono)] text-[11px] uppercase tracking-wide text-[#16233A] transition-colors duration-200 hover:border-[#E85D2C] hover:bg-[#E85D2C]/5 focus:outline-none focus:ring-1 focus:ring-[#E85D2C]/40`}
                          type="button"
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </div>

                    <p className="mt-3 text-xs text-[#9AA5A9]">
                      Search by project name, city, category, or description
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Results */}
        <div className="py-8 lg:py-16">
          {searchTerm && searchTerm !== debouncedSearchTerm ? (
            <div className="flex justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-[#E85D2C]" />
            </div>
          ) : (
            <>
              {debouncedSearchTerm && (
                <div
                  className={`${plexMono.variable} mb-6 text-center font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.15em] text-[#5B6A72]`}
                >
                  {filteredProjects.length > 0
                    ? `${filteredProjects.length} project${filteredProjects.length === 1 ? '' : 's'} found`
                    : 'No projects found'}
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 md:py-6 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                  ))
                ) : (
                  debouncedSearchTerm && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-full py-12 text-center text-[#5B6A72]"
                    >
                      <div className="mx-auto max-w-md">
                        <svg
                          className="mx-auto mb-4 h-14 w-14 text-[#D7DEDD]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.1-5.5-2.709"
                          />
                        </svg>
                        <p className={`${spaceGrotesk.variable} mb-2 font-[family-name:var(--font-grotesk)] text-lg font-semibold text-[#16233A]`}>
                          No projects found
                        </p>
                        <p className="text-sm text-[#5B6A72]">
                          Try adjusting your search terms or browse all projects
                        </p>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommercialProject;