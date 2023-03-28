/* JS keyword : async, await 
    to improve readability of codes than promise based codes

    Structure :
    - async [function_name]
    - await [async_function] // wait for [async_function] to finish
    - async, await should be a pair
*/

// Print elements of fruits array after 1s
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["🍉", "🥝", "🍋"];
      resolve(fruits);
    }, 1000);
  });
}

// Using Promise
fetchFruits().then(function (fruits) {
  console.log(fruits);
});

// Using JS keyword async, await
async function printItems() {
  const fruits = await fetchFruits();
  console.log(fruits);
}
