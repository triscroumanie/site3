import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { navigationLinks } from "@/data/navigation"

export function DaysGrid() {
  return (
    <section id="days" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Jours du voyage</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationLinks.map((day, index) => (
            <Link
              key={day.id}
              href={`/days/${day.id}`}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-6 sm:p-8 z-10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all duration-300 transform group-hover:translate-x-1" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {day.name}
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors">{day.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
