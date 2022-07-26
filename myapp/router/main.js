// 업로드
module.exports = function (app, fs, upload) {
  // ---------------홈------------
  // ---------------리스트출럭---------
  app.get("/list", function (req, res) {
    fs.readFile(
      __dirname + "/../data/" + "user.json",
      "utf8",
      function (err, data) {
        console.log(data);
        res.end(data);
      }
    );
  });
  //   -------------------데이터추가
  app.post("/:username", function (req, res) {
    var result = {};
    var username = req.params.username;

    // CHECK REQ VALIDITY
    if (!req.body["direction"]) {
      result["Result"] = "NOK";
      // result["error"] = "invalid request";
      res.json(result);
      return;
    }
    // json file 저장 업로드
    var jsonData = JSON.stringify(req.body);

    fs.writeFile(__dirname + "/../data/test.json", jsonData, function (err) {
      if (err) {
        console.log(err);
      }
    });

    // LOAD DATA & CHECK DUPLICATION
    fs.readFile(__dirname + "/../data/user.json", "utf8", function (err, data) {
      var users = JSON.parse(data);
      if (users[username]) {
        // DUPLICATION FOUND
        result["success"] = 0;
        result["error"] = "duplicate";
        res.json(result);
        return;
      }

      let today = new Date();
      // ADD TO DATA
      users[username] = req.body;

      // SAVE DATA
      fs.writeFile(
        __dirname + "/../data/user.json",
        JSON.stringify(users, null, "\t"),
        "utf8",
        function (err, data) {
          //   result = { success: 1 };
          result["direction"] = "RES";
          result["Command"] = "RESP";
          result["R_STATUS"] = true;
          //  응답 json 데이터를 전송
          res.json(result);
        }
      );
      // json 데이터 저장
    });
  });

  //   ------파일업로드
};
