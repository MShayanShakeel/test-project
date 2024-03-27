import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      backgroundColor: "#26272B", // Setting background color
      axisY: {
        includeZero: true,
        lineColor: "#808080", // Setting y-axis line color
        tickColor: "#808080", // Setting y-axis tick color
        labelFontColor: "#808080", // Setting y-axis label color
      },
      axisX: {
        lineColor: "#808080", // Setting x-axis line color
        tickColor: "#808080", // Setting x-axis tick color
        labelFontColor: "#808080", // Setting x-axis label color
      },
      data: [
        {
          type: "column", //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
            { x: 20, y: 20 },
            // { x: 20, y: 55 },
            { x: 40, y: 40 },
            // { x: 40, y: 65 },
            { x: 60, y: 60 },
            // { x: 60, y: 68 },
            { x: 80, y: 80, indexLabel: "Highest" },
            // { x: 80, y: 92,  },
            // { x: 90, y: 54 },
            { x: 100, y: 60 },
            { x: 110, y: 40 },
            // { x: 120, y: 49 },
            { x: 130, y: 20 },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          onRef={(ref) => (this.chart = ref)}
          containerProps={{
            width: "100%",
            height: "28vh",
          }}
        />
      </div>
    );
  }
}

export default Graph;
