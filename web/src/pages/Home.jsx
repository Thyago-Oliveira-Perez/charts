import React from "react";
import { useState, useEffect } from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";
import Loading from "./components/Loading/Loading";
import Api from "./../api/api";
import "./Home.css";

export default function HomePage() {
  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [doughnutData, setDoughnutData] = useState(null);
  const [pirData, setPirData] = useState(null);
  const api = new Api();

  useEffect(() => {
    api.get("line-chart").then((res) => {
      setLineData(res.data);
    });

    api.get("bar-chart").then((res) => {
      setBarData(res.data);
    });

    api.get("doughnut-chart").then((res) => {
      setDoughnutData(res.data);
    });

    api.get("pie-chart").then((res) => {
      setPirData(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Cyber Security Charts</h1>
      <div className="chart-grid">
        <div className="chart-item">
          <h2>Line Chart</h2>
          {!lineData ? (
            <Loading />
          ) : (
            <>
              <LineChart data={lineData} />
            </>
          )}
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
          {!doughnutData ? (
            <Loading />
          ) : (
            <>
              <DoughnutChart data={doughnutData} />
            </>
          )}
        </div>
        <div className="chart-item">
          <h2>Pie Chart</h2>
          {!pirData ? (
            <Loading />
          ) : (
            <>
              <PieChart data={pirData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
