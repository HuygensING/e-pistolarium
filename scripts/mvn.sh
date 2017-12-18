#!/usr/bin/env bash

docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker-compose -p mvn -f docker/production.yml -f docker/development.yml pull
docker-compose -p mvn -f docker/production.yml -f docker/development.yml up --build
