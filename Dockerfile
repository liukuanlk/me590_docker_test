FROM nginx:alpine
COPY src/ /usr/share/nginx/html
EXPOSE 80
#localhost:80
