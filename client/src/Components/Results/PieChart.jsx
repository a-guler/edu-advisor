import React from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

function PieChart({ data }) {
  const categories = {};

  data.forEach((major) => {
    if (!categories[major["Major Category"]]) {
      categories[major["Major Category"]] = 0;
    }
    categories[major["Major Category"]] += 1;
  });

  const chartData = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
      },
    ],
  };

  return (
    <div className="w-64 mt-5">
      <Pie data={chartData} width="20%" />
    </div>
  );
}

export default PieChart;
