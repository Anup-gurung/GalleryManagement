"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"

export function ValentineProposal() {
  const [isOpen, setIsOpen] = useState(true)
  const [accepted, setAccepted] = useState(false)
  const [yesScale, setYesScale] = useState(1)
  const [noClickCount, setNoClickCount] = useState(0)
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([])

  // Generate floating hearts
  useEffect(() => {
    if (accepted) {
      const interval = setInterval(() => {
        setHearts((prev) => [
          ...prev.slice(-20),
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100,
          },
        ])
      }, 300)
      return () => clearInterval(interval)
    }
  }, [accepted])

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1)
    setYesScale((prev) => Math.min(prev + 0.3, 4))
  }

  const handleYesClick = () => {
    setAccepted(true)
  }

  const closeProposal = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto"
      >
        {/* Floating Hearts Background */}
        {accepted &&
          hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ opacity: 0, scale: 0, x: `${heart.x}vw`, y: "100vh" }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0.5], y: "-20vh" }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="fixed pointer-events-none"
            >
              <Heart className="w-5 h-5 sm:w-8 sm:h-8 text-pink-500 fill-pink-500" />
            </motion.div>
          ))}

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="relative w-full max-w-[360px] sm:max-w-lg my-auto"
        >
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 dark:from-pink-950 dark:via-red-950 dark:to-pink-900 p-5 sm:p-8 md:p-12 shadow-2xl border border-pink-200 dark:border-pink-800">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -left-10 w-28 h-28 sm:w-40 sm:h-40 bg-pink-300/30 dark:bg-pink-600/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-28 h-28 sm:w-40 sm:h-40 bg-red-300/30 dark:bg-red-600/20 rounded-full blur-3xl" />
            </div>

            {!accepted ? (
              /* Proposal View */
              <motion.div
                initial={{ opacity: 1 }}
                className="relative z-10 text-center space-y-5 sm:space-y-8"
              >
                {/* Animated Heart */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    <Heart className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-red-500 fill-red-500 drop-shadow-lg" />
                    <Sparkles className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 text-yellow-400" />
                    <Sparkles className="absolute -bottom-0.5 -left-1 sm:-bottom-1 sm:-left-2 w-3 h-3 sm:w-5 sm:h-5 text-yellow-400" />
                  </div>
                </motion.div>

                {/* Question */}
                <div className="space-y-2 sm:space-y-3">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 via-red-500 to-pink-600 bg-clip-text text-transparent px-2"
                  >
                    Will You Be My Valentine?
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-pink-700 dark:text-pink-300 text-xs sm:text-sm md:text-base px-2"
                  >
                    💕 I have a very important question for you... 💕
                  </motion.p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <motion.button
                    onClick={handleYesClick}
                    animate={{ scale: yesScale }}
                    whileHover={{ scale: yesScale * 1.05 }}
                    whileTap={{ scale: yesScale * 0.95 }}
                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold rounded-full shadow-lg shadow-pink-500/30 transition-all duration-300 text-base sm:text-lg"
                  >
                    Yes! 💖
                  </motion.button>

                  {yesScale < 4 && (
                    <motion.button
                      onClick={handleNoClick}
                      animate={{
                        scale: Math.max(0.5, 1 - noClickCount * 0.1),
                        opacity: Math.max(0.3, 1 - noClickCount * 0.15),
                      }}
                      className="px-5 py-1.5 sm:px-6 sm:py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all text-xs sm:text-sm"
                    >
                      {noClickCount === 0
                        ? "No 😢"
                        : noClickCount === 1
                        ? "Are you sure? 🥺"
                        : noClickCount === 2
                        ? "Please? 😭"
                        : noClickCount === 3
                        ? "Pretty please? 💔"
                        : "Just say yes! 😿"}
                    </motion.button>
                  )}
                </div>

                {noClickCount > 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-pink-500 dark:text-pink-400 mt-2"
                  >
                    {noClickCount === 1 && "The yes button is getting bigger... 👀"}
                    {noClickCount === 2 && "It's still growing! Just say yes! 💕"}
                    {noClickCount === 3 && "You can't escape my love! 💝"}
                    {noClickCount >= 4 && "Resistance is futile! 💘"}
                  </motion.p>
                )}
              </motion.div>
            ) : (
              /* Accepted View */
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="relative z-10 text-center space-y-4 sm:space-y-6"
              >
                {/* Celebration Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    <Heart className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 text-red-500 fill-red-500 drop-shadow-2xl" />
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Heart className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 text-red-400" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Love Note */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3 sm:space-y-4"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
                    You Said Yes! 🎉
                  </h2>

                  <div className="bg-white/50 dark:bg-black/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 backdrop-blur-sm border border-pink-200 dark:border-pink-800">
                    <p className="text-pink-800 dark:text-pink-200 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                      My Dearest Valentine,
                    </p>
                    <p className="text-pink-700 dark:text-pink-300 text-xs sm:text-sm md:text-base leading-relaxed">
                      From this moment on, you are not just my Valentine for today, but for every single day that follows. You are the best thing that has ever happened to me, and I promise to cherish you, love you, and make you smile every chance I get.
                    </p>
                    <p className="text-pink-700 dark:text-pink-300 text-xs sm:text-sm md:text-base leading-relaxed">
                      You will always be my forever Valentine – today, tomorrow, and for all the tomorrows to come. 💕
                    </p>
                    <p className="text-pink-800 dark:text-pink-200 text-sm sm:text-base md:text-lg font-medium pt-1 sm:pt-2">
                      With all my love, forever yours 💖
                    </p>
                  </div>
                </motion.div>

                {/* Continue Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  onClick={closeProposal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold rounded-full shadow-lg shadow-pink-500/30 transition-all duration-300 text-sm sm:text-base"
                >
                  Continue to Our Memories 💝
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
