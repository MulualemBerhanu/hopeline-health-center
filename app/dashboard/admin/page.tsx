import { requireAdmin } from "@/lib/roles"
import { prisma } from "@/lib/prisma"

export default async function AdminDashboard() {
  const session = await requireAdmin()

  const [userCount, contactCount] = await Promise.all([
    prisma.user.count(),
    prisma.contactMessage.count(),
  ])

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-hopeline-teal mb-2">Admin Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome back, <span className="text-hopeline-teal font-semibold">{session.user.email}</span></p>
        </div>
        <div className="hidden md:flex items-center gap-3 bg-hopeline-cream px-6 py-3 rounded-xl">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-gray-700">System Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-white to-hopeline-cream rounded-2xl shadow-soft p-8 border border-gray-100 hover:shadow-colored transition-all duration-300 hover-lift group">
          <div className="flex items-center justify-between mb-6">
            <div className="bg-hopeline-teal rounded-xl p-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-hopeline-teal">{userCount}</p>
            </div>
          </div>
          <h2 className="text-xl font-bold text-hopeline-teal mb-2">Total Users</h2>
          <p className="text-sm text-gray-600">Registered users in the system</p>
        </div>

        <div className="bg-gradient-to-br from-white to-hopeline-cream rounded-2xl shadow-soft p-8 border border-gray-100 hover:shadow-colored transition-all duration-300 hover-lift group">
          <div className="flex items-center justify-between mb-6">
            <div className="bg-hopeline-sky rounded-xl p-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-hopeline-teal">{contactCount}</p>
            </div>
          </div>
          <h2 className="text-xl font-bold text-hopeline-teal mb-2">Contact Messages</h2>
          <p className="text-sm text-gray-600">Total contact form submissions</p>
        </div>

        <div className="bg-gradient-to-br from-white to-hopeline-cream rounded-2xl shadow-soft p-8 border border-gray-100 hover:shadow-colored transition-all duration-300 hover-lift group">
          <div className="flex items-center justify-between mb-6">
            <div className="bg-hopeline-gold rounded-xl p-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-hopeline-teal">100%</p>
            </div>
          </div>
          <h2 className="text-xl font-bold text-hopeline-teal mb-2">System Health</h2>
          <p className="text-sm text-gray-600">All systems operational</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-soft p-10 border border-gray-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-hopeline-teal rounded-xl p-3">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-hopeline-teal">Admin Functions</h2>
        </div>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          As an administrator, you have access to all system functions including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['User management', 'System configuration', 'View all contact messages', 'Access all dashboard sections'].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-hopeline-cream rounded-xl p-4">
              <svg className="w-6 h-6 text-hopeline-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

