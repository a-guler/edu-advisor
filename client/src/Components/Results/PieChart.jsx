import React from "react";
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
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8A2BE2",
          // Add more colors as needed
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8A2BE2",
          // Add more colors as needed
        ],
      },
    ],
  };

  return (
    <div className="w-64">
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
