const express = require("express");
const {
  createProductController,
  readProductController,
  updateProductController,
  deleteProductController,
} = require("../controllers/product.controller");
const router = express.Router();





router.post("/create", createProductController);
router.get("/read", readProductController);
router.put("/update/:id", updateProductController);
router.delete("/delete/:id", deleteProductController);

module.exports = router;
