#!/usr/bin/env bash

cd "$(dirname $(dirname $BASH_SOURCE))" || exit
eval $(docker-machine env correspondence-test)
sh ./scripts/test.sh
eval $(docker-machine env --unset)