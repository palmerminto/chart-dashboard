import { ReactNode } from "react";
import { ChartTypes } from "../Chart/Chart.types";
import { Config } from "../Dashboard/Dashboard.types";
import { FilterProps } from "../Filter/Filter.types";
import { PickerOptions } from "../Picker/Picker.types";

export interface DataProviderProps<T> {
  children?: ReactNode;
  data?: T[];
}

export type FilterDataBy = { key: string; value: string };

export type FormattedData = { data: number[]; labels: string[] };

export interface DataContextProps {
  getChartData?: (config: Config) => FormattedData;
  filterBy?: (filter: FilterDataBy) => void;
  getFilterData?: (filter: FilterProps) => PickerOptions[] | undefined;
  filter?: FilterDataBy | null;
  objectKeys?: string[]
  getChartOptions?: () => void;
}

export type ChartType = {
  label?: string;
  labels?: string[];
  data?: number[];
  type: ChartTypes;
};
