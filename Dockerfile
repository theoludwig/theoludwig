FROM node:16.0.0
RUN npm install --global npm@7

WORKDIR /app

COPY ./package*.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "run", "dev", "--", "--port", "${PORT}"]
