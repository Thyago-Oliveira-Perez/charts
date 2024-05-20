import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

export default function MyPieChart({ data, onUpdate }) {
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
        text: "Measures per country - Pie View",
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
      <button className="reload-button" onClick={onUpdate}>
        Update Pie Chart
      </button>
    </div>
  );
}
