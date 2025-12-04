"use client"

import Image from "next/image"
import { useState } from "react"

interface GalleryImage {
  id: number
  src: string
  title: string
  size: "small" | "medium" | "large"
}

interface GalleryBoardProps {
  board: {
    id: string
    title: string
    images: GalleryImage[]
  }
  index: number
}

export function GalleryBoard({ board, index }: GalleryBoardProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Determine grid layout based on board index for variety
  const getGridClass = () => {
    const layouts = [
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      "grid-cols-1 md:grid-cols-3 lg:grid-cols-4",
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    ]
    return layouts[index % layouts.length]
  }

  return (
    <div className="relative">
      {/* Board title */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">{board.title}</h3>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-secondary to-accent mt-3 sm:mt-4 rounded-full" />
      </div>

      {/* Floating 3D board */}
      <div className="relative shadow-3d hover:shadow-3d-hover transition-shadow duration-500 rounded-2xl sm:rounded-3xl bg-card overflow-hidden border border-border/50">
        {/* Grid layout with mixed sizes */}
        <div className={`grid ${getGridClass()} gap-0.5 sm:gap-1 p-0.5 sm:p-1`}>
          {board.images.map((image) => {
            const isHovered = hoveredId === image.id

            // Dynamic sizing based on image.size
            const sizeClasses = {
              small: "md:col-span-1 md:row-span-1",
              medium: "md:col-span-1 md:row-span-1",
              large: "md:col-span-2 md:row-span-2",
            }

            return (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-muted group cursor-pointer ${sizeClasses[image.size]}`}
                style={{
                  aspectRatio: image.size === "large" ? "16/10" : "4/3",
                }}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
                onTouchStart={() => setHoveredId(image.id)}
                onTouchEnd={() => setTimeout(() => setHoveredId(null), 2000)}
              >
                {/* Image with parallax hover effect */}
                <div
                  className={`relative w-full h-full transition-transform duration-700 ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Overlay with title on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-3 sm:p-4 md:p-6 transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h4 className="text-white text-base sm:text-xl md:text-2xl font-bold text-balance">{image.title}</h4>
                </div>

                {/* Subtle border glow on hover */}
                <div
                  className={`absolute inset-0 border-2 border-secondary/0 rounded-2xl transition-colors duration-500 ${
                    isHovered ? "border-secondary/50" : ""
                  }`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
