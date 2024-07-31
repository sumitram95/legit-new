import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { data } from "autoprefixer";

export function MapChart() {
    const date = getFormattedDate();
    useLayoutEffect(() => {
        let root = am5.Root.new("chartdiv");

        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panY: false,
                layout: root.verticalLayout,
            })
        );

        // Define data
        let data = [
            {
                category: "Research",
                value1: 1000,
                value2: 588,
            },
            {
                category: "Marketing",
                value1: 1200,
                value2: 1800,
            },
            {
                category: "Sales",
                value1: 850,
                value2: 1230,
            },
        ];

        // Create Y-axis
        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {}),
            })
        );

        // Create X-Axis
        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {}),
                categoryField: "category",
            })
        );
        xAxis.data.setAll(data);

        // Create series
        let series1 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value1",
                categoryXField: "category",
            })
        );
        series1.data.setAll(data);

        let series2 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value2",
                categoryXField: "category",
            })
        );
        series2.data.setAll(data);

        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {}));
        legend.data.setAll(chart.series.values);

        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {}));

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div
            className="border rounded-md w-full bg-white py-5 relative"
            style={{ top: "-55px" }}
        >
            <div className=" border-b-2 pb-4 px-5">
                <div>
                    <p className="font-bold text-primary text-lg">
                        Global Artificial Intelligence (AI) Policy Status
                    </p>
                </div>
                <div className="flex gap-5 mt-3 text-sm">
                    <p className=" text-sm">
                        Database Update:{" "}
                        <span className=" text-black">{date}</span>
                    </p>
                    <p className=" text-sm">
                        News Update: <span className="text-black">{date}</span>
                    </p>
                </div>
            </div>
            <div
                id="chartdiv"
                style={{ width: "100%", height: "500px", padding: "0" }}
            ></div>
        </div>
    );
}

function getFormattedDate() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}
