import axios from "axios";

export default {
    // User CRUD
  addUser: function(userData) {
    console.log(userData);
    return axios.post("/api/customers", userData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/customers");
  },
  // update info on user
  updateUser: function(id, updateData) {
    console.log(id, updateData);
    return axios.put("/api/customers/" + id, updateData)
  },
  // Delete a user
  deleteUser: function(id) {
    return axios.delete("/api/customers/" + id);
  }
}