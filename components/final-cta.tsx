"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FANVUE_URL } from "@/lib/constants"

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24">
      {/* REPLACE IMAGE HERE: /images/final-cta.jpg */}
      <Image
        src="/images/final-cta.png"
        alt="Final call to action"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/70 to-[#0B0B0F]/50" />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="gold-glow font-serif text-4xl font-bold text-[#FFF3E8] sm:text-5xl lg:text-6xl">
          Dare to feel something real.
        </h2>

        <p className="mt-6 text-sm leading-relaxed text-[#A7A7B3] lg:text-base">
          {"You can scroll\u2026 or you can step inside."}
        </p>

        <a
          href={FANVUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-10 inline-flex items-center justify-center rounded-2xl px-10 py-4 text-sm font-bold tracking-widest uppercase transition-transform active:scale-[0.98] hover:scale-[1.02]"
        >
          ENTER FANVUE
        </a>

        <p className="mt-4 text-[10px] tracking-widest uppercase text-[#A7A7B3]/40">
          Discreet. Instant access. Cancel anytime.
        </p>
      </motion.div>
    </section>
  )
}
