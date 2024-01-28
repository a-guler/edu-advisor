const dbConfig = require("../config/config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password,
  {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
    operatorsAliases: 0,
  }
);

module.exports = sequelize;
global.sequelize = sequelize;
