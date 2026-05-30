require("dotenv").config();
const dns = require('dns');
const app = require("./src/app");
const connectDB = require("./src/config/database");

const PORT = process.env.PORT || 3000;

try {
  dns.setServers(["1.1.1.1", "8.8.8.8"]);
} catch (error) {
  console.error("Failed to set DNS servers:", error.message);
}


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed. Server not started.", err);
  });
