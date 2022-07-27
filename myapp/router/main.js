// 업로드
module.exports = function (app, fs, upload) {
  // ---------------시간설정------------
  function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;
    hour = hour >= 10 ? hour : "0" + hour;
    minute = minute >= 10 ? minute : "0" + minute;
    second = second >= 10 ? second : "0" + second;

    return (
      date.getFullYear() +
      "-" +
      month +
      "-" +
      day +
      " " +
      hour +
      ":" +
      minute +
      ":" +
      second
    );
  }
  // ---------------로그출럭---------
  let today = dateFormat(new Date());

  app.get("/log", function (req, res) {
    fs.readFile(
      __dirname + "/../data/" + "log.txt",
      "utf-8",
      function (err, data) {
        console.log(data);
        res.end(data);
      }
    );
  });
  //   -------------------데이터추가
  // app.post("/:username", function (req, res) {
  app.post("/", function (req, res) {
    var result = {};
    // var username = req.params.username;
    var username = Math.random();

    // CHECK REQ VALIDITY
    // 올바른 json 파일이 들어왔는지 확인 Direction 칼럼과 Command 칼럼이 없으면 NOK 를 출력
    if (!req.body["Direction"] || !req.body["Command"]) {
      result["Result"] = "NOK";
      // result["error"] = "invalid request";
      res.json(result);
      // 로그기록남기기
      fs.appendFile(
        __dirname + "/../data/log.txt",
        "Result : NOK " + today + JSON.stringify(req.body) + "\n",
        function (err) {
          if (err) throw err;
        }
      );
      return;
    }

    // LOAD DATA & CHECK DUPLICATION
    fs.readFile(__dirname + "/../data/user.json", "utf8", function (err, data) {
      var users = JSON.parse(data);

      // 로그 기록 남기기
      fs.appendFile(
        __dirname + "/../data/log.txt",
        "Result : OK " + today + JSON.stringify(req.body) + "\n",
        function (err) {
          if (err) throw err;
        }
      );

      // ADD TO DATA
      users[username] = req.body;

      // SAVE DATA
      fs.writeFile(
        __dirname + "/../data/" + username + ".json",
        JSON.stringify(req.body, null, "\t"),
        "utf8",
        function (err, data) {
          //
          result["Result"] = "OK";
          //  응답 json 데이터를 전송
          res.json(result);
        }
      );
    });
  });

  //   ------파일업로드
};
