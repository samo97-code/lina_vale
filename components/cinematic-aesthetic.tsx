"use client"

import Image from "next/image"
import { Camera, Sun, EyeOff } from "lucide-react"
import { SectionReveal } from "./section-reveal"

const items = [
  { icon: Sun, label: "Natural light" },
  { icon: Camera, label: "Real emotions" },
  { icon: EyeOff, label: "No filters, no noise" },
]

export function CinematicAesthetic() {
  return (
    <SectionReveal className="py-16 px-6 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-2xl font-bold text-[#FFF3E8] lg:text-3xl">
          Cinematic aesthetic
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left column -- text + icon list */}
          <div className="min-w-0">
            <div className="space-y-4 text-sm leading-relaxed text-[#A7A7B3] lg:text-base lg:leading-relaxed">
              <p>
                No heavy editing. No artificial perfection.
                <br />
                Just natural light, real emotion,
                <br />
                and a body that tells a story without speaking.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {items.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0 text-[#C9A35A]" />
                  <span className="text-sm tracking-wide text-[#A7A7B3]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column -- B&W behind-the-scenes image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/lina-bts.png"
              alt="Behind the scenes"
              width={400}
              height={500}
              className="h-auto w-full max-w-[260px] rounded-2xl grayscale lg:max-w-[320px]"
              style={{
                boxShadow:
                  "0 0 20px rgba(201,163,90,0.1), 0 16px 48px rgba(0,0,0,0.45)",
              }}
            />
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
