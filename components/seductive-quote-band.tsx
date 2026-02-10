"use client"

import { motion } from "framer-motion"
import { FANVUE_URL } from "@/lib/constants"

export function SeductiveQuoteBand() {
  return (
    <section className="relative overflow-hidden border-y border-[rgba(255,255,255,0.04)] bg-[#0B0B0F] py-20 px-6 lg:py-28">
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A35A]/[0.03] blur-[100px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-serif text-2xl leading-relaxed text-[#FFF3E8] lg:text-3xl lg:leading-relaxed">
          Some women are watched.
          <br />
          Others are felt.
        </p>

        <a
          href={FANVUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-10 inline-flex items-center justify-center rounded-2xl px-10 py-3.5 text-sm font-bold tracking-widest uppercase transition-transform active:scale-[0.98] hover:scale-[1.02]"
        >
          ENTER FANVUE
        </a>
      </motion.div>
    </section>
  )
}
