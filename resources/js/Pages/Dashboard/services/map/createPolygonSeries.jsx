import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

export function createPolygonSeries(chart) {
    let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(chart.root, {
            geoJSON: am5geodata_worldLow,
            exclude: ["AQ"], // Excluding Antarctica
        })
    );

    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        templateField: "polygonSettings",
        interactive: true,
    });

    polygonSeries.data.setAll([
        {
            id: "US",
            polygonSettings: {
                fill: am5.color(0xff3c38),
            },
        },
        {
            id: "CA",
            polygonSettings: {
                fill: am5.color(0xa23e48),
            },
            value: 100,
        },
        {
            id: "MX",
            polygonSettings: {
                fill: am5.color(0xff8c42),
            },
        },
    ]);

    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0x677935),
    });

    return polygonSeries;
}
