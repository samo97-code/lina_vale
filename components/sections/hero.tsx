"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FANVUE_URL, LINKHUB_URL } from "@/lib/constants";
import { Shield, Zap, RotateCcw } from "lucide-react";

const NAV_ITEMS = [
  { label: "Gallery", href: "#gallery" },
  { label: "Access", href: "#access" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#footer" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image - REPLACE IMAGE HERE */}
      <Image
        src="/images/hero-lina.png"
        alt="Lina Vale editorial portrait"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/70 via-[#0B0B0F]/50 to-[#0B0B0F]/90" />

      {/* Top Navigation */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <Link href="/" className="font-serif text-xl tracking-wide text-cream">
          Lina Vale
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm tracking-wide text-cream/70 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-cream/40 transition-colors hover:text-cream/70"
          >
            Link Hub
          </a>
        </nav>
        {/* Mobile: minimal nav */}
        <a
          href={LINKHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-wide text-cream/40 md:hidden"
        >
          Links
        </a>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 md:items-start md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-glow font-serif text-5xl font-bold tracking-wider text-cream sm:text-6xl lg:text-8xl"
          >
            LINA VALE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-4 font-serif text-lg italic tracking-wide text-gold sm:text-xl lg:text-2xl"
          >
            Where desire meets devotion.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-6 max-w-lg text-sm leading-relaxed text-cream/70 sm:text-base"
          >
            A private world of beauty, warmth, and quiet obsession.
            <br />
            Soft moments. Bold chemistry. The kind of closeness that lingers.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start"
          >
            <motion.a
              href={FANVUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm font-semibold tracking-wide"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enter My World
            </motion.a>
            <motion.a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-lg border border-cream/20 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:border-gold/50 hover:text-gold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore First
            </motion.a>
          </motion.div>

          {/* Micro social proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-6 text-xs tracking-widest text-cream/40"
          >
            Private updates &bull; VIP replies &bull; Premium atmosphere
          </motion.p>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-4 flex items-center justify-center gap-6 md:justify-start"
          >
            <span className="flex items-center gap-1.5 text-xs text-cream/30">
              <Shield className="h-3 w-3" />
              Secure
            </span>
            <span className="flex items-center gap-1.5 text-xs text-cream/30">
              <Zap className="h-3 w-3" />
              Instant access
            </span>
            <span className="flex items-center gap-1.5 text-xs text-cream/30">
              <RotateCcw className="h-3 w-3" />
              Cancel anytime
            </span>
          </motion.div>

          {/* Vibe row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-6 flex items-center justify-center gap-4 md:justify-start"
          >
            {["Editorial", "Premium", "Exclusive"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cream/10 px-3 py-1 text-[10px] uppercase tracking-widest text-cream/25"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border border-cream/20"
        >
          <motion.div className="mx-auto mt-1.5 h-2 w-0.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
