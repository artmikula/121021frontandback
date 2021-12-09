const mariadb = require("mariadb");

const port = 3307;

const pool = mariadb.createPool({
  host: "localhost",
  user: "my_user",
  password: "ROOT",
  port: port,
  database: "my_database3",
});

async function main(arg1, arg2) {
  try {
    let conn = await pool.getConnection();
    let rows = await conn.query(
      `INSERT INTO users (username, email) VALUE ("${arg1}", "${arg2}")`,
    );
    console.log("data entered");
  } catch (err) {
    console.log(err);
  }
}

console.log(`listening on port ${port}`);

// main("test_username", "test_email");
