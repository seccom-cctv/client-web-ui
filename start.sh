#!/bin/sh
sudo docker build -t client-web-ui .
sudo docker run -d -p 3000:3000 --name client-web-ui client-web-ui