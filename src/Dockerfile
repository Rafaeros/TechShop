FROM node:20.17.0-alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 8080
CMD ["npm", "start"]