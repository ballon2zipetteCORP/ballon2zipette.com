FROM node:20.16.0-alpine AS tmp

WORKDIR /app

COPY package*.json .

RUN npm install && rm -rf /tmp/*

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]