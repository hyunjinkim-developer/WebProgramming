import { useState } from "react";

function EnterLeaveComponent() {
  const [message, setMessage] = useState();
  const [flag, setFlag] = useState();

  const enterFunc = () => {
    setMessage("Entered");
  };

  const leaveFunc = () => {
    setMessage("Left");
  };

  const loadComplete = () => {
    setFlag(true);
  };

  return (
    <>
      <hr></hr>
      {flag && (
        <>
          <h1>{message}</h1>
          <button onClick={enterFunc}>Enter</button>
          <button onClick={leaveFunc}>Leave</button>
        </>
      )}
      <button onClick={loadComplete}>Load Completed</button>
    </>
  );
}

export default EnterLeaveComponent;
