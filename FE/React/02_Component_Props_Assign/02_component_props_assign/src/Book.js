function Book({ title, author, price, type }) {
  return (
    <div>
      <img
        src={"BookImage.png"}
        alt="Book Image"
        style={{ width: "100px", height: "120px" }}
      ></img>
      <div>{title}</div>
      <div>저자: {author}</div>
      <div>판매가: {price}</div>
      <div>구분: {type}</div>
    </div>
  );
}

export default Book;
