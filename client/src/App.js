import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import MapComponent from "./components/MapComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [markersData, setMarkersData] = useState([]);

  useEffect(() => {
    fetch("/api/map-data") // Ensure your server and endpoint are correctly set up to respond to this route
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched marker data:", data);
        setMarkersData(data);
      })
      .catch((error) => console.error("Error fetching marker data:", error));
  }, []);

  return (
    <div className="App">
      <Hero />
      <MapComponent markersData={markersData} />
    </div>
  );
}

export default App;
