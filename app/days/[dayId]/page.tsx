"use client"

import { useState, useMemo } from "react"
import { DayHeader } from "@/components/day-header"
import { GalleryGrid } from "@/components/gallery-grid"
import { GalleryLightbox } from "@/components/gallery-lightbox"
import { galleryData } from "@/data/gallery"
import Link from "next/link"

export default function DayPage({ params }: { params: { dayId: string } }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const dayContent = useMemo(() => galleryData[params.dayId as keyof typeof galleryData], [params.dayId])

  if (!dayContent) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-3xl font-bold text-foreground">Page not found</h1>
        <Link href="/" className="text-accent hover:underline">
          Back to home
        </Link>
      </div>
    )
  }

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? dayContent.images.length - 1 : (prev ?? 0) - 1))
  }

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === dayContent.images.length - 1 ? 0 : (prev ?? -1) + 1))
  }

  return (
    <>
      <GalleryLightbox
        images={dayContent.images}
        selectedIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      <div className="min-h-screen">
        <DayHeader title={dayContent.title} description={dayContent.description} />

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <GalleryGrid images={dayContent.images} onImageClick={setSelectedImageIndex} />
          </div>
        </section>
      </div>
    </>
  )
}
