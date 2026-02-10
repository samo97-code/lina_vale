"use client";

import { FadeIn } from "@/components/motion-wrapper";

export function Story() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-20">
      {/* Subtle gradient blobs */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-nude/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-gold/5 blur-[100px]" />

      <FadeIn className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-card p-8 shadow-2xl md:p-12">
          {/* Subtle top glow */}
          <div className="pointer-events-none absolute -top-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <h2 className="text-balance font-serif text-2xl font-semibold tracking-wide text-cream md:text-3xl">
            Not just a face. A feeling.
          </h2>

          <div className="mt-8 space-y-4 text-sm leading-relaxed text-cream/60 md:text-base">
            <p>
              Some people want attention.
              <br />
              Others want presence.
            </p>
            <p>
              Lina Vale is for the ones who crave something personal
              <br />
              a glance that holds, a mood that melts, a connection that feels
              dangerously real.
            </p>
            <p>
              This isn{"'"}t noise.
              <br />
              It{"'"}s intimacy refined.
            </p>
          </div>

          <p className="mt-8 font-serif text-sm italic tracking-wide text-gold/80 md:text-base">
            {"\"If you feel it… you already know.\""}
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
