import { useState } from "react";

function DisappearComponent() {
  const [flag, setFlag] = useState("default value");

  const disappear = () => {
    console.log("Before setFlag >>", flag);
    setFlag("none");
    console.log("After setFlag >>", flag);
    /* Why value is the same before and after setFlag?
    setState(): runs asynchronously
        If setState() runs synchronously, every time the state changed rerender components,
        which will there are too many states to update performance will be low 
        Use batch to update difference of components
        batch updates every 16ms

        ref: https://react.dev/reference/react/Component#setstate
            Think of setState as a request rather than an immediate command to update the component. 
            When multiple components update their state in response to an event, 
            React will batch their updates and re-render them together in a single pass at the end of the event. 
            In the rare case that you need to force a particular state update to be applied synchronously, 
            you may wrap it in flushSync, but this may hurt performance.
        */
  };

  return (
    <>
      <hr></hr>
      <button onClick={disappear}>Disappear</button>

      <h1 style={{ display: flag }}>안녕하세요</h1>
      <h1>{flag}</h1>
    </>
  );
}

export default DisappearComponent;
