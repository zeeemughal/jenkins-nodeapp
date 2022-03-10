FROM node:alpine

WORKDIR /app
COPY src/package.json .
RUN npm install

CMD node app.js