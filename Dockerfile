FROM node:18.16.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set fetch-retry-maxtimeout 600000

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
