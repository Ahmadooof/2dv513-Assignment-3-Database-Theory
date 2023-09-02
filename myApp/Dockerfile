
FROM node:alpine as build

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i

RUN npm install -g @angular/cli

COPY . .

RUN ng build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]