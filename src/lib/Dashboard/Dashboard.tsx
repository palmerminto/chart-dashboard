import { FunctionComponent } from "react";
import { DataProvider, View } from "..";
import { DataChart } from "../Chart/DataChart";
import { Flex } from "../Flex/Flex";

import { DashboardProps } from "./Dashboard.types";

export const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <DataProvider>
      <Flex>
        <View>
          <DataChart type="line" />
        </View>
        <View>
          <DataChart type="bar" />
        </View>
        <View>
          <DataChart type="pie" />
        </View>
      </Flex>
    </DataProvider>
  );
};
