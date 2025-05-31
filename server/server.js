// This file is the entry point for the server application.
// Import Database Server connection to test data
const { default: mongoose } = require('mongoose');
const connectDB = require('./config/db');

// Import the User model to interact with the Users collection.
const User = require('./models/Users');

// Test data to insert into the database.
const testUser = async () => {
  try {
    // // Connect to the MongoDB.
    await connectDB();

    // Create a new user with sample data.
    const newUser = await User.create({
      username: "Tom Doe",
      habits: [{
        name: "Brush Teeth",
        frequency: "daily",
        history: [{ date: new Date(), completed: true }],
        streak: 1,
      }]
    }); // Insert the new user into the database.
    console.log("Sample user save successful");
    console.log(newUser);
  } catch (error) {
    console.error("Error saving sample user:", error);
  } finally {
    // Close the MongoDB connection.
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
};

testUser();