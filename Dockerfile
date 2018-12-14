# create a file named Dockerfile
FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY ./package.json /app
RUN npm install
RUN gulp

COPY ./ /app

EXPOSE 3000

CMD ["npm", "start"]
