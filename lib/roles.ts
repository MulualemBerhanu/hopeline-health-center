import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth"

type Role = "ADMIN" | "THERAPIST" | "FRONT_DESK"

export async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login")
  }
  return session
}

export async function requireAdmin() {
  const session = await requireAuth()
  if (session.user.role !== "ADMIN") {
    redirect("/dashboard")
  }
  return session
}

export async function requireTherapist() {
  const session = await requireAuth()
  if (session.user.role !== "THERAPIST" && session.user.role !== "ADMIN") {
    redirect("/dashboard")
  }
  return session
}

export async function requireFrontDesk() {
  const session = await requireAuth()
  if (session.user.role !== "FRONT_DESK" && session.user.role !== "ADMIN") {
    redirect("/dashboard")
  }
  return session
}

export function hasRole(userRole: string, requiredRole: Role | Role[]): boolean {
  if (Array.isArray(requiredRole)) {
    return requiredRole.includes(userRole as Role)
  }
  return userRole === requiredRole
}

