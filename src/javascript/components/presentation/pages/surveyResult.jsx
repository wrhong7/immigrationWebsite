import React from "react";
import { Bar, Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

export default function SurveyResult(props) {
  console.log("INSIDE SURVEY RES", props);

  const lineChart = (
    <Chart dark
      data={[
        {
          label: "Eligibility",
          data: [["Australia", 1], ["Canada", 2], ["Ireland", 4], ["New Zealand", 2], ["United Kingdom", 7], ["United States", 7]],
        },
        {
          label: "Career & Life",
          data: [["Australia", 3], ["Canada", 1], ["Ireland", 5], ["New Zealand", 6], ["United Kingdom", 4], ["United States", 7]],
        },
        {
          label: "Risk Profile",
          data: [["Australia", 9], ["Canada", 2], ["Ireland", 10], ["New Zealand", 12], ["United Kingdom", 7], ["United States", 7]],
        },
        {
          label: "City Preference",
          data: [["Australia", 1], ["Canada", 2], ["Ireland", 4], ["New Zealand", 2], ["United Kingdom", 7], ["United States", 7]],
        },
        {
          label: "Industry Preference",
          data: [["Australia", 3], ["Canada", 1], ["Ireland", 5], ["New Zealand", 6], ["United Kingdom", 4], ["United States", 7]],
        },
      ]}
    >
      <Axis primary type="ordinal" position="left" />
      <Axis type="linear" stacked position="bottom" />
      <Series type={Bar} />
      <Cursor primary />
      <Cursor />
      <Tooltip />
    </Chart>
  );


  return <div>Thise IS THE RESULT:
    <div className="test-line-chart">
      {lineChart}
    </div>
  </div>;
}