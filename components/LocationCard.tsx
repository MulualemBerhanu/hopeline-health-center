interface LocationCardProps {
  name: string
  address: string
  phone: string
  image?: string
}

export function LocationCard({ name, address, phone }: LocationCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-colored transition-all duration-300 hover-lift group border border-gray-100">
      <div className="h-48 bg-gradient-to-br from-hopeline-sky via-hopeline-teal to-hopeline-teal flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
        <svg className="w-24 h-24 text-white opacity-90 group-hover:scale-110 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-hopeline-teal mb-4 group-hover:text-opacity-90 transition-colors">{name}</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-2 text-gray-600">
            <svg className="w-5 h-5 text-hopeline-sky mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="leading-relaxed">{address}</p>
          </div>
          <a 
            href={`tel:${phone}`} 
            className="flex items-center gap-2 text-hopeline-teal hover:text-hopeline-sky font-semibold transition-colors group/link"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

