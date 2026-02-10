"use client"

import {useState} from "react"
import Image from "next/image"
import {motion} from "framer-motion"
import {SectionReveal} from "./section-reveal"
import {FANVUE_URL, LINKHUB_URL} from "@/lib/constants"

const images = [
    {src: "/images/gallery-01.png", caption: "Some looks don’t ask for attention, they hold it"},
    {src: "/images/gallery-02.png", caption: "Quiet moments hit louder than you expect."},
    {src: "/images/gallery-06.png", caption: "Sun, silence… and me."},
    {src: "/images/gallery-03.png", caption: "This one is just for you 💋"},
    {src: "/images/gallery-08.png", caption: "Late night energy hits different"},
    {src: "/images/gallery-04.png", caption: "Soft confidence. No effort needed"},
    {src: "/images/gallery-05.png", caption: "Getting ready… but for who"},
    {src: "/images/gallery-07.png", caption: "Dangerously smart. Quietly bold."},
]

export function Gallery() {
    const [activeFilter, setActiveFilter] = useState("All")

    return (
        <SectionReveal id="gallery" className="py-24 px-6 lg:py-32">
            <div className="mx-auto max-w-6xl">
                <p className="text-center font-serif text-lg italic text-[#F3D7C9]/70 lg:text-xl">
                    Some moments are meant to be shared. Others are meant to be kept.
                </p>

                {/* Gallery grid */}
                <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                    {images.map((image, i) => (
                        <motion.div
                            key={image.src}
                            className="shine-sweep group relative aspect-[3/4] overflow-hidden rounded-2xl border border-transparent transition-all duration-300 hover:border-[#C9A35A]/30 hover:shadow-[0_0_20px_rgba(201,163,90,0.1)]"
                            initial={{opacity: 0, y: 10}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: i * 0.06, duration: 0.5}}
                            whileHover={{y: -4}}
                        >
                            {/* REPLACE IMAGE HERE */}
                            <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.caption}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                            <p className="absolute bottom-4 left-4 right-4 text-xs font-medium text-[#FFF3E8] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {image.caption}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Mini CTA strip */}
                <div className="mt-14 flex flex-col items-center gap-4">
                    <div
                        className="flex items-center gap-6 rounded-2xl border border-[#C9A35A]/20 bg-[#111118]/80 px-8 py-5 sm:px-10 sm:py-6">
                        <p className="font-serif text-base text-[#FFF3E8] sm:text-lg">
                            Ready for the private side?
                        </p>
                        <a
                            href={FANVUE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold rounded-xl px-8 py-3 text-sm font-bold tracking-widest uppercase transition-transform active:scale-[0.98] hover:scale-[1.03]"
                        >
                            Enter
                        </a>
                    </div>
                    <a
                        href={LINKHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-wide text-[#A7A7B3]/60 underline decoration-[rgba(255,255,255,0.1)] underline-offset-4 transition-colors hover:text-[#C9A35A]"
                    >
                        See all links
                    </a>
                </div>
            </div>
        </SectionReveal>
    )
}
