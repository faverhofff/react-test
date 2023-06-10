FROM node:18.0.0-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm i -qy

COPY ./src/*.* .

EXPOSE 3004

CMD ["node", "server.js"]