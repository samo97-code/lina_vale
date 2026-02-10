"use client";

import { Heart, Gem, Sparkles } from "lucide-react";
import {
  StaggerContainer,
  StaggerChild,
  FadeIn,
} from "@/components/motion-wrapper";

const BENEFITS = [
  {
    icon: Heart,
    title: "Intimacy",
    text: "Private photos & videos designed to feel close — warm, personal, and alive.",
  },
  {
    icon: Gem,
    title: "Luxury",
    text: "Cinematic light, polished aesthetics, and tasteful sensuality — always classy.",
  },
  {
    icon: Sparkles,
    title: "Connection",
    text: "Real attention, playful energy, and VIP moments for those who step inside.",
  },
];

export function Benefits() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <FadeIn className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-2xl font-semibold tracking-wide text-cream md:text-3xl lg:text-4xl">
          What you receive
        </h2>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          More than content — an experience.
        </p>
      </FadeIn>

      <StaggerContainer className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
        {BENEFITS.map((item) => (
          <StaggerChild key={item.title}>
            <div className="group flex h-full flex-col items-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-card p-8 text-center transition-all duration-300 hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold tracking-wide text-cream">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          </StaggerChild>
        ))}
      </StaggerContainer>
    </section>
  );
}
