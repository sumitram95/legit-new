import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";

export function setZoomControl(chart, root) {
    // Create a new ZoomControl
    let zoomControl = am5map.ZoomControl.new(root, {
        layout: root.verticalLayout
    });

    // Add the zoom control to the chart
    chart.set("zoomControl", zoomControl);

    // Position the zoom control in the top right corner
    zoomControl.setAll({
        x: am5.percent(100), // Position from the left
        y: am5.percent(10), // Position from the top
        centerX: am5.p100,  // Center horizontally
        centerY: am5.p50    // Center vertically
    });
}
