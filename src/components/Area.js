import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { areaChartData, areaFilter } from "redux/actions/actionCreators";

function Titles({ selection, setSelection, updateData }) {
  return (
    <div className="sales">
      <h4>Ümumi satış</h4>
      <div className="area-chart-title">
        <button
          id="all"
          onClick={() => updateData("all")}
          className={selection === "all" ? "active-time" : ""}
        >
          Son 12 ay
        </button>
        <button
          id="six_months"
          onClick={() => updateData("six_months")}
          className={selection === "six_months" ? "active-time" : ""}
        >
          Son 8 həftə
        </button>
        <button
          id="one-month"
          onClick={() => updateData("one_month")}
          className={selection === "one_month" ? "active-time" : ""}
        >
          Son 30 gün
        </button>
      </div>
    </div>
  );
}

function Area() {
  const [selection, setSelection] = useState();
  const AreaChart = useSelector((state) => state.chartDataReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/areadata.json")
      .then((res) => dispatch(areaChartData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);
  const [options] = useState({
    series: [
      {
        data: AreaChart.data,
      },
    ],
    options: {
      chart: {
        id: "area-datetime",
        type: "area",
        width: 820,
        height: 380,
        stacked: false,
        foreColor: "#ABAEAF",

        toolbar: {
          show: false,
        },
      },
      annotations: {
        xaxis: [
          {
            x: new Date("14 Nov 2021").getTime(),
          },
        ],
      },
      responsive: [
        {
          breakpoint: 550,
          options: {
            legend: {
              position: "bottom",
              horizontalAlign: "center",
              offsetY: 5,
            },
          },
        },
      ],
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      colors: ["#004AA1"],
      stroke: {
        curve: "smooth",

        width: [2, 4],
      },

      yaxis: {
        opposite: true,
      },
      xaxis: {
       
        axisticks: {
          show: false,
        },
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
        labels: {
          show: true,
          trim: false,

          tooltip: {
            enabled: false,
          },
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box">' +
            "<span>" +
            series[seriesIndex][dataPointIndex] +
            "</span>" +
            "</div>"
          );
        },
      },

      labels: [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avqust",
      ],

      fill: {
        colors: ["#004AA1", "#3C4FFF69", "#3A4EFF00"],
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 0.3,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0,
          stops: [0, 100, 100, 100],
          colorStops: [],
        },
      },
      selection: "all",
    },
  });

  const updateData = (timeline) => {
    dispatch(areaFilter(timeline));
    setSelection(timeline);

    switch (timeline) {
      case "six_months":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("27 Aug 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;

      case "all":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("23 Jan 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "one_month":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("28 Jan 2013").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      default:
    }
  };

  return (
    <div id="chart">
      <Titles
        selection={selection}
        setSelection={setSelection}
        updateData={updateData}
      />
      <Chart
        options={options.options}
        series={options.series}
        type="area"
        width={800}
        height={270}
      />
    </div>
  );
}

export default Area;
