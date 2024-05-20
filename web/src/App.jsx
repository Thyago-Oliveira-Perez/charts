import { useEffect, useState } from "react";
import Api from "./api/api";
import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";
import Loading from "./components/Loading/Loading";

export default function App() {
  const [lineData, setLineData] = useState([65, 59, 80, 81, 56, 55, 40]);
  const [barData, setBarData] = useState(null);
  const [doughnutData, setDoughnutData] = useState([300, 50, 100]);
  const [pirData, setPirData] = useState([300, 50, 100]);
  const api = new Api();

  useEffect(() => {
    api.get("bar-chart").then((res) => {
      setBarData(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Cyber Security Charts</h1>
      <div className="chart-grid">
        <div className="chart-item">
          <h2>Line Chart</h2>
          <LineChart info={lineData} />
        </div>
        <div className="chart-item">
          <h2>Bar Chart</h2>
          {!barData ? (
            <Loading />
          ) : (
            <>
              <BarChart data={barData} />
            </>
          )}
        </div>
        <div className="chart-item">
          <h2>Doughnut Chart</h2>
          <DoughnutChart info={doughnutData} />
        </div>
        <div className="chart-item">
          <h2>Pie Chart</h2>
          <PieChart info={pirData} />
        </div>
      </div>
    </div>
  );
}
