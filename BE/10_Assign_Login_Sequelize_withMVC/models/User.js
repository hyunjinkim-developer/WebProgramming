// Define User model structure
// Connect with sequelize mode and mySQL tables
const User = function (Sequeilize, DataTypes) {
  // Sequelize.define(param1, param2, param3)
  const model = Sequeilize.define(
    // param1: model name
    "user",
    // param2: column
    {
      // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // userid VARCHAR(20) NOT NULL,
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      // name VARCHAR(10) NOT NULL,
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      // pw VARCHAR(20) NOT NULL
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    // param3: model options
    {
      tableName: "user", // table name from DB
      freezeTableName: true, // Does not change table name
      //   collate: "utf8_general_ci", // Set Korean encoding when it's not set while creating tables
      timestamps: false, // Add timestamp whenever the data added or updated
    }
  );

  return model;
};

module.exports = User;
