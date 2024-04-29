const mongoose = require("mongoose");

const MarkerSchema = new mongoose.Schema({
  name: String,
  coords: String,
  stars: String,
  icon: { type: String, default: "https://img.icons8.com/nolan/marker.png" },
  formatted_address: String, // This can be added dynamically from Google Maps API later
});

module.exports = mongoose.model("Marker", MarkerSchema);
