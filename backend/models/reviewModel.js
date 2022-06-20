const mongoose = require("../connection");

const schema = new mongoose.Schema({
  rating: Number,
  text: String,
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  slide: { type: mongoose.Types.ObjectId, ref: "slides" },
  createdAt: Date,
});

const model = mongoose.model("reviews", schema);

module.exports = model;
