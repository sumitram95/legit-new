import React, { useLayoutEffect } from "react";
import { setThemes } from "../../services/map/setThemes";
import { createChart } from "../../services/map/createChart";
import { createPolygonSeries } from "../../services/map/createPolygonSeries";
import { setBackground } from "../../services/map/setBackground";
import { setZoomControl } from "../../services/map/setZoomControl";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";

export function MapChart() {
    useLayoutEffect(() => {
        // Initialize the chart using amCharts 4
        let chart = am4core.create("chartdiv", am4maps.MapChart);

        setThemes(chart); // Adjust this function to work with amCharts 4

        // Call your createChart function and pass the chart instance
        chart = createChart(chart);

        setBackground(chart); // Adjust this function to work with amCharts 4

        createPolygonSeries(chart); // Adjust this function to work with amCharts 4

        {/* ********************** Zoom Control ********************** */ }
        setZoomControl(chart);

        return () => {
            chart.dispose();
        };
    }, []);

    return (
        <>
            {/* Map content load here */}
            <div id="chartdiv" className="map-chart-wrapper"></div>
        </>
    );
}
