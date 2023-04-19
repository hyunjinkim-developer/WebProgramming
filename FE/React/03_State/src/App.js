import StateClassComponent from "./State_ClassComponent";
import FunctionaClassComponent from "./State_FunctionComponent";
import EnterLeaveComponent from "./Component_EnterLeave";

function App() {
  return (
    <>
      <StateClassComponent name="Wallace" age={10} />
      <FunctionaClassComponent></FunctionaClassComponent>
      <EnterLeaveComponent></EnterLeaveComponent>
    </>
  );
}

export default App;
