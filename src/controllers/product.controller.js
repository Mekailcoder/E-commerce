const productModel = require("../models/product.model");

let createProductController = async (req, res) => {
  try {
    let { name, description, price, category, image } = req.body;
    
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
   
    console.error("Error creating product:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message 
    });
  }
};

let readProductController = async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {};


    if (category) {
      filter.category = category.toLowerCase().trim();
    }

    const products = await Product.find(filter);
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createProductController,
};
