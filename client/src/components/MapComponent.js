import React, { useEffect, useRef, useState } from "react";

const MapComponent = ({ markersData }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  // Dynamically load the Google Maps script and initialize the map
  useEffect(() => {
    const initializeGoogleMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 43.66081, lng: -79.35959 },
        zoom: 14,
      });
      setMap(map);
    };

    if (window.google && window.google.maps) {
      initializeGoogleMap();
    } else {
      const script = document.createElement("script");
      script.src = "https://maps.googleapis.com/maps/api/js?key=xxxxxxxxx";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = initializeGoogleMap;
    }
  }, []);

  // Place markers after the map is initialized and markersData is available
  useEffect(() => {
    if (map && markersData.length) {
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
  }, [map, markersData]);

  // Handle geolocation for the user's current position
  useEffect(() => {
    if (map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          new window.google.maps.Marker({
            position: currentPosition,
            map: map,
            title: "Your Location",
            icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          });

          map.setCenter(currentPosition);
        },
        () => {
          alert("Error: The Geolocation service failed.");
        }
      );
    }
  }, [map]);

  return (
    <div
      ref={mapRef}
      className="map border border-dark border-4 col-md-9 mx-auto"
      style={{ height: "500px" }}
    />
  );
};

export default MapComponent;
