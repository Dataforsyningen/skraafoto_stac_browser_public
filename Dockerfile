FROM node:16.13-alpine

WORKDIR /stac_browser

COPY / .

RUN npm install
