import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";

export function createChart(root) {
    return root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "rotateX",
            projection: am5map.geoNaturalEarth1(),
            wheelable: false
        })
    );
}


