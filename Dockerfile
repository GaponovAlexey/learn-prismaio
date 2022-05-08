FROM node
WORKDIR /learn-prismaio
COPY . .
RUN yarn install --frozen-lockfile
ENV PORT 3000
VOLUME [ "/learn-prismaio/pages" ]
EXPOSE 3000
CMD ["yarn", "dev"]