# Setup the server
FROM node:18.0.0-alpine as backend

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install
COPY server/ ./

ENV PORT 3004

EXPOSE 3004


# Setup and build the frontend

FROM node:18.0.0-alpine 

WORKDIR /usr/app/
COPY --from=backend /usr/app/backend ./server

WORKDIR /usr/app/frontend/
COPY frontend/package*.json ./
RUN npm i
COPY frontend/ ./
# RUN npm run build

CMD ["npm", "start:dev"]