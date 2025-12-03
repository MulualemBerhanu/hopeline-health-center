import { ServiceCard } from "@/components/ServiceCard"
import Link from "next/link"

export default function Services() {
  return (
    <div className="py-24 md:py-32 bg-gradient-to-b from-hopeline-cream via-white to-hopeline-cream/30 min-h-screen relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-hopeline-teal/15 to-hopeline-sky/15 text-hopeline-teal font-bold rounded-full text-sm mb-6 border border-hopeline-teal/20 shadow-soft">
            Our Services
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-hopeline-teal mb-8 leading-tight">
            Comprehensive Therapy Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            We offer a comprehensive range of outpatient therapy services designed 
            to support your <span className="gradient-text font-bold">mental health and emotional well-being</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl shadow-large p-12 hover:shadow-colored transition-all duration-500 hover-lift border-2 border-gray-100 hover:border-hopeline-sky/40 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-sky/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-hopeline-cream to-hopeline-sky/25 rounded-2xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-medium">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-14 h-14 text-hopeline-teal">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-extrabold text-hopeline-teal mb-6">Individual Therapy</h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg font-medium">
                One-on-one therapy sessions tailored to your unique needs. Our therapists 
                work with you to address a wide range of concerns including:
              </p>
              <ul className="space-y-4 mb-8">
                {['Anxiety and stress management', 'Depression and mood disorders', 'Trauma and PTSD', 'Grief and loss', 'Life transitions', 'Self-esteem and personal growth'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-700 group/item">
                    <div className="bg-hopeline-teal rounded-lg p-1.5 mt-0.5 group-hover/item:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-hopeline-cream/70 to-hopeline-sky/20 rounded-2xl p-6 border-2 border-hopeline-teal/30 shadow-soft">
                <p className="text-gray-800 leading-relaxed font-bold text-base">
                  Sessions are typically 50 minutes and can be conducted in-person or via telehealth.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl shadow-large p-12 hover:shadow-colored transition-all duration-500 hover-lift border-2 border-gray-100 hover:border-hopeline-sky/40 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-hopeline-cream to-hopeline-gold/25 rounded-2xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-medium">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-14 h-14 text-hopeline-teal">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-extrabold text-hopeline-teal mb-6">Couples Therapy</h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg font-medium">
                Strengthen your relationship with guided support. Couples therapy can help with:
              </p>
              <ul className="space-y-4 mb-8">
                {['Communication improvement', 'Conflict resolution', 'Rebuilding trust', 'Intimacy and connection', 'Pre-marital counseling', 'Navigating life changes together'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-700 group/item">
                    <div className="bg-hopeline-teal rounded-lg p-1.5 mt-0.5 group-hover/item:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-hopeline-cream/70 to-hopeline-sky/20 rounded-2xl p-6 border-2 border-hopeline-teal/30 shadow-soft">
                <p className="text-gray-800 leading-relaxed font-bold text-base">
                  Our therapists create a safe space for both partners to express themselves 
                  and work toward shared goals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl shadow-large p-12 hover:shadow-colored transition-all duration-500 hover-lift border-2 border-gray-100 hover:border-hopeline-sky/40 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-sky/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-hopeline-cream to-hopeline-sky/25 rounded-2xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-medium">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-14 h-14 text-hopeline-teal">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-4xl font-extrabold text-hopeline-teal mb-6">Telehealth Services</h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg font-medium">
                Access therapy from the comfort and privacy of your home. Our secure 
                telehealth platform allows you to:
              </p>
              <ul className="space-y-4 mb-8">
                {['Attend sessions from anywhere', 'Maintain continuity of care', 'Reduce travel time and costs', 'Access care during inclement weather'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-700 group/item">
                    <div className="bg-hopeline-teal rounded-lg p-1.5 mt-0.5 group-hover/item:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-hopeline-cream/70 to-hopeline-sky/20 rounded-2xl p-6 border-2 border-hopeline-teal/30 shadow-soft">
                <p className="text-gray-800 leading-relaxed font-bold text-base">
                  All telehealth sessions are conducted through HIPAA-compliant, secure video 
                  conferencing technology.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl shadow-large p-12 hover:shadow-colored transition-all duration-500 hover-lift border-2 border-gray-100 hover:border-hopeline-sky/40 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-teal/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-hopeline-cream to-hopeline-teal/25 rounded-2xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-medium">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-14 h-14 text-hopeline-teal">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-extrabold text-hopeline-teal mb-6">Group Therapy</h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg font-medium">
                Connect with others in a supportive group setting. Group therapy offers:
              </p>
              <ul className="space-y-4 mb-8">
                {['Peer support and connection', 'Shared experiences and learning', 'Cost-effective treatment option', 'Skill-building in a safe environment'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-700 group/item">
                    <div className="bg-hopeline-teal rounded-lg p-1.5 mt-0.5 group-hover/item:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-hopeline-cream/70 to-hopeline-sky/20 rounded-2xl p-6 border-2 border-hopeline-teal/30 shadow-soft">
                <p className="text-gray-800 leading-relaxed font-bold text-base">
                  Groups are typically 6-8 members and focus on specific themes such as 
                  anxiety management, depression support, or life skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-hopeline-teal via-hopeline-teal/95 to-hopeline-teal text-white rounded-3xl p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-0 right-0 w-96 h-96 bg-hopeline-sky rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-hopeline-gold rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,214,212,0.1),transparent_70%)]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Get Started?</h2>
            <p className="text-xl md:text-2xl mb-10 text-hopeline-sky/95 max-w-2xl mx-auto font-medium leading-relaxed">
              Contact us today to schedule an appointment or learn more about our services.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-hopeline-gold to-hopeline-gold/90 text-hopeline-teal px-12 py-5 rounded-2xl text-lg font-extrabold hover:from-hopeline-gold/90 hover:to-hopeline-gold/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Contact Us</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

