import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function DashboardSidebar() {
  const session = await getServerSession(authOptions)
  const role = session?.user?.role

  const menuItems = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      roles: ['ADMIN', 'THERAPIST', 'FRONT_DESK']
    },
    {
      href: '/dashboard/admin',
      label: 'Admin Panel',
      roles: ['ADMIN']
    },
    {
      href: '/dashboard/therapist',
      label: 'Therapist Portal',
      roles: ['ADMIN', 'THERAPIST']
    },
    {
      href: '/dashboard/front-desk',
      label: 'Front Desk',
      roles: ['ADMIN', 'FRONT_DESK']
    },
  ]

  const visibleItems = menuItems.filter(item => 
    item.roles.includes(role || '')
  )

  const menuIcons: Record<string, React.ReactNode> = {
    'Dashboard': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    'Admin Panel': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    'Therapist Portal': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    'Front Desk': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  }

  return (
    <aside className="w-72 bg-gradient-to-b from-hopeline-teal to-hopeline-teal/95 text-white min-h-screen p-8 shadow-large relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-hopeline-sky rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">HopeLine</h2>
          </div>
          <p className="text-hopeline-sky/80 text-sm">Dashboard Portal</p>
        </div>
        
        <nav className="space-y-2">
          {visibleItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
            >
              <span className="group-hover:scale-110 transition-transform">
                {menuIcons[item.label]}
              </span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="mt-12 pt-8 border-t border-hopeline-sky/30">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-xs text-hopeline-sky/80 mb-2">Logged in as</p>
            <p className="text-white font-semibold text-sm truncate">{session?.user?.email}</p>
            <div className="mt-3 pt-3 border-t border-hopeline-sky/30">
              <p className="text-xs text-hopeline-sky/80 mb-1">Role</p>
              <span className="inline-block bg-hopeline-gold text-hopeline-teal px-3 py-1 rounded-lg text-xs font-bold">
                {role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

