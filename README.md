# 🛍️ Group Shopping Platform - منصة التسوق الجماعي

A modern, full-featured e-commerce platform inspired by Pinduoduo, built with Next.js 14, featuring group buying, flash deals, and a comprehensive admin panel.

## ✨ Features

- 🛒 **Group Buying** - Save more by shopping with friends
- ⚡ **Flash Deals** - Limited time offers with countdown timers
- 📦 **Product Management** - Complete product catalog with categories
- 👥 **User Profiles** - Track orders, points, and groups
- 💳 **Stripe Integration** - Secure payment processing
- 🔐 **Authentication** - Email/password authentication with JWT
- 🌍 **Internationalization** - Arabic and English support (Arabic as default)
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Bright, optimistic design with animations
- 🔔 **Notifications** - Keep users informed of important events
- 📊 **Admin Dashboard** - Comprehensive management tools

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with bcryptjs
- **Payments**: Stripe
- **Internationalization**: next-intl
- **Deployment**: Docker + Railway

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (optional for initial setup)
- Stripe account (optional, for payment features)

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd akwadra-y21od2pm-ecommerce-store-1763303361914-hs6dh3
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` and configure the following:

**REQUIRED:**
- `JWT_SECRET` - Secret key for JWT tokens (generate a secure random string)
- `NEXTAUTH_SECRET` - Secret for NextAuth (generate a secure random string)
- `NEXTAUTH_URL` - Your app URL (http://localhost:3000 for local dev)

**OPTIONAL (required for database features):**
- `DATABASE_URL` - PostgreSQL connection string
- `DIRECT_URL` - PostgreSQL direct connection (for migrations)

**OPTIONAL (required for payment features):**
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret

### 4. Set up database (if DATABASE_URL is configured)

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Production

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

## 🐳 Docker Deployment

### Build Docker image

```bash
docker build -t ecommerce-app .
```

### Run Docker container

```bash
docker run -p 3000:3000 \
  -e JWT_SECRET="your-secret" \
  -e NEXTAUTH_SECRET="your-secret" \
  -e DATABASE_URL="your-database-url" \
  ecommerce-app
```

## 🚂 Railway Deployment

### Prerequisites
1. Create a Railway account at [railway.app](https://railway.app)
2. Install Railway CLI (optional)

### Deployment Steps

1. **Create New Project**
   - Go to Railway dashboard
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Select your repository

2. **Add PostgreSQL Database**
   - Click "+ Database" in your project
   - Select "PostgreSQL"
   - Railway will automatically set `DATABASE_URL`

3. **Configure Environment Variables**
   - Go to your service settings
   - Add environment variables:
     - `JWT_SECRET` - Generate secure random string
     - `NEXTAUTH_SECRET` - Generate secure random string
     - `NEXTAUTH_URL` - Your Railway app URL
     - `NODE_ENV=production`

4. **Deploy**
   - Railway will automatically build and deploy using the Dockerfile
   - Monitor deployment logs for any issues

### Verifying Deployment

After deployment, verify:
- [ ] Application is accessible at Railway URL
- [ ] Homepage loads correctly
- [ ] Locale switching works (Arabic ↔ English)
- [ ] All navigation links work
- [ ] No errors in Railway logs

## 📁 Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── auth/         # Authentication endpoints
│   ├── admin/            # Admin dashboard pages
│   ├── products/         # Products pages
│   ├── categories/       # Categories pages
│   ├── group-buying/     # Group buying pages
│   ├── deals/            # Flash deals pages
│   ├── profile/          # User profile pages
│   ├── signin/           # Sign in page
│   ├── signup/           # Sign up page
│   ├── layout.tsx        # Root layout with i18n
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation component
│   └── LocaleSwitcher.tsx # Language switcher
├── lib/                   # Utility libraries
│   ├── prisma.ts         # Prisma client
│   └── auth.ts           # Authentication utilities
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
├── public/               # Static files
│   └── locales/         # Translation files
│       ├── ar/          # Arabic translations
│       └── en/          # English translations
├── scripts/              # Deployment scripts
│   └── start.sh         # Production startup script
├── i18n.ts              # Internationalization config
├── Dockerfile           # Docker configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🔧 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | No* | PostgreSQL connection string |
| `DIRECT_URL` | No | PostgreSQL direct connection for migrations |
| `JWT_SECRET` | Yes | Secret key for JWT tokens |
| `NEXTAUTH_SECRET` | Yes | Secret for NextAuth |
| `NEXTAUTH_URL` | Yes | Application base URL |
| `APP_URL` | No | Alternative to NEXTAUTH_URL |
| `NODE_ENV` | No | Environment (development/production) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | No** | Stripe publishable key |
| `STRIPE_SECRET_KEY` | No** | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | No** | Stripe webhook secret |

\* Required for database features  
\** Required for payment features

## 🐛 Troubleshooting

### Common Issues

#### "Couldn't find next-intl config file"
- **Cause**: `i18n.ts` not copied to Docker image
- **Solution**: Verify Dockerfile has `COPY --from=builder /app/i18n.ts ./i18n.ts`

#### "DATABASE_URL not set"
- **Cause**: Normal behavior when database not configured
- **Solution**: Add PostgreSQL database in Railway or configure DATABASE_URL
- **Note**: Application will start but database features won't work

#### Docker build fails
- **Solution**: Ensure all required files exist:
  - `i18n.ts` at root
  - `public/locales/ar/common.json`
  - `public/locales/en/common.json`
  - `prisma/schema.prisma`

#### Locale switching doesn't work
- **Cause**: Locale files not copied to Docker
- **Solution**: Verify Dockerfile has `COPY --from=builder /app/public ./public`

### Verification Commands

Check file presence in Docker image:
```bash
docker run <image> ls -la /app/i18n.ts
docker run <image> ls -la /app/public/locales/
docker run <image> ls -la /app/prisma/schema.prisma
```

## 📝 Development Notes

### Adding New Features

1. Create feature branch
2. Implement feature with tests
3. Update documentation
4. Run linting: `npm run lint`
5. Build and test: `npm run build`
6. Create pull request

### Database Changes

1. Update `prisma/schema.prisma`
2. Generate migration: `npx prisma migrate dev --name <migration-name>`
3. Test migration
4. Commit schema and migration files

### Adding Translations

1. Edit `public/locales/ar/common.json` (Arabic)
2. Edit `public/locales/en/common.json` (English)
3. Use in components: `const t = useTranslations(); t('key.subkey')`

## 🎯 Deployment Checklist

Before deploying to production:

- [ ] All environment variables configured
- [ ] Database migrations run successfully
- [ ] `npm run build` completes without errors
- [ ] All tests pass
- [ ] Docker image builds successfully
- [ ] Application starts without errors
- [ ] All pages accessible and functional
- [ ] Locale switching works
- [ ] Authentication works
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Security review completed

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Inspired by Pinduoduo's group buying model
- Built with Next.js and modern web technologies
- Designed for Railway deployment

---

**Built with ❤️ using Next.js 14**
Built by Ra - ecommerce-store-1763303361914
