'use client'

import { signOut } from 'next-auth/react'

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="text-gray-700 hover:text-hopeline-teal transition-colors"
    >
      Sign Out
    </button>
  )
}

