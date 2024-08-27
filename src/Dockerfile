FROM node:20.17.0
WORKDIR /public
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]