// Use promise to change into sync

function goMart() {
  console.log("Choose what to buy");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Choose!");
      product = "Grape juice";
      price = 2000;

      if (price <= 5000) {
        resolve();
      } else {
        reject();
      }
      console.log("Finish pickDrink method.");
    }, 3000);
  });
}

// Method 1
function pay() {
  console.log(`Product Name: ${product}, Price: ${price}`);
}

function nopay() {
  console.log("Not enough money to buy drink!");
}

let product; // undefined
let price; // undefined

goMart();
pickDrink()
  .then(pay) // pickDrink 함수 안에서 resolve 실행시 then으로 연결
  .catch(nopay); // pickDrink 함수 안에서 reject 실행시 catch로 연결

// // Method 2: Put function inside then()
// goMart();
// pickDrink().then(function () {
//   console.log(`Product Name: ${product}, Price: ${price}`);
// });
