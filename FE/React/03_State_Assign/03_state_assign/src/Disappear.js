import { useState } from "react";

function DisappearComponent() {
  const [flag, setFlag] = useState("default value");

  const disappear = () => {
    console.log("Before setFlag >>", flag);
    setFlag("none");
    console.log("After setFlag >>", flag);
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
