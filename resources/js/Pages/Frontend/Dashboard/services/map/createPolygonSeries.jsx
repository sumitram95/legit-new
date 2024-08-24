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

    //************************* # Tooltips configuration ***************************** */
    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "", // Disable default tooltip text
        tooltipHTML: `
            <div style="font-size: 15px; color: #fff;">
                {name}
                {name}
            </div>
            <div style="font-size: 15px; color: #fff;">
                {infoHTML}
            </div>
        `,
        templateField: "polygonSettings",
        interactive: true,
    });

    //************************* # Map(Countries) configuration ***************************** */
    const data = [
        {
            id: "US",
            name: "United States",
            infoHTML: "Country Name: United States",
            polygonSettings: {
                fill: am5.color(0xff3c38),
            },
        },
        {
            id: "CA",
            name: "Canada",
            infoHTML: "Country Name: Canada",
            polygonSettings: {
                fill: am5.color(0xa23e48),
            },
            value: 100,
        },
        {
            id: "MX",
            name: "Mexico",
            infoHTML: "Country Name: Mexico",
            polygonSettings: {
                fill: am5.color(0xff8c42),
            },
        },
        {
            id: "NP",
            name: "Nepal",
            // -- Not We can also customize tool tips like this
            // infoHTML: `
            // <div>
            //     <div style="display:flex;justify-content: space-between;gap:50px; margin-top:10px;">
            //        <div>AI Policy Name</div>
            //         <div className="text-white border border-red-300 rounded-md p-1 capitalize">development</div>
            //         <div><a href="http://www.google.com"><i className="fa-solid fa-circle-arrow-right"></i></a></div>
            //     </div>
            //      <div style="display:flex;justify-content: space-between;gap:50px; margin-top:10px;">
            //        <div>AI Policy Name</div>
            //         <div className="text-white border border-red-300 rounded-md p-1 capitalize">development</div>
            //         <div><a href="http://www.google.com"><i className="fa-solid fa-circle-arrow-right"></i></a></div>
            //     </div>
            // </div>
            // `,
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

    return polygonSeries;
}
