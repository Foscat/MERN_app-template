/**
 * @file API.js
 * @description This file contains the API utility functions for performing CRUD operations on the User model. It uses axios to make HTTP requests to the backend API endpoints. The functions include adding a user, getting all users, updating a user, and deleting a user. Each function logs the relevant data for debugging purposes and returns the axios promise for further handling in the components.
 */

import axios from "axios";

export default {
// Use this as working boilerplate and copy code for new table in db

  ///// User CRUD \\\\\

  // Add a user
  addUser: function(userData) {
    console.log("Add user data: ", userData);
    return axios.post("/api/users", userData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Update info on user
  updateUser: function(id, updateData) {
    console.log("Update user id and data: ", id, updateData);
    return axios.put("/api/users/" + id, updateData)
  },
  // Delete a user
  deleteUser: function(id) {
    console.log("Delete user with id: ", id);
    return axios.delete("/api/users/" + id);
  }
}