#!/usr/bin/env bash

eval $(docker-machine env correspondence-test)
sh ./test.sh
eval $(docker-machine env --unset)