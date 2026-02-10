"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FANVUE_URL, INSTAGRAM_URL, TIKTOK_URL } from "@/lib/constants";
import { FadeIn } from "@/components/motion-wrapper";

const PERKS = [
  "Private feed (premium photos & videos)",
  "VIP replies & flirty check-ins",
  "Behind-the-scenes moments",
  "Surprise drops & special requests",
  "A mood that feels personal",
];

export function Access() {
  return (
    <section id="access" className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <FadeIn className="mx-auto max-w-md">
        <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-card p-8 shadow-2xl md:p-10">
          {/* Top gold line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

          <h3 className="text-center font-serif text-2xl font-semibold tracking-wide text-cream md:text-3xl">
            Exclusive Access
          </h3>

          <ul className="mt-8 space-y-4">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm leading-relaxed text-cream/70">
                  {perk}
                </span>
              </li>
            ))}
          </ul>

          {/* Primary CTA */}
          <motion.a
            href={FANVUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 flex w-full items-center justify-center rounded-lg py-3.5 text-sm font-semibold tracking-wide"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Now
          </motion.a>
          <p className="mt-3 text-center text-xs text-cream/30">
            Instant access. Discreet. Cancel anytime.
          </p>

          {/* Secondary CTA */}
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-lg border border-cream/10 bg-transparent py-3 text-sm tracking-wide text-cream/60 transition-colors hover:border-cream/20 hover:text-cream/80"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Follow on Instagram
          </motion.a>

          <p className="mt-3 text-center">
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream/30 underline-offset-4 transition-colors hover:text-cream/50 hover:underline"
            >
              TikTok
            </a>
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
