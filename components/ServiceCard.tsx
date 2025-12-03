import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href?: string
}

export function ServiceCard({ title, description, icon, href = "/services" }: ServiceCardProps) {
  return (
    <div className="group bg-gradient-to-br from-white via-hopeline-cream/30 to-white rounded-3xl shadow-medium p-8 hover:shadow-glow transition-all duration-500 flex flex-col hover-lift-glow border-2 border-gray-100 hover:border-hopeline-sky/40 relative overflow-hidden">
      {/* Advanced decorative gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-hopeline-sky/10 via-transparent to-hopeline-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-hopeline-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative z-10">
        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <div className="bg-gradient-to-br from-hopeline-cream via-hopeline-sky/20 to-hopeline-cream rounded-2xl p-5 w-fit shadow-medium group-hover:shadow-glow transition-all duration-500 border border-hopeline-sky/20">
            <div className="text-hopeline-teal text-4xl">
              {icon}
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-extrabold text-hopeline-teal mb-4 group-hover:text-hopeline-teal/90 transition-colors tracking-tight">{title}</h3>
        <p className="text-gray-700 mb-6 flex-grow leading-relaxed text-base font-medium">{description}</p>
        <Link
          href={href}
          className="text-hopeline-teal font-bold hover:text-hopeline-sky transition-all inline-flex items-center gap-2 group/link"
        >
          <span className="group-hover/link:underline">Learn More</span>
          <svg className="w-5 h-5 transform group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

