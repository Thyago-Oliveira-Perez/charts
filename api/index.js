import express from "express";
import cors from "cors";
import csv from "csv-parser";
import fs from "fs";

const DOMAIN = process.env.DOMAIN;
const PORT = process.env.PORT;

const app = express();

app.get("/infos", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const results = [];

  fs.createReadStream("./database/CloudWatch_Traffic_Web_Attack.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.json(results);
    });
});

app.get("/bar-chart", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const dataSet = [];

  fs.createReadStream("./database/CloudWatch_Traffic_Web_Attack.csv")
    .pipe(csv())
    .on("data", (data) => {
      dataSet.push(data);
    })
    .on("end", () => {
      const data = new Map();

      dataSet.forEach((info) => {
        if (data.has(info["src_ip_country_code"])) {
          data.set(
            info["src_ip_country_code"],
            data.get(info["src_ip_country_code"]) + 1
          );
        } else {
          data.set(info["src_ip_country_code"], 1);
        }
      });

      const labels = [];
      const resData = [];

      data.forEach((value, key) => {
        resData.push(value);
        labels.push(key);
      });

      res.json({
        labels,
        datasets: [
          {
            label: "Measures per country",
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            data: resData,
          },
        ],
      });
    });
});

app.use(cors());

app.listen(PORT, () =>
  console.log(`The API is running on: ${DOMAIN}:${PORT}.`)
);
