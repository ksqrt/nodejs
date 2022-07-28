const router = require("express").Router();
const path = require("path");
const mysql = require("mysql");

// 기본 페이지
// router.get("/", function (req, res) {
//   res.send("this is main page");
// });

// 데이터베이스 연결
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test", //mysql 설치시 설정했던 비번
  database: "test", // db 이름
});
db.connect();

// 데이터베이스에서 id 값으로 user 테이블 조회
// 이는 서버사이드 렌더링임
// 리액트파일에서 이 경로로 GET 요청하면 끝
router.get("/serverSide/:id", (req, res) => {
  var sql = `SELECT * FROM user WHERE id = "${req.params.id}"`;
  db.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(rows);
      res.json(rows);
    }
  });
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../react-project/build/index.html"));
});

router.get("/login", (req, res) => {
  res.send("this is login page");
});

module.exports = router;
