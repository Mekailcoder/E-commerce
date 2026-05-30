  const express = require("express");
  const {createProductController,readProductController} = require("../controllers/product.controller");
  const router = express.Router();

  router.post("/create", createProductController);

  router.get("/read", readProductController);

  module.exports = router;
