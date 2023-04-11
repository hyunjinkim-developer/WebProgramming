/* npm cookie-parser
Ref: 
- https://expressjs.com/en/resources/middleware/cookie-parser.html
- cookie-parser configurations: 
    - https://www.npmjs.com/package/cookie */

/* Cookie:
    - request    
        req.cookies: 
            req.cookies property is used when the user is using cookie-parser middleware. 
            This property is an object that contains cookies sent by the request. 
    - respond 
        res.cookie(key, value, options) // Set cookie
        res.clearCookie(key, value, options) // Clear cookies
     */

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
const cookieConfig = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24, // 24h
};

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.render("index", { popup: req.cookies.popup });
});

app.post("/setCookie", (req, res) => {
  // Set cookie
  res.cookie("popup", "hide", cookieConfig);
  res.send("Setting cookie completed!");
});

app.listen(PORT, () => {
  console.log(`${PORT} connected`);
});
