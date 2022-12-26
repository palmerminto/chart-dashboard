import { Fragment, FunctionComponent } from "react";
import { Chart, Dashboard } from "./lib";
import { Config } from "./lib/Dashboard/Dashboard.types";

export interface Sales {
  order_id: number;
  order_date: string;
  status: string;
  item_id: number;
  sku: string;
  qty_ordered: number;
  price: number;
  value: number;
  discount_amount: number;
  total: number;
  category: string;
  payment_method: string;
  bi_st: string;
  cust_id: number;
  year: number;
  month: string;
  ref_num: number;
  customer_since: string;
  place_name: string;
  county: string;
  city: string;
  state: string;
  zip: number;
  region: string;
  discount_percent: number;
}

let data = require("./us-sales.json") as Sales;

const config: Config[] = [
  {
    groupedBy: "sku",
    keyData: "total",
    type: "bar",
    xAxisLabel: "Product SKU's",
    title: "Top 10 Products",
  },
];

export const ExampleDashboard: FunctionComponent = () => {
  return (
    <Fragment>
      <ScreenOne />
      {/* <ScreenTwo /> */}
    </Fragment>
  );
};

const ScreenOne: FunctionComponent = () => {
  return (
    <Dashboard<Sales>
      data={data as unknown as Sales[]}
      config={config}
      filters={[{ filterKey: "category", label: "Category", type: "select" }]}
    />
  );
};

const ScreenTwo: FunctionComponent = () => {
  return (
    <Dashboard<Sales>
      data={data as unknown as Sales[]}
      filters={[{ filterKey: "category", label: "Category", type: "select" }]}
    >
      <div>
        <div className="view">
          <Chart config={config[0]} />
        </div>
      </div>
    </Dashboard>
  );
};
