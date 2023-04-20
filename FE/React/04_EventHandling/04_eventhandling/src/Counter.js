import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const alertMsg = (msg) => {
    alert(`${msg} Current number is ${number}!`);
  };

  const consoleLog = (event, msg) => {
    console.log(`event: ${event}, target: ${event.target}`);
    alert(`${msg}: Current number is ${number}!`);
  };

  return (
    <>
      <div>Number counter</div>
      <h1>{number}</h1>

      {/* Event in Functional Component */}
      {/* 1. function with no parameter, add function name on onClick */}
      <button onClick={increase}>Add</button>

      {/* 2. function with parameter, add funtion with arrow function on onClick */}
      <button onClick={() => alertMsg("Hi!")}>Show alert</button>
      <button
        onClick={(event, msg) => consoleLog(event, "Event with parameter")}
      >
        Show alert
      </button>
    </>
  );
};

export default Counter;
