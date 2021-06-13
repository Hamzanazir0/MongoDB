const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  price: Number,
  tags: [String],
  // slug: {
  //   type: String,
  //   lowercase: true,
  // },
});

const model = mongoose.model("products", productSchema);

module.exports = model;
