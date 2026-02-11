"use client"

import { SectionReveal } from "./section-reveal"

export function SocialProof() {
  return (
    <SectionReveal className="py-10 px-6 lg:py-14">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-serif text-lg tracking-wide text-[#C9A35A] sm:text-xl lg:text-2xl">
          {"2,400+ members already inside"}
        </p>
        <p className="mt-2 text-xs tracking-wide text-[#A7A7B3]/60">
          Trusted by members who value discretion.
        </p>
      </div>
    </SectionReveal>
  )
}
