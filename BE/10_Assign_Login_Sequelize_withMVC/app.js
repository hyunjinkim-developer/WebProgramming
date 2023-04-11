const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Separate routes from comments to sign up && sign in
const indexRouter = require("./routes"); // Routes for comments
app.use("/", indexRouter); // IP:PORT/
const visitorRouter = require("./routes/visitor");
app.use("/visitor", visitorRouter); // IP:PORT/visitor
const userRouter = require("./routes/user"); // Routes for sign up and sign in
app.use("/user", userRouter); // IP:PORT/user

// Handling address that are not defined
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
