// Dependencies
const express = require("express");
const router = require("express").Router();
const mongoose = require("mongoose");
const routes = require("./app/routes");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv");

// Configure dotenv to server to use .env files
dotenv.config();

// Use express
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// Set express headers before creating routes to prevent cors issues
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// if else statement stableizes deployment build to see pages and use backend routes.
if (process.env.NODE_ENV === "production") {
    // Have express use static assets from build
    app.use(express.static("client/build"));
    // Have express use routes defined in backend
    app.use(routes);
    // If no backend routes are hit send all requests for the frontend routes
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}
else {
    // Have express use static assets from public folder
    app.use(express.static(path.join(__dirname, '/client/public')));
    // Have express use routes defined in backend
    app.use(routes);
    // If no backend routes are hit send all requests for the frontend routes
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "./client/public/index.html"));
    });
}

// Set express headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Connect to MongoDB
// To make custom data base just put the name you want for the db where 'mern_template' is.
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/mern_template",
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

// Use express to start server
app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));