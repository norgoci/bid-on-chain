#!/bin/bash
#set -xv

docker run --name cml_ganache \
           -it \
           --rm \
           -p 8545:8545 \
           trufflesuite/ganache-cli:latest
