"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Post, { foreignKey: "authorId" });
    }
  }
  Message.init(
    {
      messageId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(),
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [4, Infinity],
        },
      },
      file: {
        type: DataTypes.BLOB,
        allowNull: false,
        unique: true,
        validate: {
          len: [4, Infinity],
        },
      },
      fromUserId: {
        allowNull: false,
        type: DataTypes.INTEGER(),
      },
      toUserId: {
        allowNull: false,
        type: DataTypes.INTEGER(),
      },
      sendDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      isAdvisorChat: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
