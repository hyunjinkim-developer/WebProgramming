const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);
router.get("/visitor", controller.getVisitors); // Read all data
router.post("/visitor/write", controller.postVisitor); // Create new data
router.get("/visitor/get", controller.getVisitor); // Search dataum
router.patch("/visitor/edit", controller.patchVisitor); // Edit datum
router.delete("/visitor/delete", controller.deleteVisitor); // Delete a data

module.exports = router;
