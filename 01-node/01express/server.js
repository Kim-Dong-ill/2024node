const express = require("express");
const app = express();

const users = [];

app.use(express.json()); //post에 입력한 json형식 데이터를 읽을수 있게 해줌

//데이터 전송
app.post("/user", function (req, res) {
  //   console.log(req.body);
  //   users.push({ name: "홍길동", age: 45 });
  users.push({
    name: req.body.name,
    age: req.body.age,
  });
  return res.send({ success: true });
});

//get 데이터 받기
app.get("/user", function (req, res) {
  //request, respons
  //웹에서 "/" 가 입력되면 함수 실행하겠다.
  return res.send({ users: users });
});

app.listen(3000); //3000포트의 웹에서 듣겠다
