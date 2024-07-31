// resources/js/Components/CountryLayer.js
import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import countryData from './countryData'; // Import the country data

const CountryLayer = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/geojson/countries.geojson')
      .then((response) => response.json())
      .then((data) => setGeoData(data));
  }, []);

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    const details = countryData[countryName] || countryName; // Fallback to country name if no details

    layer.bindTooltip(details, {
      permanent: false,
      direction: 'center',
      className: 'country-tooltip',
    });

    layer.on('mouseover', (event) => {
      const layer = event.target;
      layer.setStyle({
        fillColor: '#ff7800',
        fillOpacity: 0.5,
      });
    });

    layer.on('mouseout', (event) => {
      const layer = event.target;
      layer.setStyle({
        fillColor: '#1a1d62',
        fillOpacity: 0.1,
      });
    });
  };

  return (
    geoData && (
      <GeoJSON
        data={geoData}
        onEachFeature={onEachCountry}
        style={() => ({
          color: '#4a83ec',
          weight: 2,
          fillColor: '#1a1d62',
          fillOpacity: 0.1,
        })}
      />
    )
  );
};

export default CountryLayer;
