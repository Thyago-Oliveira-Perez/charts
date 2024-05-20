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

export default function MyPieChart({ data }) {
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

  return <Pie data={data} options={options} />;
}
