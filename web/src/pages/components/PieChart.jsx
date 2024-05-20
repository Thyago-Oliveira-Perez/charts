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
import Loading from "./Loading/Loading";

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

export default function MyPieChart({ pieData, onUpdate }) {
  const { data, loading, error } = pieData;

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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="chart-header">
        <h2>Pie Chart</h2>
        <button className="reload-button" onClick={onUpdate}>
          Update Pie Chart
        </button>
      </div>

      <Pie data={data} options={options} />
    </div>
  );
}
