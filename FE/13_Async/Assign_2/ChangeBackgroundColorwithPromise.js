function changeBgColor(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = color;
      console.log(color);

      resolve();
    }, 1000);
  });
}

changeBgColor("red")
  .then(function () {
    return changeBgColor("orange");
  })
  .then(function () {
    return changeBgColor("yellow");
  })
  .then(function () {
    return changeBgColor("green");
  })
  .then(function () {
    return changeBgColor("blue");
  })
  .then(function () {
    return changeBgColor("purple");
  });
