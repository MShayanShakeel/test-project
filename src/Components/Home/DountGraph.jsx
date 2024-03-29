import React, { Component } from 'react';
import Chart from 'react-apexcharts'; // Assuming you're using ApexCharts for your Chart component

class DountGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: ["Sat", "Sun", "Mon", "Tue", "Wen"],
          labels: {
            style: {
              colors: ["#808080", "#808080", "#808080", "#808080", "#808080"], // Specify x-axis label color
            },
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ['#808080'],
              Text : "50%",
              color : "white"
            }
          }
        },
        colors: ["#9534F6" , "#343639"],
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
      stroke : {
        width : false
      },
        plotOptions: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: undefined,
                offsetY: -10,
                formatter: function (val) {
                  return val
                }
              },
              value: {
                show: true,
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                color: undefined,
                offsetY: 16,
                formatter: function (val) {
                  return val
                }
              },
              total: {
                show: true,
                label: 'Total',
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 100,
                color: undefined,
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b
                  }, 0)
                }
              }
            }
          }
        },
      },
      series: [40 , 10],
    };
  }

  render() {
    return (
          
      <div className="app">
        <div className="row">
          <div className="mixed-chart" >
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width="115"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DountGraph;

