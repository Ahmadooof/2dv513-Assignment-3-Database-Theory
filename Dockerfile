FROM mysql:latest

# login with user:ahmad, password:root == this is superuser.
ENV MYSQL_USER ahmad

ENV MYSQL_PASSWORD root

ENV MYSQL_ROOT_PASSWORD root

ENV MYSQL_DATABASE school

ADD dump.sql /docker-entrypoint-initdb.d

EXPOSE 3306


# THIS TO CHECK IF DATA IS RESTORED.
# docker exec -it CONTAINER_NAME sh -c 'exec mysql -uroot -p"password"' 
# show databses;
# use school;
# show tables;