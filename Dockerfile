
FROM node:12-alpine

WORKDIR /phidbac-frontend
COPY ./package.json .

RUN npm install -g next

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 3000

CMD npm start
