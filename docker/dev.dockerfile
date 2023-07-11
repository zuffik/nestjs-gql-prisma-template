FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY prisma/schema.prisma prisma/schema.prisma
COPY src nest-cli.json tsconfig.json tsconfig.build.json ./

CMD yarn prisma generate && yarn start:debug
