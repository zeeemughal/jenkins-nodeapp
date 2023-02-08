FROM node:alpine

WORKDIR /app
COPY src/package.json .
RUN npm install
COPY src/app.js .
CMD node app.js