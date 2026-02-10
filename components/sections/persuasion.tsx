"use client";

import { FadeIn } from "@/components/motion-wrapper";

export function Persuasion() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-2xl font-semibold tracking-wide text-cream md:text-3xl lg:text-4xl">
          Why people stay
        </h2>

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-cream/60 md:text-base">
          <p>
            Because it{"'"}s not just visuals — it{"'"}s atmosphere.
            <br />
            Not just desire — intention.
            <br />
            Not just access — attention.
          </p>
          <p>
            If you want something fleeting, this isn{"'"}t for you.
            <br />
            If you want something you{"'"}ll think about tomorrow… welcome.
          </p>
        </div>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-gold/70">
          New private drops every week.
        </p>
      </FadeIn>
    </section>
  );
}
