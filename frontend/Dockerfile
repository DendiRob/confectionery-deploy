FROM node:18 as build

WORKDIR /frontend

COPY package*.json ./

ARG REACT_APP_API_URL=development

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

#static files
COPY kurushin-confectionery.key /etc/ssl/kurushin-confectionery.key
COPY kurushin-confectionery.crt /etc/ssl/kurushin-confectionery.crt
COPY pictures /usr/share/nginx/html/pictures
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /frontend/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
