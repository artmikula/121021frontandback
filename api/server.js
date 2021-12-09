const express = require("express");
const pool = require("./db");
const app = express();
const port = 5000;

process.on("uncaughtException", function (err) {
  console.log(err);
});

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

app.listen(port, () => console.log(`Listening on port ${port}`));
