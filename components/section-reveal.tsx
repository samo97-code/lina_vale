"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  id,
}: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}

export function StaggerChild({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode
  className?: string
  index?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
