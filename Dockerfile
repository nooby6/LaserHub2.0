# Install dependencies only when needed
FROM node:18-slim AS deps

WORKDIR /app

COPY package*.json ./
RUN npm install

# Rebuild the source code only when needed
FROM node:18-slim AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy necessary files and run app
FROM node:18-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# Install security updates
RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Run Prisma migrations at container startup
CMD npx prisma migrate deploy && npm run start