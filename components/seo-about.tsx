"use client"

import { SectionReveal } from "./section-reveal"

export function SeoAbout() {
  return (
    <SectionReveal className="py-20 px-6 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-bold text-[#FFF3E8] lg:text-4xl">
          About Lina Vale
        </h2>

        <p className="mt-8 text-sm leading-relaxed text-[#A7A7B3] lg:text-base lg:leading-relaxed">
          {"Lina Vale is known for her cinematic aesthetic, refined sensuality, and deeply personal storytelling. Her private platform offers exclusive photos, intimate behind-the-scenes moments, and direct interaction in a discreet, high-quality environment. Members who value beauty, emotion, and genuine connection discover a unique experience inside her world \u2014 one that feels close, thoughtful, and unforgettable."}
        </p>
      </div>
    </SectionReveal>
  )
}
