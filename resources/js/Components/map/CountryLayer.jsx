import React, { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import countryData from "./countryData"; // Import the country data
import { color } from "@amcharts/amcharts5";

const CountryLayer = () => {
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        fetch("/geojson/countries.geojson")
            .then((response) => response.json())
            .then((data) => setGeoData(data));
    }, []);

    const onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        const details = countryData[countryName] || ""; // Fallback if no details

        // Define custom HTML content for the tooltip
        const tooltipContent = `
      <div style="text-align: center; font-size: 14px;">
        <strong>${countryName}</strong>
        <br />
        ${details}
      </div>
    `;

        layer.bindTooltip(tooltipContent, {
            permanent: false,
            direction: "center",
            className: "country-tooltip", // Custom class for styling
            opacity: 0.9, // Optional: tooltip opacity
        });

        layer.on("mouseover", (event) => {
            const layer = event.target;
            layer.setStyle({
                // color: "#D53E45",
                fillColor: "#1a1d62",
                fillOpacity: 0.3,
            });
        });

        layer.on("mouseout", (event) => {
            const layer = event.target;
            layer.setStyle({
                // color: "#ffff",
                fillColor: "#1a1d62",
                fillOpacity: 0.3,
            });
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
