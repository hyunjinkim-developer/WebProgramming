const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);
router.get("/visitor", controller.getVisitors); // Read all data
router.post("/visitor/write", controller.postVisitor); // Create new data

module.exports = router;
