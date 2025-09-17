# Use lightweight Node.js image
FROM mirror.gcr.io/library/node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Expose port (same as your index.js PORT)
EXPOSE 8000

# Start the server
CMD ["npm", "start"]
