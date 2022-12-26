import { Fragment, FunctionComponent } from "react";
import { BarChart } from "./BarChart/BarChart";
import { ChartProps } from "./Chart.types";
import { LineChart } from "./LineChart/LineChart";
import { PieChart } from "./PieChart/PieChart";

export const Chart: FunctionComponent<ChartProps> = (props) => {
  return (
    <Fragment>
      {props.config.type === "bar" && <BarChart config={props.config} />}
      {props.config.type === "line" && <LineChart config={props.config} />}
      {props.config.type === "pie" && <PieChart config={props.config} />}
    </Fragment>
  );
};
