FROM node:alpine

WORKDIR /app
COPY src/. .
RUN npm install

CMD node app.js