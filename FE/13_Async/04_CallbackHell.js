/* Callback Hell : ! Not recommended!
    콜백함수가 반복되어 코드의 들여쓰기가 너무 깊어지는 것
    => 가독성, 유지보수성이 떨어짐 */

// Change background every 1s in red -> orange -> yellow -> green -> blue
setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";

  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";

    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";

      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";

        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";

          setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "purple";
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
