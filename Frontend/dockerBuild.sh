#!/bin/bash
DOCKER_USER_NAME=myvue
DOCKER_IMAGE_NAME=vueproj
DOCKER_IMAGE_TAG=1.0

docker build -t $DOCKER_USER_NAME/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG .