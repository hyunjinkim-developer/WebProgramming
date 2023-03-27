/* setTimeouot(code, delay)
    wait for [delay] in milliseconds 
    and then run [code] */

// Print in 1 -> 3 -> 2 order
// JS runs next code without waiting for 2s -> Asynchronization
// Cannot wait for server to reuturn response
console.log(1);
setTimeout(function () {
  console.log(2);
}, 2000);

console.log(3);

//////////////////////////////////////////////////////////////////////////////////
// Change background color of body tag in red after 1 second
setTimeout(function () {
  // Vanila JS
  document.querySelector("body").style.backgroundColor = "red";

  // JQuery
  //   $("body").css("background-color", "red");
}, 1000);

//////////////////////////////////////////////////////////////////////////////////
// Change color of font color into blue after 1 second
function changeColor() {
  document.querySelector("h1").style.color = "blue";
}
setTimeout(changeColor, 1000);
