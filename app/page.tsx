import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { ViralHook } from "@/components/viral-hook"
import { EmotionalStory } from "@/components/emotional-story"
import { Benefits } from "@/components/benefits"
import { ThreeSides } from "@/components/three-sides"
import { Gallery } from "@/components/gallery"
import { WhyStay } from "@/components/why-stay"
import { Reviews } from "@/components/reviews"
import { SeoAbout } from "@/components/seo-about"
import { FinalCTA } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { StickyCTA } from "@/components/sticky-cta"
import { StickyHeader } from "@/components/sticky-header"
import { GoldParticles } from "@/components/gold-particles"

function Divider() {
  return (
    <div className="mx-auto h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />
  )
}

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <GoldParticles />
      <StickyHeader />
      <Hero />
      <SocialProof />
      <Divider />
      <ViralHook />
      <Divider />
      <EmotionalStory />
      <Divider />
      <Benefits />
      <Divider />
      <ThreeSides />
      <Divider />
      <Gallery />
      <Divider />
      <WhyStay />
      <Divider />
      <Reviews />
      <Divider />
      <SeoAbout />
      <FinalCTA />
      <SiteFooter />
      <StickyCTA />
    </main>
  )
}
