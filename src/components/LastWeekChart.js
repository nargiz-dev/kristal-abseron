import React, { Component } from "react";
import Chart from "react-apexcharts";
class LastWeekChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13],
        },
      ],
      options: {
        chart: {
          height: 150,
          type: "bar",
          toolbar:{
            show:false,
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
                offsetY: 0
              }
            ]
          },
          xaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
                startonly:false,
              }
            },
            xaxis:{
                lines:{
                    show:false,
                    startonly:false,
                }
            }
          },
        colors: ["#EA8A31"],
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        yaxis:{
            show:false,
            lines:{
                show:false,
            }
         
        },
        xaxis: {
          categories: [
            ["B.e"],
            ["Ç.a"],
            ["Ç"],
            ["C.a"],
            ["C"],
            ["Ş"],
            ["B"],
          ],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            style: {
              
              fontSize: "12px",
            },
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
          type="bar"
          height={200}
          width={230}
        />
      </div>
    );
  }
}

export default LastWeekChart;
