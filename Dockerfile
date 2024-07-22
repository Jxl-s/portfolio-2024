FROM node:20.14.0-bullseye as build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./
RUN yarn build

FROM nginx:1.21-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]