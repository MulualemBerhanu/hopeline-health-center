'use client'

import { useState, useEffect } from 'react'

const features = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 Crisis Support",
    subtitle: "Always available",
    gradient: "from-hopeline-teal to-hopeline-teal/80"
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5 text-hopeline-teal">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Flexible Scheduling",
    subtitle: "Book anytime",
    gradient: "from-hopeline-sky to-hopeline-sky/80"
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Personalized Treatment",
    subtitle: "Tailored care",
    gradient: "from-hopeline-gold to-hopeline-gold/80"
  }
]

export function MobileFeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const currentFeature = features[currentIndex]

  return (
    <div className="relative w-full mb-5 flex justify-center">
      {/* Main Card with Slide-Up Transition - Narrower Width */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-white/50 overflow-hidden w-full max-w-[55%]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ease-out ${
              index === currentIndex
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 absolute inset-0 translate-y-4 scale-95'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center shadow-md transition-all duration-500 flex-shrink-0`}>
                {feature.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-800 text-xs mb-0.5 leading-tight">{feature.title}</p>
                <p className="text-[10px] text-gray-600 font-medium leading-tight">{feature.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicator Dots - Smaller */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-6 h-1.5 bg-hopeline-teal'
                : 'w-1.5 h-1.5 bg-gray-300 hover:bg-hopeline-teal/50'
            }`}
            aria-label={`Go to feature ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

