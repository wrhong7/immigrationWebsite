import React from "react";
import { Bar, Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

export default function SurveyResult(props) {
  const lineChart = (
    <Chart dark
      data={
        props.surveyDataOutputForIllustration
      }
    >
      <Axis primary type="ordinal" position="left" />
      <Axis type="linear" stacked position="bottom" />
      <Series type={Bar} />
      <Cursor primary />
      <Cursor />
      <Tooltip />
    </Chart>
  );

  return <div>This is the result:
    <div className="result-page-cover">
      <div className="result-chart-area">
        {lineChart}
        {console.log(props)}
      </div>
    </div>
  </div>;
}