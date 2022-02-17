const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: Array },
    size: { type: Array },
    price: { type: Number },
    colour: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
