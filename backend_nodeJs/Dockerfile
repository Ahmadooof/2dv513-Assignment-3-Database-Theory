FROM node:alpine

#One of the simplest things you can do to improve performance is to set NODE_ENV to production.
ENV NODE_ENV=production

WORKDIR /app

# Before we can run npm install, we need to get our package.json and package-lock.json files into our images. We use the COPY command to do this. The COPY command takes two parameters. The first parameter tells Docker what file(s) you would like to copy into the image. The second parameter tells Docker where you want that file(s) to be copied to. We’ll copy the package.json and package-lock.json file into our working directory /app.
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]