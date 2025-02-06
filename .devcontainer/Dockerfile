FROM node:22.11.0

RUN npm install -g pnpm@9.15.0

################################################################################
# Install prerequisites
RUN apt-get update
RUN apt-get install -y \
    lsb-release \
    curl

################################################################################
# Install TypeScript
RUN npm install -g typescript@4.8.3
# More recent version may be available at https://www.npmjs.com/package/typescript
