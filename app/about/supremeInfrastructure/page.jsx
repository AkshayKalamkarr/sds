'use client';

import React from 'react';
import Image from 'next/image';
import {
    motion,
    useReducedMotion,
} from 'framer-motion';

import {
    FaBuilding,
    FaDrawPolygon,
    FaTree,
    FaHardHat,
    FaPaintBrush,
    FaHandshake,
    FaArrowRight,
    FaLeaf,
    FaIndustry,
    FaCity,
    FaCogs,
    FaCheckCircle,
} from 'react-icons/fa';

import Link from 'next/link';

const AboutUsPage = () => {
    const shouldReduceMotion = useReducedMotion();

    /* =========================================================
       SERVICES
    ========================================================= */

    const services = [
        {
            icon: <FaHardHat />,
            title: 'Civil Construction',
            description:
                'Reliable construction solutions built with experience, precision, safety, and modern execution practices.',
        },
        {
            icon: <FaBuilding />,
            title: 'Interior',
            description:
                'Functional and contemporary interior solutions focused on quality, efficient space utilization, and execution.',
        },
        {
            icon: <FaLeaf />,
            title: 'Horticulture',
            description:
                'Landscape and horticulture solutions creating sustainable, green, and visually balanced environments.',
        },
        {
            icon: <FaPaintBrush />,
            title: 'Architectural Design',
            description:
                'Practical and modern architectural concepts designed around project requirements and current trends.',
        },
        {
            icon: <FaDrawPolygon />,
            title: 'Landscape Development',
            description:
                'End-to-end development of outdoor spaces, gardens, parks, and landscape environments.',
        },
        {
            icon: <FaCogs />,
            title: 'Integrated Project Solutions',
            description:
                'Integrated execution combining construction expertise, modern methods, project management, and design.',
        },
    ];

    /* =========================================================
       STATS
    ========================================================= */

    const stats = [
        {
            value: '40+',
            label: 'Years of Industry Journey',
        },
        {
            value: '1985',
            label: 'Industry Journey Started',
        },
        {
            value: '2026',
            label: 'New Beginning',
        },
        {
            value: '100+',
            label: 'Projects & Assignments',
        },
    ];

    /* =========================================================
       JOURNEY / TIMELINE
    ========================================================= */

    const journey = [
        {
            year: '1985',
            title: 'The Beginning',
            subtitle: 'Experience Built Over Decades',
            description:
                'Our journey began in 1985 with a strong foundation in construction and execution. Over the years, experience across civil works, interiors, horticulture, and related infrastructure activities became the backbone of our approach.',
            icon: <FaIndustry />,
            type: 'history',
        },
        {
            year: '1990s – 2000s',
            title: 'Growing Through Experience',
            subtitle: 'Civil • Construction • Interior • Horticulture',
            description:
                'With years of on-ground experience, the business expanded its capabilities across construction, civil execution, interior works, landscape development, and horticulture, building knowledge through practical project delivery.',
            icon: <FaHardHat />,
            type: 'history',
        },
        {
            year: '2010s – 2025',
            title: 'Expanding Capabilities',
            subtitle: 'Experience Meets Changing Industry Needs',
            description:
                'The focus continued to evolve with changing project requirements, combining established construction practices with improved systems, better planning, project coordination, and contemporary execution methods.',
            icon: <FaBuilding />,
            type: 'history',
        },
        {
            year: '2026',
            title: 'A New Chapter',
            subtitle:
                'SD Construction + Supreme Infrastructure Company',
            description:
                'In 2026, SD Construction and Supreme Infrastructure Company came together to create a new identity — SDS Bharat Infratech Pvt. Ltd. — bringing together proven industry experience and a modern, forward-looking approach.',
            icon: <FaHandshake />,
            type: 'modern',
        },
        {
            year: '2026 →',
            title: 'SDS Bharat Infratech Pvt. Ltd.',
            subtitle: 'History + Modern Approach',
            description:
                'SDS Bharat Infratech Pvt. Ltd. combines the strength of experience with modern thinking. Our objective is to deliver smarter, efficient, quality-driven solutions across civil construction, interiors, horticulture, infrastructure, and integrated project execution.',
            icon: <FaCity />,
            type: 'modern',
        },
    ];

    /* =========================================================
       ANIMATION HELPERS
    ========================================================= */

    const fadeUp = {
        initial: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 30,
        },
        whileInView: {
            opacity: 1,
            y: 0,
        },
        viewport: {
            once: true,
            amount: 0.15,
        },
        transition: {
            duration: shouldReduceMotion ? 0 : 0.65,
        },
    };

    return (
        <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">
            {/* =====================================================
                HERO SECTION
            ===================================================== */}

            <section
                className="relative min-h-[720px] w-full bg-cover bg-center sm:min-h-[780px] lg:min-h-screen"
                style={{
                    backgroundImage:
                        "url('/images/about/about.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950/75" />

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />

                <div className="relative z-10 flex min-h-[720px] items-center justify-center px-5 py-24 sm:min-h-[780px] sm:px-8 lg:min-h-screen">
                    <div className="mx-auto w-full max-w-6xl text-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: shouldReduceMotion ? 0 : 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.8,
                            }}
                        >
                            {/* Since */}
                            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-amber-400 sm:text-sm md:text-base">
                                Since 1985
                            </p>

                            {/* Main heading */}
                            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                                Building With
                                <span className="block text-amber-500">
                                    Experience &amp; Vision
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base md:text-lg lg:text-xl lg:leading-8">
                                From decades of industry experience to a
                                modern approach to infrastructure and
                                construction,
                                <span className="font-semibold text-white">
                                    {' '}
                                    SDS Bharat Infratech Pvt. Ltd.
                                </span>{' '}
                                represents the next chapter of a strong
                                foundation.
                            </p>

                            {/* Buttons */}
                            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto"
                                >
                                    <motion.button
                                        whileHover={
                                            shouldReduceMotion
                                                ? {}
                                                : { scale: 1.04 }
                                        }
                                        whileTap={
                                            shouldReduceMotion
                                                ? {}
                                                : { scale: 0.98 }
                                        }
                                        className="w-full rounded-full bg-amber-500 px-8 py-3.5 text-sm font-bold text-white shadow-2xl transition-colors duration-300 hover:bg-amber-600 sm:w-auto sm:text-base"
                                    >
                                        Start a Project
                                    </motion.button>
                                </Link>

                                <a
                                    href="#journey"
                                    className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:w-auto sm:text-base"
                                >
                                    Explore Our Journey
                                    <FaArrowRight className="text-xs" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom scroll indicator */}
                <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center md:flex">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                        Scroll
                    </span>

                    <div className="mt-3 h-10 w-px bg-gradient-to-b from-amber-400 to-transparent" />
                </div>
            </section>

            {/* =====================================================
                ABOUT INTRO
            ===================================================== */}

            <section className="relative bg-white px-5 py-16 sm:px-8 md:py-24 lg:py-28">
                <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

                        {/* LEFT CONTENT */}
                        <motion.div {...fadeUp}>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-amber-500" />

                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-sm">
                                    About SDS Bharat Infratech
                                </span>
                            </div>

                            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
                                A Legacy That
                                <span className="block text-amber-600">
                                    Moves Forward.
                                </span>
                            </h2>

                            <p className="mt-7 text-sm leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8">
                                SDS Bharat Infratech Pvt. Ltd. represents a
                                strong combination of established industry
                                experience and a modern approach to project
                                execution.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8">
                                Our roots go back to 1985, with experience
                                across civil construction, interiors,
                                horticulture, landscaping, and related project
                                execution. In 2026, SD Construction and
                                Supreme Infrastructure Company came together
                                to create a new identity focused on the future.
                            </p>

                            <div className="mt-7 h-1 w-24 rounded-full bg-amber-500" />
                        </motion.div>

                        {/* RIGHT BRAND PANEL */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: shouldReduceMotion ? 0 : 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.7,
                            }}
                            className="relative"
                        >
                            <div className="rounded-[28px] bg-slate-950 p-2 shadow-2xl">
                                <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-8 md:p-10">

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                                            <p className="text-3xl font-black text-amber-400 sm:text-4xl">
                                                1985
                                            </p>

                                            <p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
                                                Foundation of industry
                                                experience
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                                            <p className="text-3xl font-black text-amber-400 sm:text-4xl">
                                                2026
                                            </p>

                                            <p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
                                                New beginning through merger
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2 sm:p-6">
                                            <p className="text-lg font-bold text-white sm:text-xl">
                                                SDS Bharat Infratech Pvt. Ltd.
                                            </p>

                                            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400 sm:text-sm">
                                                <span>
                                                    Experience
                                                </span>

                                                <span className="text-amber-400">
                                                    +
                                                </span>

                                                <span>
                                                    Innovation
                                                </span>

                                                <span className="text-amber-400">
                                                    +
                                                </span>

                                                <span>
                                                    Modern Approach
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                JOURNEY / HISTORY TIMELINE
            ===================================================== */}

            <section
                id="journey"
                className="relative overflow-hidden bg-slate-50 px-5 py-16 sm:px-8 md:py-24 lg:py-28"
            >
                <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">

                    {/* Heading */}
                    <motion.div
                        {...fadeUp}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <div className="mb-5 flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-amber-500" />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-sm">
                                Our Journey
                            </span>

                            <span className="h-px w-10 bg-amber-500" />
                        </div>

                        <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
                            History Meets
                            <span className="block text-amber-600">
                                Modern Approach
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base md:text-lg">
                            A journey from established experience to a new
                            generation of integrated project execution.
                        </p>
                    </motion.div>

                    {/* TIMELINE */}
                    <div className="relative mx-auto mt-14 max-w-6xl md:mt-20">

                        {/* Desktop Center Line */}
                        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-amber-300 via-slate-300 to-amber-400 lg:block" />

                        <div className="space-y-8 sm:space-y-10 lg:space-y-14">

                            {journey.map((item, index) => {
                                const isRight = index % 2 !== 0;

                                return (
                                    <motion.div
                                        key={`${item.year}-${item.title}`}
                                        initial={{
                                            opacity: 0,
                                            y: shouldReduceMotion ? 0 : 35,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.15,
                                        }}
                                        transition={{
                                            duration: shouldReduceMotion
                                                ? 0
                                                : 0.65,
                                            delay: shouldReduceMotion
                                                ? 0
                                                : index * 0.05,
                                        }}
                                        className={`relative lg:flex lg:w-full ${
                                            isRight
                                                ? 'lg:justify-end'
                                                : 'lg:justify-start'
                                        }`}
                                    >
                                        {/* Card */}
                                        <div className="w-full lg:w-[46%]">
                                            <div
                                                className={`group relative rounded-[26px] border p-6 shadow-lg transition-all duration-500 sm:p-8 ${
                                                    item.type === 'modern'
                                                        ? 'border-amber-200 bg-amber-50 hover:shadow-amber-100'
                                                        : 'border-slate-200 bg-white hover:shadow-slate-200'
                                                }`}
                                            >
                                                {/* Card number */}
                                                <span className="absolute right-5 top-5 text-5xl font-black text-slate-100 sm:text-6xl">
                                                    0{index + 1}
                                                </span>

                                                <div className="relative z-10">
                                                    {/* Header */}
                                                    <div
                                                        className={`flex items-start gap-4 ${
                                                            !isRight
                                                                ? 'lg:flex-row-reverse lg:text-right'
                                                                : ''
                                                        }`}
                                                    >
                                                        <div
                                                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl ${
                                                                item.type ===
                                                                'modern'
                                                                    ? 'bg-amber-500 text-white'
                                                                    : 'bg-slate-950 text-amber-400'
                                                            }`}
                                                        >
                                                            {item.icon}
                                                        </div>

                                                        <div
                                                            className={
                                                                !isRight
                                                                    ? 'lg:text-right'
                                                                    : ''
                                                            }
                                                        >
                                                            <span className="text-2xl font-black text-amber-600 sm:text-3xl">
                                                                {item.year}
                                                            </span>

                                                            <h3 className="mt-1 text-lg font-black text-slate-950 sm:text-xl md:text-2xl">
                                                                {item.title}
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    {/* Subtitle */}
                                                    <p
                                                        className={`mt-5 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 sm:text-xs ${
                                                            !isRight
                                                                ? 'lg:text-right'
                                                                : ''
                                                        }`}
                                                    >
                                                        {item.subtitle}
                                                    </p>

                                                    {/* Description */}
                                                    <p
                                                        className={`mt-3 text-sm leading-7 text-slate-600 sm:text-base ${
                                                            !isRight
                                                                ? 'lg:text-right'
                                                                : ''
                                                        }`}
                                                    >
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop center node */}
                                        <div className="absolute left-1/2 top-12 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-slate-50 bg-amber-500 shadow lg:block" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                MERGER SECTION
            ===================================================== */}

            <section className="relative overflow-hidden bg-slate-950 px-5 py-16 sm:px-8 md:py-24 lg:py-28">
                <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">

                    {/* Heading */}
                    <motion.div
                        {...fadeUp}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400 sm:text-sm">
                            2026
                        </p>

                        <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Two Strengths.
                            <span className="block text-amber-400">
                                One New Identity.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg md:leading-8">
                            The merger brings together the proven experience
                            of SD Construction and the modern approach of
                            Supreme Infrastructure Company to establish
                            <span className="font-bold text-white">
                                {' '}
                                SDS Bharat Infratech Pvt. Ltd.
                            </span>
                        </p>
                    </motion.div>

                    {/* Merger cards */}
                    <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:items-center">

                        {/* SD CONSTRUCTION */}
                        <motion.div
                            whileHover={
                                shouldReduceMotion
                                    ? {}
                                    : { y: -6 }
                            }
                            className="rounded-[28px] border border-white/10 bg-white/5 p-7 text-center backdrop-blur-md sm:p-9"
                        >
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-2xl text-amber-400">
                                <FaHardHat />
                            </div>

                            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 sm:text-sm">
                                SD Construction
                            </p>

                            <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                                Experience
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-300">
                                Established industry knowledge,
                                execution experience, construction
                                understanding, and practical project
                                delivery.
                            </p>
                        </motion.div>

                        {/* MERGE ICON */}
                        <div className="flex items-center justify-center py-1 lg:px-2">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 text-xl text-amber-400">
                                <FaHandshake />
                            </div>
                        </div>

                        {/* SUPREME */}
                        <motion.div
                            whileHover={
                                shouldReduceMotion
                                    ? {}
                                    : { y: -6 }
                            }
                            className="rounded-[28px] border border-amber-400/20 bg-amber-400/10 p-7 text-center backdrop-blur-md sm:p-9"
                        >
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-2xl text-slate-950">
                                <FaCity />
                            </div>

                            <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-amber-400 sm:text-sm">
                                Supreme Infrastructure Company
                            </p>

                            <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                                Modern Approach
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-300">
                                Contemporary thinking, improved processes,
                                modern project execution, and a
                                future-focused business approach.
                            </p>
                        </motion.div>
                    </div>

                    {/* Result */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: shouldReduceMotion ? 0 : 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 0.6,
                        }}
                        className="mx-auto mt-8 max-w-4xl"
                    >
                        <div className="rounded-[28px] border border-amber-400/30 bg-amber-400/10 px-6 py-8 text-center sm:px-10 sm:py-10">
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                                Creates
                            </p>

                            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl md:text-4xl">
                                SDS Bharat Infratech Pvt. Ltd.
                            </h3>

                            <p className="mt-3 text-sm font-medium text-slate-300 sm:text-base">
                                History + Modern Approach
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                LEADERSHIP
            ===================================================== */}

            <section className="relative overflow-hidden bg-slate-50 px-5 py-16 sm:px-8 md:py-24 lg:py-28">
                <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">

                    {/* Heading */}
                    <motion.div
                        {...fadeUp}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <div className="mb-5 flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-amber-500" />

                            <span className="text-xs font-bold uppercase tracking-[0.35em] text-amber-600 sm:text-sm">
                                Leadership
                            </span>

                            <span className="h-px w-10 bg-amber-500" />
                        </div>

                        <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
                            People Behind
                            <span className="block text-amber-600">
                                The Journey
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base md:text-lg">
                            Experienced leadership supported by a modern,
                            collaborative approach to project execution.
                        </p>
                    </motion.div>

                    {/* Leadership Cards */}
                    <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-7 sm:mt-14 lg:grid-cols-2 lg:gap-8">

                        {/* =================================================
                            DIRECTOR
                        ================================================= */}

                        <motion.article
                            initial={{
                                opacity: 0,
                                x: shouldReduceMotion ? 0 : -35,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.7,
                            }}
                            whileHover={
                                shouldReduceMotion
                                    ? {}
                                    : { y: -8 }
                            }
                            className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(15,23,42,0.14)]"
                        >
                            {/* Top accent */}
                            <div className="absolute left-0 right-0 top-0 z-20 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500" />

                            <div className="grid grid-cols-1 sm:grid-cols-[210px_1fr]">

                                {/* Image */}
                                <div className="relative h-[300px] overflow-hidden bg-slate-200 sm:h-full sm:min-h-[390px]">
                                    <Image
                                        src="/images/directors/unknown-man.jpg"
                                        alt="Lakshminarayanan Pillai"
                                        fill
                                        priority
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, 210px"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                                    <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-slate-950/70 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:text-xs">
                                        Industry Experience
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center p-6 sm:p-7 lg:p-8">

                                    <div className="mb-5 flex items-center gap-3">
                                        <span className="h-8 w-1 rounded-full bg-amber-500" />

                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                                                Director
                                            </p>

                                            <p className="mt-1 text-[10px] font-medium text-slate-400 sm:text-xs">
                                                Leadership &amp; Project
                                                Execution
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                                        Sukumaran
                                        <span className="block">
                                            Pillai
                                        </span>
                                    </h3>

                                    <div className="mt-5 h-px w-full bg-slate-100" />

                                    <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                                        More than 50 years of industrial
                                        experience handling projects in
                                        construction, architectural works,
                                        landscape designing, and turnkey
                                        execution.
                                    </p>

                                    <div className="mt-7 rounded-2xl bg-slate-50 p-4">
                                        <div className="flex items-center justify-between gap-4">

                                            <div>
                                                <p className="text-2xl font-black text-slate-950">
                                                    50+
                                                </p>

                                                <p className="text-[11px] font-medium text-slate-500 sm:text-xs">
                                                    Years Experience
                                                </p>
                                            </div>

                                            <div className="h-10 w-px bg-slate-200" />

                                            <div>
                                                <p className="text-2xl font-black text-amber-600">
                                                    1985
                                                </p>

                                                <p className="text-[11px] font-medium text-slate-500 sm:text-xs">
                                                    Journey Begins
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>

                        {/* =================================================
                            SECOND MEMBER
                        ================================================= */}

                        <motion.article
                            initial={{
                                opacity: 0,
                                x: shouldReduceMotion ? 0 : 35,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.7,
                            }}
                            whileHover={
                                shouldReduceMotion
                                    ? {}
                                    : { y: -8 }
                            }
                            className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(15,23,42,0.14)]"
                        >
                            {/* Top accent */}
                            <div className="absolute left-0 right-0 top-0 z-20 h-1.5 bg-gradient-to-r from-slate-800 via-slate-700 to-amber-500" />

                            <div className="grid grid-cols-1 sm:grid-cols-[210px_1fr]">

                                {/* Image */}
                                <div className="relative h-[300px] overflow-hidden bg-slate-300 sm:h-full sm:min-h-[390px]">
                                    <Image
                                        src="/images/directors/unknown-man.jpg"
                                        alt="Team Leadership"
                                        fill
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, 210px"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                                    <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-slate-950/70 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:text-xs">
                                        Modern Approach
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center p-6 sm:p-7 lg:p-8">

                                    <div className="mb-5 flex items-center gap-3">
                                        <span className="h-8 w-1 rounded-full bg-slate-900" />

                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                                                Team Member
                                            </p>

                                            <p className="mt-1 text-[10px] font-medium text-slate-400 sm:text-xs">
                                                Leadership &amp; Development
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                                        Team
                                        <span className="block">
                                            Leadership
                                        </span>
                                    </h3>

                                    <div className="mt-5 h-px w-full bg-slate-100" />

                                    <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                                        Dedicated professionals contributing
                                        to the continued growth, execution,
                                        and modern development of SDS Bharat
                                        Infratech Pvt. Ltd.
                                    </p>

                                    <div className="mt-7 rounded-2xl border border-amber-100 bg-amber-50 p-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-600 sm:text-xs">
                                            Our Approach
                                        </p>

                                        <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                                            Experience + Innovation +
                                            Modern Execution
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    </div>

                    {/* Bottom statement */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: shouldReduceMotion ? 0 : 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 0.6,
                        }}
                        className="mx-auto mt-10 max-w-4xl sm:mt-12"
                    >
                        <div className="relative overflow-hidden rounded-[26px] bg-slate-950 px-6 py-8 text-center shadow-xl sm:px-10 sm:py-10">

                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/10" />
                            <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-white/5" />

                            <div className="relative z-10">
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400 sm:text-xs">
                                    SDS Bharat Infratech Pvt. Ltd.
                                </p>

                                <h3 className="mt-3 text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
                                    Experience that builds.
                                    <span className="block text-amber-400 sm:inline">
                                        {' '}
                                        Vision that moves forward.
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                SERVICES
            ===================================================== */}

            <section className="bg-white px-5 py-16 sm:px-8 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl">

                    <motion.div
                        {...fadeUp}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <div className="mb-5 flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-amber-500" />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-sm">
                                What We Do
                            </span>

                            <span className="h-px w-10 bg-amber-500" />
                        </div>

                        <h2 className="text-3xl font-black text-slate-950 sm:text-4xl md:text-5xl">
                            Integrated Expertise
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base md:text-lg">
                            Combining established expertise with modern
                            execution across multiple disciplines.
                        </p>
                    </motion.div>

                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{
                                    opacity: 0,
                                    y: shouldReduceMotion ? 0 : 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.1,
                                }}
                                transition={{
                                    duration: shouldReduceMotion
                                        ? 0
                                        : 0.5,
                                    delay: shouldReduceMotion
                                        ? 0
                                        : index * 0.04,
                                }}
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : { y: -7 }
                                }
                                className="group rounded-[26px] border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition-all duration-500 hover:shadow-xl sm:p-7"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                                    {service.icon}
                                </div>

                                <h3 className="mt-5 text-lg font-black text-slate-950 sm:text-xl">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                ACHIEVEMENTS
            ===================================================== */}

            <section className="px-5 py-16 sm:px-8 md:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">

                    <div className="px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16">

                        <motion.div
                            {...fadeUp}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400 sm:text-sm">
                                Our Journey in Numbers
                            </p>

                            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl md:text-5xl">
                                Built on Experience
                            </h2>
                        </motion.div>

                        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-12 lg:grid-cols-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{
                                        opacity: 0,
                                        y: shouldReduceMotion ? 0 : 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: shouldReduceMotion
                                            ? 0
                                            : 0.5,
                                        delay: shouldReduceMotion
                                            ? 0
                                            : index * 0.08,
                                    }}
                                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-6 text-center sm:px-4 sm:py-7"
                                >
                                    <div className="text-2xl font-black text-amber-400 sm:text-3xl md:text-4xl lg:text-5xl">
                                        {stat.value}
                                    </div>

                                    <p className="mt-2 text-[11px] leading-5 text-slate-300 sm:text-xs md:text-sm">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                MISSION & VISION
            ===================================================== */}

            <section className="bg-slate-50 px-5 py-16 sm:px-8 md:py-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">

                    {/* Mission */}
                    <motion.div
                        {...fadeUp}
                        whileHover={
                            shouldReduceMotion
                                ? {}
                                : { y: -5 }
                        }
                        className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-lg sm:p-9 md:p-10"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-xl text-amber-400">
                            <FaHardHat />
                        </div>

                        <h3 className="mt-6 text-2xl font-black text-slate-950 sm:text-3xl">
                            Our Mission
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8">
                            To deliver dependable, efficient, and modern
                            infrastructure solutions by combining strong
                            industry experience with contemporary project
                            execution, quality standards, safety, and
                            responsible practices.
                        </p>

                        <div className="mt-6 flex items-start gap-3">
                            <FaCheckCircle className="mt-1 shrink-0 text-amber-500" />
                            <p className="text-sm leading-6 text-slate-600">
                                Experience-driven execution
                            </p>
                        </div>

                        <div className="mt-3 flex items-start gap-3">
                            <FaCheckCircle className="mt-1 shrink-0 text-amber-500" />
                            <p className="text-sm leading-6 text-slate-600">
                                Quality-focused delivery
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        {...fadeUp}
                        whileHover={
                            shouldReduceMotion
                                ? {}
                                : { y: -5 }
                        }
                        className="rounded-[28px] border border-amber-200 bg-amber-50 p-7 shadow-lg sm:p-9 md:p-10"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-xl text-white">
                            <FaCity />
                        </div>

                        <h3 className="mt-6 text-2xl font-black text-slate-950 sm:text-3xl">
                            Our Vision
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8">
                            To build a future-ready organization recognized
                            for combining experience, modern thinking,
                            innovation, quality execution, and integrated
                            solutions across construction and infrastructure.
                        </p>

                        <div className="mt-6 flex items-start gap-3">
                            <FaCheckCircle className="mt-1 shrink-0 text-amber-500" />
                            <p className="text-sm leading-6 text-slate-600">
                                Modern and innovative thinking
                            </p>
                        </div>

                        <div className="mt-3 flex items-start gap-3">
                            <FaCheckCircle className="mt-1 shrink-0 text-amber-500" />
                            <p className="text-sm leading-6 text-slate-600">
                                Future-ready solutions
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="px-5 pb-20 pt-4 sm:px-8 md:pb-28 md:pt-8">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: shouldReduceMotion ? 0 : 0.7,
                    }}
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-amber-500 px-6 py-14 text-center shadow-2xl sm:px-10 md:py-20"
                >
                    {/* Decorations */}
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
                    <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/10" />

                    <div className="relative z-10">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/80 sm:text-sm">
                            The Next Chapter Starts Here
                        </p>

                        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                            Experience of the Past.
                            <span className="block">
                                Possibilities of the Future.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base md:text-lg">
                            Partner with SDS Bharat Infratech Pvt. Ltd. for
                            construction, civil, interior, horticulture,
                            landscape, and integrated project solutions.
                        </p>

                        <div className="mt-8 flex justify-center">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={
                                        shouldReduceMotion
                                            ? {}
                                            : { scale: 1.05 }
                                    }
                                    whileTap={
                                        shouldReduceMotion
                                            ? {}
                                            : { scale: 0.98 }
                                    }
                                    className="rounded-full bg-slate-950 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-colors duration-300 hover:bg-slate-800 sm:px-10 sm:text-base"
                                >
                                    Contact Us Today
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default AboutUsPage;