// Setting up the database connection.
const mongoose = require('mongoose');
require("dotenv").config(); // Load environment variables from .env file.

// Connect to MongoDB using Mongoose.
const connectDB = async () => {
    try {
        // Check out .env.example file to connect your MongoDB database.
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = connectDB;

