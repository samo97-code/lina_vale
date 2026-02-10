"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FANVUE_URL } from "@/lib/constants";
import { FadeIn } from "@/components/motion-wrapper";

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24">
      {/* Background image - REPLACE IMAGE HERE */}
      <Image
        src="/images/final-cta.jpg"
        alt="Luxury ambient setting"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/70 to-[#0B0B0F]/50" />

      <FadeIn className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="gold-glow font-serif text-3xl font-bold tracking-wide text-cream md:text-4xl lg:text-5xl">
          Dare to feel something real.
        </h2>

        <p className="mt-6 text-sm leading-relaxed text-cream/60 md:text-base">
          Step closer. Take your time.
          <br />
          Then don{"'"}t pretend you didn{"'"}t want it.
        </p>

        <motion.a
          href={FANVUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-8 inline-flex items-center rounded-lg px-10 py-4 text-sm font-semibold tracking-wide"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Meet Lina
        </motion.a>
      </FadeIn>
    </section>
  );
}
