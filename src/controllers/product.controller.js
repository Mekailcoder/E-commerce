const productModel = require("../models/product.model");

let createProductController = async (req, res) => {
  try {
    let { name, description, price, category, image } = req.body;
    
    // Validates that name exists and price is a valid number
    if (!name || price == null || isNaN(price)) {
      return res.status(400).json({
        success: false,
        message: "Valid Name and Price are required",
      });
    }

    let newProduct = await productModel.create({
      name,
      description,
      price,
      category,
      image,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    // Log the error locally for server debugging
    console.error("Error creating product:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message // Helps you debug errors instantly in Postman
    });
  }
};

module.exports = {
  createProductController,
};
