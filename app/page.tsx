import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { SignatureVideo } from "@/components/signature-video"
import { ThreeSides } from "@/components/three-sides"
import { EmotionalStory } from "@/components/emotional-story"
import { BlurredTeaser } from "@/components/blurred-teaser"
import { WhoIsLina } from "@/components/who-is-lina"
import { CinematicAesthetic } from "@/components/cinematic-aesthetic"
import { Benefits } from "@/components/benefits"
import { Gallery } from "@/components/gallery"
import { WhyStay } from "@/components/why-stay"
import { InsideFanvue } from "@/components/inside-fanvue"
import { AccessCard } from "@/components/access-card"
import { Psychology } from "@/components/psychology"
import { Reviews } from "@/components/reviews"
import { FAQ } from "@/components/faq"
import { HowItWorks } from "@/components/how-it-works"
import { FinalCTA } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { StickyCTA } from "@/components/sticky-cta"
import { StickyHeader } from "@/components/sticky-header"
import { SeductiveQuoteBand } from "@/components/seductive-quote-band"
import { GoldParticles } from "@/components/gold-particles"
import { StickyQuote } from "@/components/sticky-quote"

function Divider() {
  return (
    <div className="mx-auto h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />
  )
}

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <GoldParticles />
      <StickyQuote />
      <StickyHeader />
      <Hero />
      <TrustStrip />
      <Divider />
      <SignatureVideo />
      <Divider />
      <ThreeSides />
      <Divider />
      <EmotionalStory />
      <Divider />
      <BlurredTeaser />
      <Divider />
      <Gallery />
      <Divider />
      <WhoIsLina />
      <Divider />
      <CinematicAesthetic />
      <Divider />
      <Benefits />
      <Divider />
      <WhyStay />
      <Divider />
      <InsideFanvue />
      <Divider />
      <AccessCard />
      <Divider />
      <Psychology />
      <Divider />
      <Reviews />
      <Divider />
      <FAQ />
      <Divider />
      <HowItWorks />
      <SeductiveQuoteBand />
      <FinalCTA />
      <SiteFooter />
      <StickyCTA />
    </main>
  )
}
