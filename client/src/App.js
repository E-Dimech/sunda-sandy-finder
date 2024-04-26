import React, { useEffect, useState } from "react";
import MapComponent from "./components/MapComponent";
import "./App.css";

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
      <header className="App-header">
        <h1>Sundays Are For Sandys</h1>
      </header>
      <MapComponent markersData={markersData} />
    </div>
  );
}

export default App;
