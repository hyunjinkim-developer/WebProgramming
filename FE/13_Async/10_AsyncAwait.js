/* JS keyword : async, await 
    to improve readability of codes than promise based codes

    Structure :
    - async [function_name]
    - await [async_function] // wait for [async_function] to finish
    - async, await should be a pair
*/

/* JS Exception handling
    try {
        // if error occurs move to catch block
    } catch (error) {
        // exception handling
    }
    // if there is no error on try {}, catch {} does not execute
    // if there is error on try {}, try {} stop running -> move straight to catch {}
*/

// Print elements of fruits array after 1s
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["🍉", "🥝", "🍋"];
      resolve(fruits);
      //   reject(new Error("Undefined error occurs! Cannot get itmes."));
    }, 1000);
  });
}

// Using Promise
fetchFruits()
  .then(function (fruits) {
    console.log(fruits);
  })
  .catch(function (error) {
    console.log(error);
  });

// Using JS keyword async, await
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (error) {
    console.log(error);
  }
}
printItems();
