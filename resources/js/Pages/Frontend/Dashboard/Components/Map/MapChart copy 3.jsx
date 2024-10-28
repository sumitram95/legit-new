import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_nepalLow from "@amcharts/amcharts4-geodata/nepalLow"; // Import the geodata for Nepal's provinces
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// Define colors for provinces
const COLORS = {
    province1: "#ec8596", // Example color for Province 1
    province2: "#B5DED7", // Example color for Province 2
    province3: "#F4F8FC", // Example color for Province 3
    province4: "#F1CDB2", // Example color for Province 4
    province5: "#AFA3DA", // Example color for Province 5
    province6: "#667A91", // Example color for Province 6
    province7: "#67A8EF"  // Example color for Province 7
};

export function MapChart({ countrywithStatus, countryWithAiPolicies }) {
    const COLOR_MAP = {
        "NP-1": COLORS.province1,
        "NP-2": COLORS.province2,
        "NP-3": COLORS.province3,
        "NP-4": COLORS.province4,
        "NP-5": COLORS.province5,
        "NP-6": COLORS.province6,
        "NP-7": COLORS.province7
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    useEffect(() => {
        // Apply themes
        am4core.useTheme(am4themes_animated);

        // Create map instance
        let chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition to Nepal's geodata
        chart.geodata = am4geodata_nepalLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;

        // Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";

        // Apply color to provinces
        polygonTemplate.adapter.add("fill", (fill, target) => {
            const provinceId = target.dataItem && target.dataItem.dataContext ? target.dataItem.dataContext.id : null;
            return COLOR_MAP[provinceId] || fill; // Use predefined color or default fill color
        });

        // Enable tooltip interaction and keep target hovered
        polygonSeries.tooltip.label.interactionsEnabled = true;
        polygonSeries.tooltip.keepTargetHover = true;

        // Fix tooltip position and enable visual center calculation
        polygonSeries.calculateVisualCenter = true;
        polygonTemplate.tooltipPosition = "fixed";

        // Zoom control
        let zoomControl = new am4maps.ZoomControl();
        chart.zoomControl = zoomControl;

        // Position the zoom control at the top right
        zoomControl.layout = "vertical";
        zoomControl.valign = "top";
        zoomControl.align = "right";
        zoomControl.marginRight = 15; // Adjust as needed
        zoomControl.marginTop = 15;   // Adjust as needed

        // Set URLs in tooltips and dynamically generate the HTML for policy links
        polygonTemplate.adapter.add("tooltipHTML", (html, target) => {
            const provinceId = target.dataItem && target.dataItem.dataContext ? target.dataItem.dataContext.id : null;
            const policies = countryWithAiPolicies[provinceId] || [];

            let policyLinks = policies.map(policy => `
                <div style="padding: 8px; display: flex; align-items: center; justify-content: space-between;">
                    <a href="${policy.url}" target="_blank" style="text-decoration: none; color: #002147;">
                        <i className="fa fa-regular fa-star" style="margin-right: 0.75rem;"></i>
                        ${truncateText(policy.name, 5)}
                    </a>
                    <div style="display: flex; align-items: center;">
                        <a href="${policy.url}" style="font-size: 1rem; font-weight: 400; text-align: center; text-decoration: none; color: #002147;" target="_blank">
                            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            `).join('');

            if (!policyLinks) {
                policyLinks = "<div style='padding: 8px;'>No policies available</div>";
            }

            return `
                <div style="width: 18rem; border-radius: 0.25rem; padding: 0;">
                    <div style="padding: 0.75rem 1.25rem; border-bottom: 2px solid #f8f9fa; border-radius: 0.25rem 0.25rem 0 0; margin: 0;">
                        <h2 style="margin: 0; color: #002147; font-size: 1rem; font-weight: 400;">{name}</h2>
                    </div>
                    <div style="padding: 12px;">
                        <div>
                            ${policyLinks}
                        </div>
                    </div>
                </div>
            `;
        });

        return () => {
            if (chart) {
                chart.dispose();
            }
        };
    }, [countrywithStatus, countryWithAiPolicies]);

    return (
        <div id="chartdiv" className="map-chart-wrapper" style={{ width: "100%", height: "500px" }}></div>
    );
}
