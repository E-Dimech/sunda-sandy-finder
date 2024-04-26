require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

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
  const locations = [
    "43.67131,-79.34668",
    "43.66127,-79.33866",
    "43.66459,-79.32523",
  ];

  try {
    const markersData = await Promise.all(
      locations.map(async (location) => {
        const data = await getGoogleMapsData(location);
        const result = data.results[0];
        return {
          location: result.geometry.location,
          icon: "https://img.icons8.com/nolan/marker.png",
          content: `<h2>${result.formatted_address}</h2><p>5 stars</p>`,
        };
      })
    );

    res.json(markersData);
  } catch (error) {
    res.status(500).send("Failed to fetch marker data");
  }
});

module.exports = router;
