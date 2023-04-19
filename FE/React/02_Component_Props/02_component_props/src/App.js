import ClassComponent from "./ClassComponent";
import FunctionalComponenet from "./FunctionalComponent";

function App() {
  const funcTest = () => {
    console.log("Send function as parameter");
  };
  return (
    <>
      <ClassComponent name="Wallace" status="human" funct={funcTest} />
      <ClassComponent name="Gromit" status="dog" />
      <ClassComponent name="Penguin" status="penguin" />
      <ClassComponent />
      <FunctionalComponenet name="Shaun" status="sheep"></FunctionalComponenet>
      <FunctionalComponenet></FunctionalComponenet>
    </>
  );
}

export default App;
