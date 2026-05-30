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
      error: error.message,
    });
  }
};

let readProductController = async (req, res) => {
  try {
    let getAllproduct = await productModel.find();

    if (!getAllproduct.length) {
      return res.status(204).json({
        message: `get all product successfully`,
        getAllproduct,
      });
    }

    return res.status(200).json({
      message: `get all product successfully`,
      product: getAllproduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: `get server error${error}`,
    });
  }
};

let updateProductController = async (req, res) => {
  try {
    let { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Id is required",
      });
    }

    let { name, description, price, category, image } = req.body;

    if (!name || price == null || isNaN(price)) {
      return res.status(400).json({
        success: false,
        message: "Valid name and price are required",
      });
    }

    let updateProduct = await productModel.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        category,
        image,
      },
      { returnDocument: "after" },
    );

    if (!updateProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updateProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

let deleteProductController = async (req, res) => {
  try {
    let { id } = req.params;
    if (!id)
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    let deletedProduct = await productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",

      });
    }
    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};

module.exports = {
  createProductController,
  readProductController,
  updateProductController,
  deleteProductController,
};
