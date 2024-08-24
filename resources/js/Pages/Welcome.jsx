import React from "react";
import { Header } from "@/Layouts/Header/Header";
import { Head } from "@inertiajs/react";
import { MapChart } from "@/Components/map/MapChart";
// import WorldMap from "@/Components/map/WorldMap";

export default function Welcome() {
    return (
        <div>
            <Head title="Welcome" />
            <Header />
            {/* contant */}
            <section className="px-40 mt-11">
                {/* <MapChart /> */}

                {/* <WorldMap /> */}
            </section>
        </div>
    );
}
