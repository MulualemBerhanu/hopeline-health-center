export default function About() {
  return (
    <div className="py-24 md:py-32 bg-gradient-to-b from-hopeline-cream via-white to-hopeline-cream/30 min-h-screen relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-hopeline-sky/25 to-hopeline-gold/25 text-hopeline-teal font-bold rounded-full text-sm mb-6 border border-hopeline-teal/20 shadow-soft">
            About Us
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-hopeline-teal mb-8 leading-tight">
            About HopeLine Health Center
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-medium">
            Your trusted partner in <span className="gradient-text font-bold">mental health</span> and emotional well-being
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl shadow-2xl p-12 md:p-20 space-y-16 border-2 border-gray-100/50 animate-scale-in backdrop-blur-sm">
          <section className="relative group">
            <div className="flex items-center gap-6 mb-8">
              <div className="bg-gradient-to-br from-hopeline-teal to-hopeline-teal/80 rounded-2xl p-4 shadow-colored group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-hopeline-teal">Our Story</h2>
            </div>
            <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p className="bg-hopeline-cream/50 rounded-2xl p-6 border-l-4 border-hopeline-teal">
                HopeLine Health Center was founded with a simple yet powerful mission: 
                to provide accessible, compassionate mental health care to our community. 
                We understand that seeking therapy is a <span className="text-hopeline-teal font-bold">courageous step</span>, and we are here 
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

          <section className="relative group">
            <div className="flex items-center gap-6 mb-8">
              <div className="bg-gradient-to-br from-hopeline-sky to-hopeline-sky/80 rounded-2xl p-4 shadow-medium group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-hopeline-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-hopeline-teal">Our Mission</h2>
            </div>
            <div className="bg-gradient-to-br from-hopeline-cream via-white to-hopeline-cream rounded-3xl p-10 border-2 border-hopeline-teal/30 shadow-large relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-hopeline-teal/5 rounded-full blur-3xl"></div>
              <p className="text-2xl text-gray-800 leading-relaxed font-bold relative z-10">
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
                <div key={idx} className="group bg-gradient-to-br from-white via-hopeline-cream/50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-hopeline-sky/40 hover:shadow-colored transition-all duration-500 hover-lift relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-hopeline-sky/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-br from-hopeline-gold to-hopeline-gold/80 rounded-xl p-3 shadow-medium group-hover:scale-110 transition-transform duration-500">
                        <span className="text-2xl">{value.icon}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-hopeline-teal">{value.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium text-base">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-hopeline-teal rounded-xl p-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-hopeline-teal">Our Approach</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At HopeLine Health Center, we use <span className="text-hopeline-teal font-semibold">evidence-based therapeutic approaches</span> 
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

