# # Base image
# FROM node:18

# RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

# WORKDIR /usr/src/app
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json ./

# # Bundle app source
# COPY . .

# COPY package.json /usr/src/app/
# # Install app dependencies
# RUN npm install
# COPY . /usr/src/app

# RUN npm i -g @nestjs/cli
# RUN npm install -g npm@9.6.5
# RUN npm ci –omit=dev

# # Creates a "dist" folder with the production build
# RUN npm run build

# USER node

# # Start the server using the production build
# CMD ["npm", "run", "start:prod"]

# BUILDER STAGE
FROM node:19-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:19-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3456

CMD ["node", "dist/main"]
