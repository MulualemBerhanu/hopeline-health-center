import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { SignOutButton } from './SignOutButton'
import { MobileMenu } from './MobileMenu'

export async function Navbar() {
  const session = await getServerSession(authOptions)

  return (
    <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-xl shadow-lg border-b-2 border-gray-100/50">
      {/* Mobile Navbar - Advanced Design */}
      <div className="md:hidden">
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-hopeline-teal to-hopeline-teal/80 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-extrabold text-lg">H</span>
              </div>
              <div className="flex flex-col">
                <span className="text-hopeline-teal font-extrabold text-base leading-tight">HopeLine</span>
                <span className="text-hopeline-teal/60 font-semibold text-xs leading-tight">Health Center</span>
              </div>
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
                className="text-3xl lg:text-4xl font-extrabold text-hopeline-teal hover:opacity-90 transition-all duration-300 flex items-center gap-3 group"
              >
                <span className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-hopeline-sky/30 to-hopeline-gold/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
                  <span className="relative bg-gradient-to-r from-hopeline-teal to-hopeline-teal/80 bg-clip-text text-transparent">HopeLine</span>
                </span>
                <span className="text-hopeline-teal/70 font-semibold text-lg">Health Center</span>
              </Link>
            </div>
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="px-5 py-2.5 text-gray-700 hover:text-hopeline-teal font-semibold rounded-xl hover:bg-gradient-to-r hover:from-hopeline-cream hover:to-hopeline-sky/10 transition-all duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-hopeline-teal to-hopeline-sky group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link
              href="/about"
              className="px-5 py-2.5 text-gray-700 hover:text-hopeline-teal font-semibold rounded-xl hover:bg-gradient-to-r hover:from-hopeline-cream hover:to-hopeline-sky/10 transition-all duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-hopeline-teal to-hopeline-sky group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link
              href="/services"
              className="px-5 py-2.5 text-gray-700 hover:text-hopeline-teal font-semibold rounded-xl hover:bg-gradient-to-r hover:from-hopeline-cream hover:to-hopeline-sky/10 transition-all duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-hopeline-teal to-hopeline-sky group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-gray-700 hover:text-hopeline-teal font-semibold rounded-xl hover:bg-gradient-to-r hover:from-hopeline-cream hover:to-hopeline-sky/10 transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-hopeline-teal to-hopeline-sky group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className="ml-4 px-6 py-3 bg-gradient-to-r from-hopeline-teal to-hopeline-teal/90 text-white font-bold rounded-xl hover:from-hopeline-teal/90 hover:to-hopeline-teal/80 hover:shadow-colored transition-all duration-300 hover:-translate-y-1"
                >
                  Dashboard
                </Link>
                <SignOutButton />
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="ml-4 px-5 py-2.5 text-hopeline-teal font-bold rounded-xl hover:bg-hopeline-cream transition-all duration-300"
                >
                  Login
                </Link>
                <a
                  href="tel:5551234567"
                  className="ml-2 px-6 py-3 bg-gradient-to-r from-hopeline-teal to-hopeline-teal/90 text-white font-bold rounded-xl hover:from-hopeline-teal/90 hover:to-hopeline-teal/80 hover:shadow-colored transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (555) 123-4567
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

