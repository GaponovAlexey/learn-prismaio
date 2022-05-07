FROM node:current-alpine

# Create app directory
WORKDIR /pages

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN yarn install

COPY . .

EXPOSE 3000
CMD [ "yarn", "dev" ]