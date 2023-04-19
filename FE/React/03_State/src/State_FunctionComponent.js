import { useState } from "react";

function FunctionaClassComponent({ name, status }) {
  // setCounter : renders the state
  const [counter, setCounter] = useState(0); // Initialize state in any data type
  console.log(counter);

  const onClick = () => {
    setCounter(counter + 1);
    console.log("Clicked!");
  };

  return (
    <div>
      <hr></hr>
      <h1>State with FunctionalComponenet</h1>
      <h2>{counter}</h2>
      <button onClick={onClick}>Up</button>
    </div>
  );
}

export default FunctionaClassComponent;
