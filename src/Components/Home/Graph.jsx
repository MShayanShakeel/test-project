// import React, { Component } from "react";
// import CanvasJSReact from "@canvasjs/react-charts";

// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// class Graph extends Component {
//   render() {
//     const options = {
//       animationEnabled: true,
//       exportEnabled: true,
//       backgroundColor: "#26272B", // Setting background color
//       axisY: {
//         includeZero: true,
//         lineColor: "#808080", // Setting y-axis line color
//         tickColor: "#808080", // Setting y-axis tick color
//         labelFontColor: "#808080", // Setting y-axis label color
//       },
//       axisX: {
//         lineColor: "#808080", // Setting x-axis line color
//         tickColor: "#808080", // Setting x-axis tick color
//         labelFontColor: "#808080", // Setting x-axis label color
//       },
//       data: [
//         {
//           type: "column", //change type to bar, line, area, pie, etc
//           //indexLabel: "{y}", //Shows y value on all Data Points
//           indexLabelFontColor: "#5A5757",
//           indexLabelPlacement: "outside",
//           dataPoints: [
//             { x: 20, y: 20 },
//             // { x: 20, y: 55 },
//             { x: 40, y: 40 },
//             // { x: 40, y: 65 },
//             { x: 60, y: 60 },
//             // { x: 60, y: 68 },
//             { x: 80, y: 80, indexLabel: "Highest" },
//             // { x: 80, y: 92,  },
//             // { x: 90, y: 54 },
//             { x: 100, y: 60 },
//             { x: 110, y: 40 },
//             // { x: 120, y: 49 },
//             { x: 130, y: 20 },
//           ],
//         },
//       ],
//     };

//     return (
//       <div>
//         <CanvasJSChart
//           options={options}
//           onRef={(ref) => (this.chart = ref)}
//           containerProps={{
//             width: "100%",
//             height: "28vh",
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default Graph;

// import React from "react";
// import Chart from "apexcharts";

// const Graph = () => {
//   return (
//     <>
//       <>
//         <Chart
//           className="bg-[#26272B] pt-2 pl-1"
//           type="bar"
//           // width={280}
//           height={210}
//           series={[{ data: [40, 60, 80, 60, 50] }]}
//           options={{
//             yaxis: {
//               labels: {
//                 style: {
//                   colors: ["#808080"],
//                 },
//               },
//             },
//             colors: ["#DD4F52"],
//             grid: { show: false },
//             legend: {
//               show: false,
//               // position :"left"
//             },

//             xaxis: {
//               categories: ["Sat", "Sun", "Mon", "Tue", "Wen"],
//               labels: {
//                 style: {
//                   colors: [
//                     "#808080",
//                     "#808080",
//                     "#808080",
//                     "#808080",
//                     "#808080",
//                   ], // Specify x-axis label color
//                 },
//               },
//               axisBorder: {
//                 show: false,
//               },
//             },
//             dataLabels: {
//               enabled: false,
//             },

//             chart: {
//               toolbar: {
//                 show: false,
//               },
//             },

//             title: { text: "Presence Report", style: { color: "#A7A8AC" } },

//             plotOptions: {
//               bar: {
//                 borderRadius: 8,

//                 // horizontal: false,
//                 columnWidth: "30%",
//               },
//             },
//           }}
//         ></Chart>
//       </>
//     </>
//   );
// };

// export default Graph;

import React, { Component } from "react";
import Chart from "react-apexcharts"; // Assuming you're using ApexCharts for your Chart component

class App extends Component {
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
              colors: ["#808080"],
            },
          },
        },
        colors: ["#DD4F52"],
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Presence Report",
          style: {
            color: "#A7A8AC",
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "30%",
          },
        },
      },
      series: [
        {
          name: "series-1",
          data: [40, 60, 80, 60, 50],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div
            className="mixed-chart"
            style={{ marginTop: "20px", marginLeft: "20px" }}
          >
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              // type="donut"
              // width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
