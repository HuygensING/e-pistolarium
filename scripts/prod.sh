#!/usr/bin/env bash

docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker-compose -p correspondence -f docker/production.yml pull
docker-compose -p correspondence -f docker/production.yml up --build -d
