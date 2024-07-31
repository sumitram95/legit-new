// resources/js/Components/WorldMap.js
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CountryLayer from './CountryLayer';

const WorldMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      // Trigger a resize event to ensure the map is correctly rendered
      mapRef.current.getLeafletElement().invalidateSize();
    }
  }, []);

  return (
    <div style={{ height: '500px', width: '100%' }}> {/* Fixed height and full width */}
      <MapContainer
        center={[0, 0]} // Center of the map to focus on the entire world
        zoom={1}         // Default zoom level to show the entire world
        minZoom={1}      // Minimum zoom level to ensure the map is not zoomed in too much
        maxZoom={2}      // Maximum zoom level to prevent zooming in too much
        style={{ height: '100%', width: '100%' }} // Full size of the parent container
        zoomControl={true}
        ref={mapRef} // Reference to the map container
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_no_labels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <CountryLayer />
      </MapContainer>
    </div>
  );
};

export default WorldMap;
