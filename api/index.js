const express = require("express");
const mariadb = require("mariadb");
const cors = require("cors");

const db = mariadb.createPool({
  host: "localhost",
  user: "my_user",
  password: "ROOT",
  port: 63306,
  database: "my_database3",
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Connection successful");
});

app.get("/get", (req, res) => {
  const SelectQuery = " SELECT * FROM users";
  db.query(SelectQuery, (err, result) => {
    res.send(result);
  });
});

app.listen("3001", () => {});
