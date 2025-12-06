"use client"

import Link from "next/link"

interface DiaryEntry {
  id: number
  date: string
  title: string
  content: string
}

const diaryEntries: DiaryEntry[] = [
  {
  id: 1,
  date: "2025-10-20",
  title: "A Special Day of Love",
  content:
    "Today marks one of the most precious moments of my life. I finally gathered the courage to propose to her online using a heartfelt love-letter card I designed myself. Every word came straight from my heart. When she accepted, it felt like the entire world paused for a second. It was pure magic — a moment I will cherish forever.",
},
{
  id: 2,
  date: "2025-10-31",
  title: "The Day We Finally Met",
  content:
    "We met in person for the very first time today. I brought her a beautiful bouquet of flowers, and seeing her smile as I handed them to her made everything feel unreal. We talked for hours, feeling comfortable as if we had known each other forever. Later that same day, I had a football match — and she came to watch me play. Even though the match didn’t go as I hoped, having her there cheering for me made the day unforgettable.",
},
{
  id: 3,
  date: "2025-11-01",
  title: "Our First Kiss",
  content:
    "Today, our hearts crossed a new milestone. We shared our very first kiss — soft, warm, magical. It felt like touching the sky with closed eyes. Butterflies burst inside me, and the world around us disappeared for a moment. I will never forget how perfect that moment felt.",
},
{
  id: 4,
  date: "2025-11-20",
  title: "One Month of Us",
  content:
    "Today marks one month of our beautiful journey together. I didn’t have any gift to offer her, but I was there — fully present, soaking in every second with her. We talked, laughed, and simply enjoyed being together. And something funny happened — it was also Migma’s birthday, and she completely forgot about it! Moments like these make our story even sweeter.",
},

]

export default function DiaryPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/40 border-b border-rose-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              My Diary
            </h1>
            <p className="text-xs sm:text-sm text-rose-600/70">Personal Moments & Memories</p>
          </div>
          <Link
            href="/"
            className="text-sm text-rose-700 hover:text-rose-900 transition-colors px-4 py-2 rounded-lg hover:bg-rose-100/50 backdrop-blur-sm"
          >
            ← Gallery
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative pt-24 pb-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="mb-12 sm:mb-16 text-center animate-fade-in-slow">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4 sm:mb-6">
              My Personal Diary
            </h2>
            <p className="text-base sm:text-lg text-rose-700/70 max-w-2xl mx-auto leading-relaxed">
              A collection of cherished memories, thoughts, and moments captured through words
            </p>
          </div>

          {/* Diary Entries */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {diaryEntries.map((entry, index) => (
              <article
                key={entry.id}
                className="diary-card-float backdrop-blur-xl bg-white/60 rounded-3xl shadow-2xl border border-white/40 overflow-hidden hover:shadow-rose-200/50 transition-all duration-500 hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Date Header */}
                <div className="bg-gradient-to-r from-rose-400/20 via-pink-400/20 to-orange-400/20 px-4 sm:px-6 md:px-8 py-3 sm:py-4 backdrop-blur-sm">
                  <time className="text-xs sm:text-sm font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent uppercase tracking-wider flex items-center gap-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {formatDate(entry.date)}
                  </time>
                </div>

                <div className="p-6 sm:p-8 md:p-10">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-700 via-pink-700 to-orange-600 bg-clip-text text-transparent mb-4 sm:mb-6 flex items-center gap-3">
                    <span className="text-3xl">✨</span>
                    {entry.title}
                  </h3>

                  {/* Content */}
                  <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 via-pink-400 to-orange-400 rounded-full" />
                    <p className="text-base sm:text-lg md:text-xl text-rose-900/80 leading-relaxed pl-4 font-light italic">
                      "{entry.content}"
                    </p>
                  </div>

                  {/* Decorative heart */}
                  <div className="mt-6 flex justify-end">
                    <span className="text-2xl sm:text-3xl animate-pulse-slow">💝</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Floating hearts decoration */}
      <div className="fixed bottom-10 right-10 text-4xl animate-float-slow opacity-30 pointer-events-none hidden sm:block">
        💕
      </div>
      <div className="fixed top-32 right-20 text-3xl animate-float-slower opacity-20 pointer-events-none hidden md:block">
        🌸
      </div>
      <div className="fixed bottom-32 left-20 text-3xl animate-float-slow opacity-25 pointer-events-none hidden lg:block">
        ✨
      </div>
    </main>
  )
}
