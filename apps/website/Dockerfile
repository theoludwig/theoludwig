FROM node:24.10.0-slim@sha256:b8d2197aff9129d16c801a3e3e1b2a873c4946480f5a310f38056df2268c38d9 AS node-pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install --global corepack@0.34.1 && corepack enable
ENV TURBO_TELEMETRY_DISABLED=1
ENV NEXT_TELEMETRY_DISABLED=1
ENV DO_NOT_TRACK=1
WORKDIR /usr/src/app

FROM node-pnpm AS builder
COPY ./ ./
RUN pnpm install --global turbo@2.6.0
RUN turbo prune @repo/website --docker

FROM node-pnpm AS installer
ENV IS_STANDALONE=true

COPY .gitignore .gitignore
COPY --from=builder /usr/src/app/out/json/ ./
COPY --from=builder /usr/src/app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY --from=builder /usr/src/app/out/full/ ./
COPY turbo.json turbo.json

ARG VERSION="0.0.0-develop"
RUN pnpm install --global replace-in-files-cli@4.0.0
RUN VERSION_STRIPPED=${VERSION#v} && replace-in-files --regex='version": *"[^"]*' --replacement='"version": "'"$VERSION_STRIPPED"'"' '**/package.json' '!**/node_modules/**'
RUN pnpm --filter=@repo/website... exec turbo run build

FROM node-pnpm AS runner
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV IS_STANDALONE=true

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 applicationrunner
USER applicationrunner
COPY --from=installer /usr/src/app/apps/website/next.config.ts ./
COPY --from=installer /usr/src/app/apps/website/package.json ./
COPY --from=installer --chown=applicationrunner:nodejs /usr/src/app/apps/website/.next/standalone ./
COPY --from=installer --chown=applicationrunner:nodejs /usr/src/app/apps/website/.next/static ./apps/website/.next/static
COPY --from=installer --chown=applicationrunner:nodejs /usr/src/app/apps/website/public ./apps/website/public
CMD ["node", "apps/website/server.js"]
