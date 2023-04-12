const express = require("express");
const app = express();
// To use socket.IO on the server
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Client Connected");
  res.render("chat");
});

/* io.on(): commnication related to socket
    Ref: https://socket.io/docs/v4/server-api/
    io.on(EVENT, CALLBACK); 
    EVENT: event occurs when the client connect 
    can use socket object on CALLBACK function 
*/
// When a client enters the server (connected) run callback funtion
io.on("connection", (socket) => {
  // socket.id : socket's id
  /* socket VS session
        socket: id created by webpage
            i.e. id of 2 tabs in Chrome are different
        session: id created by browser 
   */
  console.log("⭕️ Server Socket Connected >>", socket.id); // client id

  // Task 1:
  /* socket.on([EVENT_NAME], CALLBACK);
        Get data from EVENT, run CALLBACK function
   */
  socket.on("Hello", (data) => {
    console.log(`${data.who} sent ${data.msg}`);

    // Server -> Client
    socket.emit("HelloBack", { who: "server", msg: "Hi" });
  });

  socket.on("Happy", (data) => {
    console.log(`${data.who} is ${data.msg}`);

    // Server -> Client
    socket.emit("HappyBack", { who: "server", msg: "Happy" });
  });

  socket.on("Bye", (data) => {
    console.log(`${data.who} says ${data.msg}`);

    // Server -> Client
    socket.emit("ByeBack", { who: "server", msg: "Bye" });
  });
});

/* CAUTION! When using socket.io 
use http.listen() to create a listener on the specified port or path
*/
http.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
