"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Graduate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Post, { foreignKey: "authorId" });
    }
  }
  Graduate.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(),
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [4, Infinity],
        },
      },
      school_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [4, Infinity],
        },
      },
    },
    {
      sequelize,
      modelName: "Graduate",
    }
  );
  return Graduate;
};
