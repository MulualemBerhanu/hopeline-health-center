import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-hopeline-teal via-hopeline-teal/95 to-hopeline-teal text-white mt-auto relative overflow-hidden">
      {/* Advanced decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-hopeline-sky rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-hopeline-gold rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,214,212,0.1),transparent_70%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/logo_HLHC.jpg"
                alt="HopeLine Health Center"
                width={240}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-hopeline-sky/95 text-lg leading-relaxed mb-8 max-w-md font-medium">
              Providing compassionate outpatient therapy services for your emotional well-being. 
              Your journey to healing starts here.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+15038823008" 
                className="group flex items-center gap-3 px-6 py-3 bg-white/15 hover:bg-white/25 rounded-xl transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40 hover:scale-105"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-bold text-lg">+1 (503) 882-3008</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-extrabold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-hopeline-sky/95 hover:text-white transition-all duration-300 flex items-center gap-3 group font-semibold">
                  <span className="w-2 h-2 bg-hopeline-sky rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-hopeline-sky/95 hover:text-white transition-all duration-300 flex items-center gap-3 group font-semibold">
                  <span className="w-2 h-2 bg-hopeline-sky rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-hopeline-sky/95 hover:text-white transition-all duration-300 flex items-center gap-3 group font-semibold">
                  <span className="w-2 h-2 bg-hopeline-sky rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-hopeline-sky/95 hover:text-white transition-all duration-300 flex items-center gap-3 group font-semibold">
                  <span className="w-2 h-2 bg-hopeline-sky rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-extrabold mb-8 text-white">Resources</h4>
            <ul className="space-y-4">
              <li>
                <a href="/login" className="text-hopeline-sky/95 hover:text-white transition-all duration-300 flex items-center gap-3 group font-semibold">
                  <span className="w-2 h-2 bg-hopeline-sky rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Login</span>
                </a>
              </li>
              <li>
                <a href="tel:988" className="text-hopeline-sky/95 hover:text-white transition-all duration-300 flex items-center gap-3 group font-semibold">
                  <span className="w-2 h-2 bg-hopeline-sky rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Crisis Hotline: 988</span>
                </a>
              </li>
              <li>
                <a href="tel:911" className="text-hopeline-sky/95 hover:text-white transition-all duration-300 flex items-center gap-3 group font-semibold">
                  <span className="w-2 h-2 bg-hopeline-sky rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Emergency: 911</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t-2 border-hopeline-sky/40">
          <div className="bg-gradient-to-r from-red-600/25 via-red-600/20 to-red-600/25 border-2 border-red-500/40 rounded-2xl p-8 mb-8 backdrop-blur-sm shadow-lg">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
              <span className="text-white font-bold">HopeLine Health Center is not an emergency service</span>
              <span className="text-white/50 hidden sm:inline text-xl">|</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="font-extrabold uppercase tracking-wide text-white">Crisis Support:</span>
              </div>
              <a 
                href="tel:988" 
                className="bg-white/25 hover:bg-white/35 px-4 py-2 rounded-xl font-extrabold transition-all duration-300 hover:scale-110 text-white shadow-md"
              >
                National Suicide Prevention Lifeline: 988
              </a>
              <span className="text-white/90 font-semibold">or</span>
              <a 
                href="tel:911" 
                className="bg-white/25 hover:bg-white/35 px-4 py-2 rounded-xl font-extrabold transition-all duration-300 hover:scale-110 text-white shadow-md"
              >
                Call 911
              </a>
            </div>
          </div>
          <p className="text-center text-hopeline-sky/90 text-base font-semibold">
            © {new Date().getFullYear()} HopeLine Health Center. All rights reserved. | 
            <span className="ml-2">Licensed Mental Health Services</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

