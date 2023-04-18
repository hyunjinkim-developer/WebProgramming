import "./FavoriteFoods.css";

function FavoriteFoods(props) {
  return (
    <h1>
      나는
      <span>{props.food}</span>을 좋아합니다
    </h1>
  );
}

FavoriteFoods.defaultProps = {
  food: "fruits",
};

export default FavoriteFoods;
