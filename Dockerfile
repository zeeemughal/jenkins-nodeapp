FROM node:alpine

WORKDIR /app

RUN npm install

CMD node app.js