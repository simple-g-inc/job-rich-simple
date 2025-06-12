# ビルドステージ
FROM node:18-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# 実行ステージ
FROM node:18-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --production --legacy-peer-deps
COPY --from=builder /app/web-build ./web-build
COPY server.js .

# ポート8080を公開
EXPOSE 8080

# サーバー起動
CMD ["node", "server.js"] 