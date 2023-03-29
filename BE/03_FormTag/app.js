// Code of server

const express = require("express"); // Get express directory from node_modules directory
const app = express();
const PORT = 8000; // Port 5000 ~ 5999 : Occupied by OS

/* Settings for views directory */
app.set("view engine", "ejs"); // Set view engine
app.use("/views", express.static(__dirname + "/views")); // Set views directory path which contains .ejs files // __dirname : present working directory;
// Using body-parser
app.use(express.urlencoded({ extended: true })); // built-in function of express to use request.body // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // built-in function in express to recognize the incoming Request Object as a JSON Object

// Rounting: how an application’s endpoints (URIs) respond to client requests
// Set browser url and page pair
/* 
- request: Request that client send to server
- response: Response that server send to client
 */
// url IP:PORT/ will show index.ejs
app.get("/", (request, response) => {
  // Find views/index.ejs and return result from server to client
  response.render("index", { title: "Hi there!", name: "HyunJin" }); // Send value form server to client in dictionary
});

app.get("/getForm", function (req, res) {
  console.log(req); // Log shows in terminal
  console.log(req.query);
  // res.send("Success get request!"); // Send to browser as result

  res.render("result", {
    title: "Reuslt of Get form",
    userInfo: req.query,
  }); // same as res.render("result.ejs")
});

app.post("/postForm", function (req, res) {
  console.log(req.body);
  // res.send("Success post request!"); // Show on browser

  res.render("result", {
    title: "Result of Post form",
    userInfo: req.body,
  });
});

// Bind and listen to the connections on the specified host and port
app.listen(PORT, () => {
  console.log("Start web server");
  console.log(`https://localhost:${PORT}`);
});
