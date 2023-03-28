// Original code
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // 작업 성공시 then(name)
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back"); // 작업 성공시 then('back')
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// Answer
async function exec() {
  let user = await call("kim");
  console.log(`${user} 반가워`);

  let txt = await back();
  console.log(`${txt} 을 실행했구나`);

  let message = await hell();
  console.log(`여기는 ${message}`);
}
exec();
