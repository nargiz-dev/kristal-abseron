import React, { Component } from "react";
import Chart from "react-apexcharts";
class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Series 1",
          data: [120 ,480, 632, 400, 280, 600, 660, 860, 495, 640],
        },
      ],
      options: {
        series: [
          {
            //data:[200, 400, 600, 800,1000]
          },
        ],
        chart: {
          type: "area",
          width:800,
          height: 380,
          stacked: false,
          zoom: {
            enabled: false,
          },
          toolbar:{
            show:false,
          }
        },
        dataLabels: {
          enabled: true,
           enabledOnSeries: [1]
        },
        colors: ["#004AA1"],
        stroke: {
          curve: "smooth",
           
          width: [2, 4],
        },

        //labels: [200, 300, 400, 500, 600, 800,1000],
        /* xaxis: {
          type: 'datetime',
        },*/
        yaxis: {
          opposite: true,
        },
        xaxis:{
          tickPlacement: 'between',
        },

        labels:
            ["Yanvar",
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
            //shade: 'dark',
            type: "vertical",
            shadeIntensity: 0.3,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: false,
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 100, 100, 100],
            colorStops: [],
          },
          tooltip: {
            enabled: true,
            enabledOnSeries: true,
            shared: true,
            followCursor: true,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: true,
            theme: false,
            style: {
              fontSize: "12px",
              fontFamily: undefined,
            },
            onDatasetHover: {
              highlightDataSeries: false,
            },
            x: {
              show: true,
              format: "dd MMM",
              formatter: undefined,
            },
            y: {
              show: false,
              formatter: undefined,
              title: {
                formatter: (seriesName) => seriesName,
              },
            },
            z: {
              formatter: undefined,
              title: "Size: ",
            },
          },
        },
        markers: {
          discrete: [{ Colors: ["black"], strokeColor: "#ffffff" }],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width={750}
          height={270}
        />
      </div>
    );
  }
}

export default Bar;
