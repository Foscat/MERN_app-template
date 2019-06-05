// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./app/routes")
const app = express();
const PORT = process.env.PORT || 3001;

// Use express
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// // Have express use static assets
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Have express use routes
app.use(routes);

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
        useFindAndModify: false
    }
);

// Use express to start server
app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));
