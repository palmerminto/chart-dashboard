import { Fragment, FunctionComponent } from "react";
import { DataProvider } from "..";
import { Chart } from "../Chart/Chart";
import { Filter } from "../Filters/Filters";
import { FilterProps } from "../Filters/Filters.types";
import { Flex } from "../Flex/Flex";
import { View } from "../View/View";

import { Config, DashboardProps } from "./Dashboard.types";

export function Dashboard<T>(props: DashboardProps<T>) {
  const { children } = props;
  return (
    <DataProvider data={props?.data as any}>
      {!children && (
        <DashboardContents config={props?.config} filters={props?.filters} />
      )}
      {children && <Fragment>{children}</Fragment>}
    </DataProvider>
  );
}

const DashboardContents: FunctionComponent<{
  config?: Config[];
  filters?: FilterProps[];
}> = (props) => {
  return (
    <Flex>
      {props?.filters && (
        <Fragment>
          <View>
            {props?.filters.map((filter, i) => {
              return (
                <Fragment key={i}>
                  <Filter {...filter} />
                </Fragment>
              );
            })}
          </View>
          <hr />
        </Fragment>
      )}
      <View>
        <Flex>
          {props.config?.map((chartConfig, i) => {
            return (
              <View key={i}>
                <Chart config={chartConfig} />
              </View>
            );
          })}
        </Flex>
      </View>
    </Flex>
  );
};
