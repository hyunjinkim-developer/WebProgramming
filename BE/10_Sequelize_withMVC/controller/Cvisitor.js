// Before using Sequelize
// const Visitor = require("../model/Visitor");

// After using Sequelize
// Ref: https://sequelize.org/docs/v7/core-concepts/model-querying-basics/
// models = db oject from models/index.js
const models = require("../models"); // If the name of .js not specified, automatically find index.js
// console.log(models);

// GET /
exports.main = (req, res) => {
  res.render("index");
};

// GET /visitor //////////////////////////////////////////
// /* .then() */
// exports.getVisitors = (req, res) => {
//   // /* Before using Sequelize */
//   // Visitor.getVisitors((result) => {
//   //   res.render("visitor", { data: result });
//   // }); // SELECT * FROM visitor;

//   /* After using Sequelize */
//   models.Visitor.findAll().then((result) => {
//     console.log("findAll >>", result); // [ {}, {}, {} ]
//     res.render("visitor", { data: result });
//   });
// };

/* async, await */
exports.getVisitors = async (req, res) => {
  const result = await models.Visitor.findAll();
  // console.log("findAll >>", result); // [ {}, {}, {} ]
  res.render("visitor", { data: result });
};

// POST /visitor/write ///////////////////////////////////
// /* .then() */
// exports.postVisitor = async (req, res) => {
//   // /* Before using Sequelize */
//   // Visitor.postVisitor(req.body, (result) => {
//   //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
//   // }); // INSERT INTO VISITOR (name, comment) VALUES ("${data.name}", "${data.comment}");

//   models.Visitor.create({
//     name: req.body.name,
//     comment: req.body.comment,
//   }).then((result) => {
//     console.log("create >>", result);
//     res.send(result);
//   });
// };

/* async, await */
exports.postVisitor = async (req, res) => {
  /* After using Sequelize */
  const result = await models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  });
  // console.log("create >>", result);
  res.send(result);
};

// GET /visitor/get //////////////////////////////////////
// /* .then() */
// exports.getVisitor = (req, res) => {
//   // /* Before using Sequelize */
//   // Visitor.getVisitor(req.query.id, (result) => {
//   //   res.send(result);
//   // }); // SELECT * FROM visitor WHERE id = ${id};

//   /* After using Sequelize */
//   models.Visitor.findOne({
//     where: { id: req.query.id },
//   }).then((result) => {
//     console.log("findOne >>", result);
//     res.send(result);
//   });
// };

/* async, await */
exports.getVisitor = async (req, res) => {
  const result = await models.Visitor.findOne({
    where: { id: req.query.id },
  });
  // console.log(result);
  res.send(result);
};

// PATCH /visitor/edit ///////////////////////////////////
// /* .then() */
// exports.patchVisitor = (req, res) => {
//   // /* Before using Sequelize */
//   // Visitor.patchVisitor(req.body, () => {
//   //   res.send("Edit Succeed!");
//   // }); // UPDATE visitor SET name = "${data.name}", comment = "${data.comment}" WHERE id = ${data.id};

//   /* After using Sequelize */
//   models.Visitor.update(
//     {
//       name: req.body.name,
//       comment: req.body.comment,
//     },
//     {
//       where: {
//         id: req.body.id,
//       },
//     }
//   ).then(() => {
//     res.send("Edit Succeed!");
//   });
// };

/* async, await */
exports.patchVisitor = async (req, res) => {
  const result = await models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  // console.log(result);
  res.send("Edit Succeed!");
};

// DELTE /visitor/delete /////////////////////////////////
// /* .then() */
// exports.deleteVisitor = (req, res) => {
//   // /* Before using Sequelize */
//   // Visitor.deleteVisitor(req.body.id, (result) => {
//   //   res.send({ id: req.body.id });
//   // }); // DELETE FROM visitor WHERE id = ${id};
//   /* After using Sequelize */
//   models.Visitor.destroy({
//     where: {
//       id: req.body.id,
//     },
//   }).then(() => {
//     res.end();
//   });
// };

/* async, await */
exports.deleteVisitor = async (req, res) => {
  const result = await models.Visitor.destroy({
    where: { id: req.body.id },
  });
  // console.log(result);
  res.end();
};
