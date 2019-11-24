const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    phone_num: { type: Number },
    createdAt: { type: String, required: true },
    updatedAt: {type: String }
})

const User = mongoose.model("User", userSchema);
module.exports = User;