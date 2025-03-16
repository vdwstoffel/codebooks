FROM node:current-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9080

CMD [ "npm", "run", "start" ]