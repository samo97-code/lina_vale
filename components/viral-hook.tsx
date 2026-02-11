"use client"

import { motion } from "framer-motion"
import { SectionReveal } from "./section-reveal"

const hookLines = ["Real emotions", "Real beauty", "Real connection"]

export function ViralHook() {
  return (
    <SectionReveal className="py-20 px-6 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-bold text-[#FFF3E8] lg:text-4xl">
          {"Why men can\u2019t stop watching"}
        </h2>

        <div className="mt-10 flex flex-col items-center gap-4">
          {hookLines.map((line, i) => (
            <motion.p
              key={line}
              className="font-serif text-xl font-semibold tracking-wide text-[#FFF3E8]/90 lg:text-2xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <p className="mt-8 text-sm italic text-[#A7A7B3]/70">
          Not performance. Presence.
        </p>
      </div>
    </SectionReveal>
  )
}
