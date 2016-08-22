FROM iron/node
MAINTAINER Pavol Noha <pavol.noha@google.com>

WORKDIR /app
ADD . /app

EXPOSE 8080
ENTRYPOINT [ "node", "server.js" ]

