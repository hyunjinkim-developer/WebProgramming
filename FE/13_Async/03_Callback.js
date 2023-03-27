/* Callback function
    : 다른 함수의 실행이 끝난 뒤에 실행되는 함수
    어떤 함수의 파라미터(매개변수 인자로 쓰임)
*/

function goMart() {
  console.log("Choose what to buy");
}

function pickDrink(callback) {
  setTimeout(function () {
    console.log("Choose!");
    product = "Grape juice";
    price = 2000;

    // Set callback funcition
    callback(product, price);
  }, 3000);
}

let product; // undefined
let price; // undefined

goMart();
pickDrink(function pay(product, price) {
  console.log(`Product Name: ${product}, Price: ${price}`);
});
