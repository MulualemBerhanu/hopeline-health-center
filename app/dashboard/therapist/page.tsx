import { requireTherapist } from "@/lib/roles"

export default async function TherapistDashboard() {
  const session = await requireTherapist()

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-hopeline-teal mb-2">Therapist Portal</h1>
        <p className="text-lg text-gray-600">Welcome back, <span className="text-hopeline-teal font-semibold">{session.user.email}</span></p>
      </div>

      <div className="bg-white rounded-2xl shadow-soft p-10 border border-gray-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-hopeline-sky rounded-xl p-3">
            <svg className="w-8 h-8 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-hopeline-teal">Your Dashboard</h2>
        </div>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          This is your dedicated therapist portal. Here you can:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['View your scheduled appointments', 'Access client notes and records', 'Manage your availability', 'Review session history'].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-hopeline-cream rounded-xl p-4 hover:bg-hopeline-sky/20 transition-colors">
              <svg className="w-6 h-6 text-hopeline-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-hopeline-sky/30 to-hopeline-cream rounded-2xl shadow-soft p-8 border border-gray-100 hover:shadow-colored transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-hopeline-teal rounded-xl p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-hopeline-teal">Today&apos;s Appointments</h3>
          </div>
          <div className="bg-white/60 rounded-xl p-4">
            <p className="text-gray-700 text-lg">No appointments scheduled for today.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-hopeline-sky/30 to-hopeline-cream rounded-2xl shadow-soft p-8 border border-gray-100 hover:shadow-colored transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-hopeline-teal rounded-xl p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-hopeline-teal">Upcoming This Week</h3>
          </div>
          <div className="bg-white/60 rounded-xl p-4">
            <p className="text-gray-700 text-lg">No upcoming appointments this week.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

