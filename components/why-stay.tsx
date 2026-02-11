"use client"

import Image from "next/image"
import { SectionReveal } from "./section-reveal"

export function WhyStay() {
  return (
    <SectionReveal className="py-24 px-6 lg:py-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Image -- shown first on mobile, right on desktop */}
        <div className="order-1 flex shrink-0 justify-center lg:order-2 lg:justify-end">
          {/* REPLACE IMAGE HERE: /images/lina-why-stay.jpg */}
          <div
            className="overflow-hidden rounded-[28px] border border-[#C9A35A]/20 backdrop-blur-sm"
            style={{
              boxShadow:
                "0 0 24px rgba(201,163,90,0.12), 0 20px 60px rgba(0,0,0,0.45)",
            }}
          >
            <Image
              src="/images/lina-why-stay.png"
              alt="Lina Vale"
              width={400}
              height={560}
              className="h-auto max-w-[240px] lg:max-w-[320px]"
            />
          </div>
        </div>

        {/* Text -- shown second on mobile, left on desktop */}
        <div className="order-2 text-center lg:order-1 lg:flex-1 lg:text-left">
          <h2 className="font-serif text-3xl font-bold text-[#FFF3E8] lg:text-4xl">
            Why people stay
          </h2>

          <div className="mt-8 space-y-2 text-sm leading-relaxed text-[#A7A7B3] lg:text-base lg:leading-relaxed">
            <p>
              {"Because this isn\u2019t content. It\u2019s a mood."}
            </p>
            <p>
              {"Not just desire intention."}
            </p>
            <p>
              {"Not just access attention."}
            </p>
          </div>

          <div className="mt-8 space-y-2 text-sm leading-relaxed text-[#A7A7B3] lg:text-base lg:leading-relaxed">
            <p>
              {"If you want something fleeting, this isn't for you."}
            </p>
            <p>
              {"If you want something you'll think about tomorrow\u2026 welcome."}
            </p>
          </div>

          <div className="mx-auto mt-10 h-px w-16 bg-[#C9A35A]/30 lg:mx-0" />

          <p className="mt-6 text-xs tracking-widest uppercase text-[#C9A35A]/80">
            New private drops every week.
          </p>
        </div>
      </div>
    </SectionReveal>
  )
}
