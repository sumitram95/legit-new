import * as am5map from "@amcharts/amcharts5/map";

export function setZoomControl(chart, root) {
    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
}
