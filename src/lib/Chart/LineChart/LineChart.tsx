import { FunctionComponent } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, ChartData, Point, registerables } from "chart.js";
ChartJS.register(...registerables);

export type LineChartType = ChartData<
  "line",
  (number | Point | null)[],
  unknown
>;

export const LineChart: FunctionComponent<{ data: LineChartType }> = (
  props
) => {
  return <Line data={props?.data} />;
};
