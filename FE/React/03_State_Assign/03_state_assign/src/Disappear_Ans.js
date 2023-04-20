import { useState } from "react";

const Disappear_Ans = () => {
  const [visible, setVisible] = useState(true);
  const [falseVisible, setFalseVisible] = useState(false); // To show when visible turns false

  const toggle = () => {
    setVisible(!visible);
    /* !visibile 
        !true => false
        !false => true*/
  };

  return (
    <>
      <hr></hr>
      <h2>When visible is in true state</h2>
      <button onClick={toggle}>{visible ? "Disappear!" : "Appear!"}</button>
      <h1>{visible && "안녕하세요"}</h1>

      <h2>When visible is in false state</h2>
      <button>{falseVisible ? "Disappear!" : "Appear!"}</button>
      <h1>{falseVisible && "안녕하세요"}</h1>
    </>
  );
};

export default Disappear_Ans;
