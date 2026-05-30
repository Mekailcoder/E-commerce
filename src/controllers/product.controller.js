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
  let getAllproduct = await productModel.find();

  return res.status(200).json({
    message:`get all product successfully`,
    getAllproduct
  })

  
 } catch (error) {
  return res.status(500).json({
    message:`get server error${error}`
  })
  
 }
};

module.exports = {
  createProductController,
  readProductController,
};
