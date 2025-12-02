import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// This endpoint initializes the database tables
// Call it once after deployment: https://your-app.vercel.app/api/init-db
export async function GET() {
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
      // If tables don't exist, create them
      if (error.code === 'P2021' || error.message?.includes('does not exist')) {
        // Push schema to create tables
        const { execSync } = require('child_process')
        execSync('npx prisma db push --skip-generate', { 
          stdio: 'inherit',
          env: process.env
        })
        
        return NextResponse.json({ 
          success: true, 
          message: 'Database tables created successfully',
          tables: ['User', 'ContactMessage']
        })
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
    await prisma.$disconnect()
  }
}

