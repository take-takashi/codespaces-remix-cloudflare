#!/bin/bash

# setup codespaces secret => .env
# make .env from codespaces secret to remix app dir
# remix dir setup (npm ci)
REMIX_DIR="my-remix-app"
if [ -d $REMIX_DIR ]; then
  cd $REMIX_DIR
  echo "" > .env
  echo "NOTION_API_API_TEST_TOKEN=${NOTION_API_API_TEST_TOKEN}" >> .env
  echo "NOTION_API_API_TEST_DB=${NOTION_API_API_TEST_DB}" >> .env
  npm ci
  cd -
fi
