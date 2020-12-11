'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('humiditys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
      },
      device_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
      },
      schedule_id: {
        type: Sequelize.INTEGER(20),
        allowNull: false,
      },
      humidity: {
        type: Sequelize.FLOAT(10),
        allowNull: false,
      },
      temperature: {
        type: Sequelize.FLOAT(10),
        allowNull: false,
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
    await queryInterface.dropTable('humiditys');
  }
};
