FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force

RUN npm install --no-fund --no-audit

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
