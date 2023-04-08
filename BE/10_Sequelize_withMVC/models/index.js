// models/index.js
// Edit codes that automatically created by sequelize-cli

// Load sequelize module
const Sequelize = require("sequelize");

// Set DB environment among /config/config.json
// in this case, "development"
const config = require(__dirname + "/../config/config.json")["development"];

// Create empty object
// Save data that will be used in other files
const db = {};

// Create sequelize object with config.json's environment variables
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// db = { sequelize: sequelize, Sequelize: Sequelize }
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db = { sequelize: sequelize, Sequelize: Sequelize, Visitor: "xxx" }
db.Visitor = require("./Visitor")(sequelize, Sequelize);

// Export db to globalize db
module.exports = db;
