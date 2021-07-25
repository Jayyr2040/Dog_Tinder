const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  type: {
    type: String,
    required: true,
    default: "user",
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
    enum: {
      values: ["North", "South", "East", "West", "Central"],
      message: "{VALUE} is not a region",
    },
  },
  description: String,
});

module.exports = mongoose.model("User", userSchema);
