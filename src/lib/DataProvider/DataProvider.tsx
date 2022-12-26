import _ from "lodash";
import { useState } from "react";
import { Config } from "../Dashboard/Dashboard.types";
import { FilterProps } from "../Filter/Filter.types";
import { PickerOptions } from "../Picker/Picker.types";
import {
  DataProviderProps,
  FilterDataBy,
  FormattedData,
} from "./DataProviderProps";
import { DataContext } from "./useData";

export function DataProvider<T>(props: DataProviderProps<T[]>) {
  const [filter, setFilter] = useState<FilterDataBy | null>(null);
  const getChartData = (config: Config): FormattedData => {
    let labels: string[] = [];
    let data: number[] = [];

    let filteredData: T[][] | undefined = [];

    if (filter) {
      filteredData = props?.data?.filter(
        (item) => filter?.key && item[filter?.key] === filter?.value
      );
    }

    const groupedData = _(
      filteredData?.length !== 0 ? filteredData : props?.data
    )
      .groupBy(config.groupedBy)
      .map((objs, key) => ({
        [config.groupedBy]: key,
        [config.keyData]: _.sumBy(objs, config.keyData),
      }))
      .value();

    const orderedByHighestData = _.orderBy(
      groupedData,
      [config.keyData],
      ["desc"]
    );
    const topData = getNNumberOfData(orderedByHighestData, 10);

    topData.forEach((items) => {
      labels.push(items[config.groupedBy] as string);
    });

    topData.forEach((items) => {
      data.push(items[config.keyData] as number);
    });

    return {
      data,
      labels,
    };
  };

  const filterBy = (filter: FilterDataBy) => {
    setFilter(filter);
  };

  const getFilterData = (filter: FilterProps) => {
    let selectElements: PickerOptions[] = [];
    const uniqueElements = props?.data
      ?.map((item) => item[filter.filterKey])
      .filter((value, index, self) => self.indexOf(value) === index);

    uniqueElements?.sort().map((element) => {
      selectElements?.push({ label: element, value: element });
      return null;
    });

    return selectElements;
  };

  const getChartOptions = () => {
    let chartOptions: PickerOptions[] = [];
    if (props?.data && props?.data[0]) {
      Object.keys(props?.data[0]).sort().map(key => {
        chartOptions.push({
          value: key,
          label: key
        })
        return null;
      })
    }

    return chartOptions
  }

  return (
    <DataContext.Provider
      value={{
        getChartData,
        filterBy,
        getFilterData,
        filter,
        getChartOptions
      }}
    >
      {props?.children}
    </DataContext.Provider>
  );
}

const getNNumberOfData = (
  orderedByHighestData: { [x: string]: string | number }[],
  number: number
) => orderedByHighestData.slice(0, number);
