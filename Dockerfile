# FROM node:16-alpine AS deps
# WORKDIR /learn-prismaio
# COPY . .
# RUN yarn install --frozen-lockfile
# ENV PORT 3000
# VOLUME [ "/learn-prismaio/pages" ]
# EXPOSE 3000
# CMD ["yarn", "dev"]


FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /learn-prismaio
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:alpine AS runner
WORKDIR /learn-prismaio
COPY . .
ENV PORT 3000
VOLUME [ "/learn-prismaio/pages" ]
EXPOSE 3000
CMD ["yarn", "dev"]