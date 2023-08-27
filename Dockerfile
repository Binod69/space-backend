FROM node:alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
CMD ["yarn","start"]
EXPOSE 3001