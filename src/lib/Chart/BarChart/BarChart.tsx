import { FunctionComponent } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ChartData, registerables } from "chart.js";
ChartJS.register(...registerables);

export type BarChartType = ChartData<
  "bar",
  (number | [number, number] | null)[],
  unknown
>;

export const BarChart: FunctionComponent<{
  data: BarChartType;
  title?: string;
}> = (props) => <Bar data={props?.data} />;
