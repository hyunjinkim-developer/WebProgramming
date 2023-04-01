// Server side

const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
/* For post, sending request.body */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/practice1", (req, res) => {
  res.render("practice1");
});

app.get("/practice2", (req, res) => {
  res.render("practice2");
});

app.get("/result1", (req, res) => {
  console.log(req.query); /* get : req.query */
  // res.send("폼 전송 완료!"); // Send from server to client

  res.render("result", {
    title: "실습1 폼 전송 완료!",
    userInfo: req.query,
  });
});

app.post("/result2", (req, res) => {
  console.log(req.body); /* post : req.body */

  res.render("result", {
    title: "실습2 폼 전송 완료!",
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
