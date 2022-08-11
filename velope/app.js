var express = require("express");
const path = require("path");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var fs = require("fs");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

var server = app.listen(3000, function () {
  console.log("Express server has started on port 3000");
});

app.use(express.static("public"));
// app.use("/react", express.static(path.join(__dirname, "react-project/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(
  session({
    secret: "@#@$MYSIGN#@$#$",
    resave: false,
    saveUninitialized: true,
  })
);

const mainrouter = require("./router/main")(app, fs);

app.use("/", mainrouter);
