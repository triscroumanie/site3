export type NavLink = {
  id: string
  name: string
  description: string
}

export const navigationLinks: NavLink[] = [
  { id: "arrival", name: "Arrivée", description: "L'arrivée en Roumanie" },
  { id: "day1", name: "Jour 1", description: "Découverte du lycée et de la culture" },
  { id: "day2", name: "Jour 2", description: "Visite de la citadelle de Neamț" },
  { id: "day3", name: "Jour 3", description: "Entreprise ELECTRA & Iaşi" },
  { id: "day4", name: "Jour 4", description: "Ateliers & Réserve de bisons" },
  { id: "day5", name: "Jour 5", description: "Visite de Brașov" },
]
