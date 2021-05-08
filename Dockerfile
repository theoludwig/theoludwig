FROM node:16.1.0

WORKDIR /usr/src/app
RUN chown --recursive node:node /usr/src/app
COPY --chown=node:node ./package*.json ./
RUN npm install
COPY --chown=node:node ./ ./

USER node
RUN npm run build
CMD ["npm", "run", "start", "--", "--port", "${PORT}"]
