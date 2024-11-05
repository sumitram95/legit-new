import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function CompareChart() {
    const chartRef = useRef(null);

    useEffect(() => {
        const data = [
            { lg: "Janakpur Sub-Metropolitan", value: 2025 },
            { lg: "Janak Nandani", value: 1882 },
            { lg: "Nepalgunj", value: 1809 },
            { lg: "Biratnagar", value: 1322 },
            { lg: "Lalitpur", value: 1122 },
            { lg: "Bhaktapur", value: 1500 },
            { lg: "Pokhara", value: 1750 },
            { lg: "Butwal", value: 1350 },
            { lg: "Dhangadhi", value: 1250 },
            { lg: "Bhadrapur", value: 1100 },
            { lg: "Hetauda", value: 980 },
            { lg: "Itahari", value: 870 },
            { lg: "Kirtipur", value: 920 },
            { lg: "Dhulikhel", value: 640 },
        ];

        const totalValue = data.reduce((acc, item) => acc + item.value, 0);
        const percentageData = data.map((item) => ({
            lg: item.lg,
            value: parseFloat(((item.value / totalValue) * 100).toFixed(2)), // Convert to percentage
        }));

        const root = am5.Root.new(chartRef.current);
        root.setThemes([am5themes_Animated.new(root)]);

        const chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: "none",
                wheelY: "none",
                paddingLeft: 0,
                paddingTop: 0,
                paddingBottom: 0,
            })
        );

        const yRenderer = am5xy.AxisRendererY.new(root, {
            minGridDistance: 20, // Adjust as necessary for spacing
            minorGridEnabled: true,
        });
        yRenderer.grid.template.set("location", 1);
        yRenderer.labels.template.set("paddingTop", 10); // Add space above labels

        const yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                maxDeviation: 0,
                categoryField: "lg", // Change to "lg"
                renderer: yRenderer,
            })
        );

        const xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0,
                min: 0,
                renderer: am5xy.AxisRendererX.new(root, {
                    visible: true,
                    strokeOpacity: 0.1,
                    minGridDistance: 60,
                }),
            })
        );

        const series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Series 1",
                xAxis: xAxis,
                yAxis: yAxis,
                valueXField: "value",
                categoryYField: "lg", // Change to "lg"
            })
        );

        const columnTemplate = series.columns.template;
        columnTemplate.setAll({
            draggable: true,
            cursorOverStyle: "pointer",
            tooltipText: "{categoryY}: {valueX}%", // Tooltip shows percentage
            cornerRadiusBR: 5,
            cornerRadiusTR: 5,
            strokeOpacity: 0,
            height: am5.percent(10), // Adjust bar height as needed
        });

        columnTemplate.adapters.add("fill", (fill, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        columnTemplate.adapters.add("stroke", (stroke, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        yAxis.data.setAll(percentageData);
        series.data.setAll(percentageData);

        series.appear(1000);
        chart.appear(1000, 100);

        return () => root.dispose();
    }, []);

    return (
        <div
            id="chartdiv"
            ref={chartRef}
            style={{ width: "100%", height: "300px" }}
        ></div>
    );
}
