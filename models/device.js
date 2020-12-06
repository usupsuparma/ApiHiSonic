'use strict';
const {
  Model
} = require('sequelize');
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
  };
  device.init({
    userId: DataTypes.INTEGER,
    deviceTokenKey: DataTypes.STRING,
    deviceType: DataTypes.STRING,
    deviceName: DataTypes.STRING,
    deviceStatus: DataTypes.ENUM,
    misdn: DataTypes.INTEGER,
    network: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'devices',
  });
  return device;
};
