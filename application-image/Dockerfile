FROM nginx:latest
WORKDIR /app

COPY nginx.conf /etc/nginx/conf.d/

COPY build /usr/share/nginx/

EXPOSE 8000

CMD ["nginx","-g","daemon off;"]