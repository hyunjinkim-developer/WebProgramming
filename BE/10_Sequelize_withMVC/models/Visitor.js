// Define Visitor model structure
// Connect with sequelize mode and mySQL tables
const Visitor = function (Sequelize, DataTypes) {
  // Sequelize: sequelize in models/index.js
  // DataTypes: Sequeilize in models/index.js

  // Sequelize.define(param1, param2, param3)
  // param1: model name
  // param2: column
  // param3: model options
  const model = Sequelize.define(
    "visitor", // param1; model names
    // param2: column
    {
      id: {
        // id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name VARCHAR(10) NOT NULL
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment MEDIUMTEXT
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor", // table name from DB
      freezeTableName: true, // Does not change table name
      //   collate: "utf8_general_ci", // Set Korean encoding when it's not set while creating tables
      timestamps: false, // Add timestamp whenever the data added or updated
    }
  );

  return model;
};

module.exports = Visitor;
