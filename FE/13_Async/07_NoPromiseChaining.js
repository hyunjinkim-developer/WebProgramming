/* With no promise chaining */

// (4 + 3) * 2 - 1 = 13 using method chaining
// 1. add(4, 3)
// 2. mul(add(4, 3), 2)
// 3. min(mul(add(4, 3), 2), 1)
// Calculate in add -> mul -> sub order

function add(n1, n2, callback) {
  // return result after 1s
  setTimeout(function () {
    let result = n1 + n2;
    callback(result);
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    let result = n * 2;
    callback(result);
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    let result = n - 1;
    callback(result);
  }, 500);
}

// add -> mul -> sub
add(4, 3, function (x) {
  console.log("1: ", x); // x == 4 + 3

  mul(x, function (y) {
    console.log("2: ", y); // y == x * 2

    sub(y, function (z) {
      console.log("3: ", z); // z == y - 1
    });
  });
});
