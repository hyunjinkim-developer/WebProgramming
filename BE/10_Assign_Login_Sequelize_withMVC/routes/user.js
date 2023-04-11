// Routes for sign up and sign in

const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// IP:PORT/user/signup
router.get("/signup", controller.signup);
router.post("/signup", controller.postSignup);

// // IP:PORT/user/signin
router.get("/signin", controller.signin);
router.post("/signin", controller.postSignin);

// // IP:PORT/user/profile
router.post("/profile", controller.postProfile);
router.post("/profile/edit", controller.editProfile);
router.post("/profile/delete", controller.deleteProfile);

// To export routes
module.exports = router;

module.exports = router;
