// FrontEnd JS

// Create socket object
let socket = io.connect();

// Gloabl variable for my nickanme
let myNickname;

socket.on("connect", () => {
  console.log("⭕️ Client Socket Connected >>", socket.id);
});

/* Show who enters and lefts the chat */
socket.on("notice", (msg) => {
  document
    .getElementById("chat-list")
    .insertAdjacentHTML("beforeend", `<div class="notice">${msg}</div>`);
});

function entry() {
  console.log("Set Nickname >>", document.querySelector("#nickname").value);
  socket.emit("setNickname", document.querySelector("#nickname").value);
}

/* When user successfully enters the chat */
socket.on("enterySuccess", (nickname) => {
  /* Set my nickname */
  myNickname = nickname;

  /* Input tag for entering nickname && disable the button to prevent clicking */
  document.querySelector("#nickname").disabled = true; // Disable input tag
  document.querySelector(".entry-box > button").disabled = true; // Disable button

  /* Show div.chat-box */
  document.querySelector(".chat-box").classList.remove("display-none");
});

/* If there is already same nickname in the server */
socket.on("error", (msg) => {
  alert(msg);
});

/* Get updated nickname dictionary from the server
    Show it in #nick-list */
socket.on("updateNicknames", (objNick) => {
  let options = `<option value="all">All</option>`;

  for (let key in objNick) {
    // key: socket.id
    // objNick[key]: nickname
    options += `<option value="${key}">${objNick[key]}</option>`;
  }

  // Replace #nick-list select tag with options
  document.querySelector("#nick-list").innerHTML = options;
});

/* Send message */
function sendMsg() {
  const data = {
    nickname: myNickname,
    // Set receiver of DM, a option selected from select tag
    dm: document.querySelector("#nick-list").value,
    msg: document.querySelector("#message").value,
  };
  socket.emit("send", data);

  document.querySelector("#message").value = ""; // Clear input tag
}

socket.on("newMessage", (data) => {
  console.log("New message from server", data);
  // DM: { nickname: "", dm: "(속닥속닥)", msg: ""}
  // to all: { nickname: "", msg: ""}

  let chatList = document.querySelector("#chat-list");
  let div = document.createElement("div");
  let divMsg = document.createElement("div");
  if (data.nickname === myNickname) {
    div.classList.add("my-chat"); // Same as right below
    // div.setAttribute("class", "my-chat");
  } else {
    div.classList.add("other-chat"); // Same as right below
    // div.setAttribute("class", "other-chat");
  }

  // DM
  if (data.dm) {
    div.classList.add("secret-chat");
    divMsg.textContent = data.dm;
  }
  // Sent to all && DM
  divMsg.textContent += `${data.nickname}: ${data.msg}`;
  div.append(divMsg);
  chatList.append(div);

  // Set scroll at the bottom so that new message shows without scrolling
  chatList.scrollTop = chatList.scrollHeight;
});
