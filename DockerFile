FROM node:20.15.1
WORKDIR /public
COPY package*.json ./
RUN npm instlal
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]