import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Health check endpoint to verify deployment
export const dynamic = 'force-dynamic' // Prevent static generation
export const runtime = 'nodejs' // Ensure it runs on Node.js runtime

export async function GET() {
  try {
    // Check environment variables
    const hasDatabaseUrl = !!process.env.DATABASE_URL
    const hasNextAuthSecret = !!process.env.NEXTAUTH_SECRET
    const hasNextAuthUrl = !!process.env.NEXTAUTH_URL

    // Test database connection
    let dbConnected = false
    let dbError = null
    try {
      await prisma.$connect()
      await prisma.$queryRaw`SELECT 1`
      dbConnected = true
      await prisma.$disconnect()
    } catch (error: any) {
      dbError = error.message
      dbConnected = false
    }

    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: {
        hasDatabaseUrl,
        hasNextAuthSecret,
        hasNextAuthUrl,
        nodeEnv: process.env.NODE_ENV,
      },
      database: {
        connected: dbConnected,
        error: dbError,
      },
    })
  } catch (error: any) {
    return NextResponse.json({
      status: 'error',
      error: error.message,
    }, { status: 500 })
  }
}

