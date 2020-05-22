FROM node:latest

ENV NODE_ENV=development NODE_PATH=/usr/src/app

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3001

CMD [ "node", "server.js" ]