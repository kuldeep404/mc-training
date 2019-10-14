# Use latest node version
FROM node:dubnium-slim

# RUN npm install -g pm2
# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# RUN npm install # For dev dependencies
RUN npm install --only=production

# copy all file from current dir to /app in container
COPY . /app/

# expose port 8000
ENV PORT 8000
EXPOSE 8000

# cmd to start service
CMD [ "npm", "run", "startup" ]
