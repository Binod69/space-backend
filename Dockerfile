FROM node:alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
CMD ["node","app.js"]
EXPOSE 3001