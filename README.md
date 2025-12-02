# HopeLine Health Center

A complete, production-ready web application for HopeLine Health Center, a mental health outpatient therapy clinic. Built with Next.js 14 (App Router), featuring a public marketing website and a secure, role-based dashboard.

## Features

### Public Website
- **Home Page**: Hero section, mission statement, and services overview
- **About Page**: Story, mission, values, and approach
- **Services Page**: Detailed information about therapy services
- **Contact Page**: Contact form that saves submissions to the database

### Secure Dashboard
- **Role-Based Access Control**: ADMIN, THERAPIST, and FRONT_DESK roles
- **Protected Routes**: Authentication required for all dashboard pages
- **Role-Specific Dashboards**:
  - Admin: User management and system overview
  - Therapist: Appointment and client management
  - Front Desk: Contact message management

### Authentication
- NextAuth.js with Credentials Provider
- Secure password hashing with bcrypt
- Session management with JWT

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Vercel Postgres or Neon)
- **ORM**: Prisma
- **Authentication**: NextAuth.js (Auth.js)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (Vercel Postgres or Neon recommended)
- Git

### Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here-generate-with-openssl-rand-base64-32"
   ```

   To generate a secure `NEXTAUTH_SECRET`:
   ```bash
   openssl rand -base64 32
   ```

4. **Set up the database**:
   ```bash
   # Generate Prisma Client
   npm run db:generate

   # Push schema to database
   npm run db:push
   ```

5. **Create an admin user** (optional):
   ```bash
   npm run db:seed
   ```
   Default admin credentials:
   - Email: `admin@hopeline.com`
   - Password: `admin123` (change immediately in production!)

6. **Run the development server**:
   ```bash
   npm run dev
   ```

7. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Schema

### User Model
- `id`: UUID (primary key)
- `email`: String (unique)
- `password`: String (hashed)
- `name`: String (optional)
- `role`: Role enum (ADMIN, THERAPIST, FRONT_DESK)
- `createdAt`: DateTime

### ContactMessage Model
- `id`: UUID (primary key)
- `name`: String
- `email`: String
- `message`: String
- `createdAt`: DateTime

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services page
│   ├── contact/page.tsx         # Contact page
│   ├── login/page.tsx           # Login page
│   ├── dashboard/               # Dashboard pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── admin/page.tsx
│   │   ├── therapist/page.tsx
│   │   └── front-desk/page.tsx
│   └── api/                     # API routes
│       ├── auth/[...nextauth]/route.ts
│       ├── contact/route.ts
│       └── users/route.ts
├── components/                  # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ContactForm.tsx
│   ├── DashboardSidebar.tsx
│   └── SessionProvider.tsx
├── lib/                         # Utility functions
│   ├── prisma.ts
│   ├── auth.ts
│   └── roles.ts
├── prisma/
│   └── schema.prisma            # Database schema
└── types/
    └── next-auth.d.ts           # TypeScript types
```

## Deployment to Vercel

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Step 2: Set Up Vercel Postgres

1. **Create a Vercel account** at [vercel.com](https://vercel.com)

2. **Create a new project** in Vercel dashboard

3. **Add Vercel Postgres**:
   - Go to your project settings
   - Navigate to "Storage" → "Create Database"
   - Select "Postgres"
   - Create the database

4. **Copy the connection string** from Vercel Postgres settings

### Step 3: Deploy to Vercel

1. **Import your GitHub repository** in Vercel dashboard

2. **Configure environment variables**:
   - `DATABASE_URL`: Your Vercel Postgres connection string
   - `NEXTAUTH_URL`: Your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
   - `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`

3. **Deploy**:
   - Vercel will automatically detect Next.js
   - Build settings should be auto-configured
   - Click "Deploy"

### Step 4: Run Database Migrations

After deployment, run Prisma migrations:

1. **Option A: Using Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel login
   vercel link
   vercel env pull .env.local
   npm run db:push
   ```

2. **Option B: Using Prisma Studio** (local):
   - Connect to production database
   - Run migrations locally pointing to production DB

3. **Option C: Using a migration script**:
   - Create a one-time API route to run migrations
   - Call it once after deployment
   - Remove it after use

### Step 5: Create Initial Admin User

After deployment, create your first admin user:

1. **Use the API endpoint** (if implemented):
   ```bash
   curl -X POST https://your-app.vercel.app/api/users \
     -H "Content-Type: application/json" \
     -d '{
       "email": "admin@hopeline.com",
       "password": "secure-password",
       "name": "Admin User",
       "role": "ADMIN"
     }'
   ```

2. **Or use Prisma Studio**:
   ```bash
   DATABASE_URL="your-production-url" npx prisma studio
   ```
   - Manually create a user with hashed password

3. **Or use a seed script** (recommended):
   - Create a seed script that runs on first deployment
   - Include it in your deployment process

## Brand Colors

- **Deep Teal**: `#0F5156` (hopeline-teal)
- **Soft Sky Blue**: `#A3D6D4` (hopeline-sky)
- **Light Cream**: `#FAF7F2` (hopeline-cream)
- **Warm Gold**: `#F5B04C` (hopeline-gold)

## Security Notes

- **Change default admin password** immediately after first login
- **Use strong NEXTAUTH_SECRET** in production
- **Enable HTTPS** (automatic on Vercel)
- **Review and update** CORS settings if needed
- **Regularly update dependencies** for security patches

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Create and run migrations
- `npm run db:studio` - Open Prisma Studio

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Check database is accessible from your network
- Ensure SSL is configured if required

### Authentication Issues
- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your deployment URL
- Clear browser cookies and try again

### Build Errors
- Run `npm run db:generate` before building
- Check all environment variables are set
- Review Next.js build logs for specific errors

## Support

For issues or questions, please contact the development team.

## License

Proprietary - HopeLine Health Center

