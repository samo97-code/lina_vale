"use client"

import Image from "next/image"
import {motion} from "framer-motion"
import {FANVUE_URL} from "@/lib/constants"
import {SectionReveal} from "./section-reveal"

const versions = [
    {
        title: "Morning Lina",
        body: "For men who like warmth, softness, and closeness.",
        src: "/images/lina-playful.png",
        grayscale: false,
    },
    {
        title: "Playful Lina",
        body: "For men who like fun, teasing, and flirty energy.",
        src: "/images/lina-bold.png",
        grayscale: false,
    },
    {
        title: "Midnight Lina",
        body: "For men who like mystery, calm, and quiet tension.",
        src: "/images/lina-soft.png",
        grayscale: false,
    },
]

const cardVariants = {
    hidden: {opacity: 0, y: 24},
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
}

export function ThreeSides() {
    return (
        <SectionReveal className="py-24 px-6 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="font-serif text-3xl font-bold text-[#FFF3E8] lg:text-4xl">
                    Your version of me
                </h2>

                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {versions.map((v, i) => (
                        <motion.div
                            key={v.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, margin: "-40px"}}
                            className="group overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#111118]/70 backdrop-blur-sm transition-all duration-300 hover:border-[#C9A35A]/30 hover:shadow-[0_0_24px_rgba(201,163,90,0.08)]"
                        >
                            <div className="relative aspect-[3/4] w-full overflow-hidden">
                                <Image
                                    src={v.src || "/placeholder.svg"}
                                    alt={v.title}
                                    fill
                                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${v.grayscale ? "grayscale" : ""}`}
                                    sizes="(max-width: 640px) 90vw, 30vw"
                                />
                            </div>
                            <div className="px-6 py-6">
                                <h3 className="font-serif text-xl font-bold text-[#FFF3E8] lg:text-2xl">
                                    {v.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-[#A7A7B3]">
                                    {v.body}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-10 text-sm italic text-[#A7A7B3]/60">
                    {"Your version of me is waiting inside "}
                    <a
                        href={FANVUE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C9A35A]/70 transition-colors hover:text-[#C9A35A]"
                    >
                        Fanvue
                    </a>
                    .
                </p>
            </div>
        </SectionReveal>
    )
}
