import { ContactForm } from "@/components/ContactForm"

export default function Contact() {
  return (
    <div className="py-20 md:py-32 bg-gradient-to-b from-hopeline-cream via-white to-hopeline-cream/40 min-h-screen relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-hopeline-teal rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-hopeline-sky rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hopeline-gold/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-hopeline-gold/30 via-hopeline-sky/25 to-hopeline-gold/30 text-hopeline-teal font-extrabold rounded-full text-sm mb-6 border-2 border-hopeline-teal/20 shadow-medium backdrop-blur-sm">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-hopeline-teal mb-6 leading-tight tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold">
            We&apos;re here to help. Reach out to schedule an appointment or ask any questions.
          </p>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="group relative bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl p-8 border-2 border-gray-100/80 hover:border-hopeline-teal/40 shadow-glow-lg hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-hopeline-teal/5 via-transparent to-hopeline-sky/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-hopeline-teal to-hopeline-teal/90 rounded-2xl p-4 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-extrabold text-hopeline-teal mb-3 tracking-tight">Phone</h3>
                  <a href="tel:+15038823008" className="block text-gray-800 hover:text-hopeline-teal transition-colors group/link">
                    <span className="font-extrabold text-xl md:text-2xl whitespace-nowrap group-hover/link:underline decoration-2 decoration-hopeline-teal">
                      +1 (503) 882-3008
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl p-8 border-2 border-gray-100/80 hover:border-hopeline-sky/40 shadow-glow-lg hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-hopeline-sky/5 via-transparent to-hopeline-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-hopeline-sky to-hopeline-sky/90 rounded-2xl p-4 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-8 h-8 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-extrabold text-hopeline-teal mb-3 tracking-tight">Email</h3>
                  <a href="mailto:hopelineclinic@gmail.com" className="block text-gray-800 hover:text-hopeline-teal transition-colors group/link break-words">
                    <span className="font-extrabold text-lg md:text-xl group-hover/link:underline decoration-2 decoration-hopeline-teal">
                      hopelineclinic@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="group relative bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl p-8 border-2 border-gray-100/80 hover:border-hopeline-gold/40 shadow-glow-lg hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-hopeline-gold/5 via-transparent to-hopeline-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-hopeline-gold to-hopeline-gold/90 rounded-2xl p-4 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-extrabold text-hopeline-teal mb-3 tracking-tight">Address</h3>
                  <a href="https://maps.google.com/?q=2410+SE+121st+Ave+Ste+222+Portland+OR+97216" target="_blank" rel="noopener noreferrer" className="block text-gray-800 hover:text-hopeline-teal transition-colors group/link">
                    <div className="font-extrabold text-base md:text-lg leading-relaxed">
                      <p className="group-hover/link:underline decoration-2 decoration-hopeline-teal">2410 SE 121st Ave, Ste 222</p>
                      <p className="group-hover/link:underline decoration-2 decoration-hopeline-teal">Portland, OR 97216</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="group relative bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl p-8 border-2 border-gray-100/80 hover:border-hopeline-sky/40 shadow-glow-lg hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-hopeline-sky/5 via-transparent to-hopeline-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-hopeline-sky to-hopeline-sky/90 rounded-2xl p-4 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-8 h-8 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-extrabold text-hopeline-teal mb-3 tracking-tight">Business Hours</h3>
                  <div className="space-y-1.5">
                    <p className="text-gray-800 font-extrabold text-base md:text-lg">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 font-bold text-sm md:text-base">Sat: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-white via-hopeline-cream/20 to-white rounded-3xl p-8 md:p-10 border-2 border-gray-100/80 shadow-glow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-hopeline-sky/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-hopeline-gold/5 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-hopeline-teal mb-3 tracking-tight">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600 font-semibold text-base">
                      Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-br from-hopeline-teal via-hopeline-teal/95 to-hopeline-teal rounded-3xl p-8 md:p-10 shadow-glow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,214,212,0.15),transparent_70%)]"></div>
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
                Prefer to Call?
              </h3>
              <p className="text-hopeline-sky/95 font-semibold text-base md:text-lg mb-4">
                Our team is ready to assist you during business hours
              </p>
            </div>
            <a
              href="tel:+15038823008"
              className="group relative inline-flex items-center gap-3 bg-white text-hopeline-teal px-8 py-4 rounded-2xl font-extrabold text-lg hover:bg-hopeline-cream transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="whitespace-nowrap">+1 (503) 882-3008</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
