import * as am5 from "@amcharts/amcharts5";

export function setBackground(chart, root) {
    chart.chartContainer.set(
        "background",
        am5.Rectangle.new(root, {
            // fill: am5.color(0xd4f1f9),
            fillOpacity: 1,
        })
    );
}
