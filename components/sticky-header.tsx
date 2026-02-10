"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FANVUE_URL } from "@/lib/constants"
import Image from "next/image";

const teaseLines = [
  "New private drops every week.",
  "VIP replies waiting inside.",
  "Some looks are only for members.",
  "You're closer than you think.",
]

export function StickyHeader() {
  const [visible, setVisible] = useState(false)
  const [teaseIndex, setTeaseIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTeaseIndex((prev) => (prev + 1) % teaseLines.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          {/* Desktop header */}
          <div className="hidden md:block border-b border-[rgba(255,255,255,0.06)] bg-[#0B0B0F]/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
              <div className="inline-flex items-center gap-2">
                <Image
                    src="/images/logo.png"
                    alt="Lina Vale hero"
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                    width={50}
                    height={50}
                />
                <span className="text-xs tracking-[0.2em] uppercase text-[#A7A7B3]/60">
                {"The private side"}
              </span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <a
                  href={FANVUE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold rounded-lg px-5 py-2 text-[11px] font-semibold tracking-widest uppercase"
                >
                  ENTER FANVUE
                </a>
                <span className="text-[9px] italic text-[#A7A7B3]/40">
                  {"Most don't leave once they enter."}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile header */}
          <div className="md:hidden border-b border-[rgba(255,255,255,0.06)] bg-[#0B0B0F]/95 backdrop-blur-md">
            <div className="flex items-center justify-between px-4 py-2.5">
              <span className="text-[10px] tracking-wide text-[#A7A7B3]/50">
                {"Lina Vale \u2022 Private Access"}
              </span>
              <a
                href={FANVUE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold rounded-lg px-4 py-1.5 text-[10px] font-semibold tracking-wide"
              >
                ENTER FANVUE
              </a>
            </div>
          </div>

          {/* Tease bar */}
          <div className="border-b border-[rgba(255,255,255,0.03)] bg-[#0B0B0F]/80 backdrop-blur-sm">
            <div className="flex h-7 items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={teaseIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="text-[10px] tracking-[0.15em] uppercase text-[#C9A35A]/40"
                >
                  {teaseLines[teaseIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
