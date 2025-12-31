# Voyage en Roumanie 2025 - Portfolio

Un site simple et interactif pour partager les photos et souvenirs du voyage scolaire en Roumanie.

## Structure Simple

\`\`\`
/
├── index.html           # Le site complet (une seule page)
├── assets/
│   ├── styles.css       # Tous les styles
│   └── script.js        # Toute la logique JavaScript
└── README.md            # Cette documentation
\`\`\`

## Comment modifier le contenu

### 1. Ajouter/modifier les photos
Ouvrez `assets/script.js` et trouvez l'objet `galleryData`. 

**Exemple:** Pour modifier les photos du Jour 1, cherchez la section `day1` et mettez à jour les URLs des images:

\`\`\`javascript
day1: {
  title: "Jour 1 - Découverte du lycée",
  description: "...",
  images: [
    { src: "URL_DE_VOTRE_IMAGE.jpg", alt: "Description", caption: "Titre photo" },
    // Ajoutez d'autres photos...
  ]
}
\`\`\`

### 2. Modifier les textes
- **Titre principal:** Dans `index.html`, cherchez `<h1>Voyage en Roumanie 2025</h1>`
- **Description:** Cherchez `<p>Découvrez notre adventure...</p>`
- **Titres des jours:** Dans `assets/script.js`, modifiez les `title` des sections

### 3. Changer les couleurs
Dans `assets/styles.css`, au début du fichier, modifiez les variables CSS:

\`\`\`css
:root {
  --primary: #e7d9bf;      /* Beige/tan */
  --secondary: #333;        /* Foncé */
  --accent: #8b7355;        /* Brun */
  --light: #f5f1ed;         /* Clair */
  --border: #d4c5b9;        /* Bordure */
}
\`\`\`

## Héberger sur GitHub Pages

1. Créez un dossier sur votre ordi
2. Mettez les fichiers dedans
3. Poussez sur GitHub:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/nom-du-repo.git
   git push -u origin main
   \`\`\`
4. Allez dans les paramètres du repo → Pages → choisissez `main` comme source
5. Attendez quelques minutes et votre site sera live!

## Ajouter un nouveau jour

1. Ouvrez `assets/script.js`
2. Ajoutez une nouvelle entrée dans `galleryData`:

\`\`\`javascript
day6: {
  title: "Jour 6 - Nouveau jour",
  description: "Description du jour",
  images: [
    { src: "image1.jpg", alt: "alt", caption: "Titre" },
  ]
}
\`\`\`

3. Ouvrez `index.html`
4. Trouvez la section des jours et ajoutez une nouvelle carte:

\`\`\`html
<div class="day-card" onclick="openDay('day6')">
  <div class="day-header">Jour 6</div>
  <p>Nouveau jour</p>
</div>
\`\`\`

## Support

Pour les questions, vérifiez les sections correspondantes ci-dessus!
