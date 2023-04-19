import StateClassComponent from "./State_ClassComponent";
import StateFunctionalComponent from "./State_FunctionalComponent";
import ChangeFontColor from "./ChangeFontColor";
import DisappearComponent from "./Disappear";

function App() {
  return (
    <>
      <StateClassComponent />
      <StateFunctionalComponent></StateFunctionalComponent>
      <ChangeFontColor />
      <DisappearComponent></DisappearComponent>
    </>
  );
}

export default App;
