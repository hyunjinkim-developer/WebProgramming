import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Input from "./Input";
import Rainbow from "./Rainbow";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Input />
    <Rainbow></Rainbow>
  </>
);
