FROM node:16 as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:latest
COPY --from=build-step /app/build /usr/share/nginx/html