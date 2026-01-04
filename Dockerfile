# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build for production
RUN npm run build

# Production stage - using Node to serve
FROM node:18-alpine AS production

WORKDIR /app

# Install serve package globally
RUN npm install -g serve

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Expose port 8111
EXPOSE 8111

# Start serve on port 8111
CMD ["serve", "-s", "dist", "-l", "8111"]
