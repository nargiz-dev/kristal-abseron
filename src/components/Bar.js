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
        chart: {
          type: "area",
          width:820,
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

        yaxis: {
          opposite: true,
        },
        xaxis:{
          tickPlacement: 'between',
          axisticks:{
            show:false,
          },
         
            tooltip: {
              enabled: false
            }
          
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
          width={800}
          height={270}
        />
      </div>
    );
  }
}

export default Bar;
