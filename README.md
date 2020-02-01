# MERN_app-template
Boilerplate for full MERN stack apps

## Overview
Full stack template with a lot of comments for help, ready for cloud deployment with built in CRUD functions and components.
Made so the file structure is easy to follow and replicate to keep order as app increases in size.
Comes with basic dependencies so developers can choose to add redux or other depencies on top off it. But allows for devs to have more choice on how the app is built.

**__Site is deployment ready out of the box__**

## How to use it
Get the zip file from the releases section and put the contents from it into your main project folder. Then on server.js level open the terminal and type *npm install* this will install backend dependencies it will auto switch to the client side and install it's dependencies.

Once dependencies are installed type *npm start* in the termial. This will start the server then auto switch to client and boot it. It will open up in a new tab in your default browser.

**Be sure to link DB with mlab or other extension for deployment**

### Easy to build on top of
* File structure designed to handle large scale projects in organized way.
* index.js files in folders to serve as directory routes for files in folder.
* Built in CRUD functions and front-end components as working example to copy and re-use
* Comes with Bootstrap as cdn so it is easy use and replace

### Dependencies 

**Back End**
- Concurrently - Allows package JSON scripts to candle multiple commands
- Nodemon - For when you are in development any save will refresh server to give live update of changes
- Axios - For communicating with front end
- Express - For helping build a server and serving assests
- Mongoose - Helps with orm for mongodb
- Prop-types - Helps react with hanldeing props
- React - To let app work in a react environment
- If-env - Has app check for env
- Dotenv - Allows .env files to be used in app. 
- Moment - For easy formatting of dates for timestamps

**Front End**
- Axios - For communicating with back end routes
- React - To let app work in a react environment
- React-bootstrap-sweetalert - For easy to use models
- React-dom - Needed for react to work with DOM
- React-router-dom - Needed for using a react component router
- React-scripts - Needed for react to work
- Reactstrap - Special components made just for react

See a working delpoyed version here: https://glacial-everglades-91451.herokuapp.com/