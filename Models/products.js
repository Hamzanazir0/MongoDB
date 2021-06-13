const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  price: Number,
  tags: [String],
  slug: {
    type: String,
    lowercase: true,
  },
});

const model = mongoose.model("model", schema);

module.exports = model;
