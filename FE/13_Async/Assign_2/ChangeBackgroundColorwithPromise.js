function changeBackgroudColor1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "red";
      console.log("Red");

      resolve();
    }, 1000);
  });
}

function changeBackgroudColor2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "orange";
      console.log("Orange");

      resolve();
    }, 1000);
  });
}

function changeBackgroudColor3() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      console.log("Yellow");

      resolve();
    }, 1000);
  });
}

function changeBackgroudColor4() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "green";
      console.log("Green");

      resolve();
    }, 1000);
  });
}

function changeBackgroudColor5() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "blue";
      console.log("Blue");

      resolve();
    }, 1000);
  });
}

function changeBackgroudColor6() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "purple";
      console.log("Purple");

      resolve();
    }, 1000);
  });
}

changeBackgroudColor1()
  .then(function () {
    return changeBackgroudColor2();
  })
  .then(function () {
    return changeBackgroudColor3();
  })
  .then(function () {
    return changeBackgroudColor4();
  })
  .then(function () {
    return changeBackgroudColor5();
  })
  .then(function () {
    return changeBackgroudColor6();
  });
