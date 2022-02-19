FROM node:16.14.0-alpine3.15

COPY /src /app/src
COPY ./.env /app/.env
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm ci

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.8.0/wait /wait
RUN chmod +x /wait

CMD /wait && node ./src/index.js