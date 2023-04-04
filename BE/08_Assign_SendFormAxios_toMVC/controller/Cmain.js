// Assignment 1
// const UserInfo = require("../model/UserInfo_Assign_1");
// Assignment 2
const UserInfo = require("../model/Users_Assign_2");

exports.main = (req, res) => {
  res.render("index");
};

// Assignment 1
// exports.login = (req, res) => {
//   console.log(req.body);

//   const loginInfo = UserInfo.getUserInfo();
//   const realId = loginInfo[0].id;
//   const realPw = loginInfo[0].pw;
//   console.log(loginInfo[0].id, loginInfo[0].pw);

//   // Compare Id, Pw from user and DB
//   if (realId === req.body.id && realPw === req.body.pw) {
//     // Login success
//     res.send({ loginSuccess: true, loginInfo: req.body });
//   } else {
//     // Login failed
//     res.send({ loginSuccess: false });
//   }
// };

exports.login = (req, res) => {
  console.log(req.body);

  const Users = UserInfo.Users;
  const loginInfoRaw = Users.split("\n");
  let loginInfos = [];
  for (let i = 0; i < loginInfoRaw.length; ++i) {
    const loginInfo = loginInfoRaw[i].split("//");
    const id = loginInfo[0];
    const pw = loginInfo[1];
    const name = loginInfo[2];
    loginInfos[i] = { id, pw, name };
  }

  for (let i = 0; i < loginInfos.length; ++i) {
    const realId = loginInfos[i].id;
    const realPw = loginInfos[i].pw;
    const realName = loginInfos[i].name;

    // Compare Id, Pw from user and DB
    if (realId === req.body.id && realPw === req.body.pw) {
      // Login success
      res.send({ loginSuccess: true, loginInfo: realName });
      return;
    }
  }
  // Login failed
  res.send({ loginSuccess: false });
};
