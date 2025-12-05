'use client'

import { useState, useEffect } from 'react'

export function BusinessHoursCard() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null)
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    const checkBusinessHours = () => {
      // Get current time in PST/PDT (America/Los_Angeles)
      const now = new Date()
      
      // Format current time for display
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      setCurrentTime(timeString)

      // Get PST/PDT time components
      const pstFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        weekday: 'short',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      
      const parts = pstFormatter.formatToParts(now)
      const weekday = parts.find(p => p.type === 'weekday')?.value || 'Sun'
      const hours = parseInt(parts.find(p => p.type === 'hour')?.value || '0')
      const minutes = parseInt(parts.find(p => p.type === 'minute')?.value || '0')
      
      // Map weekday to JavaScript day (0 = Sunday, 6 = Saturday)
      const weekdayMap: Record<string, number> = {
        'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6
      }
      const jsDay = weekdayMap[weekday] ?? 0
      const timeInMinutes = hours * 60 + minutes

      // Business hours:
      // Monday-Friday: 9:00 AM - 6:00 PM (9:00 = 540 minutes, 18:00 = 1080 minutes)
      // Saturday: 10:00 AM - 2:00 PM (10:00 = 600 minutes, 14:00 = 840 minutes)
      // Sunday: Closed

      let open = false

      if (jsDay === 0) {
        // Sunday - Closed
        open = false
      } else if (jsDay === 6) {
        // Saturday - 10:00 AM - 2:00 PM (600 to 839 minutes)
        open = timeInMinutes >= 600 && timeInMinutes < 840
      } else {
        // Monday-Friday - 9:00 AM - 6:00 PM (540 to 1079 minutes)
        open = timeInMinutes >= 540 && timeInMinutes < 1080
      }

      setIsOpen(open)
    }

    // Check immediately
    checkBusinessHours()

    // Update every minute
    const interval = setInterval(checkBusinessHours, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-white via-hopeline-cream to-white rounded-3xl p-10 shadow-large border-2 border-gray-100 hover:shadow-colored transition-all duration-300 relative overflow-hidden group">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-hopeline-sky/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-hopeline-gold/10 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
      
      <div className="relative z-10">
        {/* Header with Status Badge */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-hopeline-teal to-hopeline-teal/80 rounded-2xl p-4 shadow-colored group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-hopeline-teal mb-2">Business Hours</h3>
              <p className="text-sm text-gray-500">Pacific Standard Time</p>
            </div>
          </div>
          
          {/* Real-time Status Badge */}
          <div className="flex flex-col items-end gap-2">
            {isOpen !== null && (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm shadow-soft ${
                isOpen 
                  ? 'bg-green-100 text-green-700 border-2 border-green-200' 
                  : 'bg-red-100 text-red-700 border-2 border-red-200'
              }`}>
                <div className={`w-2.5 h-2.5 rounded-full ${
                  isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                }`}></div>
                <span>{isOpen ? 'Open Now' : 'Closed'}</span>
              </div>
            )}
            {currentTime && (
              <p className="text-xs text-gray-500 font-medium">Current: {currentTime} PST</p>
            )}
          </div>
        </div>

        {/* Hours List */}
        <div className="space-y-3 mb-8">
          <div className="flex justify-between items-center py-4 px-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 hover:bg-white/80 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-hopeline-sky/20 rounded-lg flex items-center justify-center">
                <span className="text-hopeline-teal font-bold text-sm">M-F</span>
              </div>
              <span className="font-semibold text-gray-800 text-lg">Monday - Friday</span>
            </div>
            <span className="text-hopeline-teal font-bold text-lg">9:00 AM - 6:00 PM</span>
          </div>
          
          <div className="flex justify-between items-center py-4 px-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 hover:bg-white/80 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-hopeline-sky/20 rounded-lg flex items-center justify-center">
                <span className="text-hopeline-teal font-bold text-sm">SAT</span>
              </div>
              <span className="font-semibold text-gray-800 text-lg">Saturday</span>
            </div>
            <span className="text-hopeline-teal font-bold text-lg">10:00 AM - 2:00 PM</span>
          </div>
          
          <div className="flex justify-between items-center py-4 px-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-bold text-sm">SUN</span>
              </div>
              <span className="font-semibold text-gray-600 text-lg">Sunday</span>
            </div>
            <span className="text-gray-500 font-semibold text-lg">Closed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

