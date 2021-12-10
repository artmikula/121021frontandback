const express = require("express");
const cors = require("cors");
const pool = require("./db");
const db = require("./db");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Testing... success");
});

app.get("/get", (req, res) => {
  const SelectQuery = " SELECT * FROM users";
  db.query(SelectQuery, (err, result) => {
    res.send(result);
  });
});

// app.get("/get/:username", (req, res) => {
//   const username = req.params.username;
//   const SelectQuery = "SELECT FROM users WHERE id = ?";
//   conn.query(SelectQuery, username, (err, result) => {
//     if (err) console.log(err);
//   });
// });

app.get("/users", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    var query = "select * from users";
    var rows = await conn.query(query);
    res.send(rows);
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.release();
  }
});

app.get("/get/users/:id", async (req, res) => {
  let conn;
  const id = req.params.username;
  try {
    conn = await pool.getConnection();
    var query = "SELECT FROM users WHERE id = ?";
    var rows = await conn.query(query);
    res.send(rows);
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.release();
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
