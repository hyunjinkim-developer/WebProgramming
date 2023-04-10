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
  maxAge: 60 * 3000, // Longevity of the cookie (ms)
  // expires: Set end date
  // secure: Only accessible with https
  // signed: Encrypt cookie
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/setCookie", (req, res) => {
  /* Set cookie
        res.cookie(key, value, options) */
  res.cookie("first cookie", "cookie value test", cookieConfig);

  // Send response to the client
  res.send("Setting cookie completed!");
});

app.get("/getCookie", (req, res) => {
  /* req.cookies : 
        check cookies */
  res.send(req.cookies);
});

app.get("/clearCookie", (req, res) => {
  /* Clear cookie
        res.clearCookie(key, value, options) 
        key, value, options must match with res.cookie(key, value, options 
            (except options related to time limit like expires, maxAge etc.) */
  res.clearCookie("first cookie", "cookie value test", cookieConfig);

  // Send response to the client
  res.send("Clearing cookie completed!");
});

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
