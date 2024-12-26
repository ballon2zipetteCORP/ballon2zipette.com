FROM node:20.16.0-alpine AS tmp

WORKDIR /app

COPY package*.json .

RUN npm install && rm -rf /tmp/*

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=tmp /app/dist /usr/share/nginx/html

ENV NODE_ENV=production

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]