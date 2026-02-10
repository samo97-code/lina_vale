"use client"

import { SectionReveal } from "./section-reveal"

export function WhoIsLina() {
  return (
    <SectionReveal className="py-20 px-6 lg:py-28">
      <div className="mx-auto max-w-xl">
        <div
          className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#111118]/70 px-8 py-12 text-center backdrop-blur-sm lg:px-14 lg:py-16"
          style={{ boxShadow: "0 0 60px rgba(201,163,90,0.04)" }}
        >
          <h2 className="font-serif text-2xl font-bold text-[#FFF3E8] lg:text-3xl">
            Who is Lina Vale?
          </h2>
          <div className="mx-auto mt-8 max-w-md space-y-4 text-sm leading-relaxed text-[#A7A7B3] lg:text-base">
            <p>
              Not a character. Not a performance.
              <br />
              Not something to scroll past.
            </p>
            <p>
              {"Lina Vale is presence"}
              <br />
              a mood that lingers, a glance that holds,
              <br />
              and a connection that feels quietly dangerous.
            </p>
            <p className="font-serif italic text-[#F3D7C9]/80">
              {"If you feel it\u2026 you already know."}
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
