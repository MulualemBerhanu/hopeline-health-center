import Link from 'next/link'
import { FeatureBadge } from './FeatureBadge'
import { MobileFeatureCarousel } from './MobileFeatureCarousel'

export function Hero() {
  return (
    <section
      className="relative min-h-[550px] md:min-h-[750px] lg:min-h-[800px] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-background.png), linear-gradient(135deg, #0F5156 0%, #A3D6D4 50%, #FAF7F2 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Advanced overlay with multiple layers - Much lighter on mobile to show background */}
      <div className="absolute inset-0 bg-gradient-to-r from-hopeline-teal/45 via-hopeline-teal/40 to-hopeline-teal/35 md:from-hopeline-teal/90 md:via-hopeline-teal/80 md:to-hopeline-teal/70 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hopeline-teal/15 md:to-hopeline-teal/50 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(163,214,212,0.08),transparent_50%)] z-0"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-hopeline-sky/40 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-hopeline-gold/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-hopeline-sky/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Mobile View - Advanced Design */}
        <div className="md:hidden">
          <div className="max-w-full mx-auto px-5 py-8">
            <div className="text-white space-y-5">
              {/* Welcome Badge */}
              <div className="inline-block animate-fade-in-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/25 backdrop-blur-md rounded-full text-xs font-bold mb-3 border border-white/40 shadow-lg">
                  <span className="w-1.5 h-1.5 bg-hopeline-gold rounded-full animate-pulse"></span>
                  Welcome to HopeLine
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl font-extrabold mb-3 leading-tight drop-shadow-2xl animate-fade-in-up">
                <span className="block mb-1 text-white">Trusted Mental Health</span>
                <span className="block bg-gradient-to-r from-white via-hopeline-sky to-white bg-clip-text text-transparent">
                  Outpatient Center
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm text-white/90 drop-shadow-lg leading-relaxed font-medium mb-6">
                Trusted Help for Lasting Recovery - HopeLine Health Center provides person-centered support for your emotional well-being.
              </p>
              
              {/* Features - Auto-rotating Carousel on Mobile */}
              <MobileFeatureCarousel />

              {/* CTA Buttons - Modern Mobile Design */}
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-hopeline-gold to-hopeline-gold/90 text-hopeline-teal px-6 py-4 rounded-2xl text-base font-extrabold shadow-2xl hover:shadow-3xl transition-all duration-300 active:scale-95 text-center group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Request Appointment
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
                <a
                  href="tel:5551234567"
                  className="block w-full bg-white/20 backdrop-blur-xl text-white border-2 border-white/50 px-6 py-4 rounded-2xl text-base font-extrabold shadow-xl hover:bg-white/30 transition-all duration-300 active:scale-95 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (555) 123-4567
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="relative">
              <div className="grid grid-cols-12 gap-12">
                <div className="text-white space-y-6 col-span-8">
                  <div className="inline-block animate-fade-in-up">
                    <span className="inline-block px-4 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 border border-white/30 shadow-md">
                      Welcome to HopeLine
                    </span>
                  </div>
                  <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl animate-fade-in-up">
                    <span className="block mb-2">Trusted Mental Health</span>
                    <span className="block bg-gradient-to-r from-white via-hopeline-sky to-white bg-clip-text text-transparent">
                      Outpatient Center
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl mb-8 text-white/95 drop-shadow-lg leading-relaxed max-w-2xl font-medium">
                    Trusted Help for Lasting Recovery - HopeLine Health Center provides person-centered support for your emotional well-being.
                  </p>
                  
                  {/* Key Features */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <FeatureBadge
                      icon={
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                      text="24/7 Crisis Support"
                    />
                    <FeatureBadge
                      icon={
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      }
                      text="Flexible Scheduling"
                    />
                    <FeatureBadge
                      icon={
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      }
                      text="Personalized Treatment"
                    />
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-3 bg-hopeline-gold text-hopeline-teal px-10 py-4 rounded-xl text-lg font-bold hover:bg-opacity-90 hover:shadow-large transition-all duration-300 hover:-translate-y-1 text-center group shadow-lg"
                    >
                      <span>Request Appointment</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <a
                      href="tel:5551234567"
                      className="inline-flex items-center justify-center gap-3 bg-white/15 backdrop-blur-md text-white border-2 border-white/40 px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/25 transition-all duration-300 hover:-translate-y-1 text-center shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(555) 123-4567</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Card positioned absolutely at bottom right */}
              <div className="hidden md:block absolute bottom-0 right-0 md:w-[32%] lg:w-[28%] xl:w-[26%]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-hopeline-sky/20 to-hopeline-gold/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-12 border-2 border-white/40 shadow-2xl hover:bg-white/25 transition-all duration-500">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-white text-3xl font-extrabold mb-4 drop-shadow-lg">Your Path to Healing</p>
                      <p className="text-white/95 text-lg leading-relaxed font-medium">
                        Every journey begins with a single step. We&apos;re here to support you every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
