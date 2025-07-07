# syntax=docker/dockerfile:1.4
FROM node:18

WORKDIR /app

# Use secret for npm token
COPY package*.json ./
COPY .npmrc .npmrc

RUN --mount=type=secret,id=npm_token \
    NPM_TOKEN=$(cat /run/secrets/npm_token) npm install

COPY . .

RUN npm run build

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "run", "start"]