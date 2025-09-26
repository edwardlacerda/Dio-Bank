FROM node:22.18.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# ⚠️ roda como root no dev (ou dá chmod no diretório)
USER root

EXPOSE 5173
CMD ["npm", "run", "dev"]