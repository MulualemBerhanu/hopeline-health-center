# Vercel Deployment Guide - Fixing Application Error

## Common Issues and Solutions

### 1. **Environment Variables Missing**

You need to set these environment variables in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

#### Required Environment Variables:

```
DATABASE_URL=your_postgresql_connection_string
NEXTAUTH_URL=https://your-app-name.vercel.app
NEXTAUTH_SECRET=your-secret-key-here
```

#### How to get these:

**DATABASE_URL:**
- Option A: Use Vercel Postgres (Recommended)
  1. In Vercel dashboard, go to **Storage** → **Create Database**
  2. Select **Postgres**
  3. Create the database
  4. Copy the connection string from the database settings
  5. It will look like: `postgresql://user:password@host:5432/database?sslmode=require`

- Option B: Use external PostgreSQL (Neon, Supabase, etc.)
  - Get connection string from your provider
  - Format: `postgresql://user:password@host:5432/database?sslmode=require`

**NEXTAUTH_URL:**
- Your Vercel deployment URL: `https://hopeline-health-center.vercel.app` (or your custom domain)

**NEXTAUTH_SECRET:**
- Generate a secure secret:
  ```bash
  openssl rand -base64 32
  ```
- Or use an online generator: https://generate-secret.vercel.app/32

### 2. **Update Prisma Schema for PostgreSQL**

Your current schema uses SQLite. For Vercel, you need PostgreSQL.

**Option A: Use PostgreSQL for both local and production** (Recommended)

Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Then update your local `.env` to use PostgreSQL (or keep SQLite for local dev).

**Option B: Keep SQLite for local, PostgreSQL for production**

The schema will automatically use the `DATABASE_URL` from environment variables.

### 3. **Set Up Database on Vercel**

1. **Create Vercel Postgres Database:**
   - Go to Vercel Dashboard → Your Project → Storage
   - Click "Create Database"
   - Select "Postgres"
   - Choose a name and region
   - Create the database

2. **Get Connection String:**
   - In the database settings, find "Connection String"
   - Copy the `POSTGRES_URL` or `DATABASE_URL`
   - Add it to Environment Variables as `DATABASE_URL`

3. **Run Prisma Migrations:**
   After setting up the database, you need to push the schema:

   **Option A: Using Vercel CLI (Recommended)**
   ```bash
   npm i -g vercel
   vercel login
   vercel link
   vercel env pull .env.local
   npx prisma db push
   ```

   **Option B: Using Prisma Studio (Local)**
   ```bash
   # Set DATABASE_URL to your Vercel Postgres connection string
   export DATABASE_URL="your-vercel-postgres-url"
   npx prisma db push
   ```

   **Option C: One-time API Route (Temporary)**
   Create `app/api/migrate/route.ts` (remove after use):
   ```typescript
   import { prisma } from '@/lib/prisma'
   import { NextResponse } from 'next/server'

   export async function GET() {
     try {
       // This will create tables if they don't exist
       await prisma.$connect()
       return NextResponse.json({ success: true })
     } catch (error) {
       return NextResponse.json({ error: String(error) }, { status: 500 })
     }
   }
   ```
   Then visit: `https://your-app.vercel.app/api/migrate` once, then delete the file.

### 4. **Check Build Logs**

1. Go to Vercel Dashboard → Your Project → Deployments
2. Click on the failed deployment
3. Check the "Build Logs" tab
4. Look for errors like:
   - "Prisma Client not generated"
   - "DATABASE_URL not found"
   - "NEXTAUTH_SECRET not found"

### 5. **Redeploy After Fixes**

After setting environment variables:
1. Go to Deployments tab
2. Click "Redeploy" on the latest deployment
3. Or push a new commit to trigger redeployment

## Quick Fix Checklist

- [ ] Added `DATABASE_URL` environment variable in Vercel
- [ ] Added `NEXTAUTH_URL` environment variable in Vercel
- [ ] Added `NEXTAUTH_SECRET` environment variable in Vercel
- [ ] Created Vercel Postgres database
- [ ] Updated Prisma schema to use PostgreSQL (if needed)
- [ ] Ran `prisma db push` to create tables
- [ ] Redeployed the application

## Testing Locally with Production Database

To test with your Vercel Postgres database locally:

1. Get the connection string from Vercel
2. Add to `.env.local`:
   ```
   DATABASE_URL=your-vercel-postgres-connection-string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret
   ```
3. Run:
   ```bash
   npx prisma db push
   npm run dev
   ```

## Common Error Messages

**"Application error: a server-side exception has occurred"**
- Usually means missing environment variables or database connection issue
- Check Vercel logs for specific error

**"Prisma Client not generated"**
- Fixed by adding `postinstall` script (already done)
- Make sure `prisma generate` runs during build

**"Can't reach database server"**
- Check DATABASE_URL is correct
- Verify database is accessible (not paused)
- Check SSL mode in connection string

## Need Help?

1. Check Vercel deployment logs
2. Check Vercel function logs
3. Verify all environment variables are set
4. Ensure database is created and accessible

