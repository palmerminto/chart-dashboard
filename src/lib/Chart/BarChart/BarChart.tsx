import { FunctionComponent, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Config } from "../../Dashboard/Dashboard.types";
import { useData } from "../../DataProvider/useData";
import { FormattedData } from "../../DataProvider/DataProviderProps";
import { Flex } from "../../Flex/Flex";
import { View } from "../../View/View";
ChartJS.register(...registerables);

export const BarChart: FunctionComponent<{
  config: Config;
}> = (props) => {
  const { getChartData, filter } = useData();

  const chartData = getChartData && getChartData(props?.config);

  const [data, setData] = useState(
    getData(chartData, props?.config.xAxisLabel)
  );

  useEffect(() => {
    setData(getData(chartData, props?.config.xAxisLabel));
  }, [filter]);

  return (
    <Flex>
      {props?.config.title && (
        <View>
          <strong>{props?.config.title}</strong>
        </View>
      )}
      <View>
        <Bar data={data} />
      </View>
    </Flex>
  );
};

function getData(chartData?: FormattedData, dataSetLabel?: string) {
  return {
    labels: chartData?.labels,
    datasets: [
      {
        label: dataSetLabel,
        data: chartData?.data,
        backgroundColor: ["rgb(153, 102, 255)"],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
    ],
  };
}
