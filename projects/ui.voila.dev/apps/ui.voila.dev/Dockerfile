FROM oven/bun:latest AS base

FROM base AS prune
WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile
RUN turbo prune @ui.voila.dev/ui.voila.dev --docker

FROM base AS installer
WORKDIR /app
COPY --from=prune /app/out/json/ .
RUN bun install

FROM base AS builder
WORKDIR /app
COPY --from=installer /app/node_modules ./node_modules
COPY --from=installer /app/bun.lock ./bun.lock
COPY --from=prune /app/out/full/ .
RUN bun run ui.voila.dev:build

FROM base AS deploy
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/projects/voila.dev/apps/ui.voila.dev/dist ./projects/voila.dev/apps/ui.voila.dev/dist
COPY --from=builder /app/projects/voila.dev/apps/ui.voila.dev/package.json ./projects/voila.dev/apps/ui.voila.dev/package.json
COPY --from=builder /app/projects/voila.dev/apps/ui.voila.dev/server.ts ./projects/voila.dev/apps/ui.voila.dev/server.ts
WORKDIR /app/projects/voila.dev/apps/ui.voila.dev
CMD ["bun", "run", "server.ts"]

