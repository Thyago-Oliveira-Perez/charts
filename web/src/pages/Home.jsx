import React, { useEffect, useContext } from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";
import Loading from "./components/Loading/Loading";
import { ChartProvider, Context } from "../context/Context";
import "./Home.css";

function HomeContent() {
  const {
    state,
    fetchLineData,
    fetchBarData,
    fetchDoughnutData,
    fetchPieData,
  } = useContext(Context);

  useEffect(() => {
    fetchLineData();
    fetchBarData();
    fetchDoughnutData();
    fetchPieData();
  }, []);

  const { lineData, barData, doughnutData, pieData } = state;

  return (
    <div className="container">
      <h1>Cyber Security Charts</h1>
      <div className="chart-grid">
        <div className="chart-item">
          <LineChart lineData={lineData} onUpdate={fetchLineData} />
        </div>
        <div className="chart-item">
          <BarChart barData={barData} onUpdate={fetchBarData} />
        </div>
        <div className="chart-item">
          <DoughnutChart
            doughnutData={doughnutData}
            onUpdate={fetchDoughnutData}
          />
        </div>
        <div className="chart-item">
          <PieChart pieData={pieData} onUpdate={fetchPieData} />
        </div>
      </div>
    </div>
  );
}

const HomePage = () => (
  <ChartProvider>
    <HomeContent />
  </ChartProvider>
);

export default HomePage;
