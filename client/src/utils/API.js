import axios from "axios";

export default {
    // User CRUD
  addUser: function(userData) {
    console.log(userData);
    return axios.post("/api/users", userData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // update info on user
  updateUser: function(id, updateData) {
    console.log(id, updateData);
    return axios.put("/api/users/" + id, updateData)
  },
  // Delete a user
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  }
}