"use client"

import { SectionReveal } from "./section-reveal"

const bullets = [
  "Appreciate beauty",
  "Value privacy",
  "Want something personal",
  "Don't settle for ordinary",
]

export function Psychology() {
  return (
    <SectionReveal className="py-20 px-6 lg:py-28">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-serif text-2xl font-bold text-[#FFF3E8] lg:text-3xl">
          {"If you're here, you probably\u2026"}
        </h2>

        <ul className="mt-10 space-y-4">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-center justify-center gap-3 text-sm text-[#A7A7B3] lg:text-base"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-[#C9A35A]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  )
}
