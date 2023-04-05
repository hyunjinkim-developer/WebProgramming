/* Assignment 1 */
/* const UserInfo = require("../model/UserInfo_Assign_1");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  console.log(req.body);

  const userData = UserInfo.getUserInfo();
  const realId = userData[0].id;
  const realPw = userData[0].pw;
  console.log(userData[0].id, userData[0].pw);

  // Compare Id, Pw from user and DB
  if (realId === req.body.userId && realPw === req.body.userPw) {
    // Login success
    res.send({ loginSuccess: true, loginInfo: req.body });
  } else {
    // Login failed
    res.send({ loginSuccess: false });
  }
};
*/

/* Assignment 2 */
const UserInfo = require("../model/Users_Assign_2");

exports.main = (req, res) => {
  res.render("index");
};

// /* Method 1:
//     Make req.body data into same format of return data from model,
//     and then string comparison
// */
// /* Method 2:
//     Parse data from model into dictionary array type
//     and then compare with data from req.body id, pw repectively
// */
// exports.login = (req, res) => {
//   console.log(req.body);

//   const Users = UserInfo.Users;
//   const userDataRaw = Users.split("\n");
//   let userDataArr = [];
//   for (let i = 0; i < userDataRaw.length; ++i) {
//     const userData = userDataRaw[i].split("//");
//     const id = userData[0];
//     const pw = userData[1];
//     const name = userData[2];
//     userDataArr[i] = { id, pw, name };
//   }

//   for (let i = 0; i < userDataArr.length; ++i) {
//     const realId = userDataArr[i].id;
//     const realPw = userDataArr[i].pw;
//     const realName = userDataArr[i].name;

//     // Compare Id, Pw from user and DB
//     if (realId === req.body.userId && realPw === req.body.userPw) {
//       // Login success
//       res.send({ loginSuccess: true, userInfo: userDataArr[i] });
//       return;
//     }
//   }
//   // Login failed
//   res.send({ loginSuccess: false });
// };

/* Method 3: 
  use array of users (each user consists of dictionary of realId, realPw, name)
  and array of userIds to use indexOf() method */
exports.login = (req, res) => {
  const userData = UserInfo.Users.split("\n");
  const users = []; // For user data
  const userIds = []; // For user id

  // for (let var in arr)
  for (let user of userData) {
    let data = user.split("//");
    users.push({
      realId: data[0],
      realPw: data[1],
      name: data[2],
    });
    userIds.push(data[0]);
  }

  /* arr.indexOf(x):
    if x exists in arr, return index of x
    if not, return -1
  */
  // Check whether id from user(req.body.userId) is in DB(userIds)
  const idx = userIds.indexOf(req.body.userId);
  {
    if (idx >= 0) {
      // id exists in DB
      if (users[idx].realPw === req.body.userPw) {
        res.send({ loginSuccess: true, userInfo: users[idx] });
      } else {
        // id doesn't exist in DB
        // console.log("Id from user doesn't exist in DB!");
        res.send({ loginSuccess: false });
      }
    }
  }
};
