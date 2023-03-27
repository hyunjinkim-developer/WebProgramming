/* Promise Chaining
    Pros: 
        then 메서드 연속 사용 가능 -> 순차적 작업 가능
        콜백 지옥에서 탈출 가능
    Cons:
        예외처리 간편
        => catch구문에서 한 번에 에러 처리 가능 */

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    // return result after 1s
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 500);
  });
}

// promise 체이닝 사용해서
// add -> mul -> sub 순으로 실행
add(4, 3) //=> resolve(3 + 4) => resolve(7) => then(7)
  .then(function (result) {
    // result = 7
    console.log("1: ", result); // 7
    return mul(result); // mul(7) => resolve(14) => then(14)
  })
  .then(function (result) {
    // result = 14
    console.log("2: ", result); // 14
    return sub(result); // sub(14) => resolve(13) => then(13)
  })
  .then(function (result) {
    // result = 13
    console.log("3: ", result); // 13
  });
