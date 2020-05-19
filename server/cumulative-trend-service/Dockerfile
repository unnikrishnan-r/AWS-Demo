FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install

COPY ./server/cumulative-trend-service .

EXPOSE 3001

CMD [ "node", "server.js" ]