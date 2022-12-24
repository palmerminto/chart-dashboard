import { FunctionComponent } from "react";
import { useData } from "../DataProvider/useData";
import { Chart } from "./Chart";
import { DataChartProps } from "./DataChart.types";

export const DataChart: FunctionComponent<DataChartProps> = (props) => {
  const data = useData();
  return <Chart type={props?.type} />;
};
