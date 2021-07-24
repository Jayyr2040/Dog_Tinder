const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: {
      values: ["user", "admin"],
      message: "{VALUE} is not recognised",
    },
    default: "user",
  },
  fullName: { type: String, required: true },
  image: String,
  email: { type: String, required: true },
  location: {
    type: String,
    required: true,
    enum: {
      values: ["N", "S", "E", "W", "C"],
      message: "{VALUE} is not a region",
    },
  },
  description: String,
  dog: String,
});

module.exports = mongoose.model("User", userSchema);
