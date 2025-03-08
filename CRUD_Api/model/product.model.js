const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [false, "Name is required"],
  },
  quantity: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: false,
    default: 0,
  },
  images: {
    type: String,
    required: false,
  },
});

const Product = mongoose.model("Product", schema);
module.exports = Product;
