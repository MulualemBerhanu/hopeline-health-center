export default function About() {
  return (
    <div className="py-28 md:py-36 bg-gradient-to-b from-hopeline-cream via-white to-hopeline-cream/40 min-h-screen relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 animate-fade-in-up">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-hopeline-sky/30 via-hopeline-gold/25 to-hopeline-sky/30 text-hopeline-teal font-extrabold rounded-full text-sm mb-8 border-2 border-hopeline-teal/20 shadow-medium backdrop-blur-sm">
            About Us
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-hopeline-teal mb-8 leading-tight tracking-tight">
            About HopeLine Health Center
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-semibold">
            Your trusted partner in <span className="text-gradient-animated font-extrabold">mental health</span> and emotional well-being
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-white via-hopeline-cream/40 to-white rounded-3xl shadow-glow-lg p-12 md:p-20 space-y-20 border-2 border-gray-100/60 animate-scale-in backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-hopeline-sky/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-hopeline-gold/5 rounded-full blur-3xl"></div>
          <section className="relative group z-10">
            <div className="flex items-center gap-6 mb-10">
              <div className="bg-gradient-to-br from-hopeline-teal via-hopeline-teal/90 to-hopeline-teal/80 rounded-3xl p-5 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 border border-hopeline-teal/30">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-hopeline-teal tracking-tight">Our Story</h2>
            </div>
            <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed font-semibold">
              <p className="bg-gradient-to-br from-hopeline-cream/70 via-hopeline-cream/50 to-hopeline-cream/70 rounded-3xl p-8 border-l-4 border-hopeline-teal shadow-medium">
                HopeLine Health Center was founded with a simple yet powerful mission: 
                to provide accessible, compassionate mental health care to our community. 
                We understand that seeking therapy is a <span className="text-hopeline-teal font-extrabold">courageous step</span>, and we are here 
                to support you every step of the way.
              </p>
              <p>
                Our team of licensed therapists brings years of experience and a deep 
                commitment to person-centered care. We believe that every individual&apos;s 
                journey is unique, and we tailor our approach to meet your specific needs 
                and goals.
              </p>
            </div>
          </section>

          <section className="relative group z-10">
            <div className="flex items-center gap-6 mb-10">
              <div className="bg-gradient-to-br from-hopeline-sky via-hopeline-sky/90 to-hopeline-sky/80 rounded-3xl p-5 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 border border-hopeline-sky/30">
                <svg className="w-12 h-12 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-hopeline-teal tracking-tight">Our Mission</h2>
            </div>
            <div className="bg-gradient-to-br from-hopeline-cream via-white to-hopeline-cream rounded-3xl p-12 border-2 border-hopeline-teal/40 shadow-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-hopeline-teal/8 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-hopeline-sky/5 rounded-full blur-3xl"></div>
              <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-extrabold relative z-10">
                To provide high-quality, compassionate outpatient therapy services that 
                empower individuals and families to achieve emotional well-being and 
                lead fulfilling lives.
              </p>
            </div>
          </section>

          <section className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-hopeline-gold rounded-xl p-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-hopeline-teal">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Compassion", desc: "We approach every interaction with empathy and understanding.", icon: "💙" },
                { title: "Respect", desc: "We honor your autonomy and treat you with dignity.", icon: "🤝" },
                { title: "Excellence", desc: "We maintain the highest standards of professional care.", icon: "⭐" },
                { title: "Accessibility", desc: "We strive to make mental health care available to all who need it.", icon: "🌍" },
                { title: "Confidentiality", desc: "We protect your privacy and maintain strict confidentiality.", icon: "🔒" },
              ].map((value, idx) => (
                <div key={idx} className="group bg-gradient-to-br from-white via-hopeline-cream/50 to-white rounded-3xl p-8 border-2 border-gray-100 hover:border-hopeline-sky/50 hover:shadow-glow transition-all duration-700 hover-lift-glow relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-hopeline-sky/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-hopeline-gold/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="bg-gradient-to-br from-hopeline-gold via-hopeline-gold/90 to-hopeline-gold/80 rounded-2xl p-4 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 border border-hopeline-gold/30">
                        <span className="text-3xl">{value.icon}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-hopeline-teal tracking-tight">{value.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-semibold text-base">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative z-10">
            <div className="flex items-center gap-6 mb-10">
              <div className="bg-gradient-to-br from-hopeline-teal via-hopeline-teal/90 to-hopeline-teal/80 rounded-3xl p-5 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 border border-hopeline-teal/30">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-hopeline-teal tracking-tight">Our Approach</h2>
            </div>
            <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed font-semibold">
              <p className="bg-gradient-to-br from-hopeline-cream/60 via-white to-hopeline-cream/60 rounded-3xl p-8 shadow-medium">
                At HopeLine Health Center, we use <span className="text-hopeline-teal font-extrabold">evidence-based therapeutic approaches</span> 
                including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), 
                and person-centered therapy. Our therapists work collaboratively with you to 
                develop a treatment plan that aligns with your goals and values.
              </p>
              <p>
                We believe in creating a safe, non-judgmental space where you can explore 
                your thoughts, feelings, and experiences. Whether you&apos;re dealing with anxiety, 
                depression, relationship issues, or life transitions, we&apos;re here to support you.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

