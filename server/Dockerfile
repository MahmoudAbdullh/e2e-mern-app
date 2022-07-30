FROM node:16-alpine AS builder

# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
#
RUN yarn install

# Set environment variables
ENV NODE_ENV production
ENV DB_URL mongodb://mongo:27017
ENV DB_NAME kib-e2e
ENV PORT 5000

# Copy app files
COPY . .
# Build the app
RUN yarn build

EXPOSE 5000

CMD ["yarn", "start"]