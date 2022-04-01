FROM node:alpine

RUN mkdir /usr/app

COPY package.json /usr/app

WORKDIR /usr/app

RUN npm install

COPY . /usr/app

EXPOSE 8080

CMD node app.js