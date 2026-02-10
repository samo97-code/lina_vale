"use client"

import { SectionReveal, StaggerChild } from "./section-reveal"

const steps = [
  { number: "01", label: "Enter Fanvue" },
  { number: "02", label: "Send the word 'VALE'" },
  { number: "03", label: "Enjoy your VIP welcome" },
]

export function HowItWorks() {
  return (
    <SectionReveal className="py-24 px-6 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold text-[#FFF3E8] lg:text-4xl">
          How it works
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <StaggerChild key={step.number} index={i}>
              <div className="flex flex-col items-center gap-4">
                <span className="font-serif text-3xl font-bold text-[#C9A35A]/30">
                  {step.number}
                </span>
                <div className="h-px w-8 bg-[#C9A35A]/20" />
                <p className="text-sm tracking-wide text-[#FFF3E8]">
                  {step.label}
                </p>
              </div>
            </StaggerChild>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
