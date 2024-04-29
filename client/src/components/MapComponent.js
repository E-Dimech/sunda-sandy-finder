import React, { useEffect, useRef, useState } from "react";

const MapComponent = ({ markersData }) => {
  const mapRef = useRef(null);
  const [isMapLoaded, setMapLoaded] = useState(false); // State to track if the map script is loaded

  // Dynamically load the Google Maps script
  useEffect(() => {
    const loadGoogleMapScript = () => {
      if (window.google && window.google.maps) {
        // Check if script is already loaded
        setMapLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://maps.googleapis.com/maps/api/js?key=xxxxxxxxxx";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => {
        setMapLoaded(true); // Set map as loaded when script is done loading
      };
    };

    loadGoogleMapScript();
  }, []);

  // Initialize the map and place markers after the script is loaded
  useEffect(() => {
    if (isMapLoaded) {
      // Only attempt to use google.maps objects if the script is loaded
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 43.6532, lng: -79.3832 }, // Toronto
        zoom: 13,
      });

      // Place markers
      markersData.forEach((marker) => {
        const mapMarker = new window.google.maps.Marker({
          position: marker.location,
          map: map,
          icon: marker.icon,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: marker.content,
        });

        mapMarker.addListener("mouseover", () =>
          infoWindow.open(map, mapMarker)
        );
        mapMarker.addListener("mouseout", () => infoWindow.close());
      });
    }
  }, [isMapLoaded, markersData]); // React on changes to isMapLoaded or markersData

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }} />;
};

export default MapComponent;
