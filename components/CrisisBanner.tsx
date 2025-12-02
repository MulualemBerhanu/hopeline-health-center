export function CrisisBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 text-center text-sm font-medium relative overflow-hidden">
      {/* Animated background pulse */}
      <div className="absolute inset-0 bg-red-500 opacity-20 animate-pulse-slow"></div>
      
      <div className="relative max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
        <span className="text-xs text-white/90 font-medium">HopeLine Health Center is not an emergency service</span>
        <span className="hidden sm:inline text-white/50">|</span>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="font-bold uppercase tracking-wide">Crisis Support:</span>
        </div>
        <a 
          href="tel:988" 
          className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg font-bold transition-all duration-200 hover:scale-105"
        >
          National Suicide Prevention Lifeline: 988
        </a>
        <span className="text-white/80">or</span>
        <a 
          href="tel:911" 
          className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg font-bold transition-all duration-200 hover:scale-105"
        >
          Call 911
        </a>
      </div>
    </div>
  )
}

