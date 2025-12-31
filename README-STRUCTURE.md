# Structure du Projet

## Organisation des fichiers

### 📁 `/data` - Données et Configuration
- **`trip-data.ts`** - Configuration générale du voyage (titre, année, statistiques)
- **`gallery.ts`** - Données de galerie organisées par jour
- **`navigation.ts`** - Configuration de navigation et liens

### 📁 `/components` - Composants Réutilisables
- **`navbar.tsx`** - Barre de navigation
- **`footer.tsx`** - Pied de page
- **Section Components** - Composants de sections de la page d'accueil
  - `hero-section.tsx` - Section héro avec titre et CTA
  - `info-section.tsx` - Section d'information
  - `days-grid.tsx` - Grille des jours
  - `stats-section.tsx` - Statistiques du voyage
- **Gallery Components** - Composants pour les galeries photos
  - `gallery-grid.tsx` - Grille de photos
  - `gallery-lightbox.tsx` - Visualiseur lightbox
  - `day-header.tsx` - En-tête des pages de jours

### 📁 `/app` - Pages
- **`page.tsx`** - Page d'accueil (composition de sections)
- **`days/[dayId]/page.tsx`** - Page détaillée d'un jour

## Comment ajouter un nouveau jour

1. Ajouter une nouvelle entrée dans `/data/gallery.ts` :
\`\`\`ts
day6: {
  title: "Jour 6 - Nouvelle destination",
  description: "Description du jour",
  images: [
    { src: "/image.jpg", alt: "Description", caption: "Légende" },
    // ...
  ],
}
\`\`\`

2. Ajouter dans `/data/navigation.ts` :
\`\`\`ts
{ id: "day6", name: "Jour 6", description: "Nouvelle destination" }
\`\`\`

La page se créera automatiquement !

## Comment modifier les contenus

- **Titre général et année** → `/data/trip-data.ts`
- **Photos et descriptions** → `/data/gallery.ts`
- **Navigation** → `/data/navigation.ts`
- **Style des sections** → Modifier les composants dans `/components/`

## Structure des types

Tous les types TypeScript sont définis dans `/data/gallery.ts` pour éviter les imports circulaires.
