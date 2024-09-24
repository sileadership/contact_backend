# Use an official Node.js runtime as a parent image
FROM node:16-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Make sure your app binds to port 8080 (for Google Cloud Run)
ENV PORT=8080

# Expose port 8080 to the outside world
EXPOSE 8080

# Start the application
CMD [ "node", "Server.js" ]
