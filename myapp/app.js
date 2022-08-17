const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
// cors미들웨어 사용
app.use(
  cors({
    origin: "*", // 모든 출처 허용 옵션. true 를 써도 된다.
  })
);

// 라우터 정의
const index = require("./router/index");
app.use("/", index);
const topic = require("./router/topic");
app.use("/topic", topic);
// 정적 디랙토리 정의
app.use(express.static(path.join(__dirname, "react-project/build")));

// 서버 가동
var server = app.listen(3001, function () {
  console.log("Express server has started on port 3001");
});
