import { useState } from "react";

const ChangeFont_FunctionalComponent2 = () => {
  const [state, setState] = useState({
    color: "black",
    text: "검정색 글씨",
  });

  const onClickRed = () => {
    setState({
      color: "red",
      text: "빨간색 글씨",
    });
  };

  const onClickBlue = () => {
    setState({
      color: "blue",
      text: "파란색 글씨",
    });
  };

  return (
    <>
      <hr></hr>
      <h1>ChangeFont Functional Component</h1>

      <h1 style={{ color: state.color }}>{state.text}</h1>
      <button onClick={onClickRed}>빨간색</button>
      <button onClick={onClickBlue}>파란색</button>
    </>
  );
};

export default ChangeFont_FunctionalComponent2;
