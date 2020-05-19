FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./server/cumulative-trend-service .

RUN npm install

EXPOSE 3001

CMD [ "node", "server.js" ]