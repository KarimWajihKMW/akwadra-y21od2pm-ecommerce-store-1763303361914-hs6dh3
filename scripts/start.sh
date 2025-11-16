#!/bin/bash
set -e

echo "🚀 Starting application..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "⚠️  WARNING: DATABASE_URL is not set"
  echo "Database features will not work until you add a PostgreSQL database"
  echo "In Railway, click '+ Database' to add PostgreSQL"
  echo ""
  echo "Starting application without database..."
else
  echo "✓ DATABASE_URL is configured"
  
  # Generate Prisma Client
  echo "📦 Generating Prisma Client..."
  npx prisma generate
  
  # Run database migrations
  echo "🔄 Running database migrations..."
  npx prisma migrate deploy || echo "⚠️  Migration failed, continuing..."
fi

# Start the application
echo "🎉 Starting Next.js server..."
node server.js
