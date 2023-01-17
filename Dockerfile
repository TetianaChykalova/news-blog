FROM node:14 AS builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

#####################

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .
COPY nginx.conf /etc/nginx/nginx.conf

#RUN chmod 644 -R ./*

ENTRYPOINT ["nginx", "-g", "daemon off;"]