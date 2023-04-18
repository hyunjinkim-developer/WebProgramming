import Larva from "./Larva";

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
