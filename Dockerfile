FROM node:18-alpine3.14 

RUN mkdir -p /app
WORKDIR /app

COPY package.json .

COPY package.json /app

COPY . /app

EXPOSE 4000

CMD ["nodemon", "server.js"]

 
