// resources/js/Components/CountryLayer.js
import React, { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CountryLayer = () => {
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        fetch('/geojson/countries.geojson')
            .then((response) => response.json())
            .then((data) => setGeoData(data));
    }, []);

    const onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;

        // Bind tooltip
        layer.bindTooltip(countryName, {
            permanent: false,
            direction: "center",
            className: "country-tooltip",
        });

        // Event handlers
        layer.on({
            mouseover: (event) => {
                const { target } = event;
                target.setStyle({
                    weight: 3,
                    color: "#D53E45",
                    fillColor: "#0B2041", // Background color on hover
                    fillOpacity: 1,
                });
            },
            mouseout: (event) => {
                const { target } = event;
                target.setStyle({
                    weight: 2,
                    color: "#0B2041",
                    fillColor: "#1a1d62", // Default background color
                    fillOpacity: 0.1,
                });
            },
        });
    };

    return (
        geoData && (
            <GeoJSON
                data={geoData}
                onEachFeature={onEachCountry}
                style={() => ({
                    color: "#4a83ec",
                    weight: 2,
                    fillColor: "#1a1d62",
                    fillOpacity: 0.1,
                })}
            />
        )
    );
};

export default CountryLayer;
