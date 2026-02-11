"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FANVUE_URL } from "@/lib/constants"

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-[rgba(255,255,255,0.06)] bg-[#0A0B0F]/95 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <span className="text-xs tracking-[0.15em] uppercase text-[#FFF3E8]/80">
            {"LINA VALE \u2022 linavale.digital"}
          </span>

          <div className="flex flex-col items-end gap-0.5">
            <a
              href={FANVUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-lg px-6 py-2 text-[11px] font-bold tracking-widest uppercase"
            >
              JOIN FANVUE
            </a>
            <span className="text-[9px] tracking-wide text-[#A7A7B3]/50">
              {"Private \u2022 Discreet \u2022 Instant access"}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-2.5">
          <span className="text-[10px] tracking-[0.12em] uppercase text-[#FFF3E8]/70">
            {"LINA VALE"}
          </span>
          <a
            href={FANVUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold rounded-lg px-4 py-1.5 text-[10px] font-bold tracking-wide uppercase"
          >
            JOIN FANVUE
          </a>
        </div>
      </div>
    </header>
  )
}
