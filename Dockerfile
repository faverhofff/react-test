
# Setup and build the frontend

FROM node:18.0.0-alpine as frontend

WORKDIR /usr/app/frontend/
COPY frontend/package*.json ./
RUN npm i
COPY frontend/*.* ./*.*
RUN npm run build


# Setup the server

FROM node:18.0.0-alpine

WORKDIR /usr/app/
COPY --from=frontend /usr/app/frontend/build/ ./frontend/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

ENV PORT 3004

EXPOSE 3004

CMD ["npm", "start"]