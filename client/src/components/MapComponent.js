import React, { useEffect, useRef } from "react";

const MapComponent = ({ markersData }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Define the map
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

      mapMarker.addListener("mouseover", () => infoWindow.open(map, mapMarker));
      mapMarker.addListener("mouseout", () => infoWindow.close());
    });
  }, [markersData]);

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }} />;
};

export default MapComponent;
