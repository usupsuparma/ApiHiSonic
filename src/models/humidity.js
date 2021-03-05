"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class humidity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  humidity.init(
    {
      userId: DataTypes.STRING,
      deviceId: DataTypes.STRING,
      scheduleId: DataTypes.STRING,
      humidity: DataTypes.STRING,
      temperature: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "humiditys",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return humidity;
};
