import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href?: string
}

export function ServiceCard({ title, description, icon, href = "/services" }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-soft p-8 hover:shadow-colored transition-all duration-300 flex flex-col hover-lift border border-gray-100 relative overflow-hidden">
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-hopeline-sky/5 to-hopeline-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="text-hopeline-teal mb-6 text-5xl transform group-hover:scale-110 transition-transform duration-300">
          <div className="bg-hopeline-cream rounded-xl p-4 w-fit">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-hopeline-teal mb-4 group-hover:text-opacity-90 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-base">{description}</p>
        <Link
          href={href}
          className="text-hopeline-teal font-semibold hover:text-hopeline-sky transition-colors inline-flex items-center gap-2 group/link"
        >
          <span>Learn More</span>
          <svg className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

