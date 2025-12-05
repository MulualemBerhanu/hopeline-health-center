import Link from 'next/link'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { SignOutButton } from './SignOutButton'
import { MobileMenu } from './MobileMenu'

export async function Navbar() {
  // Safely get session, handle database errors gracefully
  let session = null
  try {
    session = await getServerSession(authOptions)
  } catch (error) {
    // If database is not available, just show public navigation
    // This allows the site to work without a database
    console.warn('Session check failed (database may not be configured):', error)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-2xl shadow-lg border-b-2 border-gray-100/50 transition-all duration-300">
      {/* Mobile Navbar - Advanced Design */}
      <div className="md:hidden">
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className="flex items-center group"
            >
              <Image
                src="/images/logo_HLHC.jpg"
                alt="HopeLine Health Center"
                width={180}
                height={60}
                className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
                priority
              />
            </Link>
            <MobileMenu session={session} />
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center group"
              >
                <Image
                  src="/images/logo_HLHC.jpg"
                  alt="HopeLine Health Center"
                  width={240}
                  height={80}
                  className="h-16 lg:h-20 w-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
                  priority
                />
              </Link>
            </div>
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="px-6 py-3 text-gray-700 hover:text-hopeline-teal font-bold rounded-xl hover:bg-gradient-to-r hover:from-hopeline-cream hover:to-hopeline-sky/20 transition-all duration-300 relative group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-hopeline-teal via-hopeline-sky to-hopeline-teal group-hover:w-4/5 transition-all duration-500 rounded-full"></span>
              <span className="absolute inset-0 bg-hopeline-cream/0 group-hover:bg-hopeline-cream/50 rounded-xl transition-all duration-300 -z-10"></span>
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-gray-700 hover:text-hopeline-teal font-bold rounded-xl hover:bg-gradient-to-r hover:from-hopeline-cream hover:to-hopeline-sky/20 transition-all duration-300 relative group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-hopeline-teal via-hopeline-sky to-hopeline-teal group-hover:w-4/5 transition-all duration-500 rounded-full"></span>
              <span className="absolute inset-0 bg-hopeline-cream/0 group-hover:bg-hopeline-cream/50 rounded-xl transition-all duration-300 -z-10"></span>
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 text-gray-700 hover:text-hopeline-teal font-bold rounded-xl hover:bg-gradient-to-r hover:from-hopeline-cream hover:to-hopeline-sky/20 transition-all duration-300 relative group"
            >
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-hopeline-teal via-hopeline-sky to-hopeline-teal group-hover:w-4/5 transition-all duration-500 rounded-full"></span>
              <span className="absolute inset-0 bg-hopeline-cream/0 group-hover:bg-hopeline-cream/50 rounded-xl transition-all duration-300 -z-10"></span>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-gray-700 hover:text-hopeline-teal font-bold rounded-xl hover:bg-gradient-to-r hover:from-hopeline-cream hover:to-hopeline-sky/20 transition-all duration-300 relative group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-hopeline-teal via-hopeline-sky to-hopeline-teal group-hover:w-4/5 transition-all duration-500 rounded-full"></span>
              <span className="absolute inset-0 bg-hopeline-cream/0 group-hover:bg-hopeline-cream/50 rounded-xl transition-all duration-300 -z-10"></span>
            </Link>
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className="ml-4 px-7 py-3.5 bg-gradient-to-r from-hopeline-teal via-hopeline-teal/95 to-hopeline-teal/90 text-white font-extrabold rounded-xl hover:from-hopeline-teal/95 hover:via-hopeline-teal/90 hover:to-hopeline-teal/85 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                >
                  <span className="relative z-10">Dashboard</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
                <SignOutButton />
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="ml-4 px-6 py-3 text-hopeline-teal font-extrabold rounded-xl hover:bg-hopeline-cream/80 transition-all duration-300 relative group"
                >
                  <span className="relative z-10">Login</span>
                  <span className="absolute inset-0 bg-hopeline-cream/0 group-hover:bg-hopeline-cream/50 rounded-xl transition-all duration-300 -z-10"></span>
                </Link>
                <a
                  href="tel:5551234567"
                  className="ml-3 px-7 py-3.5 bg-gradient-to-r from-hopeline-teal via-hopeline-teal/95 to-hopeline-teal/90 text-white font-extrabold rounded-xl hover:from-hopeline-teal/95 hover:via-hopeline-teal/90 hover:to-hopeline-teal/85 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 flex items-center gap-2.5 relative overflow-hidden group"
                >
                  <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="relative z-10">(555) 123-4567</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </>
            )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

