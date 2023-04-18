import Larva from "./Larva";
import ClassComponent from "../../../02_Component/02_component/src/ClassComponent";

const onClick = () => {
  console.log("Run on Click");
};

function App() {
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <Larva />
      <Larva />
    </div>
  );
}

export default App;
