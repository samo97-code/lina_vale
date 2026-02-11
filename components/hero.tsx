"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FANVUE_URL, LINKHUB_URL } from "@/lib/constants"
import { Shield, Zap, RotateCcw } from "lucide-react"

const navLinks = [
  { label: "Gallery", href: "#gallery" },
  { label: "Access", href: "#access" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#footer" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* REPLACE IMAGE HERE: /images/hero-lina.jpg */}
      <Image
        src="/images/hero-lina.png"
        alt="Lina Vale hero"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJgA//9k="
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/70 via-[#0B0B0F]/40 to-[#0B0B0F]/95" />

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12 lg:py-1">
        <a
          href="#"
          className="font-serif text-xl tracking-wide text-[#FFF3E8] lg:text-2xl"
        >
          <Image
              src="/images/logo.png"
              alt="Lina Vale hero"
              priority
              className="object-cover object-center"
              sizes="100vw"
              width={100}
              height={100}
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-widest uppercase text-[#A7A7B3] transition-colors hover:text-[#C9A35A]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LINKHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-[#A7A7B3]/60 transition-colors hover:text-[#C9A35A]"
          >
            Link Hub
          </a>
        </nav>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center lg:items-start lg:px-20 lg:text-left">
        <motion.p
          className="mb-4 text-xs tracking-[0.3em] uppercase text-[#C9A35A]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Private Access
        </motion.p>

        <motion.h1
          className="gold-glow font-serif text-5xl font-bold tracking-tight text-[#FFF3E8] sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          LINA VALE
        </motion.h1>

        <motion.p
          className="mt-4 font-serif text-lg italic text-[#F3D7C9] sm:text-xl lg:text-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Where desire meets devotion.
        </motion.p>

        <motion.p
          className="mt-6 max-w-md text-sm leading-relaxed text-[#A7A7B3] lg:max-w-lg lg:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          A private world of beauty, warmth, and quiet obsession.
          <br />
          Soft moments. Bold chemistry. The kind of closeness that lingers.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a
            href={FANVUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center justify-center rounded-2xl px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-transform active:scale-[0.98] hover:scale-[1.02]"
          >
            ENTER FANVUE
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.15)] bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide uppercase text-[#FFF3E8] transition-all hover:border-[#C9A35A]/40 hover:text-[#C9A35A] active:scale-[0.98] hover:scale-[1.02]"
          >
            Explore First
          </a>
        </motion.div>

        {/* VIP Welcome Bonus pill */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-2 lg:items-start"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
        >
          <span className="inline-flex items-center rounded-full border border-[#C9A35A]/30 bg-[#C9A35A]/10 px-4 py-1.5 text-[11px] font-medium tracking-widest uppercase text-[#C9A35A]">
            VIP Welcome Bonus inside Fanvue
          </span>
          <p className="text-xs text-[#A7A7B3]/70">
            {"Send the word "}
            <span className="inline-flex items-center rounded border border-[#C9A35A]/40 bg-[#C9A35A]/10 px-2 py-0.5 font-semibold tracking-wider text-[#C9A35A]">
              VALE
            </span>
            {" in your first message."}
          </p>
        </motion.div>

        <motion.p
          className="mt-6 text-xs tracking-widest uppercase text-[#A7A7B3]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {"Private updates \u2022 VIP replies \u2022 Premium atmosphere"}
        </motion.p>

        <motion.div
          className="mt-4 flex items-center gap-6 text-[10px] tracking-widest uppercase text-[#A7A7B3]/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <span className="flex items-center gap-1.5">
            <Shield className="h-3 w-3" />
            Secure
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="h-3 w-3" />
            Instant access
          </span>
          <span className="flex items-center gap-1.5">
            <RotateCcw className="h-3 w-3" />
            Cancel anytime
          </span>
        </motion.div>

        {/* Vibe row */}
        <motion.div
          className="mt-6 flex items-center gap-4 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="h-px w-8 bg-[#C9A35A]" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#A7A7B3]">
            Exclusive
          </span>
          <div className="h-1 w-1 rounded-full bg-[#C9A35A]" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#A7A7B3]">
            Premium
          </span>
          <div className="h-1 w-1 rounded-full bg-[#C9A35A]" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#A7A7B3]">
            Refined
          </span>
          <div className="h-px w-8 bg-[#C9A35A]" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="h-8 w-5 rounded-full border border-[rgba(255,255,255,0.2)] p-1">
          <div className="h-2 w-1 mx-auto rounded-full bg-[#C9A35A]" />
        </div>
      </motion.div>
    </section>
  )
}
