// resources/js/Components/CountryLayer.js
import React, { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CountryLayer = () => {
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        fetch('/geojson/countries.geojson')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then((data) => setGeoData(data))
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }, []);

    const onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        layer.bindTooltip(countryName, {
            permanent: false,
            direction: "center",
            className: "country-tooltip",
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
