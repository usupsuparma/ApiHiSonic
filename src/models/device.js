"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  device.init(
    {
      user_id: DataTypes.INTEGER,
      device_token_key: DataTypes.STRING,
      device_type: DataTypes.STRING,
      device_name: DataTypes.STRING,
      device_status: {
        type: DataTypes.ENUM,
        values: ["on", "off"],
        defaultValue: "off",
      },
    },
    {
      sequelize,
      modelName: "devices",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return device;
};
