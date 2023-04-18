import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
{
  /* import Clock from "./Clock"; */
}

const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /*
setInterval(() => {
  root.render(<React.StrictMode> <Clock /> </React.StrictMode>);
}, 1000);
  */
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
