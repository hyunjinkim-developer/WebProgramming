// Controller

// Use Database
const User = require("../model/User");

// GET /user
exports.index = (req, res) => {
  res.render("index");
};

/* /user/signup */
// GET /user/signup
exports.signup = (req, res) => {
  res.render("signup");
};

// POST /user/signup
exports.postSignup = (req, res) => {
  User.postSignup(req.body, (result) => {
    // res.end(); // Respond to client without any data
    res.send(result); // result: true if SQL query runs successfully, otherwise false
  });
};

/* /user/signin */
// GET /user/signin
exports.signin = (req, res) => {
  res.render("signin");
};

// POST /user/signin
exports.postSignin = (req, res) => {
  User.postSignin(req.body, (result) => {
    // result [ {} ]

    if (result.length > 0) {
      // Login Succeed
      res.send(true);
    } else {
      // Login failed
      res.send(false);
    }
  });
};

/* /user/profile */
// POST /user/profile
exports.postProfile = (req, res) => {
  // sigin.ejs -> user.js -> Cuser.js postProfile()
  // console.log("From signin.ejs:", req.body); // { userid: # }
  User.postProfile(req.body.userid, (result) => {
    // result: [ { id: #, userid: "", name: "", pw: "" } ]
    if (result.length > 0) {
      // If there's a user with userid from client
      res.render("profile", { data: result[0] });
    }
  });
};

// POST /user/profile/edit
exports.editProfile = (req, res) => {
  // console.log(req.body);

  User.editProfile(req.body, () => {
    res.end(); // Respond to client without any data
  });
};

// POST /user/profile/delete
exports.deleteProfile = (req, res) => {
  // console.log(req.body);

  User.deleteProfile(req.body.id, () => {
    res.end(); // Respond to client without any data
  });
};
