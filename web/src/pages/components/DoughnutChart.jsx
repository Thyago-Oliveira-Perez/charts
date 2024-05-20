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
import Loading from "./Loading/Loading";

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

export default function DoughnutChart({ doughnutData, onUpdate }) {
  const { data, loading, error } = doughnutData;

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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="chart-header">
        <h2>Doughnut Chart</h2>
        <button className="reload-button" onClick={onUpdate}>
          Update Doughnut Chart
        </button>
      </div>

      <Doughnut data={data} options={options} />
    </div>
  );
}
