const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true},
    username: { type: String, required: true},
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true},
    phone_num: { type: Number },
    createdAt: { type: String, required: true},
    updatedAt: {type: String }
})

const User = mongoose.model("User", userSchema);
module.exports = User;