var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var fs = require("fs");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

var port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

var router = require("./router/main")(app, fs);
