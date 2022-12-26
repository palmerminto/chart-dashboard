import { ReactNode } from "react";
import { ChartTypes } from "../Chart/Chart.types";
import { FilterProps } from "../Filter/Filter.types";

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
  groupedByLabel: string;
  title?: string;
  id: string
}
