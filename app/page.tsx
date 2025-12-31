"use client"
import { HeroSection } from "@/components/hero-section"
import { InfoSection } from "@/components/info-section"
import { DaysGrid } from "@/components/days-grid"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InfoSection />
      <DaysGrid />
      <StatsSection />
    </div>
  )
}
