app.use("/", function (req, res, next) {
  console.log("/ 주소의 요청일 때 실행된다.");
  next();
});
app.get("/", function (req, res, next) {
  console.log("GET 메서드 / 주소의 요청일 때만 실행 된다.");
  next();
});
aap.post("/data", function (req, res, next) {
  console.log("POST 메서드 / data 주소의 요청일 때만 실행된다.");
  next();
});
