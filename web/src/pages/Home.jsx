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
          <h2>Line Chart</h2>
          {lineData.loading ? (
            <Loading />
          ) : lineData.error ? (
            <div>Error: {lineData.error}</div>
          ) : (
            <LineChart data={lineData.data} />
          )}
        </div>
        <div className="chart-item">
          <h2>Bar Chart</h2>
          {barData.loading ? (
            <Loading />
          ) : barData.error ? (
            <div>Error: {barData.error}</div>
          ) : (
            <BarChart data={barData.data} />
          )}
        </div>
        <div className="chart-item">
          <h2>Doughnut Chart</h2>
          {doughnutData.loading ? (
            <Loading />
          ) : doughnutData.error ? (
            <div>Error: {doughnutData.error}</div>
          ) : (
            <DoughnutChart data={doughnutData.data} />
          )}
        </div>
        <div className="chart-item">
          <h2>Pie Chart</h2>
          {pieData.loading ? (
            <Loading />
          ) : pieData.error ? (
            <div>Error: {pieData.error}</div>
          ) : (
            <PieChart data={pieData.data} />
          )}
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
