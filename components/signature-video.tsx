"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { FANVUE_URL, INSTAGRAM_URL, TIKTOK_URL, LINKHUB_URL } from "@/lib/constants"
import { SectionReveal } from "./section-reveal"

export function SignatureVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  function toggleMute() {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <SectionReveal className="py-24 px-6 lg:py-32 overflow-hidden">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Text column */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A35A]">
            Preview
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#FFF3E8] lg:text-4xl">
            Signature Reel
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#A7A7B3] lg:text-base">
            A glimpse of the atmosphere soft, cinematic, and close.
          </p>

          <a
            href={FANVUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 inline-flex items-center justify-center rounded-2xl px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-transform active:scale-[0.98] hover:scale-[1.02]"
          >
            ENTER FANVUE
          </a>

          <div className="mt-5 flex items-center gap-4 text-xs text-[#A7A7B3]/50">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#C9A35A]"
            >
              Instagram
            </a>
            <span className="text-[#A7A7B3]/20">/</span>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#C9A35A]"
            >
              TikTok
            </a>
            <span className="text-[#A7A7B3]/20">/</span>
            <a
              href={LINKHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#C9A35A]"
            >
              All Links
            </a>
          </div>
        </div>

        {/* Video column — phone frame */}
        <motion.div
          className="relative w-full max-w-[280px] shrink-0 sm:max-w-[300px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Phone frame container */}
          <div
            className="relative overflow-hidden rounded-[28px] border border-[#C9A35A]/25 bg-[#0a0a0f]"
            style={{
              aspectRatio: "9 / 16",
              boxShadow:
                "0 0 40px rgba(201,163,90,0.08), 0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* Glass reflection highlight */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

            {/* REPLACE VIDEO HERE: /videos/lina-signature.mp4 */}
            {/* REPLACE IMAGE HERE: /images/video-poster.jpg */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster="/images/video-poster.jpg"
              className="h-full w-full object-cover"
            >
              <source src="/videos/lina-signature.mp4" type="video/mp4" />
            </video>

            {/* Bottom overlay — tap to watch */}
            <button
              type="button"
              onClick={toggleMute}
              className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent pb-5 pt-12"
            >
              <span className="text-[10px] tracking-widest uppercase text-white/40">
                {isMuted ? "Tap for sound" : "Tap to mute"}
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  )
}
