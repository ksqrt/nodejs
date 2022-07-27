const router = require("express").Router();
const path = require("path");

// 기본 페이지
// router.get("/", function (req, res) {
//   res.send("this is main page");
// });

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../react-project/build/index.html"));
});

router.get("/login", (req, res) => {
  res.send("this is login page");
});

module.exports = router;
