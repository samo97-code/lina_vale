"use client"

import Image from "next/image"
import { SectionReveal } from "./section-reveal"

export function EmotionalStory() {
  return (
    <SectionReveal className="relative py-24 px-6 lg:py-32 overflow-hidden">
      {/* Subtle nude gradient blobs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#F3D7C9]/[0.03] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#C9A35A]/[0.03] blur-[100px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Left column — Lina editorial image */}
        <div className="order-2 flex shrink-0 justify-center lg:order-1 lg:justify-start">
          {/* REPLACE IMAGE HERE: /images/lina-story.jpg */}
          <Image
            src="/images/lina-story.png"
            alt="Lina Vale"
            width={480}
            height={720}
            className="h-auto max-w-[240px] rounded-2xl lg:max-w-[360px]"
            style={{
              boxShadow:
                "0 0 24px rgba(201,163,90,0.15), 0 20px 60px rgba(0,0,0,0.5)",
            }}
          />
        </div>

        {/* Right column — text card */}
        <div className="order-1 w-full lg:order-2 lg:flex-1">
          <div
            className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#111118]/80 px-8 py-12 backdrop-blur-sm lg:px-14 lg:py-16"
            style={{ boxShadow: "0 0 80px rgba(201,163,90,0.04)" }}
          >
            <h2 className="text-balance font-serif text-3xl font-bold text-[#FFF3E8] lg:text-4xl">
              Not just a face. A feeling.
            </h2>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#A7A7B3] lg:text-base lg:leading-relaxed">
              <p>
                Some people want attention.
                <br />
                Others want presence.
              </p>
              <p>
                {"Lina Vale is for the ones who crave something personal"}
                <br />
                a glance that holds, a mood that melts, a connection that feels
                dangerously real.
              </p>
              <p>
                {"This isn't noise."}
                <br />
                {"It's intimacy refined."}
              </p>
            </div>

            <p className="mt-10 font-serif text-base italic text-[#F3D7C9]/80 lg:text-lg">
              {"\u201CIf you feel it\u2026 you already know.\u201D"}
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
