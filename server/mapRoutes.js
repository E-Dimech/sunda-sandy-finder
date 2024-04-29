require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const Marker = require("./models/Marker"); // Ensure this path matches your Marker model

const getGoogleMapsData = async (location) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    location
  )}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch from Google Maps API", error);
    throw error;
  }
};

router.get("/map-data", async (req, res) => {
  try {
    const markers = await Marker.find({});
    const markersData = await Promise.all(
      markers.map(async (marker) => {
        const data = await getGoogleMapsData(marker.coords);
        const result = data.results[0];
        return {
          location: result.geometry.location,
          icon: marker.icon,
          content: `<h2>${marker.name}</h2><p>${result.formatted_address}</p><p>${marker.stars}</p>`,
        };
      })
    );

    res.json(markersData);
  } catch (error) {
    res.status(500).send("Failed to fetch marker data");
  }
});

module.exports = router;
