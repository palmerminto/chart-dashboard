import { Fragment, FunctionComponent } from "react";
import { BarChart } from "./BarChart/BarChart";
import { ChartProps } from "./Chart.types";
import { LineChart } from "./LineChart/LineChart";
import { PieChart } from "./PieChart/PieChart";

export const Chart: FunctionComponent<ChartProps> = (props) => {
  return (
    <Fragment>
      {props.type === "bar" && <BarChart />}
      {props.type === "line" && <LineChart />}
      {props.type === "pie" && <PieChart />}
    </Fragment>
  );
};
