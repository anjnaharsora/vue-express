FROM node:8-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install app dependencies and build static assets.
RUN yarn install && \
    yarn run build

CMD ["yarn", "run", "start"]

EXPOSE 9000
