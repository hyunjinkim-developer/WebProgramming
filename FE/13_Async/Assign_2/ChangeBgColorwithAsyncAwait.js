// Chnage background color of body every 1s with
// red -> orange -> yellow -> green -> blue -> purple

function changeBgColor(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = color;
      console.log(color);

      resolve();
    }, 1000);
  });
}

async function exec() {
  await changeBgColor("red");
  await changeBgColor("orange");
  await changeBgColor("yellow");
  await changeBgColor("green");
  await changeBgColor("blue");
  await changeBgColor("purple");
}
exec();
