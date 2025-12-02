import { DashboardSidebar } from "@/components/DashboardSidebar"
import { requireAuth } from "@/lib/roles"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await requireAuth()

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-hopeline-cream via-white to-hopeline-cream">
      <DashboardSidebar />
      <main className="flex-1 p-8 md:p-12 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}

