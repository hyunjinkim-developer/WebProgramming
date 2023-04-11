// Controller
// Set Promise .then()
// or set async await
// to wait for return from Sequelize

// Use Database
const models = require("../models/index");

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
exports.postSignup = async (req, res) => {
  /* Before using Sequelize */
  //   User.postSignup(req.body, (result) => {
  //     // res.end(); // Respond to client without any data
  //     res.send(result); // result: true if SQL query runs successfully, otherwise false
  //   });

  /* Afer using Sequelize */
  await models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  });
  res.send(true);
};

/* /user/signin */
// GET /user/signin
exports.signin = (req, res) => {
  res.render("signin");
};

// POST /user/signin
exports.postSignin = async (req, res) => {
  //   /* Before using Sequelize */
  //   User.postSignin(req.body, (result) => {
  //     // result [ {} ]
  //     if (result.length > 0) {
  //       // Login Succeed
  //       res.send(true);
  //     } else {
  //       // Login failed
  //       res.send(false);
  //     }
  //   });

  /* Afer using Sequelize */
  const result = await models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  });
  // console.log(result);

  if (result) {
    // Sign in succeed : result is {}
    res.send(true);
  } else {
    // Sign in failed: result is null
    res.send(false);
  }
};

/* /user/profile */
// POST /user/profile
exports.postProfile = async (req, res) => {
  // sigin.ejs -> user.js -> Cuser.js postProfile()
  // console.log("From signin.ejs:", req.body); // { userid: # }

  //   /* Before using Sequelize */
  //   User.postProfile(req.body.userid, (result) => {
  //     // result: [ { id: #, userid: "", name: "", pw: "" } ]
  //     if (result.length > 0) {
  //       // If there's a user with userid from client
  //       res.render("profile", { data: result[0] });
  //     }
  //   });

  /* Afer using Sequelize */
  const result = await models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  });
  // console.log(result);

  if (result) {
    // result is {}
    res.render("profile", { data: result });
  }
};

// POST /user/profile/edit
exports.editProfile = async (req, res) => {
  // console.log(req.body);

  // /* Before using Sequelize */
  // User.editProfile(req.body, () => {
  //   res.end(); // Respond to client without any data
  // });

  /* Afer using Sequelize */
  await models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  );

  res.end();
};

// POST /user/profile/delete
exports.deleteProfile = async (req, res) => {
  // console.log(req.body);

  // /* Before using Sequelize */
  // User.deleteProfile(req.body.id, () => {
  //   res.end(); // Respond to client without any data
  // });

  /* Afer using Sequelize */
  await models.User.destroy({
    where: { id: req.body.id },
  });

  res.end();
};
