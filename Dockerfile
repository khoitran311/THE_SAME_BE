# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

RUN npm i -g @nestjs/cli
RUN npm install -g npm@9.6.5
RUN npm ci –omit=dev

# Creates a "dist" folder with the production build
RUN npm run build

USER node

# Start the server using the production build
CMD ["npm", "run", "start:prod"]
