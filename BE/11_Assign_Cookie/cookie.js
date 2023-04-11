/* npm cookie-parser
Ref: 
- https://expressjs.com/en/resources/middleware/cookie-parser.html
- cookie-parser configurations: 
    - https://www.npmjs.com/package/cookie */

const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import cookie-parser module
// return request.cookie
// Create a new cookie parser middleware function
const cookieParser = require("cookie-parser");
/* cookieParser(secretKey, optionObj)
    secretKey : a string or array used for signing cookies. 
    optionObj : option for cookie 
*/
app.use(cookieParser()); // Use cookie parser middleware function

// Options for cookie
const cookieConfig = {
  httpOnly: true, // Only accessible by the server
  maxAge: 60 * 5000, // Longevity of the cookie (ms)
  // expires: Set end date
  // secure: Only accessible with https
  // signed: Encrypt cookie
};

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  // console.log(req.cookies);

  if ("popup" in req.cookies) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.post("/setCookie", (req, res) => {
  if (req.body.checked) {
    res.cookie("popup", "hide", cookieConfig);
    res.send("Setting cookie completed!");
  }
});

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
