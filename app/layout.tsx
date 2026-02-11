import React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lina Vale — Exclusive Private World of Intimacy and Elegance",
  description:
    "Lina Vale is known for her cinematic aesthetic, refined sensuality, and deeply personal storytelling. Her private platform offers exclusive photos, intimate behind-the-scenes moments, and direct interaction in a discreet, high-quality environment.",
  openGraph: {
    title: "Lina Vale — Exclusive Private World of Intimacy and Elegance",
    description:
      "Lina Vale is known for her cinematic aesthetic, refined sensuality, and deeply personal storytelling. Discover a unique experience inside her world.",
    images: ["/images/hero-lina.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lina Vale — Exclusive Private World of Intimacy and Elegance",
    description:
      "Lina Vale is known for her cinematic aesthetic, refined sensuality, and deeply personal storytelling. Discover a unique experience inside her world.",
    images: ["/images/hero-lina.png"],
  },
  alternates: {
    canonical: "https://link.me/lina__vale_",
  },
}

export const viewport = {
  themeColor: "#0A0B0F",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <div className="film-grain" aria-hidden="true" />
      </body>
    </html>
  )
}
