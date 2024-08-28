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



export function MapChart({ countrywithStatus, countrywithMap }) {

    // Update URL_MAP with new URLs
    // const URL_MAP = {
    //     'CA': 'https://example.com/canada', // URL for Canada
    //     'US': 'https://example.com/usa', // URL for USA
    //     'MX': 'https://example.com/mexico', // URL for Mexico
    //     'NP': 'https://example.com/nepal', // URL for Nepal
    // };

    // Define countries and their associated colors and links
    // const COLOR_MAP = {
    //     'CA': COLORS.research, // Canada
    //     'US': COLORS.research, // USA
    //     'MX': COLORS.development, // Mexico
    //     'NP': COLORS.launched, // Nepal
    // }

    //***************** Define countries and their associated colors ****************** */
    const COLOR_MAP = Object.keys(countrywithStatus).reduce((acc, countryCode) => {
        const status = countrywithStatus[countryCode];
        acc[countryCode] = COLORS[status] || '#FFFFFF'; // Default color if status not found
        return acc;
    }, {});

    //***************** Define countries and their associated Url Links ****************** */
    const URL_MAP = countrywithMap;

    console.log(URL_MAP);
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

        // Exclude Antarctica
        polygonSeries.exclude = ["AQ"];

        // Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";

        polygonTemplate.tooltipHTML = `
            <div style="width: 18rem; border-radius: 0.25rem; padding: 0;">
                <div style="padding: 0.75rem 1.25rem; border-bottom: 2px solid #f8f9fa; border-radius: 0.25rem 0.25rem 0 0; margin: 0;">
                    <h2 style="margin: 0; color: #007bff; font-size: 1rem; font-weight: 400;">{name}</h2>
                </div>
                <div style="padding: 12px; display: flex; align-items: center; justify-content: space-between;">
                    <a href="{url}" style="font-size: 1rem; font-weight: 400; text-align: center; text-decoration: none; color: #007bff; margin-right: 0.75rem; transition: text-decoration 0.3s ease;" target="_blank">
                        <i class="fa fa-regular fa-star" style="margin-right: 0.75rem;"></i>
                        View AI Policy Policy
                    </a>
                    <div style="display: flex; align-items: center;">
                        <a href="{url}" style="font-size: 1rem; font-weight: 400; text-align: center; text-decoration: none; color: #007bff;" target="_blank">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;

        // Set colors
        polygonTemplate.adapter.add("fill", (fill, target) => {
            const countryId = target.dataItem && target.dataItem.dataContext ? target.dataItem.dataContext.id : null;
            return COLOR_MAP[countryId] || fill; // Use predefined color or default fill color
        });

        // Enable tooltip interaction and keep target hovered
        polygonSeries.tooltip.label.interactionsEnabled = true;
        polygonSeries.tooltip.keepTargetHover = true;

        // Fix tooltip position and enable visual center calculation
        polygonSeries.calculateVisualCenter = true;
        polygonTemplate.tooltipPosition = "fixed";

        // Zoom control
        chart.zoomControl = new am4maps.ZoomControl();

        // Set URLs in tooltips
        polygonTemplate.adapter.add("tooltipHTML", (html, target) => {
            const countryId = target.dataItem && target.dataItem.dataContext ? target.dataItem.dataContext.id : null;
            const url = URL_MAP[countryId] || '#';
            return html.replace(/{url}/g, url);
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
