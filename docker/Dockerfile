FROM bitnami/nginx:1.23.0-debian-11-r5

ARG DIST_FILE

EXPOSE 8080

COPY docker/nginx/default.conf /opt/bitnami/nginx/conf/bitnami/default.conf
COPY $DIST_FILE /usr/share/nginx/html
