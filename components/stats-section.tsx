import { tripStats } from "@/data/trip-data"

export function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {tripStats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-4xl sm:text-5xl font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-foreground/60 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
