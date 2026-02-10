"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function StickyQuote() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)
      setVisible(scrollPercent > 0.15 && scrollPercent < 0.85)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 hidden lg:block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-serif text-xs italic text-[#C9A35A]/40">
            {"\u201CDare to feel something real.\u201D"}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
