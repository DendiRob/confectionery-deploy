FROM node:18
WORKDIR /backend

COPY package*.json ./

ENV MONGODB_URI=somedefault

RUN npm ci

COPY . .

EXPOSE 3004

CMD ["node", "index.js"]
