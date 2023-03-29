// Get express directory from node_modules directory
const express = require("express");
const app = express();
const PORT = 8000; // Port 5000 ~ 5999 : Occupied by OS

/* Settings for views directory */
app.set("view engine", "ejs"); // Set view engine
app.use("/views", express.static(__dirname + "/views")); // Set views directory path which contains .ejs files
/* Settings for static directory */
app.use("/static", express.static(__dirname + "/static"));

// Rounting :
// Set pairs of browser url and page
/* 
- request: Request that client send to server
- response: Response that server send to client
 */
// url IP:PORT/ will show index.ejs
app.get("/", (request, result) => {
  result.render("index");
});

app.listen(PORT, () => {
  console.log("Start web server");
  console.log(`https://localhost:${PORT}`);
});
