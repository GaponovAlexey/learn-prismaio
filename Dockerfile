FROM node
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN yarn install --frozen-lockfile
ENV PORT 3000
# VOLUME [ "/learn-prismaio" ]
EXPOSE 3000
CMD ["yarn", "dev"]