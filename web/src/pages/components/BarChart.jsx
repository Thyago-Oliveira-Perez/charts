import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ data, onUpdate }) {
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
        text: "Measures per country",
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
      <button className="reload-button" onClick={onUpdate}>
        Update Bar Chart
      </button>
    </div>
  );
}
