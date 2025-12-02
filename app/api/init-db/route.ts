import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// This endpoint initializes the database tables
// Call it once after deployment: https://your-app.vercel.app/api/init-db
export const dynamic = 'force-dynamic' // Prevent static generation
export const runtime = 'nodejs' // Ensure it runs on Node.js runtime

export async function GET() {
  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ 
      success: false, 
      error: 'DATABASE_URL environment variable is not set',
      hint: 'Please add DATABASE_URL in Vercel environment variables'
    }, { status: 500 })
  }

  try {
    // Test database connection
    await prisma.$connect()
    
    // Try to query a table to see if it exists
    try {
      await prisma.user.findMany({ take: 1 })
      return NextResponse.json({ 
        success: true, 
        message: 'Database is already initialized',
        tables: ['User', 'ContactMessage']
      })
    } catch (error: any) {
      // If tables don't exist, return instructions
      if (error.code === 'P2021' || error.message?.includes('does not exist')) {
        return NextResponse.json({ 
          success: false,
          error: 'Database tables do not exist',
          hint: 'Run: npx prisma db push (locally with DATABASE_URL set to your Vercel Postgres URL)',
          instructions: [
            '1. Get your DATABASE_URL from Vercel Postgres settings',
            '2. Set it locally: export DATABASE_URL="your-vercel-postgres-url"',
            '3. Run: npx prisma db push',
            '4. Or use Vercel CLI: vercel env pull && npx prisma db push'
          ]
        }, { status: 500 })
      }
      throw error
    }
  } catch (error: any) {
    console.error('Database initialization error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      code: error.code,
      hint: 'Make sure DATABASE_URL is set correctly in Vercel environment variables'
    }, { status: 500 })
  } finally {
    await prisma.$disconnect().catch(() => {})
  }
}

