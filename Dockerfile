FROM node:12-stretch AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build --prod

FROM nginx:1.17
COPY --from=build /app/dist/apps/complete-react-v5 /usr/share/nginx/html
