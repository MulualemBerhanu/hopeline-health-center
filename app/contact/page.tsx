import { ContactForm } from "@/components/ContactForm"

export default function Contact() {
  return (
    <div className="py-28 md:py-36 bg-gradient-to-b from-hopeline-cream via-white to-hopeline-cream/40 min-h-screen relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 animate-fade-in-up">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-hopeline-gold/30 via-hopeline-sky/25 to-hopeline-gold/30 text-hopeline-teal font-extrabold rounded-full text-sm mb-8 border-2 border-hopeline-teal/20 shadow-medium backdrop-blur-sm">
            Get in Touch
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-hopeline-teal mb-8 leading-tight tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-semibold">
            We&apos;re here to help. Reach out to schedule an appointment or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-gradient-to-br from-white via-hopeline-cream/40 to-white rounded-3xl shadow-glow-lg p-10 border-2 border-gray-100 hover:border-hopeline-teal/50 hover:shadow-glow transition-all duration-700 hover-lift-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-teal/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-hopeline-sky/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-hopeline-teal via-hopeline-teal/90 to-hopeline-teal/80 rounded-3xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-glow group-hover:shadow-glow-lg border border-hopeline-teal/30">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4 tracking-tight">Phone</h3>
              <a href="tel:5551234567" className="text-gray-800 hover:text-hopeline-teal font-extrabold text-xl transition-all group/link">
                <span className="group-hover/link:underline decoration-2">(555) 123-4567</span>
              </a>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-white via-hopeline-cream/40 to-white rounded-3xl shadow-glow-lg p-10 border-2 border-gray-100 hover:border-hopeline-sky/50 hover:shadow-glow transition-all duration-700 hover-lift-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-sky/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-hopeline-teal/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-hopeline-sky via-hopeline-sky/90 to-hopeline-sky/80 rounded-3xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-glow group-hover:shadow-glow-lg border border-hopeline-sky/30">
                <svg className="w-12 h-12 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4 tracking-tight">Email</h3>
              <a href="mailto:info@hopelinehealth.com" className="text-gray-800 hover:text-hopeline-teal font-extrabold text-xl transition-all group/link">
                <span className="group-hover/link:underline decoration-2">info@hopelinehealth.com</span>
              </a>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-white via-hopeline-cream/40 to-white rounded-3xl shadow-glow-lg p-10 border-2 border-gray-100 hover:border-hopeline-gold/50 hover:shadow-glow transition-all duration-700 hover-lift-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-gold/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-hopeline-teal/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-hopeline-gold via-hopeline-gold/90 to-hopeline-gold/80 rounded-3xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-glow group-hover:shadow-glow-lg border border-hopeline-gold/30">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4 tracking-tight">Hours</h3>
              <p className="text-gray-800 font-extrabold text-lg">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600 font-bold text-base mt-2">Sat: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl shadow-glow-lg p-12 md:p-20 border-2 border-gray-100/60 animate-scale-in backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-hopeline-sky/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-hopeline-gold/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

