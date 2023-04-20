import { useState } from "react";

const HandlerFunction = () => {
  const [greetings, setGreetings] = useState("HelloWorld!");

  const printGreetings = () => {
    setGreetings("Goodbye World!");
  };

  return (
    <>
      <h1>{greetings}</h1>
      <button onClick={printGreetings}>Change Greeting</button>
    </>
  );
};

export default HandlerFunction;
