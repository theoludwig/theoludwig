FROM node:20.11.0 AS builder-dependencies
WORKDIR /usr/src/application
COPY ./package*.json ./
RUN npm clean-install

FROM node:20.11.0 AS builder
ENV NEXT_TELEMETRY_DISABLED=1
ENV IS_STANDALONE=true
WORKDIR /usr/src/application
COPY --from=builder-dependencies /usr/src/application/node_modules ./node_modules
COPY ./ ./
RUN npm run build

FROM node:20.11.0-slim AS runner
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1
ENV IS_STANDALONE=true
WORKDIR /usr/src/application
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 applicationrunner
USER applicationrunner
COPY --from=builder-dependencies --chown=applicationrunner:nodejs /usr/src/application/node_modules ./node_modules
COPY --from=builder --chown=applicationrunner:nodejs /usr/src/application/.next/standalone ./
COPY --from=builder --chown=applicationrunner:nodejs /usr/src/application/.next/static ./.next/static
COPY --from=builder --chown=applicationrunner:nodejs /usr/src/application/public ./public
COPY --from=builder --chown=applicationrunner:nodejs /usr/src/application/i18n/translations ./i18n/translations
COPY --from=builder --chown=applicationrunner:nodejs /usr/src/application/next.config.js ./next.config.js
CMD ["./server.js"]
