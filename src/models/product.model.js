const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      trim: true,
    },
    image: [{ type: String }],
  },
  {
    timestamps: true,
  },
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
