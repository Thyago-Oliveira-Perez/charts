import { useEffect, useState } from "react";
import Api from "./api/api";
import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";

export default function App() {
  const [data, setData] = useState([]);
  const api = new Api();

  useEffect(() => {
    api.get("infos").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Cyber Security Charts</h1>
      <div className="chart-grid">
        <div className="chart-item">
          <h2>Line Chart</h2>
          <LineChart />
        </div>
        <div className="chart-item">
          <h2>Bar Chart</h2>
          <BarChart />
        </div>
        <div className="chart-item">
          <h2>Doughnut Chart</h2>
          <DoughnutChart />
        </div>
        <div className="chart-item">
          <h2>Pie Chart</h2>
          <PieChart />
        </div>
      </div>
    </div>
  );
}
