"use client"

import {SectionReveal} from "./section-reveal"

const reviews = [
    {
        text: "She makes you feel seen not sold to.",
        author: "M.",
    },
    {
        text: "Class, beauty, and emotion in one place.",
        author: "A.",
    },
    {
        text: "It feels personal. That’s why I stayed.",
        author: "R.",
    },
    {
        text: "Not loud, not flashy just unforgettable.",
        author: "T.",
    },
    {
        text: "You don’t chase her attention… she chooses you.",
        author: "L.",
    },
    {
        text: "I came for the visuals, I stayed for the feeling.",
        author: "S.",
    }
];

function ReviewCard({text, author}: { text: string; author: string }) {
    return (
        <div
            className="flex w-[320px] shrink-0 flex-col items-center rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#111118] px-8 py-10 sm:w-[360px]">
            <div className="font-serif text-3xl text-[#C9A35A]/40">{"\u201C"}</div>
            <p className="mt-2 text-center font-serif text-base italic leading-relaxed text-[#FFF3E8]/90">
                {`\u201C${text}\u201D`}
            </p>
            <p className="mt-4 text-xs tracking-widest uppercase text-[#A7A7B3]/60">
                {"— "}{author}
            </p>
        </div>
    )
}

export function Reviews() {
    // Double the reviews for seamless infinite scroll
    const marqueeItems = [...reviews, ...reviews]

    return (
        <SectionReveal id="reviews" className="py-24 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <h2 className="font-serif text-3xl font-bold text-[#FFF3E8] lg:text-4xl">
                    Whispers from inside
                </h2>
            </div>

            {/* Marquee container */}
            <div className="relative mt-14">
                {/* Fade edges */}
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24"/>
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24"/>

                {/* Scrolling track */}
                <div className="flex animate-marquee gap-6">
                    {marqueeItems.map((review, i) => (
                        <ReviewCard
                            key={`${review.author}-${i}`}
                            text={review.text}
                            author={review.author}
                        />
                    ))}
                </div>
            </div>

            <p className="mt-12 text-center text-sm italic text-[#A7A7B3]/60">
                Real members. Real feelings. Real connection.
            </p>
        </SectionReveal>
    )
}
