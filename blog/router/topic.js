const router = require("express").Router();

router.get("/view", (req, res) => {
  res.send("This is view page");
});

module.exports = router;
