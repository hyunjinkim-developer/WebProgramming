/* Before Connecting to MySQL */
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

/* Connected to MySQL */
const mysql = require("mysql");

// Connect with Database
const conn = mysql.createConnection({
  host: "localhost", // Ip address that db installed
  user: "user", // Username want to use
  password: "1234", // Password for the user
  database: "BE_09", // Database you want to use
});

exports.getVisitors = (callback) => {
  /* conn.query(sql, callback) : 
    Access to database saved in conn, and then run SQL queries
    return results to callback method */
  const sql = "SELECT * FROM visitor;";

  conn.query(sql, (error, rows) => {
    if (error) {
      throw error;
    }

    // console.log("Visitor.js >>", rows);
    callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  // Data from controller, form sent by client (req.bdoy)
  // console.log(data);

  const sql = `INSERT INTO VISITOR (name, comment) VALUES ("${data.name}", "${data.comment}")`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("Visitor.js >>", rows.insertId);
    callback(rows.insertId);
  });
};

exports.getVisitor = (id, callback) => {
  console.log(id);

  const sql = `SELECT * FROM visitor WHERE id = ${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js >>", rows); // rows [ {} ]
    callback(rows[0]);
  });
};

exports.patchVisitor = (data, callback) => {
  console.log(data); // req.body from controller

  const sql = `UPDATE visitor SET name = "${data.name}", comment = "${data.comment}" WHERE id = ${data.id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("patchVisitor Visitor.js >>", rows);
    callback();
  });
};

exports.deleteVisitor = (id, callback) => {
  // console.log(id); // id from controller, req.body.id

  const sql = `DELETE FROM visitor WHERE id = ${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    // console.log("Visitor.js >>", rows);
    callback(true);
  });
};
