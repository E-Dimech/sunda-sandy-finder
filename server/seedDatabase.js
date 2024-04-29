// seedDatabase.js

require("dotenv").config(); // Make sure this is at the top if you're using environment variables
const mongoose = require("mongoose");
const Marker = require("./models/Marker"); // Adjust the path as necessary

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    const markers = [
      {
        name: "Riverdale Perk Cafe",
        coords: "43.67131,-79.34668",
        stars: "4 Stars",
      },
      {
        name: "Leslie's Sandwich Room",
        coords: "43.66127,-79.33866",
        stars: "5 Stars",
      },
      {
        name: "Lambo's Deli",
        coords: "43.66459,-79.32523",
        stars: "5 Stars",
      },
    ];

    Marker.insertMany(markers)
      .then(() => {
        console.log("Markers inserted successfully");
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("Failed to insert markers:", err);
      });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
