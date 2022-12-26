import { Config } from "../Dashboard/Dashboard.types";

export type ChartTypes = "bar" | "line" | "pie";

export interface ChartProps {
  config: Config;
}
