function register() {
  var obj = {
    direction: "REQ",
    Command: "TRIG",
    TRIGGER_ID: 1,
    LOG_ID: 1,
  };

  //POST 데이터를 보낼 url - ex) localhost/register
  fetch("http://111.111.1.247:3000/addUser/test8", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: obj,
    }),
  });
}

app.post(
  "http://111.111.1.247:3000/addUser/test8",
  function (request, response) {
    var body = request.body;

    console.log("body : " + body.data.menu);
    //input으로 받은 menu 값 출력 확인
  }
);
