import ClassComponent from "./ClassComponent";
import FunctionalComponenet from "./FunctionalComponent";

function App() {
  return (
    <>
      <ClassComponent name="Wallace" status="human" />
      <ClassComponent name="Gromit" status="dog" />
      <ClassComponent name="Penguin" status="penguin" />
      <ClassComponent />
      <FunctionalComponenet name="Shaun" status="sheep"></FunctionalComponenet>
      <FunctionalComponenet></FunctionalComponenet>
    </>
  );
}

export default App;
