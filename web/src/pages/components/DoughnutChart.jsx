import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

export default function DoughnutChart({ data, onUpdate }) {
  if (!data || !data.labels) {
    return <div>No data available</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Measures per protocol",
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
      <button className="reload-button" onClick={onUpdate}>
        Update Doughnut Chart
      </button>
    </div>
  );
}
