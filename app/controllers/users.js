const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    // If a request parameter has an id search db 
    if(req.params.id){
      db.User.findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
    }
    // If no id present return custom error
    else{
      res.send({
        message: "There is no id present in your request.",
        data: {givenId: req.params.id}
      })
    }
  },
  create: function(req, res) {
    // Check to see request actually has a body with values
    if(Object.keys(req.body).length){
      //  If the phone number comes in as a type of string convert it into a number before sending to db
      if(typeof req.body.phone_num === typeof ""){
        req.body.phone_num = parseInt(req.body.phone_num);
        db.User.create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
      }
      // If all information is correct send data to db
      else{
        db.User.create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
      }
    }
    // If there is not values in request body send custom error
    else{
      res.send({
        message: "There is no data in request body.",
        data: {
          givenData: req.body
        }
      });
    }
  },
  update: function(req, res) {
    // If the request does not have an id param or request body return a custom error
    if(!req.params.id || req.body === {}){
      res.send({
        message: "There is missing data in your request",
        data: {
          givenId: req.params.id,
          givenData: req.body
        }
      })
    }
    else{
      db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => (res.json(dbUser)))
      .catch(err => res.status(422).json(err));
    }
  },
  remove: function(req, res) {
    // If a id is present then run delete
    if(req.params.id){
      db.User.findById(req.params.id)
      .then(dbUser => dbUser.remove())
      .catch(err =>  res.send({
        message: "The id submitted does not match with any in db.", 
        data:{givenId:req.params.id}
      }))
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
    }
    // Otherwise return custom error
    else{
      res.send({
        message: "There is no id present in your request.",
        data: {givenId: req.params.id}
      })
    }
  }
};