import express from "express";
import cors from "cors";
import csv from "csv-parser";
import fs from "fs";

const DOMAIN = process.env.DOMAIN;
const PORT = process.env.PORT;
const origin = process.env.ORIGINS;

const app = express();

const corsOptions = {
  origin: origin,
  optionsSuccessStatus: 200,
};

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

app.use(cors());

app.listen(PORT, () =>
  console.log(`The API is running on: ${DOMAIN}:${PORT}.`)
);
