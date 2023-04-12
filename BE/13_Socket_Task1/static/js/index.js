// FrontEnd JS

// Create socket object
let socket = io.connect();

socket.on("connect", () => {
  console.log("⭕️ Client Socket Connected >>", socket.id);
});

function sayHello() {
  // Client -> Server
  /* socket.emit([EVENT_NAME], [DATA_OBJECT]):
        send [DATA_OBJECT] Client -> Server in event of [EVENT_NAME] */
  socket.emit("Hello", { who: "client", msg: "Hello" });

  // Server -> Client
  socket.on("HelloBack", (data) => {
    document.querySelector(
      "#form-server"
    ).textContent = `${data.who} sent ${data.msg}, too`;
  });
}

function sayHappy() {
  // C -> S
  socket.emit("Happy", { who: "client", msg: "Happy" });

  // S -> C
  socket.on("HappyBack", (data) => {
    document.querySelector(
      "#form-server"
    ).textContent = `${data.who} is ${data.msg}, too`;
  });
}

function sayBye() {
  // C -> S
  socket.emit("Bye", { who: "client", msg: "Bye" });

  // S -> C
  socket.on("ByeBack", (data) => {
    document.querySelector(
      "#form-server"
    ).textContent = `${data.who} says ${data.msg} back`;
  });
}
