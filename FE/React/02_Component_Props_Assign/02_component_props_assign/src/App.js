import FavoriteFoods from "./FavoriteFoods";
import Book from "./Book";
import TextProps from "./TextProps";

function App() {
  function valid() {
    console.log("콘솔 띄우기 성공!");
  }

  return (
    <>
      <FavoriteFoods food="carrot"></FavoriteFoods>
      <FavoriteFoods></FavoriteFoods>
      <Book
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></Book>
      <TextProps text="Click button below!" valid={valid} />
    </>
  );
}

export default App;
