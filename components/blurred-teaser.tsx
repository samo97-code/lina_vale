"use client"

import { SectionReveal } from "./section-reveal"

const teasers = [
  { title: "After midnight", subtitle: "Quiet confessions. Slow breaths." },
  { title: "Morning light", subtitle: "Soft skin. No performance." },
  { title: "Unfiltered moments", subtitle: "Real moods. No filters. No acting." },
]

export function BlurredTeaser() {
  return (
    <SectionReveal className="py-20 px-6 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-2xl font-bold text-[#FFF3E8] lg:text-3xl">
          What the world never sees
        </h2>
        <p className="mt-3 text-sm text-[#A7A7B3]/70">
          Intimate moments that never reach public feeds.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {teasers.map((teaser) => (
            <div
              key={teaser.title}
              className="relative flex h-48 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#111118]/60"
            >
              {/* Blurred background shapes */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-1/3 left-1/4 h-24 w-24 rounded-full bg-[#F3D7C9]/20 blur-[40px]" />
                <div className="absolute bottom-1/4 right-1/3 h-20 w-20 rounded-full bg-[#C9A35A]/15 blur-[35px]" />
              </div>
              {/* Glass overlay */}
              <div className="absolute inset-0 backdrop-blur-md" />
              <p className="relative font-serif text-lg italic text-[#FFF3E8]">
                {teaser.title}
              </p>
              <p className="relative text-xs text-[#A7A7B3]/60">
                {teaser.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
