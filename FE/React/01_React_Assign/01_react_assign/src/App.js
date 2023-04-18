function App() {
  const name = "Greens";
  const animal = "Arugula";
  const a = 2;
  const b = 1;
  return (
    <div>
      <h1>Q1</h1>
      이것은 div입니다
      <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      <hr></hr>
      <h1>Q2</h1>
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}은 {animal}입니다.
      </h2>
      <hr></hr>
      <h1>Q3</h1>
      {3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}
      <hr></hr>
      <h1>Q4</h1>
      {a > b && <h2>a가 b보다 큽니다</h2>}
    </div>
  );
}

export default App;
