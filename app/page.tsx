import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { BusinessHoursCard } from "@/components/BusinessHoursCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-white via-hopeline-cream/30 to-white relative overflow-hidden">
        {/* Advanced decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-hopeline-sky/12 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hopeline-gold/12 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-hopeline-teal/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-fade-in-up">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-hopeline-sky/25 via-hopeline-gold/20 to-hopeline-sky/25 text-hopeline-teal font-extrabold rounded-full text-sm mb-8 border-2 border-hopeline-teal/20 shadow-medium backdrop-blur-sm">
              Why Choose Us
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-hopeline-teal mb-8 leading-tight tracking-tight">
              Why Choose HopeLine Health Center?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold">
              Choosing the right mental health center is a crucial step on your path to recovery. 
              At HopeLine Health Center, we offer more than just treatment; we offer a <span className="text-gradient-animated font-extrabold">lifeline</span>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white via-hopeline-cream/40 to-white rounded-3xl p-10 shadow-medium hover:shadow-glow transition-all duration-700 hover-lift-glow border-2 border-gray-100 hover:border-hopeline-sky/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-sky/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-hopeline-teal/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-hopeline-cream via-hopeline-sky/25 to-hopeline-cream rounded-2xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-medium group-hover:shadow-glow border border-hopeline-sky/20">
                  <svg className="w-12 h-12 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4 tracking-tight">24/7 Crisis Support</h3>
                <p className="text-gray-700 leading-relaxed text-base font-semibold">Our team is available around the clock, providing after-hours crisis services 24/7 for current patients.</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-white via-hopeline-cream/40 to-white rounded-3xl p-10 shadow-medium hover:shadow-glow transition-all duration-700 hover-lift-glow border-2 border-gray-100 hover:border-hopeline-gold/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-gold/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-hopeline-teal/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-hopeline-cream via-hopeline-gold/25 to-hopeline-cream rounded-2xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-medium group-hover:shadow-glow border border-hopeline-gold/20">
                  <svg className="w-12 h-12 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4 tracking-tight">Accepts Insurance</h3>
                <p className="text-gray-700 leading-relaxed text-base font-semibold">We accept most major insurance plans, Medicaid, and offer affordable self-pay options. We handle all the paperwork for you.</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-white via-hopeline-cream/40 to-white rounded-3xl p-10 shadow-medium hover:shadow-glow transition-all duration-700 hover-lift-glow border-2 border-gray-100 hover:border-hopeline-sky/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-sky/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-hopeline-teal/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-hopeline-cream via-hopeline-sky/25 to-hopeline-cream rounded-2xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-medium group-hover:shadow-glow border border-hopeline-sky/20">
                  <svg className="w-12 h-12 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4 tracking-tight">Personalized Care</h3>
                <p className="text-gray-700 leading-relaxed text-base font-semibold">With us, you&apos;re not just a number; you&apos;re part of our family. We provide personalized treatment tailored to your unique needs.</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-white via-hopeline-cream/40 to-white rounded-3xl p-10 shadow-medium hover:shadow-glow transition-all duration-700 hover-lift-glow border-2 border-gray-100 hover:border-hopeline-teal/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-teal/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-hopeline-sky/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-hopeline-cream via-hopeline-teal/25 to-hopeline-cream rounded-2xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-medium group-hover:shadow-glow border border-hopeline-teal/20">
                  <svg className="w-12 h-12 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4 tracking-tight">Flexible Scheduling</h3>
                <p className="text-gray-700 leading-relaxed text-base font-semibold">We understand life is busy. We offer flexible scheduling to accommodate your needs, including evening and weekend appointments.</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-white via-hopeline-cream/40 to-white rounded-3xl p-10 shadow-medium hover:shadow-glow transition-all duration-700 hover-lift-glow border-2 border-gray-100 hover:border-hopeline-sky/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-sky/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-hopeline-teal/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-hopeline-cream via-hopeline-sky/25 to-hopeline-cream rounded-2xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-medium group-hover:shadow-glow border border-hopeline-sky/20">
                  <svg className="w-12 h-12 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4 tracking-tight">Confidential Services</h3>
                <p className="text-gray-700 leading-relaxed text-base font-semibold">Your privacy is our priority. All services are completely confidential and HIPAA-compliant.</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-white via-hopeline-cream/40 to-white rounded-3xl p-10 shadow-medium hover:shadow-glow transition-all duration-700 hover-lift-glow border-2 border-gray-100 hover:border-hopeline-gold/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-hopeline-gold/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-hopeline-teal/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-hopeline-cream via-hopeline-gold/25 to-hopeline-cream rounded-2xl p-6 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-medium group-hover:shadow-glow border border-hopeline-gold/20">
                  <svg className="w-12 h-12 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4 tracking-tight">Accepting New Patients</h3>
                <p className="text-gray-700 leading-relaxed text-base font-semibold">We&apos;re currently accepting new patients. Call us today to schedule your first appointment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-hopeline-cream via-white to-hopeline-cream/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-hopeline-cream/50"></div>
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-hopeline-sky/12 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-hopeline-teal/12 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-fade-in-up">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-hopeline-teal/20 via-hopeline-sky/15 to-hopeline-teal/20 text-hopeline-teal font-extrabold rounded-full text-sm mb-8 border-2 border-hopeline-teal/20 shadow-medium backdrop-blur-sm">
              Our Services
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-hopeline-teal mb-8 leading-tight tracking-tight">
              Comprehensive Mental Health Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold">
              Our range of treatment services is designed to address the diverse needs of our clients. 
              From individual and group counseling to innovative telehealth services, we provide a <span className="text-gradient-animated font-extrabold">holistic approach</span> to mental health recovery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Individual Therapy"
              description="One-on-one sessions tailored to your unique needs and goals."
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />
            <ServiceCard
              title="Couples Therapy"
              description="Strengthen your relationship with guided support and communication tools."
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            />
            <ServiceCard
              title="Family Counseling"
              description="Support and guidance for families affected by mental health challenges."
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            <ServiceCard
              title="Group Therapy"
              description="Connect with others in a supportive group setting for shared healing."
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
            <ServiceCard
              title="Telehealth"
              description="Access therapy from the comfort of your home with secure video sessions."
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <ServiceCard
              title="Youth Counseling"
              description="Specialized care for adolescents and young adults with age-appropriate approaches."
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            />
            <ServiceCard
              title="Crisis Management"
              description="24/7 crisis support services for current patients in need of immediate assistance."
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              }
            />
            <ServiceCard
              title="Login"
              description="Access your appointments, upload documents, and manage your care online."
              href="/login"
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
          </div>
          <div className="text-center mt-20">
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-hopeline-teal via-hopeline-teal/95 to-hopeline-teal text-white px-10 py-5 rounded-2xl text-lg font-extrabold hover:from-hopeline-teal/95 hover:via-hopeline-teal/90 hover:to-hopeline-teal/90 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Learn More About Our Services</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Hours & Contact Info */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-hopeline-cream/30 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-hopeline-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-hopeline-sky rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-hopeline-teal/10 text-hopeline-teal font-semibold rounded-full text-sm mb-4">
                Visit Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-hopeline-teal mb-4">
                Business Hours
              </h2>
              <p className="text-lg text-gray-600">
                We&apos;re here to help during our operating hours
              </p>
            </div>
            <BusinessHoursCard />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-40 bg-gradient-to-br from-hopeline-teal via-hopeline-teal/98 to-hopeline-teal text-white relative overflow-hidden">
        {/* Advanced decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-hopeline-sky rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-hopeline-gold rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,214,212,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,176,76,0.1),transparent_60%)]"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-8 animate-fade-in-up">
            <span className="inline-block px-6 py-3 bg-white/25 backdrop-blur-xl rounded-full text-sm font-extrabold border-2 border-white/40 shadow-glow">
              Take Action Today
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-10 animate-fade-in-up leading-tight tracking-tight">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-14 text-hopeline-sky/95 leading-relaxed animate-fade-in-up font-semibold max-w-3xl mx-auto">
            Take the first step toward emotional well-being today. Our compassionate team is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-hopeline-gold via-hopeline-gold/95 to-hopeline-gold/90 text-hopeline-teal px-14 py-6 rounded-2xl text-lg font-extrabold hover:from-hopeline-gold/95 hover:via-hopeline-gold/90 hover:to-hopeline-gold/85 hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Request an Appointment</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:5551234567"
              className="group relative inline-flex items-center gap-3 bg-white/20 backdrop-blur-2xl text-white border-2 border-white/50 px-14 py-6 rounded-2xl text-lg font-extrabold hover:bg-white/30 hover:border-white/70 hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2"
            >
              <svg className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call (555) 123-4567</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

