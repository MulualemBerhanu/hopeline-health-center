import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  // Role-based redirect
  const role = session.user.role
  if (role === "ADMIN") {
    redirect("/dashboard/admin")
  } else if (role === "THERAPIST") {
    redirect("/dashboard/therapist")
  } else if (role === "FRONT_DESK") {
    redirect("/dashboard/front-desk")
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-hopeline-teal mb-4">Dashboard</h1>
      <p className="text-gray-700">Welcome, {session.user.email}!</p>
    </div>
  )
}

