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

// Object to save nicknames,
// use dictionary so that there's not same nicknames
// key: socket.id, value: nickname
const nickObj = {};
/* Add key, value pair to object, 
    obj.KEY = VALUE 
    obj[KEY] = VALUE <- Use this in this case
  */

// Notice every user who are connected,
// that nickname dictionary is updated
// whenever a user comes in or gets out
function updateNicknameList() {
  io.emit("updateNicknames", nickObj);
}

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

  /* io.emit() Notice all users who enters into the chat: */
  // io.emit("notice", `${socket.id.slice(0, 7)} entered.`); // Notice socket.id

  socket.on("setNickname", (nickname) => {
    /* Check nickname redundancy */
    if (Object.values(nickObj).indexOf(nickname) > -1) {
      // There's already same nickname
      socket.emit(
        "error",
        "There's already same nickname. Please enter another nickname."
      );
    } else {
      nickObj[socket.id] = nickname;
      io.emit("notice", `${nickname} entered.`);
      // When the user successfully enters the chat
      socket.emit("enterySuccess", nickname);
      // Update nickname dictionary
      updateNicknameList();
    }
  });

  /* Get message sent by clients */
  socket.on("send", (obj) => {
    // obj : { nickname: "", dm: "", msg: "" }
    // dm: "all" -> Send all client message get from the client
    // dm: "[socket.id]" -> Send to specific client

    if (obj.dm !== "all") {
      /* Direct message */
      // data : { nickname: "", dm: "", msg: "" }
      let dmSocketId = obj.dm;
      const data = {
        nickname: obj.nickname,
        dm: "(속닥속닥) ",
        msg: obj.msg,
      };
      // Show in receiver client
      io.to(dmSocketId).emit("newMessage", data);
      // Show in sender client
      socket.emit("newMessage", data);
    } else {
      /* Send to all */
      // data : { nickname: "", msg: "" }
      const data = { nickname: obj.nickname, msg: obj.msg };
      io.emit("newMessage", data);
    }
  });

  /* When the user gets out from the chat, When browser closed*/
  socket.on("disconnect", () => {
    console.log("❌ Server Socket Disconnected", socket.id);

    // Updates other users that current user gets out from the chat
    io.emit("notice", `${nickObj[socket.id]} left the chat`);
    /* Delete nickname and socket.id from nickObj */
    delete nickObj[socket.id];
    // Remove socket.id and nickname who just left the chat from ncikObj
    // Update nickname dictionary
    updateNicknameList();
  });
});

/* CAUTION! When using socket.io 
use http.listen() to create a listener on the specified port or path
*/
http.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
