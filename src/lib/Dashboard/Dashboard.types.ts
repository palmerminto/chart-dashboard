import { ReactNode } from "react";
import { ChartTypes } from "../Chart/Chart.types";
import { FilterProps } from "../Filters/Filters.types";

export interface DashboardProps<T> {
  children?: ReactNode;
  data?: T[];
  config?: Config[];
  filters?: FilterProps[];
}

export interface Config {
  groupedBy: string;
  keyData: string;
  type: ChartTypes;
  xAxisLabel: string;
  title?: string;
}
