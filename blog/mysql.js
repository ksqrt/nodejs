const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test", //mysql 설치시 설정했던 비번
  database: "test", // db 이름
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    connection.end();
    throw err;
  } else {
    console.log("DB 접속 성공");
  }
});

// connection.query("SELECT * FROM user", function (err, result, fields) {});

module.exports = connection;
