"use client"

import { motion } from "framer-motion"
import { FANVUE_URL } from "@/lib/constants"

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-6 py-24">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A35A]/[0.04] blur-[120px]" />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href={FANVUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center justify-center rounded-2xl px-12 py-5 text-base font-bold tracking-widest uppercase transition-transform active:scale-[0.98] hover:scale-[1.02]"
        >
          JOIN FANVUE
        </a>

        <p className="mt-6 text-sm tracking-wide text-[#A7A7B3]/70">
          Access changes everything.
        </p>
      </motion.div>
    </section>
  )
}
