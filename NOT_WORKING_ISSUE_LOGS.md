# Not Working Issue - Deployment Logs

## User Reported Issue

الموقع مش بيفتح

## Summary

- **Total Logs**: 101
- **Errors**: 61
- **Warnings**: 0
- **Log Time Range**: 2025-11-16T15:19:23.938Z to 2025-11-16T15:20:06.542Z

## Error Logs

```
[2025-11-16T15:19:25.580Z] ERROR: [DEPLOY] npm warn exec The following package was not found and will be installed: prisma@6.19.0
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:42.487Z] ERROR: [DEPLOY] Error: 

... and 41 more errors
```

## Recent Logs (Last 100 entries)

```
[2025-11-16T15:19:23.938Z] INFO: [DEPLOY] ✓ DATABASE_URL is configured
[2025-11-16T15:19:23.938Z] INFO: [DEPLOY] 📦 Generating Prisma Client...
[2025-11-16T15:19:25.580Z] ERROR: [DEPLOY] npm warn exec The following package was not found and will be installed: prisma@6.19.0
[2025-11-16T15:19:27.946Z] INFO: [DEPLOY] Prisma schema loaded from prisma/schema.prisma
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:28.319Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:29.745Z] INFO: [DEPLOY] 🚀 Starting application...
[2025-11-16T15:19:29.745Z] INFO: [DEPLOY] ✓ DATABASE_URL is configured
[2025-11-16T15:19:29.745Z] INFO: [DEPLOY] 📦 Generating Prisma Client...
[2025-11-16T15:19:32.689Z] INFO: [DEPLOY] Prisma schema loaded from prisma/schema.prisma
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:33.192Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:34.498Z] INFO: [DEPLOY] 🚀 Starting application...
[2025-11-16T15:19:34.498Z] INFO: [DEPLOY] ✓ DATABASE_URL is configured
[2025-11-16T15:19:34.498Z] INFO: [DEPLOY] 📦 Generating Prisma Client...
[2025-11-16T15:19:36.549Z] INFO: [DEPLOY] Prisma schema loaded from prisma/schema.prisma
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:36.938Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:38.554Z] INFO: [DEPLOY] 🚀 Starting application...
[2025-11-16T15:19:38.554Z] INFO: [DEPLOY] ✓ DATABASE_URL is configured
[2025-11-16T15:19:38.554Z] INFO: [DEPLOY] 📦 Generating Prisma Client...
[2025-11-16T15:19:41.538Z] INFO: [DEPLOY] Prisma schema loaded from prisma/schema.prisma
[2025-11-16T15:19:42.487Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:19:42.487Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:19:42.487Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:19:42.487Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:19:42.487Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:42.487Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:43.142Z] INFO: [DEPLOY] 🚀 Starting application...
[2025-11-16T15:19:43.142Z] INFO: [DEPLOY] ✓ DATABASE_URL is configured
[2025-11-16T15:19:43.142Z] INFO: [DEPLOY] 📦 Generating Prisma Client...
[2025-11-16T15:19:45.503Z] INFO: [DEPLOY] Prisma schema loaded from prisma/schema.prisma
[2025-11-16T15:19:45.614Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:19:45.614Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:19:45.614Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:19:45.614Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:19:45.614Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:45.614Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:46.806Z] INFO: [DEPLOY] 🚀 Starting application...
[2025-11-16T15:19:46.806Z] INFO: [DEPLOY] ✓ DATABASE_URL is configured
[2025-11-16T15:19:46.806Z] INFO: [DEPLOY] 📦 Generating Prisma Client...
[2025-11-16T15:19:49.642Z] INFO: [DEPLOY] Prisma schema loaded from prisma/schema.prisma
[2025-11-16T15:19:49.665Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:19:49.665Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:19:49.665Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:19:49.665Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:19:49.665Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:49.665Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:50.960Z] INFO: [DEPLOY] 📦 Generating Prisma Client...
[2025-11-16T15:19:50.960Z] INFO: [DEPLOY] 🚀 Starting application...
[2025-11-16T15:19:50.960Z] INFO: [DEPLOY] ✓ DATABASE_URL is configured
[2025-11-16T15:19:53.422Z] INFO: [DEPLOY] Prisma schema loaded from prisma/schema.prisma
[2025-11-16T15:19:53.566Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:19:53.566Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:19:53.566Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:19:53.566Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:19:53.566Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:53.566Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:55.579Z] INFO: [DEPLOY] 🚀 Starting application...
[2025-11-16T15:19:55.579Z] INFO: [DEPLOY] ✓ DATABASE_URL is configured
[2025-11-16T15:19:55.579Z] INFO: [DEPLOY] 📦 Generating Prisma Client...
[2025-11-16T15:19:57.533Z] INFO: [DEPLOY] Prisma schema loaded from prisma/schema.prisma
[2025-11-16T15:19:57.690Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:19:57.690Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:19:57.690Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:19:57.690Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:19:57.690Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:57.690Z] ERROR: [DEPLOY] 
[2025-11-16T15:19:59.589Z] INFO: [DEPLOY] 🚀 Starting application...
[2025-11-16T15:19:59.589Z] INFO: [DEPLOY] ✓ DATABASE_URL is configured
[2025-11-16T15:19:59.589Z] INFO: [DEPLOY] 📦 Generating Prisma Client...
[2025-11-16T15:20:01.962Z] INFO: [DEPLOY] Prisma schema loaded from prisma/schema.prisma
[2025-11-16T15:20:02.677Z] ERROR: [DEPLOY] 
[2025-11-16T15:20:02.677Z] ERROR: [DEPLOY] 
[2025-11-16T15:20:02.678Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:20:02.678Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:20:02.678Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:20:02.678Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:20:03.593Z] INFO: [DEPLOY] ✓ DATABASE_URL is configured
[2025-11-16T15:20:03.593Z] INFO: [DEPLOY] 📦 Generating Prisma Client...
[2025-11-16T15:20:03.593Z] INFO: [DEPLOY] 🚀 Starting application...
[2025-11-16T15:20:06.542Z] INFO: [DEPLOY] Prisma schema loaded from prisma/schema.prisma
[2025-11-16T15:20:06.542Z] ERROR: [DEPLOY] Error: 
[2025-11-16T15:20:06.542Z] ERROR: [DEPLOY] Cannot find module '/app/node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm-base64.js'
[2025-11-16T15:20:06.542Z] ERROR: [DEPLOY] Require stack:
[2025-11-16T15:20:06.542Z] ERROR: [DEPLOY] - /home/nextjs/.npm/_npx/2778af9cee32ff87/node_modules/prisma/build/index.js
[2025-11-16T15:20:06.542Z] ERROR: [DEPLOY] 
[2025-11-16T15:20:06.542Z] ERROR: [DEPLOY] 
```
