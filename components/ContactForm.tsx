'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function ContactForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => {
          setStatus('idle')
        }, 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative group">
        <label htmlFor="name" className="block text-sm font-extrabold text-gray-700 mb-2.5">
          Name <span className="text-hopeline-teal">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-hopeline-teal/50 focus:border-hopeline-teal transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 font-medium shadow-sm hover:border-hopeline-sky/40"
            placeholder="Your full name"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-hopeline-teal/0 via-hopeline-teal/0 to-hopeline-teal/0 group-hover:from-hopeline-teal/5 group-hover:via-hopeline-sky/5 group-hover:to-hopeline-teal/5 transition-all duration-300 pointer-events-none"></div>
        </div>
      </div>

      <div className="relative group">
        <label htmlFor="email" className="block text-sm font-extrabold text-gray-700 mb-2.5">
          Email <span className="text-hopeline-teal">*</span>
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-hopeline-teal/50 focus:border-hopeline-teal transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 font-medium shadow-sm hover:border-hopeline-sky/40"
            placeholder="your.email@example.com"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-hopeline-teal/0 via-hopeline-teal/0 to-hopeline-teal/0 group-hover:from-hopeline-teal/5 group-hover:via-hopeline-sky/5 group-hover:to-hopeline-teal/5 transition-all duration-300 pointer-events-none"></div>
        </div>
      </div>

      <div className="relative group">
        <label htmlFor="message" className="block text-sm font-extrabold text-gray-700 mb-2.5">
          Message <span className="text-hopeline-teal">*</span>
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-hopeline-teal/50 focus:border-hopeline-teal transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 resize-none font-medium shadow-sm hover:border-hopeline-sky/40"
            placeholder="Tell us how we can help you..."
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-hopeline-teal/0 via-hopeline-teal/0 to-hopeline-teal/0 group-hover:from-hopeline-teal/5 group-hover:via-hopeline-sky/5 group-hover:to-hopeline-teal/5 transition-all duration-300 pointer-events-none"></div>
        </div>
      </div>

      {status === 'success' && (
        <div className="bg-gradient-to-r from-green-50 to-green-50/80 border-2 border-green-300 text-green-800 px-6 py-4 rounded-2xl flex items-center gap-3 animate-fade-in shadow-medium">
          <div className="flex-shrink-0 bg-green-500 rounded-full p-1">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-extrabold text-sm">Thank you for your message! We&apos;ll get back to you soon.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-gradient-to-r from-red-50 to-red-50/80 border-2 border-red-300 text-red-800 px-6 py-4 rounded-2xl flex items-center gap-3 animate-fade-in shadow-medium">
          <div className="flex-shrink-0 bg-red-500 rounded-full p-1">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="font-extrabold text-sm">Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-hopeline-teal via-hopeline-teal/95 to-hopeline-teal text-white px-8 py-4 rounded-2xl font-extrabold text-lg hover:from-hopeline-teal/95 hover:via-hopeline-teal/90 hover:to-hopeline-teal/90 hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center justify-center gap-3 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="relative z-10">Sending...</span>
          </>
        ) : (
          <>
            <span className="relative z-10">Send Message</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}

