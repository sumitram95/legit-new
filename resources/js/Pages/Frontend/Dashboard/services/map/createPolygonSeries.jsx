import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

const COLORS = {
    primary: '#3498db',
    secondary: '#2ecc71',
    danger: '#e74c3c',
    warning: '#f39c12',
    success: '#2ecc71',
};

export function createPolygonSeries(chart) {
    // Create the MapPolygonSeries
    let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(chart.root, {
            geoJSON: am5geodata_worldLow,
            exclude: ["AQ"], // Exclude Antarctica
        })
    );

    // Enable interactivity and set tooltip HTML
    polygonSeries.mapPolygons.template.setAll({
        tooltipHTML: `
            <div style="font-size: 15px; color: #fff;">
                {name}
            </div>
            <div style="font-size: 15px; color: #fff;">
                {infoHTML}
            </div>
        `,
        tooltipPosition: "fixed",
        interactive: true,
    });

    // Enable tooltip interactivity
    polygonSeries.set("tooltip", am5.Tooltip.new(chart.root, {
        labelText: "{name}\n{infoHTML}",
        interactionsEnabled: true,
        keepTargetHover: true,
    }));

    // Enable visual center calculation for better positioning
    polygonSeries.set("calculateVisualCenter", true);

    // Define your data with clickable links
    const data = [
        {
            id: "US",
            name: "United States",
            infoHTML: `<a href="http://www.example.com" target="_blank" style="color: #fff;">More Info</a>`,
            polygonSettings: {
                fill: am5.color(0xff3c38),
            },
        },
        {
            id: "CA",
            name: "Canada",
            infoHTML: `<a href="http://www.example.com" target="_blank" style="color: #fff;">More Info</a>`,
            polygonSettings: {
                fill: am5.color(0xa23e48),
            },
        },
        {
            id: "MX",
            name: "Mexico",
            infoHTML: `<a href="http://www.example.com" target="_blank" style="color: #fff;">More Info</a>`,
            polygonSettings: {
                fill: am5.color(0xff8c42),
            },
        },
        {
            id: "NP",
            name: "Nepal",
            infoHTML: `<a href="http://www.example.com" target="_blank" style="color: #fff;">More Info</a>`,
            polygonSettings: {
                fill: am5.color(0x3498db),
            },
        },
    ];

    // Set data to the series
    polygonSeries.data.setAll(data);

    // Add hover state
    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color("#7997C3"),
        fillOpacity: 0.8,
    });

    // Add click event listener to handle link navigation
    polygonSeries.mapPolygons.template.events.on("hit", function (ev) {
        const dataItem = ev.target.dataItem;
        if (dataItem) {
            const urlMatch = dataItem.dataContext.infoHTML.match(/href="([^"]*)"/);
            if (urlMatch && urlMatch[1]) {
                window.open(urlMatch[1], "_blank");
            }
        }
    });

    return polygonSeries;
}
