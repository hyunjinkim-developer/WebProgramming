const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

/* Data from DB */
realId = "banana";
realPw = "4321";

app.post("/login", (req, res) => {
  console.log(req.body);

  // Compare Id, Pw from user and DB
  if (realId === req.body.id && realPw === req.body.pw) {
    // Login success
    res.send({ loginSuccess: true, loginInfo: req.body });
  } else {
    // Login failed
    res.send({ loginSuccess: false });
  }
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
