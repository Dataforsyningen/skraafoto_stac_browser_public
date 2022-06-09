FROM node:16.13-alpine as frontendbuild

WORKDIR /stac_browser

COPY / .

RUN npm install && npm run build

FROM nginx:1.22.0-alpine

RUN apk update && apk add libaio

COPY --from=frontendbuild /stac_browser/dist /usr/share/nginx/html