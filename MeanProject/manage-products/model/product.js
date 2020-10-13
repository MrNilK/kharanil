const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema({
     name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;