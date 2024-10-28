import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_nepalLow from "@amcharts/amcharts4-geodata/nepalLow"; // Import the geodata for Nepal's provinces
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// Define colors for provinces
const COLORS = {
    province1: "#ec8596",
    province2: "#B5DED7",
    province3: "#F4F8FC",
    province4: "#F1CDB2",
    province5: "#AFA3DA",
    province6: "#667A91",
    province7: "#67A8EF",
};

export function MapChart() {
    // Default policy data
    const countryWithAiPolicies = {
        "NP-P1": [
            { name: "Policy 1.1", url: "http://example.com/policy-1-1" },
            { name: "Policy 1.2", url: "http://example.com/policy-1-2" },
            { name: "Policy 1.3", url: "http://example.com/policy-1-3" },
            { name: "Policy 1.4", url: "http://example.com/policy-1-4" },
            { name: "Policy 1.5", url: "http://example.com/policy-1-5" },
        ],
        "NP-P2": [
            { name: "Policy 2.1", url: "http://example.com/policy-2-1" },
            { name: "Policy 2.2", url: "http://example.com/policy-2-2" },
        ],
        "NP-P3": [], // Bagmati Province
        "NP-P4": [], // Gandaki Province
        "NP-P5": [], // Lumbini Province
        "NP-P6": [], // Karnali Province
        "NP-P7": [], // Sudurpashchim Province
    };

    const COLOR_MAP = {
        "NP-P1": COLORS.province1,
        "NP-P2": COLORS.province2,
        "NP-P3": COLORS.province3,
        "NP-P4": COLORS.province4,
        "NP-P5": COLORS.province5,
        "NP-P6": COLORS.province6,
        "NP-P7": COLORS.province7,
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "..."
            : text;
    };

    useEffect(() => {
        // Apply themes
        am4core.useTheme(am4themes_animated);

        // Create map instance
        const chart = am4core.create("chartdiv", am4maps.MapChart);
        chart.geodata = am4geodata_nepalLow; // Set map definition to Nepal's geodata
        chart.projection = new am4maps.projections.Miller(); // Set projection

        // Create map polygon series
        const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;

        // Configure series
        const polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";

        // Apply color to provinces
        polygonTemplate.adapter.add("fill", (fill, target) => {
            const provinceId = target.dataItem?.dataContext?.id;
            return COLOR_MAP[provinceId] || fill; // Use predefined color or default fill color
        });

        // Enable tooltip interaction
        polygonSeries.tooltip.label.interactionsEnabled = true;
        polygonSeries.tooltip.keepTargetHover = true;

        // Tooltip position
        polygonTemplate.tooltipPosition = "fixed";

        // Zoom control setup
        const zoomControl = new am4maps.ZoomControl();
        chart.zoomControl = zoomControl;
        zoomControl.layout = "vertical";
        zoomControl.valign = "top";
        zoomControl.align = "right";
        zoomControl.marginRight = 15;
        zoomControl.marginTop = 15;

        // Tooltip HTML setup with policy links
        polygonTemplate.adapter.add("tooltipHTML", (html, target) => {
            const provinceId = target.dataItem?.dataContext?.id;
            const policies = countryWithAiPolicies[provinceId] || [];
            const policyLinks = policies.length
                ? policies
                      .map(
                          (policy) => `
                    <div style="padding: 8px; display: flex; align-items: center; justify-content: space-between;">
                        <a href="${policy.url}" target="_blank" style="text-decoration: none; color: #002147;">
                            <i class="fa fa-regular fa-star" style="margin-right: 0.75rem;"></i>
                            ${truncateText(policy.name, 5)}
                        </a>
                        <div style="display: flex; align-items: center;">
                            <a href="${policy.url}" style="font-size: 1rem; font-weight: 400; text-align: center; text-decoration: none; color: #002147;" target="_blank">
                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>`
                      )
                      .join("")
                : "<div style='padding: 8px;'>No policies available</div>";

            return `
                <div style="width: 18rem; border-radius: 0.25rem; padding: 0;">
                    <div style="padding: 0.75rem 1.25rem; border-bottom: 2px solid #f8f9fa; border-radius: 0.25rem 0.25rem 0 0; margin: 0;">
                        <h2 style="margin: 0; color: #002147; font-size: 1rem; font-weight: 400;">${target.dataItem.dataContext.name}</h2>
                    </div>
                    <div style="padding: 12px;">${policyLinks}</div>
                </div>
            `;
        });

        return () => {
            chart.dispose(); // Cleanup chart instance
        };
    }, []);

    return (
        <div
            id="chartdiv"
            className="map-chart-wrapper"
            style={{ width: "100%", height: "500px" }}
        ></div>
    );
}
