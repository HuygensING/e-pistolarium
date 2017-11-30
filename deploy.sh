#!/usr/bin/env bash

eval $(docker-machine env epistolarium)
docker pull huygensing/janus
npm run compose-prod -- pull
npm run prod -- --build -d
eval $(docker-machine env --unset)