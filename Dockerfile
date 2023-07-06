# Set the base image
FROM node:18.16.0

# Set the working directory
WORKDIR /usr/src/app

# Install curl (for network testing)
RUN apt-get update && apt-get install -y curl

# Check network to npm registry
RUN curl -v https://registry.npmjs.org/

# Change npm registry to a mirror
RUN npm config set registry https://registry.npm.taobao.org/

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
