"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
          len: [1, Infinity],
        },
      },
      file: {
        type: DataTypes.BLOB,
        allowNull: true
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
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, Infinity],
        },
      },
      subtype: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          len: [1, Infinity],
        },
      },
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
