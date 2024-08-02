// resources/js/Components/WorldMap.js
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CountryLayer from "./CountryLayer";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import SelectInputLists from "./SelectInputList";

const WorldMap = () => {
    const mapRef = useRef();
    const [visibleDiv, setVisibleDiv] = useState(null);
    const handleClick = (divName) => {
        setVisibleDiv((prevDiv) => (prevDiv === divName ? null : divName));
    };

    useEffect(() => {
        if (mapRef.current) {
            // Trigger a resize event to ensure the map is correctly rendered
            mapRef.current.getLeafletElement().invalidateSize();
        }
    }, []);
    const date = getFormattedDate();
    return (
        <div
            className="border rounded-md w-full bg-white py-5 absolute"
            style={{ top: "-55px", zIndex: "999", width:'100%' }}
        >
            <div className=" border-b-2 pb-4 px-5 flex justify-between items-center">
                <div>
                    <div>
                        <p className="font-bold text-primary text-lg">
                            Global Artificial Intelligence (AI) Policy Status
                        </p>
                    </div>
                    <div className="flex gap-5 mt-3 text-sm">
                        <p className=" text-sm">
                            Database Update:{" "}
                            <span className=" text-black">{date}</span>
                        </p>
                        <p className=" text-sm">
                            News Update:{" "}
                            <span className="text-black">{date}</span>
                        </p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => handleClick("showFilters")}
                        className="text-sm text-secondary hover:text-blue-300"
                    >
                        Show filters{" "}
                        <i className="fa-solid fa-chevron-down ml-3"></i>
                    </button>
                </div>
            </div>
            {visibleDiv === "showFilters" && (
                <div className="px-5 w-full mt-5">
                    <form className="w-full">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            {SelectInputLists.labels.map((label, index) => (
                                <div className="w-full md:w-1/2 px-3">
                                    <SelectInput
                                        key={index}
                                        label={label}
                                        listName={SelectInputLists.lists[index]}
                                    />
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            )}
            <div style={{ height: "100vh", width: "100%" }} className="mt-5">
                {" "}
                {/* Fixed height and full width */}
                <MapContainer
                    center={[0, 0]} // Center of the map to focus on the entire world
                    zoom={1} // Default zoom level to show the entire world
                    minZoom={1} // Minimum zoom level to ensure the map is not zoomed in too much
                    maxZoom={4} // Maximum zoom level to prevent zooming in too much
                    style={{
                        height: "100%",
                        width: "100%",
                        background: "white",
                    }} // Full size of the parent container
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
        </div>
    );
};

export default WorldMap;

function getFormattedDate() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}
