import React, { useLayoutEffect } from "react";
import { setThemes } from "../../services/map/setThemes";
import { createChart } from "../../services/map/createChart";
import { createPolygonSeries } from "../../services/map/createPolygonSeries";
import { setBackground } from "../../services/map/setBackground";
import { setZoomControl } from "../../services/map/setZoomControl";
import * as am5 from "@amcharts/amcharts5";

export function MapChart() {
    useLayoutEffect(() => {
        let root = am5.Root.new("chartdiv");

        setThemes(root);

        let chart = createChart(root);

        setBackground(chart, root);

        createPolygonSeries(chart);

        setZoomControl(chart, root);

        return () => {
            root.dispose();
        };
    }, []);

    return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}