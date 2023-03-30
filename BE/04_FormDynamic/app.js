// Server side

const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + ".views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("dynamic");
});

/* Ajax */
// GET request to /ajax
app.get("/ajax", (req, res) => {
  console.log("req.query");
  console.log(req.query);

  res.send(req.query); // Send req.query to server
});

// POST request to /ajax
app.post("/ajax", (req, res) => {
  console.log("req.body");
  console.log(req.body); // Get params: formInfo from client

  res.send(req.body); //Send req.query to server
});

/* Axios */
app.get("/axios", (req, res) => {
  console.log(req.query);

  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log(req.body); // Sent from client axios, data

  res.send(req.body); // Send to the server
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
