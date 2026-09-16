FROM nginx:1.25-alpine

# Copy primary Nginx configuration
COPY nginx/daydawn.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
