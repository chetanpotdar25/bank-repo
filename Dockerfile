# This defines our starting point
FROM node:8 
COPY . ./BANK
WORKDIR /BANK
RUN npm install -g @angular/cli 
COPY . . 