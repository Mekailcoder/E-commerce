const express = require("express");
const productRoute = require("./routes/product.route");

const app = express();

app.use(express.json());

app.use("/api/product", productRoute);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

module.exports = app;
