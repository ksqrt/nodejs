module.exports = function (app, fs) {
  var session = require("express-session");
  // 미들웨어 세션
  app.use(
    session({
      secret: "@#@$MYSIGN#@$#$",
      resave: false,
      saveUninitialized: true,
    })
  );

  // app.get("/test1", function (req, res) {
  //   res.sendFile(path.join(__dirname, "/react-project/build/index.html"));
  // });

  // 테스트 html 페이지
  // 로그인기능
  app.get("/login/:username/:password", function (req, res) {
    var sess;
    sess = req.session;

    fs.readFile(__dirname + "/../data/user.json", "utf8", function (err, data) {
      var users = JSON.parse(data);
      var username = req.params.username;
      var password = req.params.password;
      var result = {};
      if (!users[username]) {
        // USERNAME NOT FOUND
        result["success"] = 0;
        result["error"] = "not found";
        res.json(result);
        return;
      }

      if (users[username]["password"] == password) {
        result["success"] = 1;
        sess.username = username;
        sess.name = users[username]["name"];
        res.json(result);
      } else {
        result["success"] = 0;
        result["error"] = "incorrect";
        res.json(result);
      }
    });
  });
  // 로그아웃기능
  app.get("/logout", function (req, res) {
    sess = req.session;
    if (sess.username) {
      req.session.destroy(function (err) {
        if (err) {
          console.log(err);
        } else {
          res.redirect("/");
        }
      });
    } else {
      res.redirect("/");
    }
  });

  app.get("/", function (req, res) {
    var sess = req.session;

    res.render("index", {
      title: "MY HOMEPAGE",
      length: 5,
      name: sess.name,
      username: sess.username,
    });
  });

  // 모든 유저를 출력하는 GET API
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
  // 특정 유저를 출력
  app.get("/getUser/:username", function (req, res) {
    fs.readFile(__dirname + "/../data/user.json", "utf8", function (err, data) {
      var users = JSON.parse(data);
      res.json(users[req.params.username]);
    });
  });
  // -----------------유저추가--------------------------
  app.post("/addUser/:username", function (req, res) {
    var result = {};
    var username = req.params.username;

    // CHECK REQ VALIDITY
    if (!req.body["password"] || !req.body["name"]) {
      result["success"] = 0;
      result["error"] = "invalid request";
      res.json(result);
      return;
    }

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

      // ADD TO DATA
      users[username] = req.body;

      // SAVE DATA
      fs.writeFile(
        __dirname + "/../data/user.json",
        JSON.stringify(users, null, "\t"),
        "utf8",
        function (err, data) {
          result = { success: 1 };
          res.json(result);
        }
      );
    });
  });
  // -------------------------유저 업데이트--------------
  app.put("/updateUser/:username", function (req, res) {
    var result = {};
    var username = req.params.username;

    // CHECK REQ VALIDITY
    if (!req.body["password"] || !req.body["name"]) {
      result["success"] = 0;
      result["error"] = "invalid request";
      res.json(result);
      return;
    }

    // LOAD DATA
    fs.readFile(__dirname + "/../data/user.json", "utf8", function (err, data) {
      var users = JSON.parse(data);
      // ADD/MODIFY DATA
      users[username] = req.body;

      // SAVE DATA
      fs.writeFile(
        __dirname + "/../data/user.json",
        JSON.stringify(users, null, "\t"),
        "utf8",
        function (err, data) {
          result = { success: 1 };
          res.json(result);
        }
      );
    });
  });
  // --------------------------유저 삭제 ---------------
  app.delete("/deleteUser/:username", function (req, res) {
    var result = {};
    //LOAD DATA
    fs.readFile(__dirname + "/../data/user.json", "utf8", function (err, data) {
      var users = JSON.parse(data);

      // IF NOT FOUND
      if (!users[req.params.username]) {
        result["success"] = 0;
        result["error"] = "not found";
        res.json(result);
        return;
      }

      delete users[req.params.username];
      fs.writeFile(
        __dirname + "/../data/user.json",
        JSON.stringify(users, null, "\t"),
        "utf8",
        function (err, data) {
          result["success"] = 1;
          res.json(result);
          return;
        }
      );
    });
  });
};
