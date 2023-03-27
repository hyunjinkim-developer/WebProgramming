function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back(txt) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell(message) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

call("kim")
  .then(function (name) {
    let result = name + " 반가워";
    console.log(result);
    return back(result);
  })
  .then(function (txt) {
    let result = txt + "을 실행했구나";
    console.log(result);
    return hell(result);
  })
  .then(function (message) {
    let result = "여기는 " + message;
    console.log(result);
  });
