import { Fragment, FunctionComponent, useState } from "react";
import { DataProvider } from "..";
import { AddChart } from "../AddChart/AddChart";
import { Chart } from "../Chart/Chart";
import { Filter } from "../Filter/Filter";
import { FilterProps } from "../Filter/Filter.types";
import { Flex } from "../Flex/Flex";
import { getStoredValue, useLocalStorage } from "../hooks/useLocalStorage";
import { View } from "../View/View";

import { Config, DashboardProps } from "./Dashboard.types";

export function Dashboard<T>(props: DashboardProps<T>) {
  const { children } = props;

  const [storedValue, setValue] = useLocalStorage<string | null>(
    "clientId:1234",
    null
  );

  const getStoredConfig = () => {
    if (!storedValue && props?.config) {
      setValue(JSON.stringify(props?.config));
      return props?.config;
    }

    if (storedValue !== null) return JSON.parse(storedValue);
  };

  const [config, setConfig] = useState<Config[] | undefined>(getStoredConfig());

  const handleDelete = () => {
    localStorage.removeItem("clientId:1234");
    setConfig(undefined)
  };

  return (
    <DataProvider data={props?.data as any}>
      {!children && (
        <DashboardContents
          config={config}
          filters={props?.filters}
          onDelete={handleDelete}
        />
      )}
      {children && <Fragment>{children}</Fragment>}
    </DataProvider>
  );
}

const DashboardContents: FunctionComponent<{
  config?: Config[];
  filters?: FilterProps[];
  onDelete?: () => void;
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
          {props?.config?.map((chartConfig, i) => {
            return (
              <View key={i} id={`${chartConfig.groupedBy}`}>
                <Chart config={chartConfig} />
              </View>
            );
          })}
        </Flex>
      </View>
      <AddChart onDelete={props?.onDelete} />
    </Flex>
  );
};

function filterConfig(id: string): any {
  return (config: { id: string }) => config.id === id;
}
