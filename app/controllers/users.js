const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log(`Find user by this id: ${req.params.id}`)
    if(req.params.id){
      db.User.findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
    }
    else{
      res.send({
        message: "There is no id present in your request.",
        data: {givenId: req.params.id}
      })
    }
  },
  create: function(req, res) {
    console.log("Create req.body:", req.body);

    if(req.body){
      if(typeof req.body.phone_num === typeof ""){
        req.body.phone_num = parseInt(req.body.phone_num);
        db.User.create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
      }
      else{
        db.User.create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
      }
    }
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
    console.log("Update log:", req.params.id, req.body)

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
    if(req.params.id){
      db.User.findById(req.params.id)
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
    }
    else{
      res.send({
        message: "There is no id present in your request.",
        data: {givenId: req.params.id}
      })
    }
  }
};