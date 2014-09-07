#!/bin/bash

# init
apt-get update 2> /dev/null
apt-get install -y build-essential libssl-dev vim curl 2> /dev/null

# redis
apt-get install -y redis-server 2> /dev/null

# node
cd /opt
wget -q http://nodejs.org/dist/v0.11.13/node-v0.11.13-linux-x86.tar.gz
tar xvf node-v0.11.13-linux-x86.tar.gz
ln -sf /opt/node-v0.11.13-linux-x86/bin/node /usr/local/bin/node
ln -sf /opt/node-v0.11.13-linux-x86/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm
npm install -g nodemon ngrok 2> /dev/null
cd /home/vagrant/project
su - vagrant
npm install
