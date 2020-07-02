import React from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


const options = {
  chart: {
    type: "column",
    width: 450,
  },
  title: {
    text: null,
  },
  plotOptions: {
    column: {
      stacking: "percent",
    },
  },
  legend: {
    align: "right",
    x: -30,
    verticalAlign: "top",
    y: 25,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "white",
    borderColor: "#CCC",
    borderWidth: 1,
    shadow: false,
  },
  tooltip: {
    shared: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: null,
    },
  },
  series: [
    {
      name: "expenses",
      type: "column",
      data: [
        {
          name: "0.45%",
          data: [0.0, 0.45, 0.6, 0.61],
        },
      ],
    },
  ],
};

function StackedChartComponent() {
    
    return (
      <div >
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          constructorType={"chart"}
          allowChartUpdate={true}
        />
      </div>
    );
}

export default StackedChartComponent;
