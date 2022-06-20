const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String,
  file: String,
  numSlides: Number,
  category: String,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("slides", schema);

module.exports = model;
