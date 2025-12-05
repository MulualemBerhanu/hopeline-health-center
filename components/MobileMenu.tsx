'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

interface MobileMenuProps {
  session: any
}

export function MobileMenu({ session }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Advanced Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none group"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-5">
          <span
            className={`absolute top-0 left-0 w-full h-0.5 bg-hopeline-teal rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-45 top-2' : ''
            }`}
          />
          <span
            className={`absolute top-2 left-0 w-full h-0.5 bg-hopeline-teal rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-hopeline-teal rounded-full transition-all duration-300 ${
              isOpen ? '-rotate-45 bottom-2' : ''
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Advanced Mobile Menu */}
      <div
        className={`fixed top-16 right-0 w-full max-w-sm h-[calc(100vh-4rem)] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Modern Menu Header */}
          <div className="bg-gradient-to-br from-hopeline-teal via-hopeline-teal/95 to-hopeline-teal/90 px-6 py-5 border-b border-hopeline-sky/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,214,212,0.2),transparent_70%)]"></div>
            <div className="relative flex items-center justify-between">
              <h3 className="text-white text-lg font-extrabold">Menu</h3>
              <button
                onClick={toggleMenu}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Modern Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-4">
              {menuItems.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`block px-5 py-4 rounded-2xl font-bold transition-all duration-300 relative overflow-hidden group ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-hopeline-teal to-hopeline-teal/90 text-white shadow-lg'
                        : 'text-gray-800 hover:bg-hopeline-cream hover:text-hopeline-teal active:scale-95'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      <span>{item.label}</span>
                      <svg className={`w-5 h-5 transition-transform duration-300 ${pathname === item.href ? 'text-white' : 'text-gray-400 group-hover:text-hopeline-teal group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    {pathname === item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Modern Divider */}
            <div className="my-4 px-4">
              <div className="h-px bg-gradient-to-r from-transparent via-hopeline-sky/30 to-transparent"></div>
            </div>

            {/* Advanced Auth Section */}
            <div className="px-4 space-y-2.5 pb-6">
              {session ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={toggleMenu}
                    className="block w-full px-6 py-4 bg-gradient-to-r from-hopeline-teal to-hopeline-teal/90 text-white font-extrabold rounded-2xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Dashboard</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: '/' })
                      toggleMenu()
                    }}
                    className="w-full px-6 py-4 bg-gray-50 text-gray-700 font-bold rounded-2xl text-center hover:bg-gray-100 active:scale-95 transition-all duration-300 border border-gray-200"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={toggleMenu}
                    className="block w-full px-6 py-4 bg-gradient-to-r from-hopeline-teal to-hopeline-teal/90 text-white font-extrabold rounded-2xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Login</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                </>
              )}
              <a
                href="tel:+15038823008"
                onClick={toggleMenu}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-br from-hopeline-cream to-white text-hopeline-teal font-extrabold rounded-2xl border-2 border-hopeline-teal/20 hover:border-hopeline-teal/40 hover:shadow-lg active:scale-95 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-hopeline-teal rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+1 (503) 882-3008</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

