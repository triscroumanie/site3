import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface DayHeaderProps {
  title: string
  description?: string
}

export function DayHeader({ title, description }: DayHeaderProps) {
  return (
    <>
      <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Retour
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground text-center">{title}</h1>
          <div className="w-12"></div>
        </div>
      </header>

      {description && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-foreground/80 leading-relaxed">{description}</p>
          </div>
        </section>
      )}
    </>
  )
}
