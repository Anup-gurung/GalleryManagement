"use client"

import Image from "next/image"
import third from "@/public/image/l1.jpeg"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto w-full space-y-6 sm:space-y-8 md:space-y-10">
        {/* 3rd Monthsary Special Box */}
        <div className="max-w-3xl mx-auto animate-fade-in-slow px-2 sm:px-4">
          <div className="relative group">
            {/* Decorative hearts */}
            <div className="absolute -top-3 -left-2 sm:-top-4 sm:-left-4 text-2xl sm:text-4xl animate-pulse">💕</div>
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 text-2xl sm:text-4xl animate-pulse delay-150">💕</div>
            
            <div className="relative bg-gradient-to-br from-rose-50/80 via-pink-50/80 to-red-50/80 dark:from-rose-950/20 dark:via-pink-950/20 dark:to-red-950/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-rose-200/50 dark:border-rose-800/50 p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,182,193,0.1),rgba(255,255,255,0))]" />
              
              <div className="relative z-10 space-y-4 sm:space-y-6">
                {/* Header with special badge */}
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-300 dark:via-rose-700 to-transparent" />
                  <div className="bg-rose-100 dark:bg-rose-900/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-rose-600 dark:text-rose-300 flex items-center gap-1 sm:gap-2">
                      <span className="text-base sm:text-xl">💝</span>
                      <span className="whitespace-nowrap">Our 3rd Monthsary</span>
                      <span className="text-base sm:text-xl">💝</span>
                    </p>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-300 dark:via-rose-700 to-transparent" />
                </div>

                {/* Image and Note Container */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {/* Image Section */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 shadow-lg group-hover:shadow-xl transition-shadow">
                      <Image
                        src={third}
                        alt="Our special moment"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-center text-rose-600/80 dark:text-rose-400/80 font-medium italic">
                      Three months of love ❤️
                    </p>
                  </div>

                  {/* Note Section */}
                  <div className="flex flex-col justify-center space-y-3 sm:space-y-4">
                    <div className="relative bg-white/60 dark:bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-inner border border-rose-200/50 dark:border-rose-800/30">
                      {/* Decorative quote marks */}
                      <div className="absolute top-1 left-1 sm:top-2 sm:left-2 text-2xl sm:text-3xl text-rose-300/50 dark:text-rose-700/50 font-serif">"</div>
                      <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 text-2xl sm:text-3xl text-rose-300/50 dark:text-rose-700/50 font-serif">"</div>
                      
                      <div className="relative space-y-2 sm:space-y-3 text-center px-3 sm:px-4">
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-rose-700 dark:text-rose-300 leading-relaxed">
                          To My Dearest Love
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                          Three months of beautiful memories, endless laughter, and growing love. Every moment with you feels like a dream come true. Here's to many more months, years, and a lifetime together.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg font-medium text-rose-600 dark:text-rose-400 pt-1 sm:pt-2">
                          Forever yours,<br />
                          <span className="text-lg sm:text-xl">💕</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className="flex items-center justify-center gap-2 pt-1 sm:pt-2">
                  <span className="text-base sm:text-xl">✨</span>
                  <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-rose-300 dark:via-rose-700 to-transparent" />
                  <span className="text-rose-600 dark:text-rose-400 text-xs sm:text-sm font-medium whitespace-nowrap">3 Months & Forever</span>
                  <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-rose-300 dark:via-rose-700 to-transparent" />
                  <span className="text-base sm:text-xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-4 sm:pt-6 md:pt-8 animate-bounce text-center">
          <div className="inline-flex flex-col items-center gap-1 sm:gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Scroll to explore</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
