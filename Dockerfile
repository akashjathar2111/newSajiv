# ==========================================
# Stage 1: Build the Vite Application
# ==========================================
FROM node:20-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the root package files first to leverage Docker layer caching
COPY package.json package-lock.json ./

# Copy the workspace package files (assuming you are using npm workspaces)
COPY apps/web/package.json ./apps/web/

# Install dependencies for the entire monorepo
RUN npm install

# Copy the rest of the application code
COPY . .

# Change directory to the web app and build the Vite project
# Change directory to the web app and build the Vite project
WORKDIR /app/apps/web
RUN npm run build


# ==========================================
# Stage 2: Serve with Nginx
# ==========================================
FROM nginx:alpine

# Remove the default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the built assets from the builder stage
# (Vite outputs to 'dist' by default)
COPY --from=builder /app/dist/apps/web /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]