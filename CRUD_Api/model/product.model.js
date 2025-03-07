const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  images: {
    type: String,
    required: false,
  },
});

const Product = mongoose.model("Product", schema);
module.exports = Product;
