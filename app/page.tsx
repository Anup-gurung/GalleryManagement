"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { GalleryBoard } from "@/components/gallery-board"
import { HeroSection } from "@/components/hero-section"

const galleryBoards = [
  {
    id: "travel",
    title: "Travel Adventures",
    images: [
      {
        id: 1,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.06.jpeg",
        title: "Beautiful Moment",
        size: "large",
      },
      {
        id: 2,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.07 (1).jpeg",
        title: "Captured Memory",
        size: "medium",
      },
      {
        id: 3,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.07.jpeg",
        title: "Life Snapshot",
        size: "medium",
      },
      {
        id: 4,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.09 (1).jpeg",
        title: "Special Time",
        size: "small",
      },
      {
        id: 5,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.09.jpeg",
        title: "Sweet Memory",
        size: "small",
      },
    ],
  },
  {
    id: "urban",
    title: "Urban Life",
    images: [
      {
        id: 6,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.10 (1).jpeg",
        title: "City Vibes",
        size: "large",
      },
      {
        id: 7,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.10 (2).jpeg",
        title: "Urban Story",
        size: "medium",
      },
      {
        id: 8,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.10.jpeg",
        title: "Street Life",
        size: "medium",
      },
      {
        id: 9,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.11 (1).jpeg",
        title: "Daily Moments",
        size: "small",
      },
    ],
  },
  {
    id: "moments",
    title: "Captured Moments",
    images: [
      {
        id: 10,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.11 (2).jpeg",
        title: "Precious Time",
        size: "large",
      },
      {
        id: 11,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.11.jpeg",
        title: "Treasured Memory",
        size: "medium",
      },
      {
        id: 12,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.12 (1).jpeg",
        title: "Life's Beauty",
        size: "medium",
      },
      {
        id: 13,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.12 (2).jpeg",
        title: "Golden Hour",
        size: "small",
      },
      {
        id: 14,
        src: "/image/WhatsApp Image 2025-12-05 at 00.50.12.jpeg",
        title: "Forever Frame",
        size: "small",
      },
    ],
  },
]

export default function GalleryPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
            entry.target.classList.remove("opacity-0")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const elements = document.querySelectorAll(".observe-animation")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <main className="relative min-h-screen bg-background">
      {/* Simple Header with name and tagline */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Tshering's Gallerys</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">My Life Gallery</p>
          </div>
          <nav className="flex items-center gap-6 lg:gap-8">
            <Link
              href="/diary"
              className="text-sm text-foreground hover:text-secondary transition-colors px-4 py-2 rounded-lg bg-secondary/10 hover:bg-secondary/20"
            >
              My Diary
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Gallery Boards */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 space-y-16 sm:space-y-24 md:space-y-32">
        {galleryBoards.map((board, index) => (
          <div key={board.id} id={board.id} className="observe-animation opacity-0">
            <GalleryBoard board={board} index={index} />
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 text-center border-t border-border/50">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <p className="text-sm text-muted-foreground text-balance px-4">
            Capturing life's beautiful moments, one frame at a time.
          </p>
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            <a href="#" className="text-sm text-foreground hover:text-secondary transition-colors touch-manipulation">
              Instagram
            </a>
            <a href="#" className="text-sm text-foreground hover:text-secondary transition-colors touch-manipulation">
              Contact
            </a>
            <a href="#" className="text-sm text-foreground hover:text-secondary transition-colors touch-manipulation">
              About
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 All rights reserved</p>
        </div>
      </footer>
    </main>
  )
}
