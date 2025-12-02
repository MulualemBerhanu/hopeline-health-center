interface FeatureBadgeProps {
  icon: React.ReactNode
  text: string
}

export function FeatureBadge({ icon, text }: FeatureBadgeProps) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-white bg-opacity-95 rounded-lg sm:rounded-xl px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-5 md:py-4 shadow-md sm:shadow-lg backdrop-blur-sm border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="text-hopeline-teal text-sm sm:text-base md:text-xl flex-shrink-0">{icon}</div>
      <span className="font-semibold sm:font-bold text-gray-800 text-[10px] sm:text-xs md:text-base leading-tight">{text}</span>
    </div>
  )
}

