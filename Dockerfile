# FROM node:16-alpine AS deps
# WORKDIR /app
# COPY package*.json ./
# COPY prisma ./prisma/
# COPY package.json yarn.lock ./
# RUN yarn install
# COPY . .
# USER nextjs
# ENV PORT 3000
# EXPOSE $PORT
# VOLUME [ "/pages" ]
# CMD [ "yarn", "dev" ]


# FROM node:17.1.0-alpine3.12 AS development
# WORKDIR /app
# ENV HOST=0.0.0.0
# ENV PORT=3000
# ENV NODE_ENV=development
# EXPOSE 3000
# CMD [ "yarn", "dev" ]




