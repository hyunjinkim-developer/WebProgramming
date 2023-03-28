/* Original Callback */
// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log('back');
//     cb('back');
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(function () {
//     cb('callback hell');
//   }, 1000);
// }

// // call -> back -> hell 순서로 실행
// call('kim', function (name) {
//   console.log(name + '반가워');
//   back(function (txt) {
//     console.log(txt + '을 실행했구나');
//     hell(function (message) {
//       console.log('여기는 ' + message);
//     });
//   });
// });

/* Answer */
// Create promise
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // When resolve connect to then()
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back"); // When resolve connect to then()
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell"); // When resolve connect to then()
    }, 1000);
  });
}

// Use Promise
// call("kim")
//   .then(function (name) {
//     let result = name + " 반가워";
//     console.log(result);
//     return back();
//   })
//   .then(function (txt) {
//     let result = txt + "을 실행했구나";
//     console.log(result);
//     return hell();
//   })
//   .then(function (message) {
//     let result = "여기는 " + message;
//     console.log(result);
//   });

// Using arrow function
call("kim")
  .then((name) => {
    let result = name + " 반가워";
    console.log(result);
    return back();
  })
  .then((txt) => {
    let result = txt + "을 실행했구나";
    console.log(result);
    return hell();
  })
  .then((message) => {
    let result = "여기는 " + message;
    console.log(result);
  });
