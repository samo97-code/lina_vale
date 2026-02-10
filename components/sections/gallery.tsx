"use client";

import {useState} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {FANVUE_URL, LINKHUB_URL} from "@/lib/constants";
import {
    FadeIn,
    StaggerContainer,
    StaggerChild,
} from "@/components/motion-wrapper";

const FILTERS = ["All", "Portrait", "Evening", "Morning"];

const GALLERY_ITEMS = [
    {src: "/images/gallery-01.png", caption: "Silk & candlelight"},
    {src: "/images/gallery-02.png", caption: "Golden hour hush"},
    {src: "/images/gallery-03.png", caption: "Quiet morning ritual"},
    {src: "/images/gallery-04.png", caption: "Luxury in the details"},
    {src: "/images/gallery-05.png", caption: "Soft touch, sharp eyes"},
    {src: "/images/gallery-06.png", caption: "After-hours glow"},
    {src: "/images/gallery-07.png", caption: "Close, not loud"},
    {src: "/images/gallery-08.png", caption: "The look you replay"},
];

export function Gallery() {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <section id="gallery" className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
            <FadeIn className="mx-auto max-w-5xl text-center">
                <h2 className="font-serif text-2xl font-semibold tracking-wide text-cream md:text-3xl lg:text-4xl">
                    Gallery
                </h2>
                <p className="mt-4 font-serif text-sm italic text-cream/50 md:text-base">
                    Some moments are meant to be shared. Others are meant to be kept.
                </p>

                {/* Filter toggle (visual only) */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter)}
                            className={`rounded-full border px-5 py-2 text-xs tracking-widest uppercase transition-all ${
                                activeFilter === filter
                                    ? "border-gold/40 bg-gold/10 text-gold"
                                    : "border-[rgba(255,255,255,0.08)] bg-transparent text-cream/40 hover:border-cream/20 hover:text-cream/60"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </FadeIn>

            {/* Image Grid */}
            <StaggerContainer
                className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
                staggerDelay={0.08}
            >
                {GALLERY_ITEMS.map((item) => (
                    <StaggerChild key={item.src}>
                        {/* REPLACE IMAGE HERE */}
                        <motion.div
                            className="shine-sweep group relative aspect-[3/4] overflow-hidden rounded-xl"
                            whileHover={{y: -4, transition: {duration: 0.3}}}
                        >
                            <Image
                                src={item.src || "/placeholder.svg"}
                                alt={item.caption}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                            <p className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-xs tracking-wide text-cream/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                {item.caption}
                            </p>
                        </motion.div>
                    </StaggerChild>
                ))}
            </StaggerContainer>

            {/* Mini CTA strip */}
            <FadeIn delay={0.3} className="mx-auto mt-12 max-w-lg">
                <div
                    className="flex flex-col items-center gap-4 rounded-2xl border border-gold/20 bg-card p-6 text-center sm:flex-row sm:justify-between sm:text-left">
                    <p className="font-serif text-sm tracking-wide text-cream/70">
                        Unlock the private side
                    </p>
                    <motion.a
                        href={FANVUE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold inline-flex items-center rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide"
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                    >
                        Enter
                    </motion.a>
                </div>
                <p className="mt-3 text-center">
                    <a
                        href={LINKHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cream/30 underline-offset-4 transition-colors hover:text-cream/50 hover:underline"
                    >
                        See all links
                    </a>
                </p>
            </FadeIn>
        </section>
    );
}
