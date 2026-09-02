'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/*
|--------------------------------------------------------------------------
| SDS BHARAT INFRATECH
| Responsive Portfolio / Project Archive
|--------------------------------------------------------------------------
| Fonts:
| Space Grotesk  -> headings
| Inter          -> body
| JetBrains Mono -> technical labels
|
| Add these fonts in your root layout if not already loaded.
|--------------------------------------------------------------------------
*/

const portfolioItems = [
    {
        name: 'Interior Design',
        shortName: 'Interior',
        description:
            'Selected interior environments, corporate spaces and project-specific design solutions.',
        images: [
            // SAI VIHAR
            '/images/projects/SAIVIHAR/sai-1.jpg',
            '/images/projects/SAIVIHAR/sai-2.jpg',
            '/images/projects/SAIVIHAR/sai-3.jpg',
            '/images/projects/SAIVIHAR/sai-16.jpg',
            '/images/projects/SAIVIHAR/sai-25.jpg',

            // ATLANTAS
            '/images/projects/ATLANTAS/atlantas-7.jpg',
            '/images/projects/ATLANTAS/atlantas-18.jpg',
            '/images/projects/ATLANTAS/atlantas-5.jpg',

            // TATA POWER SOLAR PROCUREMENT OFFICE
            '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-5.jpg',
            '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-6.jpg',
            '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-22.jpg',
            '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-34.jpg',

            // TATA POWER CIVIL AND ESTATE OFFICE
            '/images/projects/TATAPOWERCIVILTROMBAY/trombay-7.jpeg',

            // TATA POWER SOLAR CIVIL OFFICE
            '/images/projects/TATAPOWERSOLARCIVILOFFICEANDBRICKOUTAREABANGOLARE/tataBanglore-3.jpg',
            '/images/projects/TATAPOWERSOLARCIVILOFFICEANDBRICKOUTAREABANGOLARE/tataBanglore-9.jpg',
            '/images/projects/TATAPOWERSOLARCIVILOFFICEANDBRICKOUTAREABANGOLARE/tataBanglore-19.jpg',
            '/images/projects/TATAPOWERSOLARCIVILOFFICEANDBRICKOUTAREABANGOLARE/tataBanglore-22.jpg',

            // TATA POWER SOLAR ADMIN & HR
            '/images/projects/TPSSLBANGOLARE/tpsslBanglore-4.jpg',
            '/images/projects/TPSSLBANGOLARE/tpsslBanglore-7.jpg',
            '/images/projects/TPSSLBANGOLARE/tpsslBanglore-11.jpg',
            '/images/projects/TPSSLBANGOLARE/tpsslBanglore-17.jpg',

            // SUPREME INFRASTRUCTURE HEAD OFFICE
            '/images/projects/MAYURESHPLANET/mayuresh-1.jpg',
            '/images/projects/MAYURESHPLANET/mayuresh-3.jpg',
            '/images/projects/MAYURESHPLANET/mayuresh-6.jpg',
            '/images/projects/MAYURESHPLANET/mayuresh-7.jpg',

            // COACT
            '/images/projects/COACT/coact-1.jpg',
            '/images/projects/COACT/coact-11.jpg',
            '/images/projects/COACT/coact-14.jpg',

            // CARNAC BUNDER 2B
            '/images/projects/CARNACBUNDER2B/carnac-13.jpeg',
            '/images/projects/CARNACBUNDER2B/carnac-14.jpeg',

            // THE CORPORATE PARK
            '/images/projects/TCP/tcp-1.jpeg',
            '/images/projects/TCP/tcp-3.jpeg',
            '/images/projects/TCP/tcp-4.jpeg',

            // CARNAC 5B
            '/images/projects/CARNACBUNDER5B/carnac-1.jpeg',
            '/images/projects/CARNACBUNDER5B/carnac-2.jpeg',
            '/images/projects/CARNACBUNDER5B/carnac-3.jpeg',
            '/images/projects/CARNACBUNDER5B/carnac-5.jpeg',
            '/images/projects/CARNACBUNDER5B/carnac-7.jpeg',

            // JOCKER
            '/images/projects/JOCKER/jocker-1.jpeg',
            '/images/projects/JOCKER/jocker-2.jpeg',
            '/images/projects/JOCKER/jocker-3.jpeg',
            '/images/projects/JOCKER/jocker-4.jpeg',

            // OMLC
            '/images/projects/OMLC/omlc-1.png',
            '/images/projects/OMLC/omlc-2.jpeg',
            '/images/projects/OMLC/omlc-10.jpeg',

            // AMARANTE
            '/images/projects/AMARANTE/amarante.png',
            '/images/projects/AMARANTE/amarante-5.jpg',
            '/images/projects/AMARANTE/amarante-8.jpg',

            // PARAMOUNT
            '/images/projects/PARAMOUNT/paramount-2.jpg',
            '/images/projects/PARAMOUNT/paramount-3.jpg',
            '/images/projects/PARAMOUNT/paramount-4.jpg',
            '/images/projects/PARAMOUNT/paramount-8.jpg',

            // JAMSHEDPUR
            '/images/projects/JAMSHEDPUR/iel-5.jpg',
            '/images/projects/JAMSHEDPUR/iel-8.jpg',
        ],
    },

    {
        name: 'Civil Construction',
        shortName: 'Civil',
        description:
            'Construction and execution projects delivered with practical site experience and disciplined execution.',
        images: [],
    },

    {
        name: 'Architectural Design',
        shortName: 'Architecture',
        description:
            'Architectural and built-environment studies developed around function, context and contemporary requirements.',
        images: [
            '/images/projects/ATLANTAS/atlantas-7.jpg',
            '/images/projects/COACT/coact-1.jpg',
            '/images/projects/COACT/coact-11.jpg',
            '/images/projects/COACT/coact-14.jpg',
            '/images/projects/RAHEJA/raheja-5.jpeg',
            '/images/projects/TATAPOWERMULSHIIB/mulshi-1.jpg',
            '/images/projects/TATAPOWERSOLARCIVILOFFICEANDBRICKOUTAREABANGOLARE/tataBanglore-4.jpg',
            '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-5.jpg',
            '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-19.jpg',
            '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-22.jpg',
            '/images/projects/TATATAMILNADU/tataTamilnadu-16.jpg',
            '/images/projects/TPSSLBANGOLARE/tpsslBanglore-2.jpg',
            '/images/projects/TPSSLBANGOLARE/tpsslBanglore-4.jpg',
            '/images/projects/OMLC/omlc-2.jpeg',
            '/images/projects/OMLC/omlc-10.jpeg',
        ],
    },

    {
        name: 'Horticulture Design',
        shortName: 'Horticulture',
        description:
            'Green environments, landscape development and horticulture design for projects of varied scale.',
        images: [
            '/services/horticulture-design/horticulture-1.png',
            '/services/horticulture-design/horticulture-2.png',
            '/services/horticulture-design/horticulture-3.png',
            '/services/horticulture-design/horticulture-4.png',
            '/services/horticulture-design/horticulture-5.png',
            '/services/horticulture-design/horticulture-6.png',
            '/services/horticulture-design/horticulture-7.jpeg',
            '/services/horticulture-design/horticulture-8.jpeg',
            '/services/horticulture-design/horticulture-9.jpeg',
            '/services/horticulture-design/horticulture-10.jpeg',
            '/services/horticulture-design/horticulture-11.jpeg',
            '/services/horticulture-design/horticulture-12.jpeg',
            '/services/horticulture-design/horticulture-13.jpeg',
            '/services/horticulture-design/horticulture-14.jpeg',
            '/services/horticulture-design/horticulture-15.jpeg',
            '/services/horticulture-design/horticulture-16.jpeg',
            '/services/horticulture-design/horticulture-17.jpeg',
        ],
    },

    {
        name: 'Garden Maintenance',
        shortName: 'Maintenance',
        description:
            'Garden development and maintenance solutions for landscaped and green environments.',
        images: [
            '/services/garden-maintenence/garden-1.png',
            '/services/garden-maintenence/garden-3.png',
            '/services/garden-maintenence/garden-6.png',
            '/services/garden-maintenence/garden-7.png',
            '/services/garden-maintenence/garden-8.png',
            '/services/garden-maintenence/garden-9.png',
            '/services/garden-maintenence/garden-10.png',
            '/services/garden-maintenence/garden-11.jpg',
            '/services/garden-maintenence/garden-12.jpg',
            '/services/garden-maintenence/garden-13.jpg',
        ],
    },

    {
        name: 'Building Design',
        shortName: 'Building',
        description:
            'Building studies and design references integrating architectural intent with practical requirements.',
        images: [
            '/services/building-design/building-2.JPG',
            '/services/building-design/building-3.png',
            '/services/building-design/building-4.png',
            '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-6.jpg',
            '/images/projects/TATAPOWERSOLARCIVILOFFICEANDBRICKOUTAREABANGOLARE/tataBanglore-19.jpg',
        ],
    },
];

/*
|--------------------------------------------------------------------------
| IMAGE RATIO VARIATION
|--------------------------------------------------------------------------
*/

const ASPECTS = [
    'aspect-[4/5]',
    'aspect-square',
    'aspect-[5/4]',
    'aspect-[3/4]',
    'aspect-[4/3]',
    'aspect-[3/4]',
];

/*
|--------------------------------------------------------------------------
| ICONS
|--------------------------------------------------------------------------
*/

const MenuIcon = ({ open }) => (
    <div className="relative h-5 w-5">
        <span
            className={`absolute left-0 top-1 block h-px w-5 bg-current transition-all duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
            }`}
        />
        <span
            className={`absolute left-0 top-2.5 block h-px w-5 bg-current transition-all duration-300 ${
                open ? 'opacity-0' : ''
            }`}
        />
        <span
            className={`absolute left-0 top-4 block h-px w-5 bg-current transition-all duration-300 ${
                open ? '-translate-y-1.5 -rotate-45' : ''
            }`}
        />
    </div>
);

const ArrowUpRight = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
    >
        <path
            d="M7 17L17 7M8 7h9v9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CloseIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
    >
        <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </svg>
);

/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState(
        portfolioItems[0]
    );

    const [fullViewImage, setFullViewImage] = useState(null);

    const [isMobileMenuOpen, setIsMobileMenuOpen] =
        useState(false);

    const [imageIndex, setImageIndex] = useState(0);

    const scrollContainerRef = useRef(null);

    /*
    |--------------------------------------------------------------------------
    | CATEGORY CHANGE
    |--------------------------------------------------------------------------
    */

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setIsMobileMenuOpen(false);
        setImageIndex(0);

        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    /*
    |--------------------------------------------------------------------------
    | IMAGE MODAL
    |--------------------------------------------------------------------------
    */

    const openFullView = (image, index) => {
        setFullViewImage(image);
        setImageIndex(index);
    };

    const closeFullView = () => {
        setFullViewImage(null);
    };

    const showNextImage = () => {
        if (!selectedCategory.images.length) return;

        const next =
            (imageIndex + 1) %
            selectedCategory.images.length;

        setImageIndex(next);
        setFullViewImage(selectedCategory.images[next]);
    };

    const showPreviousImage = () => {
        if (!selectedCategory.images.length) return;

        const previous =
            (imageIndex - 1 + selectedCategory.images.length) %
            selectedCategory.images.length;

        setImageIndex(previous);
        setFullViewImage(selectedCategory.images[previous]);
    };

    /*
    |--------------------------------------------------------------------------
    | BODY LOCK FOR MOBILE / MODAL
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const shouldLock =
            isMobileMenuOpen || Boolean(fullViewImage);

        document.body.style.overflow = shouldLock
            ? 'hidden'
            : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen, fullViewImage]);

    /*
    |--------------------------------------------------------------------------
    | KEYBOARD CONTROLS
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const handleKey = (event) => {
            if (event.key === 'Escape') {
                closeFullView();
                setIsMobileMenuOpen(false);
            }

            if (fullViewImage) {
                if (event.key === 'ArrowRight') {
                    showNextImage();
                }

                if (event.key === 'ArrowLeft') {
                    showPreviousImage();
                }
            }
        };

        window.addEventListener('keydown', handleKey);

        return () =>
            window.removeEventListener(
                'keydown',
                handleKey
            );
    }, [fullViewImage, imageIndex, selectedCategory]);

    /*
    |--------------------------------------------------------------------------
    | MOBILE WHEEL / DESKTOP SCROLL
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const currentRef =
            scrollContainerRef.current;

        if (!currentRef) return;

        const handleWheel = (event) => {
            if (window.innerWidth >= 768) {
                currentRef.scrollTop += event.deltaY;
            }
        };

        currentRef.addEventListener(
            'wheel',
            handleWheel,
            { passive: true }
        );

        return () =>
            currentRef.removeEventListener(
                'wheel',
                handleWheel
            );
    }, []);

    /*
    |--------------------------------------------------------------------------
    | BACKDROP STYLE
    |--------------------------------------------------------------------------
    */

    const blueprintGrid = {
        backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
    };

    /*
    |--------------------------------------------------------------------------
    | COMING SOON
    |--------------------------------------------------------------------------
    */

    const ComingSoon = () => (
        <div className="flex min-h-[420px] items-center justify-center px-6 sm:min-h-[520px]">
            <div className="max-w-md text-center">

                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[#C08A3E]/50 bg-white/40">
                    <svg
                        width="44"
                        height="44"
                        viewBox="0 0 64 64"
                        fill="none"
                    >
                        <circle
                            cx="32"
                            cy="32"
                            r="25"
                            stroke="#C08A3E"
                            strokeWidth="1.2"
                        />

                        <path
                            d="M32 14v8M32 42v8M14 32h8M42 32h8"
                            stroke="#C08A3E"
                            strokeWidth="1.2"
                        />

                        <circle
                            cx="32"
                            cy="32"
                            r="4"
                            stroke="#C08A3E"
                            strokeWidth="1.2"
                        />
                    </svg>
                </div>

                <p
                    className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#8C6530] sm:text-xs"
                    style={{
                        fontFamily:
                            "'JetBrains Mono', monospace",
                    }}
                >
                    Project sheet in preparation
                </p>

                <h3
                    className="text-2xl font-semibold text-[#1F3A52] sm:text-3xl"
                    style={{
                        fontFamily:
                            "'Space Grotesk', sans-serif",
                    }}
                >
                    Drawings coming soon
                </h3>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#526678]">
                    Detailed project documentation for this
                    category will be added soon.
                </p>
            </div>
        </div>
    );

    /*
    |--------------------------------------------------------------------------
    | RETURN
    |--------------------------------------------------------------------------
    */

    return (
        <div
            className="min-h-screen overflow-hidden bg-[#EFEAE0]"
            style={{
                fontFamily:
                    "'Inter', sans-serif",
            }}
        >

            {/* =========================================================
                MOBILE TOP BAR
            ========================================================= */}

            <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#12202B]/95 px-4 py-3 backdrop-blur-md md:hidden">
                <div className="flex items-center justify-between">

                    <button
                        type="button"
                        onClick={() =>
                            setIsMobileMenuOpen(
                                !isMobileMenuOpen
                            )
                        }
                        className="flex h-10 items-center gap-3 rounded-none bg-[#C08A3E] px-4 text-white transition-all active:scale-95"
                    >
                        <MenuIcon
                            open={
                                isMobileMenuOpen
                            }
                        />

                        <span
                            className="text-[10px] font-medium uppercase tracking-[0.25em]"
                            style={{
                                fontFamily:
                                    "'JetBrains Mono', monospace",
                            }}
                        >
                            {isMobileMenuOpen
                                ? 'Close'
                                : 'Index'}
                        </span>
                    </button>

                    <div className="text-right">
                        <p
                            className="text-[8px] uppercase tracking-[0.3em] text-[#C08A3E]"
                            style={{
                                fontFamily:
                                    "'JetBrains Mono', monospace",
                            }}
                        >
                            SDS Bharat
                        </p>

                        <p
                            className="text-xs font-semibold text-[#E7E2D6]"
                            style={{
                                fontFamily:
                                    "'Space Grotesk', sans-serif",
                            }}
                        >
                            Infratech
                        </p>
                    </div>
                </div>
            </header>

            {/* =========================================================
                MOBILE OVERLAY
            ========================================================= */}

            {isMobileMenuOpen && (
                <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() =>
                        setIsMobileMenuOpen(false)
                    }
                    className="fixed inset-0 z-30 bg-black/60 md:hidden"
                />
            )}

            {/* =========================================================
                SIDEBAR / CATEGORY INDEX
            ========================================================= */}

            <aside
                className={`
                    fixed inset-y-0 left-0 z-40
                    w-[85%] max-w-[340px]
                    -translate-x-full
                    overflow-y-auto
                    border-r border-white/10
                    p-6 pt-20
                    transition-transform duration-300
                    ease-out
                    md:relative
                    md:z-20
                    md:flex
                    md:min-h-screen
                    md:w-[28%]
                    md:max-w-none
                    md:translate-x-0
                    md:flex-col
                    md:overflow-y-auto
                    md:p-8
                    lg:w-[26%]
                    xl:w-[22%]
                    xl:p-10
                    ${
                        isMobileMenuOpen
                            ? 'translate-x-0'
                            : ''
                    }
                `}
                style={{
                    backgroundColor: '#12202B',
                    ...blueprintGrid,
                }}
            >

                {/* Brand */}
                <div className="mb-10 md:mb-14">

                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-9 w-1 bg-[#C08A3E]" />

                        <div>
                            <p
                                className="text-[9px] uppercase tracking-[0.35em] text-[#C08A3E]"
                                style={{
                                    fontFamily:
                                        "'JetBrains Mono', monospace",
                                }}
                            >
                                SDS Bharat
                            </p>

                            <p
                                className="text-[10px] uppercase tracking-[0.2em] text-white/50"
                                style={{
                                    fontFamily:
                                        "'JetBrains Mono', monospace",
                                }}
                            >
                                Infratech Pvt. Ltd.
                            </p>
                        </div>
                    </div>

                    <p
                        className="mb-2 text-[10px] uppercase tracking-[0.4em] text-[#8C6530]"
                        style={{
                            fontFamily:
                                "'JetBrains Mono', monospace",
                        }}
                    >
                        Project Archive
                    </p>

                    <h1
                        className="text-4xl font-semibold leading-none text-[#E7E2D6] sm:text-5xl"
                        style={{
                            fontFamily:
                                "'Space Grotesk', sans-serif",
                        }}
                    >
                        Portfolio
                    </h1>

                    <div className="mt-6 h-px w-16 bg-[#C08A3E]" />

                    <p
                        className="mt-5 max-w-[250px] text-xs leading-6 text-white/45"
                    >
                        Selected works across architecture,
                        construction, interiors and landscape.
                    </p>
                </div>

                {/* Category Navigation */}
                <nav className="flex-1">
                    <p
                        className="mb-4 text-[9px] uppercase tracking-[0.35em] text-white/30"
                        style={{
                            fontFamily:
                                "'JetBrains Mono', monospace",
                        }}
                    >
                        Categories
                    </p>

                    <ul>
                        {portfolioItems.map(
                            (item, index) => {
                                const isActive =
                                    selectedCategory.name ===
                                    item.name;

                                return (
                                    <li
                                        key={item.name}
                                        className="border-t border-white/10"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleCategoryClick(
                                                    item
                                                )
                                            }
                                            className="group flex w-full items-center justify-between gap-3 py-4 text-left"
                                        >
                                            <div className="flex min-w-0 items-center gap-3">

                                                <span
                                                    className={`w-5 shrink-0 text-[9px] transition-colors ${
                                                        isActive
                                                            ? 'text-[#C08A3E]'
                                                            : 'text-white/20'
                                                    }`}
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    {String(
                                                        index + 1
                                                    ).padStart(
                                                        2,
                                                        '0'
                                                    )}
                                                </span>

                                                <span
                                                    className="truncate text-sm tracking-wide transition-colors duration-200 sm:text-[15px]"
                                                    style={{
                                                        fontFamily:
                                                            "'Inter', sans-serif",
                                                        color:
                                                            isActive
                                                                ? '#E7E2D6'
                                                                : 'rgba(231,226,214,0.48)',
                                                        fontWeight:
                                                            isActive
                                                                ? 500
                                                                : 400,
                                                    }}
                                                >
                                                    {item.name}
                                                </span>
                                            </div>

                                            <div className="flex shrink-0 items-center gap-2">
                                                <span
                                                    className="text-[9px] text-white/20"
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    {
                                                        item
                                                            .images
                                                            .length
                                                    }
                                                </span>

                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                                        isActive
                                                            ? 'bg-[#C08A3E]'
                                                            : 'border border-white/20'
                                                    }`}
                                                />
                                            </div>
                                        </button>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </nav>

                {/* Footer */}
                <div className="mt-10 border-t border-white/10 pt-6">

                    <p
                        className="text-[9px] uppercase tracking-[0.3em] text-white/25"
                        style={{
                            fontFamily:
                                "'JetBrains Mono', monospace",
                        }}
                    >
                        Since 1985
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/40">
                        Experience built over decades.
                        Modern approach for tomorrow.
                    </p>
                </div>
            </aside>

            {/* =========================================================
                MAIN AREA
            ========================================================= */}

            <main className="flex min-h-screen flex-col md:absolute md:inset-y-0 md:left-[28%] md:right-0 lg:left-[26%] xl:left-[22%]">

                {/* =====================================================
                    TOP HEADER
                ===================================================== */}

                <div className="flex shrink-0 items-end justify-between border-b border-[#12202B]/10 px-5 pb-5 pt-20 sm:px-8 sm:pb-6 sm:pt-16 md:px-10 lg:px-12">

                    <div className="min-w-0 pr-4">

                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-px w-6 bg-[#C08A3E]" />

                            <p
                                className="truncate text-[9px] uppercase tracking-[0.32em] text-[#8C6530] sm:text-[10px]"
                                style={{
                                    fontFamily:
                                        "'JetBrains Mono', monospace",
                                }}
                            >
                                Portfolio / Selected Works
                            </p>
                        </div>

                        <h2
                            className="truncate text-2xl font-semibold text-[#12202B] sm:text-3xl md:text-4xl"
                            style={{
                                fontFamily:
                                    "'Space Grotesk', sans-serif",
                            }}
                        >
                            {selectedCategory.name}
                        </h2>

                        <p className="mt-2 max-w-2xl text-xs leading-5 text-[#526678] sm:text-sm">
                            {selectedCategory.description}
                        </p>
                    </div>

                    <div className="hidden shrink-0 text-right sm:block">

                        <p
                            className="text-[9px] uppercase tracking-[0.28em] text-[#12202B]/35"
                            style={{
                                fontFamily:
                                    "'JetBrains Mono', monospace",
                            }}
                        >
                            Collection
                        </p>

                        <p
                            className="mt-1 text-sm font-medium text-[#12202B]"
                            style={{
                                fontFamily:
                                    "'JetBrains Mono', monospace",
                            }}
                        >
                            {selectedCategory.images.length > 0
                                ? `${String(
                                      selectedCategory.images
                                          .length
                                  ).padStart(2, '0')} FRAMES`
                                : 'PREPARING'}
                        </p>
                    </div>
                </div>

                {/* =====================================================
                    SCROLLABLE CONTENT
                ===================================================== */}

                <div
                    ref={scrollContainerRef}
                    className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 md:px-10 lg:px-12 lg:py-10"
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor:
                            '#C7BFAE transparent',
                    }}
                >

                    {/* Empty state */}
                    {selectedCategory.images.length === 0 ? (
                        <ComingSoon />
                    ) : (
                        <>
                            {/* Gallery intro */}
                            <div className="mb-6 flex items-center justify-between gap-4">

                                <p
                                    className="text-[9px] uppercase tracking-[0.3em] text-[#12202B]/35 sm:text-[10px]"
                                    style={{
                                        fontFamily:
                                            "'JetBrains Mono', monospace",
                                    }}
                                >
                                    Project Frames
                                </p>

                                <p
                                    className="text-[9px] uppercase tracking-[0.25em] text-[#12202B]/30 sm:text-[10px]"
                                    style={{
                                        fontFamily:
                                            "'JetBrains Mono', monospace",
                                    }}
                                >
                                    Click to Expand
                                </p>
                            </div>

                            {/* =================================================
                                RESPONSIVE MASONRY
                            ================================================= */}

                            <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 xl:columns-4">

                                {selectedCategory.images.map(
                                    (image, index) => (
                                        <button
                                            type="button"
                                            key={`${image}-${index}`}
                                            onClick={() =>
                                                openFullView(
                                                    image,
                                                    index
                                                )
                                            }
                                            className={`
                                                group relative mb-4 block w-full
                                                break-inside-avoid
                                                overflow-hidden
                                                rounded-[2px]
                                                bg-[#DDD6C6]
                                                text-left
                                                sm:mb-5
                                                ${ASPECTS[
                                                    index %
                                                        ASPECTS.length
                                                ]}
                                            `}
                                        >

                                            {/* Image */}
                                            <Image
                                                src={image}
                                                alt={`${selectedCategory.name} project photograph ${index + 1}`}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                                quality={80}
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                                            />

                                            {/* Dark overlay */}
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12202B]/65 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                            {/* Number */}
                                            <div className="pointer-events-none absolute left-3 top-3 rounded-sm bg-[#12202B]/75 px-2 py-1 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                                <span
                                                    className="text-[9px] text-white"
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    {String(
                                                        index + 1
                                                    ).padStart(
                                                        2,
                                                        '0'
                                                    )}
                                                </span>
                                            </div>

                                            {/* Corner marks */}
                                            <span className="pointer-events-none absolute left-2 top-2 h-5 w-5 border-l border-t border-[#C08A3E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                            <span className="pointer-events-none absolute right-2 top-2 h-5 w-5 border-r border-t border-[#C08A3E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                            <span className="pointer-events-none absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#C08A3E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                            <span className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#C08A3E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                            {/* Open label */}
                                            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-all duration-300 group-hover:opacity-100">
                                                <span
                                                    className="text-[9px] uppercase tracking-[0.25em] text-white"
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    View
                                                </span>

                                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm">
                                                    <ArrowUpRight />
                                                </span>
                                            </div>
                                        </button>
                                    )
                                )}
                            </div>

                            {/* Gallery footer */}
                            <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#12202B]/10 pt-5 sm:flex-row sm:items-center">

                                <p
                                    className="text-[9px] uppercase tracking-[0.25em] text-[#12202B]/30"
                                    style={{
                                        fontFamily:
                                            "'JetBrains Mono', monospace",
                                    }}
                                >
                                    SDS Bharat Infratech Pvt. Ltd.
                                </p>

                                <p
                                    className="text-[9px] uppercase tracking-[0.25em] text-[#12202B]/30"
                                    style={{
                                        fontFamily:
                                            "'JetBrains Mono', monospace",
                                    }}
                                >
                                    Experience • Design • Execution
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </main>

            {/* =========================================================
                FULL SCREEN IMAGE VIEWER
            ========================================================= */}

            {fullViewImage && (
                <div
                    className="fixed inset-0 z-[100] bg-[#08131B]/95 backdrop-blur-md"
                    onClick={closeFullView}
                >

                    {/* Top bar */}
                    <div className="absolute left-0 right-0 top-0 z-20 flex items-start justify-between px-5 py-5 sm:px-8 sm:py-7">

                        <div>
                            <p
                                className="text-[9px] uppercase tracking-[0.32em] text-[#C08A3E] sm:text-[10px]"
                                style={{
                                    fontFamily:
                                        "'JetBrains Mono', monospace",
                                }}
                            >
                                {selectedCategory.name}
                            </p>

                            <p
                                className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/40"
                                style={{
                                    fontFamily:
                                        "'JetBrains Mono', monospace",
                                }}
                            >
                                {String(
                                    imageIndex + 1
                                ).padStart(2, '0')}{' '}
                                /{' '}
                                {String(
                                    selectedCategory
                                        .images.length
                                ).padStart(2, '0')}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={closeFullView}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                            aria-label="Close image viewer"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    {/* Main image */}
                    <div
                        className="absolute inset-0 flex items-center justify-center px-5 py-24 sm:px-16 sm:py-28"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <div className="relative h-full w-full max-w-7xl">

                            <Image
                                src={fullViewImage}
                                alt="Full project view"
                                fill
                                sizes="100vw"
                                quality={95}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Previous */}
                    {selectedCategory.images.length >
                        1 && (
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showPreviousImage();
                            }}
                            aria-label="Previous image"
                            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm transition hover:bg-white/10 sm:left-7"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M15 18l-6-6 6-6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    )}

                    {/* Next */}
                    {selectedCategory.images.length >
                        1 && (
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showNextImage();
                            }}
                            aria-label="Next image"
                            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm transition hover:bg-white/10 sm:right-7"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M9 6l6 6-6 6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    )}

                    {/* Bottom hint */}
                    <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-center sm:bottom-7">
                        <p
                            className="whitespace-nowrap text-[8px] uppercase tracking-[0.3em] text-white/30 sm:text-[9px]"
                            style={{
                                fontFamily:
                                    "'JetBrains Mono', monospace",
                            }}
                        >
                            ← → Navigate&nbsp;&nbsp; • &nbsp;&nbsp;ESC Close
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}