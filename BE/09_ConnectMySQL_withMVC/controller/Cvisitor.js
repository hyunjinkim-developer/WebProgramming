const Visitor = require("../model/Visitor");

// GET /
exports.main = (req, res) => {
  res.render("index");
};

// GET /visitor
// controller's getVisitors()
exports.getVisitors = (req, res) => {
  // /* Before connecting to MySQL */
  // console.log(Visitor.getVisitors()); // model's getVisiors()
  // res.render("visitor", { data: Visitor.getVisitors() });

  /* After connecting to MySQL DB */
  Visitor.getVisitors((result) => {
    console.log("Cvisitor.js >>", result);
    res.render("visitor", { data: result });
  });
};

// POST /visitor/write
exports.postVisitor = (req, res) => {
  console.log(req.body);

  // result(from model, inserted data) comes in as rows.insertId
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js >>", result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};
