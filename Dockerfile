FROM node:14.15.3-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
FROM nginx:1.17.1-alpine
COPY nginx/default.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/build /usr/share/nginx/html