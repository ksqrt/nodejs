var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var fs = require("fs");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

const PORT = process.env.PORT || 3000;
// .env 파일 내의 PORT 값을 가져오고 없다면 3000으로 설정
// 위 예시의 3000번 포트가 사용 중일 경우 다른 포트 사용 가능

app.listen(PORT, () => {
  console.log(`✅ Listening on 'http://localhost:${PORT}'`);
});

app.use(express.static("public"));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// app.use(
//   session({
//     secret: "@#@$MYSIGN#@$#$",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

var router = require("./router/main")(app, fs);
