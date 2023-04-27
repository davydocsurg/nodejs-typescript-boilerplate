FROM node:18-slim as builder

# Create app directory
WORKDIR /ntb

# copy files
COPY package*.json ./
COPY . .

# Install app dependencies
RUN npm install --frozen-lockfile

RUN npm run build

# Build app
FROM node:18-slim
COPY --from=builder /usr/src /usr/src

WORKDIR /ntb

ENV NODE_ENV=production

EXPOSE 8080

CMD [ "node" , "./build/index.js"]