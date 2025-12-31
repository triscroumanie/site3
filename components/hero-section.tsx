import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { tripConfig } from "@/data/trip-data"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-accent/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="text-accent text-sm font-semibold tracking-wider">
            {tripConfig.emoji} VOYAGE {tripConfig.year}
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          {tripConfig.title}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance leading-relaxed">
          {tripConfig.subtitle}. Des expériences inoubliables, des cultures fascinantes et des souvenirs à jamais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#days"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Voir la galerie <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
