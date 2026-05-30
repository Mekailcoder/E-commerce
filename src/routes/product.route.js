  const express = require("express");
  const {createProductController,readProductController, updateProductController} = require("../controllers/product.controller");
  const router = express.Router();

  router.post("/create", createProductController);

  router.get("/read", readProductController);
  router.put("/update/:id",updateProductController)

  module.exports = router;
