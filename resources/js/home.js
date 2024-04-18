import ApexCharts from "apexcharts";

var options = {
    series: [
        {
            // blue
            name: "Point 01",
            data: [250, 290, 180, 70, 260],
            color: "#147AD6",
            zIndex: 99,
        },
        {
            name: "Point 02",
            data: [450, 500, 430, 240, 350],
            color: "#EC6666",
            zIndex: 1,
        },
    ],
    chart: {
        height: "300px",
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "straight",
    },
    xaxis: {
        type: "datetime",
        categories: ["15 Apr", "17 Apr", "19 Apr", "20 Apr", "21 Apr"],
    },
    tooltip: {
        x: {
            format: "dd-MM",
        },
    },
    fill: {
        colors: ["#147AD6", "#EC6666"],
        opacity: 1,
        type: "solid",
    },
    markers: {
        colors: ["#147AD6", "#EC6666"],
        opacity: 1,
    },
};

// blue #147AD6
// red #EC6666

var chart = new ApexCharts(document.querySelector("#chart-1"), options);
chart.render();

// chart 2 starts ---------------------------------------------------
var options2 = {
    series: [76],
    chart: {
        height: 350,
        type: "radialBar",
    },
    stroke: {
        lineCap: "round",
    },
    plotOptions: {
        radialBar: {
            inverseOrder: false,
            startAngle: 0,
            endAngle: 360,
            offsetX: 0,
            offsetY: 0,
            hollow: {
                margin: 5,
                size: "50%",
                background: "transparent",
                image: undefined,
                imageWidth: 150,
                imageHeight: 150,
                imageOffsetX: 0,
                imageOffsetY: 0,
                imageClipped: true,
                position: "front",
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5,
                },
            },
            track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: "#f2f2f2",
                strokeWidth: "97%",
                opacity: 1,
                margin: 5,
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5,
                },
            },
            dataLabels: {
                show: true,
                name: {
                    show: false,
                    fontSize: "16px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10,
                },
                value: {
                    show: true,
                    fontSize: "25px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: 16,
                    formatter: function (val) {
                        return val + "%";
                    },
                },
                total: {
                    show: false,
                    label: "Total",
                    color: "#373d3f",
                    fontSize: "16px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    formatter: function (w) {
                        return (
                            w.globals.seriesTotals.reduce((a, b) => {
                                return a + b;
                            }, 0) /
                                w.globals.series.length +
                            "%"
                        );
                    },
                },
            },
        },
    },
    labels: [""],
};

var chart2 = new ApexCharts(document.querySelector("#chart-2"), options2);
setTimeout(() => {
    chart2.render();
}, 1000);

var options2a = {
    series: [23],
    chart: {
        height: 350,
        type: "radialBar",
    },
    stroke: {
        lineCap: "round",
    },
    plotOptions: {
        radialBar: {
            inverseOrder: false,
            startAngle: 0,
            endAngle: 360,
            offsetX: 0,
            offsetY: 0,
            hollow: {
                margin: 5,
                size: "50%",
                background: "transparent",
                image: undefined,
                imageWidth: 150,
                imageHeight: 150,
                imageOffsetX: 0,
                imageOffsetY: 0,
                imageClipped: true,
                position: "front",
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5,
                },
            },
            track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: "#f2f2f2",
                strokeWidth: "97%",
                opacity: 1,
                margin: 5,
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5,
                },
            },
            dataLabels: {
                show: true,
                name: {
                    show: false,
                    fontSize: "16px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10,
                },
                value: {
                    show: true,
                    fontSize: "25px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: 16,
                    formatter: function (val) {
                        return val + "%";
                    },
                },
                total: {
                    show: false,
                    label: "Total",
                    color: "#373d3f",
                    fontSize: "16px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    formatter: function (w) {
                        return (
                            w.globals.seriesTotals.reduce((a, b) => {
                                return a + b;
                            }, 0) /
                                w.globals.series.length +
                            "%"
                        );
                    },
                },
            },
        },
    },
    labels: [""],
};
var chart2a = new ApexCharts(document.querySelector("#chart-2a"), options2a);
setTimeout(() => {
    chart2a.render();
}, 1000);

var options2b = {
    series: [50],
    chart: {
        height: 350,
        type: "radialBar",
    },
    stroke: {
        lineCap: "round",
    },
    plotOptions: {
        radialBar: {
            inverseOrder: false,
            startAngle: 0,
            endAngle: 360,
            offsetX: 0,
            offsetY: 0,
            hollow: {
                margin: 5,
                size: "50%",
                background: "transparent",
                image: undefined,
                imageWidth: 150,
                imageHeight: 150,
                imageOffsetX: 0,
                imageOffsetY: 0,
                imageClipped: true,
                position: "front",
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5,
                },
            },
            track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: "#f2f2f2",
                strokeWidth: "97%",
                opacity: 1,
                margin: 5,
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5,
                },
            },
            dataLabels: {
                show: true,
                name: {
                    show: false,
                    fontSize: "16px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10,
                },
                value: {
                    show: true,
                    fontSize: "25px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: 16,
                    formatter: function (val) {
                        return val + "%";
                    },
                },
                total: {
                    show: false,
                    label: "Total",
                    color: "#373d3f",
                    fontSize: "16px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    formatter: function (w) {
                        return (
                            w.globals.seriesTotals.reduce((a, b) => {
                                return a + b;
                            }, 0) /
                                w.globals.series.length +
                            "%"
                        );
                    },
                },
            },
        },
    },
    labels: [""],
};

var chart2b = new ApexCharts(document.querySelector("#chart-2b"), options2b);
setTimeout(() => {
    chart2b.render();
}, 1000);

// chart 3 starts ---------------------------------------------------
var options3 = {
    series: [
        {
            // blue
            name: "Point 01",
            data: [250, 290, 140, 200, 202, 170, 50],
            color: "#EC6666",
            zIndex: 99,
        },
    ],
    chart: {
        height: "300px",
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        type: "text",
        categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
    tooltip: {
        enabled: true,
        onDatasetHover: {
            highlightDataSeries: false,
        },
        x: {
            formatter: function (
                value,
                { series, seriesIndex, dataPointIndex, w }
            ) {
                return value + " Extra text";
            },
        },
    },
    fill: {
        colors: ["#EC6666"],
        opacity: 1,
        type: "gradient",
    },
    markers: {
        colors: ["#EC6666"],
        opacity: 1,
    },
};

// blue #147AD6
// red #EC6666

var chart3 = new ApexCharts(document.querySelector("#chart-3"), options3);
chart3.render();

// chart 4 starts --------------------------------------------------
var options4 = {
    series: [
        {
            // blue
            name: "Point 01",
            data: [290, 250, 480, 420, 150, 200],
            color: "#147AD6",
            zIndex: 99,
        },
    ],
    chart: {
        height: "300px",
        type: "line",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    xaxis: {
        type: "text",
        categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
        crosshairs: {
            show: false, // <--- HERE
        },
    },
    tooltip: {
        enabled: true,
        onDatasetHover: {
            highlightDataSeries: false,
        },
        x: {
            formatter: function (
                value,
                { series, seriesIndex, dataPointIndex, w }
            ) {
                return value + " Extra text";
            },
        },
    },
    fill: {
        colors: ["#147AD6"],
        opacity: 1,
        type: "vertical",
    },
    markers: {
        colors: ["#147AD6"],
        opacity: 1,
    },
    grid: {
        show: true,
        padding: {
            bottom: 0,
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
};

// blue #147AD6
// red #EC6666

var chart4 = new ApexCharts(document.querySelector("#chart-4"), options4);
chart4.render();

// chart 5 starts -----------------------------------------------------------
var options5 = {
    series: [
        {
            // blue
            name: "Point 01",
            data: [250, 80, 140, 180, 200, 250, 160],
            color: "#147AD6",
            zIndex: 99,
        },
        {
            name: "Point 02",
            data: [450, 250, 310, 420, 280, 290, 500],
            color: "#79D2DE",
            zIndex: 1,
        },
    ],
    chart: {
        height: "300px",
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        type: "datetime",
        categories: [
            "15 Apr",
            "16 Apr",
            "17 Apr",
            "18 Apr",
            "19 Apr",
            "20 Apr",
            "21 Apr",
        ],
    },
    tooltip: {
        x: {
            format: "dd-MM",
        },
    },
    fill: {
        colors: ["#147AD6", "#EC6666"],
        opacity: 1,
        type: "solid",
    },
    markers: {
        colors: ["#147AD6", "#EC6666"],
        opacity: 1,
    },
};

// blue #147AD6
// red #EC6666

var chart5 = new ApexCharts(document.querySelector("#chart-5"), options5);
chart5.render();
