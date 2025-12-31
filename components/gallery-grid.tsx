"use client"

import Image from "next/image"
import type { GalleryImage } from "@/data/gallery"

interface GalleryGridProps {
  images: GalleryImage[]
  onImageClick: (index: number) => void
}

export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => onImageClick(index)}
          className="group cursor-pointer relative overflow-hidden rounded-xl aspect-square bg-secondary"
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-start p-4">
            {image.caption && (
              <p className="text-white text-sm font-semibold translate-y-8 group-hover:translate-y-0 transition-transform duration-300 line-clamp-2">
                {image.caption}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
