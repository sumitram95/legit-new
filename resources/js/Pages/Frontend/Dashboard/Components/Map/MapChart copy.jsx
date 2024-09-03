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
            <div style="width: 18rem; border-radius: 0.25rem; padding: 0;">
                <div style="padding: 0.75rem 1.25rem; border-bottom: 2px solid #f8f9fa; border-radius: 0.25rem 0.25rem 0 0; margin: 0;">
                    <h2 style="margin: 0; color: #007bff; font-size: 1rem; font-weight: 400;">{name}</h2>
                </div>
                <div style="padding: 12px; display: flex; align-items: center; justify-content: space-between;">
                    <a href="#"
                        style="font-size: 1rem; font-weight: 400; text-align: center; text-decoration: none; color: #007bff; margin-right: 0.75rem; transition: text-decoration 0.3s ease;"
                        onmouseover="this.style.textDecoration='underline';"
                        onmouseout="this.style.textDecoration='none';">
                            <i class="fa fa-regular fa-star" style="margin-right: 0.75rem;"></i>
                            Digital
                        </a>
                    <div style="display: flex; align-items: center;">
                        <a href="#" style="font-size: 1rem; font-weight: 400; text-align: center; text-decoration: none; color: #007bff;">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>

        `;
        // polygonTemplate.tooltipHTML = `
        //             <div style="white-space: nowrap; color: rgb(255, 255, 255); display: block;"><div><div class="ui-country-tooltip">
        // <div class="ui-country-tooltip_header">Russian Federation</div><div class="ui-country-tooltip_currency"><div class="ui-country-tooltip_currency-watch-flag"><button disabled="disabled" class="ui-button-without-styles ui-watch-flag"><span class="ui-icon"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star b-icon bi"><title>Have not in the watchlist</title><g><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path></g></svg></span></button></div><div class="ui-country-tooltip_currency-name"><div class="ui-link-wrapper ui-country-tooltip_currency-name-link"><a href="/currency/russian_federation-digital_ruble" class="ui-link" title="Digital Ruble"> Digital Ruble </a></div></div><div class="ui-country-tooltip_currency-status-wrapper"><div class="ui-country-tooltip_currency-status Pilot">Pilot</div></div><a href="/currency/russian_federation-digital_ruble" class="ui-arrow-link ui-country-tooltip_currency-link" title="Go to page">  <span class="ui-icon"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="arrow right circle" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-arrow-right-circle b-icon bi"><title>Go to page</title><g><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></g></svg></span></a></div></div></div></div>
        // `;
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
        // let hs = polygonTemplate.states.create("hover");
        // hs.properties.fill = am4core.color("#367B25");

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
