import { Fragment, FunctionComponent, useState } from "react";
import { Chart, Dashboard, Filter } from "./lib";
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
    groupedByLabel: "Product SKU's",
    title: "Example: Top 10 Products",
    id: "string",
  },
];

export const ExampleDashboard: FunctionComponent = () => {
  const [screen, setScreen] = useState(1);
  return (
    <Fragment>
      <nav>
        <button onClick={() => setScreen(1)}>Tab 1</button>
        <button onClick={() => setScreen(2)}>Tab 2</button>
      </nav>
      <article>
        {screen === 1 && <ScreenOne />}
        {screen === 2 && <ScreenTwo />}
      </article>
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
    <Dashboard<Sales> data={data as unknown as Sales[]}>
      <div>
        <div>
          <Filter filterKey="category" label="Category" type="select" />
        </div>
        <div>
          <div>
            <strong>Santa Widget</strong>
          </div>
          <p>
            <img src="./walking_santa.gif" height={200} />
          </p>
        </div>
        <div className="view">
          <strong>Chart Widget</strong>
          <Chart config={config[0]} />
        </div>
      </div>
    </Dashboard>
  );
};
