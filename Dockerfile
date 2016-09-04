FROM node:6
COPY . /app
WORKDIR /app

RUN npm install

CMD npm start
