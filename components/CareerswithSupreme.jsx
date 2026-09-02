'use client'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const CareersWithSupreme = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Error attempting to play video:", error);
            });
        }
    }, []);

    return (
        <div className="min-h-[85vh] bg-white">
            <Head>
                <title>Careers with Supreme</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col md:flex-row w-full min-h-[85vh]">
                {/* VIDEO SIDE */}
                <div className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover grayscale-[15%] contrast-125"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/images/home/careerMobile.jpg"
                    >
                        <source src="/videos/career.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* light gradient so it reads as one composition with the white panel */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/40 md:to-white" />

                    {/* hang-tag badge — the signature element */}
                    <div className="absolute top-6 left-6 md:top-8 md:left-8">
                        <div className="bg-red-600 text-white text-[10px] md:text-xs font-bold tracking-[0.2em] px-3 py-2 -rotate-3 shadow-[4px_4px_0_rgba(0,0,0,0.25)]">
                            HIRING NOW
                        </div>
                    </div>
                </div>

                {/* CONTENT SIDE */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 bg-white">
                    <div className="max-w-md">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="block w-4 h-4 bg-red-600" />
                            <h2 className="text-red-600 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                                Careers with SDS Bharat Infratech
                            </h2>
                        </div>

                        <h1 className="text-black text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight mb-8">
                            It's time
                            <br />
                            to make
                            <br />
                            a move.
                        </h1>

                        <div className="border-l-2 border-red-600 pl-4 mb-10 space-y-4">
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                SDS Bharat Infratech needs people-readers and problem-solvers, creators and collaborators, thinkers, doers, and innovators. Above all, we need leaders.
                            </p>
                            <p className="text-black text-sm md:text-base font-semibold">
                                That's where you come in.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/contact"
                                className="group bg-red-600 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase text-center hover:bg-black hover:text-white transition-colors duration-200"
                            >
                                Join SDS Bharat Infratech
                            </Link>
                            <Link
                                href="/contact/career"
                                className="group border border-black/30 text-black px-8 py-4 font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:border-black hover:bg-black hover:text-white transition-colors duration-200"
                            >
                                <span>Come to Belong</span>
                                <svg
                                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CareersWithSupreme