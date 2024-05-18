import express from "express";
import csv from "csv-parser";
import fs from "fs";

const DOMAIN = process.env.DOMAIN;
const PORT = process.env.PORT;
const app = express();

app.get("/infos", (req, res) => {
  const results = [];

  fs.createReadStream("./database/CloudWatch_Traffic_Web_Attack.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.json(results);
    });
});

app.listen(PORT, () =>
  console.log(`The API is running on: ${DOMAIN}:${PORT}.`)
);
