import React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
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
  title: "Lina Vale | Private Access",
  description:
    "A private world of beauty, warmth, and refined intimacy. Enter Lina Vale's world.",
  openGraph: {
    title: "Lina Vale | Private Access",
    description:
      "A private world of beauty, warmth, and refined intimacy. Enter Lina Vale's world.",
    images: ["/images/hero-lina.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lina Vale | Private Access",
    description:
      "A private world of beauty, warmth, and refined intimacy. Enter Lina Vale's world.",
    images: ["/images/hero-lina.png"],
  },
  alternates: {
    canonical: "https://link.me/lina__vale_",
  },
}

export const viewport = {
  themeColor: "#0B0B0F",
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
        <Analytics />
        <div className="film-grain" aria-hidden="true" />
      </body>
    </html>
  )
}
