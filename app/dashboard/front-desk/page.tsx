import { requireFrontDesk } from "@/lib/roles"
import { prisma } from "@/lib/prisma"

export default async function FrontDeskDashboard() {
  const session = await requireFrontDesk()

  const recentMessages = await prisma.contactMessage.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-hopeline-teal mb-2">Front Desk Dashboard</h1>
        <p className="text-lg text-gray-600">Welcome back, <span className="text-hopeline-teal font-semibold">{session.user.email}</span></p>
      </div>

      <div className="bg-white rounded-2xl shadow-soft p-10 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-hopeline-teal rounded-xl p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-hopeline-teal">Recent Contact Messages</h2>
          </div>
          <div className="text-sm text-gray-600 bg-hopeline-cream px-4 py-2 rounded-lg inline-block">
            {recentMessages.length} {recentMessages.length === 1 ? 'message' : 'messages'}
          </div>
        </div>
        {recentMessages.length === 0 ? (
          <div className="text-center py-12 bg-hopeline-cream/50 rounded-xl">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-gray-600 text-lg">No contact messages yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <div key={message.id} className="bg-hopeline-cream/50 rounded-xl p-6 border border-gray-200 hover:shadow-soft transition-all duration-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-hopeline-teal text-lg">{message.name}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {message.email}
                    </p>
                  </div>
                  <div className="bg-white px-3 py-1.5 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium">
                      {new Date(message.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mt-3">
                  <p className="text-gray-700 leading-relaxed">{message.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-soft p-10 border border-gray-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-hopeline-gold rounded-xl p-3">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-hopeline-teal">Front Desk Functions</h2>
        </div>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          As front desk staff, you can:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['View and respond to contact messages', 'Schedule appointments', 'Manage client inquiries', 'Access basic system information'].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-hopeline-cream rounded-xl p-4 hover:bg-hopeline-sky/20 transition-colors">
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

