import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
const BarChats = ({
  barData,
  color,
  empty,
}: {
  barData: Array<number>;
  color: string[];
  empty: Array<string>;
}) => {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

  const data = {
    labels: empty,
    datasets: [
      {
        label: "764",
        data: barData,
        backgroundColor: color,
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 14,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        display: false,
      },
    },
  };
  return (
    <div className="bar  w-[180px] max-[850px]:w-full ">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChats;
