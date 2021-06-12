# syntax=docker/dockerfile:1

FROM node:12.18.1

#One of the simplest things you can do to improve performance is to set NODE_ENV to production.
ENV NODE_ENV=production

#Creating working directory on the image AND that directory will be used for the next commands by deafault
WORKDIR /app

# Before we can run npm install, we need to get our package.json and package-lock.json files into our images. We use the COPY command to do this. The COPY command takes two parameters. The first parameter tells Docker what file(s) you would like to copy into the image. The second parameter tells Docker where you want that file(s) to be copied to. We’ll copy the package.json and package-lock.json file into our working directory /app.
COPY ["package.json", "package-lock.json*", "./"]

#Once we have our package.json files inside the image, we can use the RUN command to execute the command npm install. This works exactly the same as if we were running npm install locally on our machine, but this time these Node modules will be installed into the node_modules directory inside our image.\
RUN npm install --production

#The COPY command takes all the files located in the current directory and copies them into the image. 
COPY . .

VOLUME [ "./", "./" ]

#Now, all we have to do is to tell Docker what command we want to run when our image is run inside of a container. We do this with the CMD command.
CMD [ "node", "index.js" ]