import { ContactForm } from "@/components/ContactForm"

export default function Contact() {
  return (
    <div className="py-24 md:py-32 bg-gradient-to-b from-hopeline-cream via-white to-hopeline-cream/30 min-h-screen relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-hopeline-gold/25 to-hopeline-sky/25 text-hopeline-teal font-bold rounded-full text-sm mb-6 border border-hopeline-teal/20 shadow-soft">
            Get in Touch
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-hopeline-teal mb-8 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            We&apos;re here to help. Reach out to schedule an appointment or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl shadow-large p-10 border-2 border-gray-100 hover:border-hopeline-teal/40 hover:shadow-colored transition-all duration-500 hover-lift relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-hopeline-teal/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-hopeline-teal to-hopeline-teal/80 rounded-2xl p-5 w-fit mb-8 group-hover:scale-110 transition-transform duration-500 shadow-colored">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4">Phone</h3>
              <a href="tel:5551234567" className="text-gray-800 hover:text-hopeline-teal font-bold text-xl transition-colors group/link">
                <span className="group-hover/link:underline">(555) 123-4567</span>
              </a>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl shadow-large p-10 border-2 border-gray-100 hover:border-hopeline-sky/40 hover:shadow-colored transition-all duration-500 hover-lift relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-hopeline-sky/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-hopeline-sky to-hopeline-sky/80 rounded-2xl p-5 w-fit mb-8 group-hover:scale-110 transition-transform duration-500 shadow-medium">
                <svg className="w-10 h-10 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4">Email</h3>
              <a href="mailto:info@hopelinehealth.com" className="text-gray-800 hover:text-hopeline-teal font-bold text-xl transition-colors group/link">
                <span className="group-hover/link:underline">info@hopelinehealth.com</span>
              </a>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl shadow-large p-10 border-2 border-gray-100 hover:border-hopeline-gold/40 hover:shadow-colored transition-all duration-500 hover-lift relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-hopeline-gold/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-hopeline-gold to-hopeline-gold/80 rounded-2xl p-5 w-fit mb-8 group-hover:scale-110 transition-transform duration-500 shadow-medium">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4">Hours</h3>
              <p className="text-gray-800 font-bold text-lg">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600 font-semibold text-base mt-2">Sat: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white via-hopeline-cream/20 to-white rounded-3xl shadow-2xl p-12 md:p-20 border-2 border-gray-100/50 animate-scale-in backdrop-blur-sm">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

