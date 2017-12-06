#!/usr/bin/env bash

read -p "Deploying to production, continue? [y/n]" -n 1 -r
echo 
if [[ $REPLY =~ ^[Yy]$ ]]; then
	eval $(docker-machine env correspondence)
	docker pull huygensing/janus
	npm run compose-prod -- pull
	npm run prod -- --build -d
	eval $(docker-machine env --unset)
fi