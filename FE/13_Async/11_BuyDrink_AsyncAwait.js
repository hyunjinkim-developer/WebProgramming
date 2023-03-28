// Run Buy Drink in 02 with async await keyword

function goMart() {
  console.log("Choose what to buy");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Choose!");
      product = "Grape juice";
      price = 2000;

      resolve();
    }, 3000);
  });
}

function pay() {
  console.log(`Product Name: ${product}, Price: ${price}`);
}

async function exec() {
  goMart(); // 1
  await pickDrink(); // 2, wait for the pickDrink() to finish
  pay(); //3
}

let product; // undefined
let price; // undefined

exec();
