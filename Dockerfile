FROM oven/bun:1 AS base

# Dependencies stage
FROM base AS deps
WORKDIR /app

# Install
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Build stage
FROM base AS builder
WORKDIR /app

# Copy dependencies จาก deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry ระหว่าง build
ENV NEXT_TELEMETRY_DISABLED 1

# เพิ่ม cache mounting สำหรับ build
RUN --mount=type=cache,target=/app/.next/cache \
    bun run build

# Production stage
FROM base AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Create non-root user for security
RUN addgroup --system --gid 1001 bunjs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files only
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/package.json ./package.json

# Create .next directory และตั้ง permissions
RUN mkdir .next
RUN chown nextjs:bunjs .next

# Copy build output
COPY --from=builder --chown=nextjs:bunjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:bunjs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["bun", "server.js"]
