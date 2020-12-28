FROM node:15

WORKDIR /usr/src/app

COPY ./backend/package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]
