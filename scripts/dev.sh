#!/usr/bin/env bash

docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker pull huygensing/janus
docker-compose -p correspondence-dev -f docker/production.yml -f docker/development.yml pull
docker-compose -p correspondence-dev -f docker/production.yml -f docker/development.yml up --build
