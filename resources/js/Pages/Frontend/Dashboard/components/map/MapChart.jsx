import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// Define colors for categories
const COLORS = {
    cancelled: "#ec8596",
    research: "#B5DED7",
    whitepaper: "#F4F8FC",
    pilot: "#F1CDB2",
    development: "#AFA3DA",
    launched: "#67A8EF"
};

// Define countries and their associated colors and links
const COLOR_MAP = {
    'CA': COLORS.research, // Canada
    'US': COLORS.research, // USA
    'MX': COLORS.development, // Mexico
    'NP': COLORS.development, // Nepal
};

const URL_MAP = {
    'CA': 'https://example.com/canada', // URL for Canada
    'US': 'https://example.com/usa', // URL for USA
    'MX': 'https://example.com/mexico', // URL for Mexico
    'NP': 'https://example.com/nepal', // URL for Nepal
};

export function MapChart() {
    useLayoutEffect(() => {
        // Apply themes
        am4core.useTheme(am4themes_animated);

        // Create map instance
        let chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;

        // Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.tooltipHTML = `
            <div>
                <b>{name}</b><br>
                <a href="{url}" target="_blank" style="color: #007bff; text-decoration: none;">More Info</a>
            </div>
        `;
        polygonTemplate.adapter.add("fill", (fill, target) => {
            const countryId = target.dataItem && target.dataItem.dataContext ? target.dataItem.dataContext.id : null;
            if (countryId) {
                return COLOR_MAP[countryId] || fill; // Use predefined color or default fill color
            }
            return fill; // Fallback to default color
        });

        // Enable tooltip interaction and keep target hovered
        polygonSeries.tooltip.label.interactionsEnabled = true;
        polygonSeries.tooltip.keepTargetHover = true;

        // Fix tooltip position and enable visual center calculation
        polygonSeries.calculateVisualCenter = true;
        polygonTemplate.tooltipPosition = "fixed";

        // Create hover state and set alternative fill color
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#367B25");

        // Zoom control
        chart.zoomControl = new am4maps.ZoomControl();

        // Set URLs in tooltips
        polygonTemplate.adapter.add("tooltipHTML", (html, target) => {
            const countryId = target.dataItem && target.dataItem.dataContext ? target.dataItem.dataContext.id : null;
            if (countryId && URL_MAP[countryId]) {
                return html.replace("{url}", URL_MAP[countryId]);
            }
            return html;
        });

        return () => {
            if (chart) {
                chart.dispose();
            }
        };
    }, []);

    return (
        <div id="chartdiv" className="map-chart-wrapper" style={{ width: "100%", height: "500px" }}></div>
    );
}
