const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

// controller's getVisitors()
exports.getVisitors = (req, res) => {
  // /* Before connecting to MySQL */
  // console.log(Visitor.getVisitors()); // model's getVisiors()
  // res.render("visitor", { data: Visitor.getVisitors() });

  /* After connecting to MySQL */
  Visitor.getVisitors((result) => {
    console.log("Cvisitor.js >>", result);
    res.render("visitor", { data: result });
  });
};
