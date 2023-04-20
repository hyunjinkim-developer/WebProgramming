import { useState } from "react";

const ChangeFont_FunctionalComponent = () => {
  const [customColor, setCustomColor] = useState("black");
  const [text, setText] = useState("검정색 글씨");

  const onClickRed = () => {
    setText("빨간색 글씨");
    setCustomColor("red");
  };

  const onClickBlue = () => {
    setText("파란색 글씨");
    setCustomColor("blue");
  };

  return (
    <>
      <hr></hr>
      <h1>ChangeFont Functional Component</h1>

      <h1 style={{ color: customColor }}>{text}</h1>
      <button onClick={onClickRed}>빨간색</button>
      <button onClick={onClickBlue}>파란색</button>
    </>
  );
};

export default ChangeFont_FunctionalComponent;
