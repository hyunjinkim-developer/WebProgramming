/* Promise:
    : 비동기 함수를 동기 처리 하기 위해 만든 객체
    성공, 실패를 분리해서 반환 
    => 성공이든 실패든 무엇인가의 최종 결과 
    resolved: 성공
    rejected: 실패
    
    Promise에는 Callback함수를 전달할 필요 없음. 그냥 호출하면 됨 */

/* 1. Create Promise **************************************/
// resolve(): 성공한 경우, 프로미스 사용시 then method와 연결
// reject(): 실패한 경우, 프로미스 사용시 catch method와 연결
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `State of promise is fulfilled! Continue to then. Now the flag is ${flag}.`
      );
    } else {
      reject(
        `State of pormise is rejected! Continue to catch. Now the flag is ${flag}.`
      );
    }
  });
}

/* 2. Use Promise **************************************/
// Suceed to call promise1
// promise1(true)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// // Fail to call promise1
promise1(false)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
