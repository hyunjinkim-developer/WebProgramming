import StateClassComponent from "./State_ClassComponent";
import StateFunctionalComponent from "./State_FunctionalComponent";
import ChangeFont_ClassComponent from "./ChangeFont_ClassComponent";
import ChangeFont_FunctionalComponent from "./ChangeFont_FunctionalCompoent";
import ChangeFont_FunctionalComponent2 from "./ChangeFont_FuntionalComponent2";
import DisappearComponent from "./Disappear";
import Disappear_Ans from "./Disappear_Ans";

function App() {
  return (
    <>
      <StateClassComponent />
      <StateFunctionalComponent></StateFunctionalComponent>
      <ChangeFont_ClassComponent />
      <ChangeFont_FunctionalComponent></ChangeFont_FunctionalComponent>
      <ChangeFont_FunctionalComponent2></ChangeFont_FunctionalComponent2>
      <Disappear_Ans></Disappear_Ans>
      <DisappearComponent></DisappearComponent>
    </>
  );
}

export default App;
