FROM node:16-alpine AS deps

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install

COPY . .

USER nextjs


ENV PORT 3000

EXPOSE $PORT

VOLUME [ "/pages" ]

CMD [ "yarn", "dev" ]