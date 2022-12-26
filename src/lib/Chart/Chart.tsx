import { FunctionComponent, useEffect, useState } from "react";
import { FormattedData } from "../DataProvider/DataProviderProps";
import { useData } from "../DataProvider/useData";
import { Flex } from "../Flex/Flex";
import { View } from "../View/View";
import { BarChart, BarChartType } from "./BarChart/BarChart";
import { ChartProps } from "./Chart.types";
import { LineChart, LineChartType } from "./LineChart/LineChart";
import { PieChart, PieChartType } from "./PieChart/PieChart";

export const Chart: FunctionComponent<ChartProps> = (props) => {
  const { getChartData, filter } = useData();

  const chartData = getChartData && getChartData(props?.config);

  const [data, setData] = useState(
    getData(chartData, props?.config.groupedByLabel)
  );

  useEffect(() => {
    setData(getData(chartData, props?.config.groupedByLabel));
  }, [filter]);

  return (
    <Flex>
      {props?.config?.title && (
        <View>
          <Flex>
            <View>{props?.config?.title}</View>
          </Flex>
        </View>
      )}
      <View>
        {props.config.type === "bar" && (
          <BarChart data={data as BarChartType} />
        )}
        {props.config.type === "line" && (
          <LineChart data={data as LineChartType} />
        )}
        {props.config.type === "pie" && (
          <PieChart data={data as PieChartType} />
        )}
      </View>
    </Flex>
  );
};

function getData(chartData?: FormattedData, groupedByLabel?: string) {
  return {
    labels: chartData?.labels,
    datasets: [
      {
        label: groupedByLabel,
        data: chartData?.data,
        backgroundColor: ["rgb(153, 102, 255)"],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
    ],
  };
}
