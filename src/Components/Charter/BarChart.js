import React from "react";
import { Bar } from "react-chartjs-2";

export const BarChart = props => {
  const barOptions = {
    title: {
      display: true,
      text: "Bar Chat",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 7,
            stepSize: 2,
          },
        },
      ],
    },
  };
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Something for 2020 (M)",
        data: [2, 3, 4, 3, 5, 2, 4],
        backgroundColor: ["blue","blue","blue","blue","blue","blue","blue"],
        borderColor: ["blue","blue","blue","blue","blue","blue","blue"],
      },
      {
        label: "Something for 2020 (M)",
        data: [4, 3, 3, 2, 4, 2, 3],
        backgroundColor: ["green","green","green","green","green","green","green"],
        borderColor: ["green","green","green","green","green","green","green"],
      },
      {
        label: "Something for 2020 (M)",
        data: [3, 2, 1, 1, 3, 4, 3],
        backgroundColor: ["red","red","red","red","red","red","red"],
        borderColor: ["red","red","red","red","red","red","red"],
      },
    ],
  };
  return (
    <div>
      <div className="max-w-2xl" id="barChartContainer">
        <Bar data={chartData} options={barOptions} />
      </div>
    </div>
  );
};
