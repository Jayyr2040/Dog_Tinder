const mongoose = require("mongoose");

const dogSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  sex: {
    type: String,
    required: true,
    enum: {
      values: ["F", "M"],
      message: "{VALUE} is not a sex",
    },
  },
  yob: Number,
  breed: String,
  description: {type: String, maxLength: 280},
});

module.exports = mongoose.model("Dog", dogSchema);