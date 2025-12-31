// Gallery data - facile à modifier
const galleryData = {
  arrival: {
    title: "Arrivée en Roumanie",
    description: "Notre arrivée en Roumanie - l'embarquement à Lyon Saint Exupéry jusqu'à l'auberge de Targu Neamt",
    images: [
      {
        src: "assets/img/J1/Rome aeroport groupe.jpg",
        alt: "Groupe avant embarquement",
        caption: "Groupe avant l'embarquement",
      },
      {
        src: "assets/img/J1/easyjet avion.jpg",
        alt: "Avion EasyJet",
        caption: "Embarquement à Lyon Saint Exupéry",
      },
      {
        src: "assets/img/J1/Rome aeroport.jpg",
        alt: "Aéroport de Rome",
        caption: "Aéroport de Rome",
      },
      {
        src: "assets/img/J1/Rome Roumanie avion.jpg",
        alt: "Embarquement Rome",
        caption: "Embarquement à l'Aéroport de Rome",
      },
      {
        src: "assets/img/J1/hotel roumanie.jpg",
        alt: "Auberge Targu Neamt",
        caption: "Auberge de Targu Neamt",
      },
      {
        src: "assets/img/J1/Auberge arrivée.jpg",
        alt: "Arrivée auberge",
        caption: "Arrivée à l'auberge",
      },
      {
        src: "assets/img/J1/manger.jpg",
        alt: "Repas auberge",
        caption: "Repas à l'auberge",
      },
    ],
  },
  day1: {
    title: "Jour 1 - Découverte du lycée",
    description:
      "Visite du lycée roumain, rencontre avec les correspondants, et découverte de la maison de l'écrivain Ion Greangá",
    images: [
      { src: "assets/img/J1/lycee roumain.jpg", alt: "Entrée lycée", caption: "Découverte du lycée" },
      {
        src: "assets/img/J1/plaque.jpg",
        alt: "Photo classe",
        caption: "Photo de classe avec les correspondants",
      },
      {
        src: "assets/img/J1/photo de classe².jpg",
        alt: "Photo classe",
        caption: "Photo de classe avec les correspondants",
      },
      
      { src: "assets/img/J1/lycee profs.jpg", alt: "Accueil", caption: "Accueil par la proviseure" },
      { src: "assets/img/J1/classe groupes salle.jpg", alt: "Accueil", caption: "Accueil par la proviseure" },

      {
        src: "assets/img/J1/groupe classe maison.jpg",
        alt: "Maison écrivain",
        caption: "Maison de l'écrivain Ion GREANGÁ",
      },
      {
        src: "assets/img/J1/ecrivain.jpg",
        alt: "Maison écrivain",
        caption: "Maison de l'écrivain Ion GREANGÁ",
      },
      {
        src: "assets/img/J1/visite maison ecrivain.jpg",
        alt: "Maison écrivain",
        caption: "Maison de l'écrivain Ion GREANGÁ",
      },
      {
        src: "assets/img/J1/musee tradition.jpg",
        alt: "Musée",
        caption: "Musée sur la région et ses traditions",
      },
      {
        src: "assets/img/J1/musee traditionnel.jpg",
        alt: "Musée",
        caption: "Musée sur la région et ses traditions",
      },
    ],
  },
  day2: {
    title: "Jour 2 - Citadelle de Neamț",
    description: "Visite de la magnifique citadelle de Neamț, exploration de l'histoire et des traditions roumaines",
    images: [
      { src: "assets/img/J2/chateau ensemble2.jpg", alt: "Citadelle", caption: "Citadelle de Neamț" },

      {
        type: "video",
        src: "https://github.com/triscroumanie/site/blob/main/assets/video/vid%C3%A9o_1.mp4?raw=true",
        poster: "assets/img/vignette_video_j2.png",
        alt: "Vidéo citadelle",
        caption: "Arrivée à la \"NEAMŢ CITADEL\"",
      },
      {
        src: "assets/img/J2/chateau.jpg",
        alt: "Groupe",
        caption: "Groupe arrivant à la citadelle",
      },
      {
        src: "assets/img/J2/matheo.jpg",
        alt: "Histoire",
        caption: "Explications de l'histoire de la citadelle",
      },
      {
        src: "assets/img/J2/piece.jpg",
        alt: "Intérieur",
        caption: "Intérieur de la citadelle",
      },
      {
        src: "assets/img/J2/tenue.jpg",
        alt: "Traditions",
        caption: "Tenues traditionnelles",
      },
      { src: "assets/img/J2/livres.jpg", alt: "Livres", caption: "Livres à la citadelle" },
    ],
  },
  day3: {
    title: "Jour 3 - Entreprise ELECTRA & Iaşi",
    description: "Visite de l'entreprise ELECTRA et exploration de la capitale historique Iaşi",
    images: [
      { src: "https://via.placeholder.com/400x300?text=ELECTRA", alt: "Usine", caption: "Usine ELECTRA" },
      {
        src: "https://via.placeholder.com/400x300?text=Palais+culture",
        alt: "Palais",
        caption: "Palais de la culture de Iaşi",
      },
      {
        src: "https://via.placeholder.com/400x300?text=Monastère",
        alt: "Monastère",
        caption: "Monastère des Trois Saints",
      },
      {
        src: "https://via.placeholder.com/400x300?text=Cathédrale",
        alt: "Cathédrale",
        caption: "Cathédrale Métropolitaine",
      },
    ],
  },
  day4: {
    title: "Jour 4 - Ateliers & Réserve de bisons",
    description: "Atelier avec les correspondants, concours d'affiches et visite d'une réserve de bisons",
    images: [
      { src: "https://via.placeholder.com/400x300?text=Atelier", alt: "Atelier", caption: "Atelier créatif" },
      { src: "https://via.placeholder.com/400x300?text=Bisons", alt: "Bisons", caption: "Réserve de bisons" },
      { src: "https://via.placeholder.com/400x300?text=Nature", alt: "Nature", caption: "Faune des Carpates" },
      { src: "https://via.placeholder.com/400x300?text=Monastère", alt: "Monastère", caption: "Monastère de Neamț" },
    ],
  },
  day5: {
    title: "Jour 5 - Brașov",
    description: "Visite de la magnifique ville de Brașov, l'Église noire et découverte du charme médiéval",
    images: [
      { src: "https://via.placeholder.com/400x300?text=Place+Brașov", alt: "Place", caption: "Place de la ville" },
      {
        src: "https://via.placeholder.com/400x300?text=Église+noire",
        alt: "Église noire",
        caption: "L'Église noire de Brașov",
      },
      { src: "https://via.placeholder.com/400x300?text=Vieille+ville", alt: "Vieille ville", caption: "Vieille ville" },
      {
        src: "https://via.placeholder.com/400x300?text=Panorama",
        alt: "Panorama",
        caption: "Vue panoramique de Brașov",
      },
      { src: "https://via.placeholder.com/400x300?text=Groupe", alt: "Groupe", caption: "Photo de groupe" },
    ],
  },
}

let currentImageIndex = 0
let currentImages = []

function openDay(dayId) {
  const day = galleryData[dayId]
  document.getElementById("modalTitle").textContent = day.title
  document.getElementById("modalDescription").textContent = day.description

  const gallery = document.getElementById("galleryGrid")
  gallery.innerHTML = ""

  day.images.forEach((img, index) => {
    if (img.type === "video") {
      const wrapper = document.createElement("div")
      wrapper.className = "video-thumb-wrapper"

      const thumb = document.createElement("img")
      thumb.src = img.poster || "/placeholder.svg"
      thumb.alt = img.alt || "Vidéo"
      thumb.className = "gallery-image video-thumb"

      const play = document.createElement("span")
      play.className = "play-icon"

      wrapper.appendChild(thumb)
      wrapper.appendChild(play)
      wrapper.onclick = (e) => {
        e.stopPropagation()
        openLightbox(day.images, index)
      }
      gallery.appendChild(wrapper)
    } else {
      const thumb = document.createElement("img")
      thumb.src = img.src
      thumb.alt = img.alt
      thumb.className = "gallery-image"
      // apply optional rotation class on thumbnail
      if (img.rotate) {
        const rotClass = `rot-${img.rotate}`
        thumb.classList.add(rotClass)
      }
      thumb.onclick = (e) => {
        e.stopPropagation()
        openLightbox(day.images, index)
      }
      gallery.appendChild(thumb)
    }
  })

  document.getElementById("galleryModal").style.display = "block"
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none"
}

function openLightbox(images, index) {
  currentImages = images
  currentImageIndex = index
  document.getElementById("lightbox").style.display = "flex"
  document.getElementById("lightbox").style.justifyContent = "center"
  document.getElementById("lightbox").style.alignItems = "center"
  updateLightbox()
}

function closeLightbox() {
  const videoEl = document.getElementById("lightboxVideo")
  if (videoEl) {
    try { videoEl.pause() } catch (e) {}
    videoEl.src = ""
  }
  document.getElementById("lightbox").style.display = "none"
}

function updateLightbox() {
  const item = currentImages[currentImageIndex]
  const imgEl = document.getElementById("lightboxImage")
  const videoEl = document.getElementById("lightboxVideo")
  const captionEl = document.getElementById("lightboxCaption")
  if (item.type === "video") {
    if (imgEl) imgEl.style.display = "none"
    if (videoEl) {
      videoEl.style.display = "block"
      videoEl.src = item.src
      videoEl.alt = item.alt || ""
      try { videoEl.currentTime = 0 } catch (e) {}
      videoEl.play().catch(() => {})
    }
  } else {
    if (videoEl) {
      try { videoEl.pause() } catch (e) {}
      videoEl.src = ""
      videoEl.style.display = "none"
    }
    if (imgEl) {
      imgEl.style.display = "block"
      imgEl.src = item.src
      imgEl.alt = item.alt || ""
      // remove any rotation classes then apply if present
      imgEl.classList.remove("rot-90","rot-180","rot-270")
      if (item.rotate) {
        const rotClass = `rot-${item.rotate}`
        imgEl.classList.add(rotClass)
      }
    }
  }
  if (captionEl) captionEl.textContent = item.caption || ""
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentImages.length
  updateLightbox()
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length
  updateLightbox()
}

// Fermer les modals en cliquant dehors
window.onclick = (event) => {
  const modal = document.getElementById("galleryModal")
  const lightbox = document.getElementById("lightbox")
  if (event.target === modal) {
    closeGallery()
  }
  if (event.target === lightbox) {
    closeLightbox()
  }
}

// Navigation au clavier
document.addEventListener("keydown", (e) => {
  if (document.getElementById("lightbox").style.display === "flex") {
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
    if (e.key === "Escape") closeLightbox()
  }
})

// Expose functions to global scope for inline `onclick` handlers
try {
  window.openDay = openDay
  window.closeGallery = closeGallery
  window.openLightbox = openLightbox
  window.closeLightbox = closeLightbox
  window.nextImage = nextImage
  window.prevImage = prevImage
} catch (e) {}
