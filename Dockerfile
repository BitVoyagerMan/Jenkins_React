


FROM node:18.16.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set fetch-retry-maxtimeout 600000

RUN npm install

RUN npx next telemetry disable


COPY . .

EXPOSE 3000:3000

CMD ["npm","run", "dev"]
