import { FunctionComponent, useState } from "react";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

export const PieChart: FunctionComponent = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const [data] = useState({
    labels: labels,
    datasets: [{
      label: 'Expenses by Month',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgb(153, 102, 255)'
      ],
      borderColor: [
        'rgb(153, 102, 255)'
      ],
      borderWidth: 1
    }]
  });

  return (
    <Pie data={data} />
  );
};
