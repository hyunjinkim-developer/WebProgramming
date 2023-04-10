// Routes

const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// Base address: localhost:PORT/user
router.get("/", controller.index);

// localhost:PORT/user/signup
router.get("/signup", controller.signup);
router.post("/signup", controller.postSignup);

// localhost:PORT/user/signin
router.get("/signin", controller.signin);
router.post("/signin", controller.postSignin);

// localhost:PORT/user/profile
router.post("/profile", controller.postProfile);
router.post("/profile/edit", controller.editProfile);
router.post("/profile/delete", controller.deleteProfile);

// To export routes
module.exports = router;
