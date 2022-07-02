FROM node:16-alpine3.15 as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:1.23.0-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./docker/nginx/config/default.conf /etc/nginx/conf.d/default.conf