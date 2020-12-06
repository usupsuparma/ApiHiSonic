'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        unique:true
      },
      device_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.STRING(20)
      },
      latitude: {
        type: Sequelize.STRING(20)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gps');
  }
};
