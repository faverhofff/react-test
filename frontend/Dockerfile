FROM node:18.0.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]