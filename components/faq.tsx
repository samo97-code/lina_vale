"use client"

import { SectionReveal } from "./section-reveal"

const faqs = [
  {
    question: "Is this for everyone?",
    answer: "No, only for those who know what they want.",
  },
  {
    question: "Will it feel real?",
    answer: "That's the point.",
  },
  {
    question: "Can I leave anytime?",
    answer: "Yes, but most don't.",
  },
]

export function FAQ() {
  return (
    <SectionReveal className="py-20 px-6 lg:py-28">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-serif text-2xl font-bold text-[#FFF3E8] lg:text-3xl">
          Questions people whisper
        </h2>

        <div className="mt-12 space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#111118]/60 px-8 py-6 backdrop-blur-sm"
              style={{ boxShadow: "0 0 40px rgba(201,163,90,0.03)" }}
            >
              <p className="text-sm font-medium text-[#FFF3E8] lg:text-base">
                {faq.question}
              </p>
              <p className="mt-2 text-sm italic text-[#A7A7B3]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
