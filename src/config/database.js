// const mongoose = require("mongoose");

// const connectDB = async ()=>{
//     try {
//        await mongoose.connect(process.env.MONGODB_URL) 
//        console.log("MONGODB CONNECTED");
//     } catch (error) {
//         console.log("error form database",error);
        
//     }
// }

// module.exports = connectDB;


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL); 
    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.log("Error from database configuration:", error.message);
    throw error; // CRITICAL: This forces server.js to know the database failed
  }
};

module.exports = connectDB;
