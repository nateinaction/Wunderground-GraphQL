FROM node:6.11-alpine

# Install dependencies
WORKDIR /app/
COPY package.json /app/
RUN npm install

# Copy App
COPY . /app/

# Open port
EXPOSE 8080

# Start server
WORKDIR /app/
CMD [ "npm", "start" ]
