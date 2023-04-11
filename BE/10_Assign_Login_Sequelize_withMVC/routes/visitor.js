// Routes for comments

const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.getVisitors); // Read all data
router.post("/write", controller.postVisitor); // Create new data
router.get("/get", controller.getVisitor); // Search dataum
router.patch("/edit", controller.patchVisitor); // Edit datum
router.delete("/delete", controller.deleteVisitor); // Delete a data

module.exports = router;
