function goMart() {
  console.log("Choose what to buy");
}

function pickDrink() {
  setTimeout(function () {
    console.log("Choose!");
    product = "Grape juice";
    price = 2000;

    console.log(
      `pickDrink() working! 
      Product Name ${product}, Price: ${price}`
    );
  }, 3000);
}

function pay(product, price) {
  console.log(`Product Name: ${product}, Price: ${price}`);
}

let product; // undefined
let price; // undefined

goMart();
pickDrink();
pay(product, price);
