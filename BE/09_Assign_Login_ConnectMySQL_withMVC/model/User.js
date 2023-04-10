// Connect with MySQL database
const mysql = require("mysql"); // Load mysql module
// Create object for connection with DB
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "BE_09",
});

exports.postSignup = (data, callback) => {
  // data: req.body
  // callback: method that will run after SQL query

  // Set values as "" because type of userid, name, pw is VARCHAR
  const sql = `INSERT INTO user (userid, name, pw) VALUES ("${data.userid}", "${data.name}", "${data.pw}");`;
  conn.query(sql, (error, rows) => {
    try {
      // SQL error handling
      if (error) {
        throw error;
      }

      // rows: object returned from conn.query() when sql query runs successfully
      // For functional purpose, callback() needs no parameter
      // For SQL error handling purpose send boolean to the controller
      callback(true);
    } catch {
      // rows: object returned from conn.query() when sql query failed
      callback(false);
    }
  });
};

exports.postSignin = (data, callback) => {
  const sql = `SELECT * FROM user 
                WHERE userid = "${data.userid}" AND pw = "${data.pw}" LIMIT 1;`;
  conn.query(sql, (error, rows) => {
    if (error) {
      throw error;
    }
    callback(rows);
  });
};

exports.postProfile = (userid, callback) => {
  const sql = `SELECT * FROM user 
                WHERE userid = "${userid}" LIMIT 1`;
  conn.query(sql, (error, rows) => {
    if (error) {
      throw error;
    }
    callback(rows);
  });
};

exports.editProfile = (data, callback) => {
  const sql = `UPDATE user 
                SET userid = "${data.userid}", name = "${data.name}", pw = "${data.pw}" 
                WHERE id = "${data.id}";`;
  conn.query(sql, (error, rows) => {
    if (error) {
      throw error;
    }
    // rows: object returned from conn.query() when sql query runs successfully

    callback();
  });
};

exports.deleteProfile = (id, callback) => {
  const sql = `DELETE FROM user WHERE id = "${id}";`;
  conn.query(sql, (error, rows) => {
    if (error) {
      throw error;
    }
    // rows: object returned from conn.query() when sql query runs successfully

    callback();
  });
};
