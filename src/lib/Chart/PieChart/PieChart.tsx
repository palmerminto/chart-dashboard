import { FunctionComponent } from "react";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ChartData, registerables } from "chart.js";

ChartJS.register(...registerables);

export type PieChartType = ChartData<"pie", number[], unknown>;

export const PieChart: FunctionComponent<{
  data: PieChartType;
}> = (props) => <Pie data={props?.data} />;
