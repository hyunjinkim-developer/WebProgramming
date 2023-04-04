const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require() : if the input path is directory, require() automatically find index.js
// const indexRouter = require("./routes/index"); // only index.js can ommit file path
const indexRouter = require("./routes");
// Every router defines in indexRouter(/routes/index.js)
app.use("/", indexRouter);

// [404 error]
// 맨 마지막에! 라우트로 선언: nor 나머지 코드 무시되기 때문!!
// 없는 페이지에 접근하고자 할 때 보여줄 페이지
app.get("*", (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
