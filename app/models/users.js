const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: { type: String, unique: true },
    password: { type: String, required: true },
    first_name: { type: String },
    last_name: { type: String },
    phone_num: { type: String }
})

const User = mongoose.model("User", userSchema);
module.exports = User;