"use client"
import Image from "next/image"
import { X } from "lucide-react"
import type { GalleryImage } from "@/data/gallery"

interface GalleryLightboxProps {
  images: GalleryImage[]
  selectedIndex: number | null
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

export function GalleryLightbox({ images, selectedIndex, onClose, onPrevious, onNext }: GalleryLightboxProps) {
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null

  if (!selectedImage) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 hover:bg-secondary rounded-full transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full max-w-4xl aspect-auto">
          <Image
            src={selectedImage.src || "/placeholder.svg"}
            alt={selectedImage.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {selectedImage.caption && (
        <div className="absolute bottom-6 left-6 right-6 bg-secondary/90 backdrop-blur-sm rounded-lg p-4 max-w-md">
          <p className="text-foreground text-sm font-medium">{selectedImage.caption}</p>
        </div>
      )}

      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-secondary rounded-full transition-colors"
      >
        ← Précédent
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-secondary rounded-full transition-colors"
      >
        Suivant →
      </button>
    </div>
  )
}
