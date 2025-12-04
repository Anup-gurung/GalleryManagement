"use client"

export function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center relative px-4 sm:px-6 pt-16 sm:pt-20">
      <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-slow">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-foreground leading-tight text-balance px-2">Life in Frames</h2>
        <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty px-4">
          A curated collection of moments that define my journey through photography and visual storytelling
        </p>

        {/* Scroll indicator */}
        <div className="pt-8 sm:pt-12 animate-bounce">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Scroll to explore</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
