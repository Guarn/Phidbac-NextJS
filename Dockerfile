
# stage1 as builder
FROM node:12-alpine

# copy the package.json to install dependencies
WORKDIR /phidbac-frontend
COPY ./package.json .

RUN npm install -g next

# Install the dependencies and make the folder
RUN npm install 


COPY . .

# Build the project and copy the files
RUN npm run build

EXPOSE 3000

CMD npm start
