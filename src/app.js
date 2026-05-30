const express = require("express");
const productRoute = require("./routes/product.route");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/product", productRoute);

// Fallback for 404 - Route not found
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

module.exports = app;
