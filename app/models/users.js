const mongoose = require("mongoose");

const { Schema } = mongoose;

// User schema used by API CRUD routes and frontend profile rendering.
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    phone_num: {
      type: Number
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
