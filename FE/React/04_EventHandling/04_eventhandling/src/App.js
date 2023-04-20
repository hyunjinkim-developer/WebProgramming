import "./App.css";
import SyntheticEvent from "./SyntheticEvent";
import ClassComponent from "./ClassComponent";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <SyntheticEvent></SyntheticEvent>
      <ClassComponent />
      <Counter></Counter>
    </div>
  );
}

export default App;
