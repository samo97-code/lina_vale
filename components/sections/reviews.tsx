"use client";

import {
  StaggerContainer,
  StaggerChild,
  FadeIn,
} from "@/components/motion-wrapper";

const TESTIMONIALS = [
  {
    quote: "She makes you feel seen — not sold to.",
    author: "M.",
  },
  {
    quote: "Class, beauty, and emotion in one place.",
    author: "A.",
  },
  {
    quote: "It feels personal. That's why I stayed.",
    author: "R.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <FadeIn className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-2xl font-semibold tracking-wide text-cream md:text-3xl lg:text-4xl">
          Whispers from inside
        </h2>
      </FadeIn>

      <StaggerContainer className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <StaggerChild key={item.author}>
            <div className="flex h-full flex-col items-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-card p-8 text-center">
              <p className="flex-1 font-serif text-sm italic leading-relaxed text-cream/70 md:text-base">
                {`"${item.quote}"`}
              </p>
              <p className="mt-5 text-xs font-medium tracking-widest text-gold/60">
                — {item.author}
              </p>
            </div>
          </StaggerChild>
        ))}
      </StaggerContainer>
    </section>
  );
}
