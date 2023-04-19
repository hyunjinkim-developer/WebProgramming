import { useState } from "react";

function FunctionalClassComponent() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 2);
  };

  return (
    <>
      <hr></hr>
      <h1>{counter}</h1>
      <button onClick={increase}>Increase 1</button>
      <button onClick={decrease}>Decrease 2</button>
    </>
  );
}

export default FunctionalClassComponent;
