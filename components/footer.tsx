export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Voyage 2025</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Une adventure inoubliable en Roumanie avec notre communauté scolaire.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-foreground/60 hover:text-accent transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/#days" className="text-foreground/60 hover:text-accent transition-colors">
                  Galerie
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Infos</h3>
            <p className="text-foreground/60 text-sm">
              🇷🇴 Roumanie 2025
              <br />
              Crée avec ❤️ par notre équipe
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
          <p>© 2025 Voyage de classe en Roumanie - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}
