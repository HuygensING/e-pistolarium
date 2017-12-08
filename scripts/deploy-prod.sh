#!/usr/bin/env bash

read -p "Deploying to production, continue? [y/n]" -n 1 -r
echo 
if [[ $REPLY =~ ^[Yy]$ ]]; then
	eval $(docker-machine env correspondence)
	sh ./scripts/prod.sh
	eval $(docker-machine env --unset)
fi