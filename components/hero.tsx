"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FANVUE_URL } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Mobile: full-bleed background image */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero-lina.png"
          alt="Lina Vale editorial portrait"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJgA//9k="
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0F]/60 via-[#0A0B0F]/30 to-[#0A0B0F]" />
      </div>

      {/* Desktop: split screen layout */}
      <div className="relative z-10 flex flex-1 flex-col lg:flex-row">
        {/* Left: editorial portrait (desktop only) */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/images/hero-lina.png"
            alt="Lina Vale editorial portrait"
            fill
            priority
            className="object-cover object-top"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0B0F]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F]/60 via-transparent to-[#0A0B0F]/30" />
        </div>

        {/* Right: text block */}
        <div className="relative flex flex-1 flex-col justify-center px-6 py-32 lg:w-1/2 lg:px-16 xl:px-24">
          {/* Mobile: center, Desktop: left-align */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.p
              className="mb-5 text-xs tracking-[0.3em] uppercase text-[#C9A35A]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Private Access
            </motion.p>

            <motion.h1
              className="text-balance font-serif text-4xl font-bold leading-tight text-[#FFF3E8] sm:text-5xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {"Lina Vale \u2014 Exclusive Private World of Intimacy and Elegance"}
            </motion.h1>

            <motion.p
              className="mt-5 font-serif text-lg italic text-[#F3D7C9] sm:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Not just images — moments.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href={FANVUE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center rounded-2xl px-10 py-4 text-sm font-bold tracking-widest uppercase transition-transform active:scale-[0.98] hover:scale-[1.02]"
              >
                ENTER FANVUE
              </a>
            </motion.div>

            <motion.p
              className="mt-5 font-serif text-sm italic text-[#A7A7B3]/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Some things are better behind closed doors.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="h-8 w-5 rounded-full border border-[rgba(255,255,255,0.2)] p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-[#C9A35A]" />
        </div>
      </motion.div>
    </section>
  )
}
