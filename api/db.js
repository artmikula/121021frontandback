const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "my_user",
  password: "ROOT",
  port: 3307,
  database: "my_database3",
});

module.exports = {
  getConnection: function () {
    return new Promise(function (resolve, reject) {
      pool
        .getConnection()
        .then(function (connection) {
          resolve(connection);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
};
