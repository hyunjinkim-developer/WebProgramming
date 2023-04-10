const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Separate routing in routes
const indexRouter = require("./routes/user");
// Base address: localhost:PORT/user
app.use("/user", indexRouter); // Use like this for maintanence!

// 404 Error handling
// At the very last of routing
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
