"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FANVUE_URL } from "@/lib/constants";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.2);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Mobile sticky bottom CTA bar */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-[rgba(255,255,255,0.06)] bg-[#0B0B0F]/95 px-4 py-3 backdrop-blur-md md:hidden"
          >
            <span className="text-xs tracking-wide text-cream/50">
              Lina Vale &bull; Private Access
            </span>
            <a
              href={FANVUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-lg px-5 py-2 text-xs font-semibold tracking-wide"
            >
              ENTER FANVUE
            </a>
          </motion.div>

          {/* Back to top button */}
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-20 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 bg-card/80 text-cream/40 backdrop-blur-sm transition-colors hover:border-gold/30 hover:text-gold md:bottom-6"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}
