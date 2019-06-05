const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    phone_num: { type: Number }
    
})

const User = mongoose.model("User", userSchema);
module.exports = User;