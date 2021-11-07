import React, { useState } from "react";
import Chart from "react-apexcharts";

function Legends() {
  return (
    <div className="chart-legends">
      <h4>Son həftə</h4>
      <div className="legend-buttons">
        <button  id="satilib">Satılıb</button>
        <button  id="kredit">Kredit</button>
        <button  id="ipoteka">İpoteka</button>
      </div>
    </div>
  );
}
function LastWeekChart() {
  const sample = [
    {category:"satilib", values:[10, 25, 18, 27, 13, 22, 15], color:["#219653"]},
    {category:"kredit", values:[20, 12, 19, 21, 17, 25, 11], color:["#9B51E0"]},
    {category:"ipoteka", values:[15, 22, 10, 28, 16, 21, 13], color:["#219653"]}
  ]
 
  const [options] = useState({
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13],
      },
    ],
    options: {
      chart: {
        height: 150,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      annotations: {
        yaxis: [
          {
            y: 0,
            strokeDashArray: 0,
            fillColor: "#EA8A31",
            opacity: 0,
            offsetX: 0,
            offsetY: 0,
          },
        ],
      },
   
      grid: {
        yaxis: {
          lines: {
            show: false,
            startonly: false,
          },
        },
      },
      colors: [
        function ({ data }) {
          if (data === "satilib") {
            return "#219653";
          } else {
            return "#EA8A31";
          }
        },
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow-box">' +
            "<span>" +
            series[seriesIndex][dataPointIndex] +
            "</span>" +
            "</div>"
          );
        },
      },
      legend: {
        show: false,
      },
      yaxis: {
        show: false,
        lines: {
          show: false,
        },
      },
      xaxis: {
        categories: [["B.e"], ["Ç.a"], ["Ç"], ["C.a"], ["C"], ["Ş"], ["B"]],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            fontSize: "12px",
          },
        },
          lines: {
            show: false,
            startonly: false,
          },
      },
    },
  });

  return (
    <div className="bar-chart-wrapper">
      <Legends  />

      <div id="chart">
        <Chart
          options={options.options}
          series={options.series}
          type="bar"
          height={200}
          width={230}
        />
      </div>
    </div>
  );
}

export default LastWeekChart;
