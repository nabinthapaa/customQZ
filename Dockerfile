# Build stage
FROM node:23-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# Serve stage
FROM node:23-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist . 

EXPOSE 3000

CMD ["serve", "-s", "-l", "3000" , "."]
