import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
 //props.dataPoint.map((data) => dataPoint.value)
 // will return the  value  numbers  an create a new array in dataPointValues
  const dataPointValues = props.dataPoints.map((data) => data.value);
  //... will use the spreed operator to add the values in  stand alone format
  const totalMaximun = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
