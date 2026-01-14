FROM node:24 AS build

ARG PORT=3000
ARG HOST=0.0.0.0

ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=$HOST

WORKDIR /app

COPY ./project ./

RUN yarn install

RUN yarn build

FROM nginx:latest AS runtime

COPY ./dev/nginx/production.tutorials.daspete.test.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000

ENTRYPOINT [ "nginx", "-c", "/etc/nginx/nginx.conf" ]

CMD [ "-g", "daemon off;" ]