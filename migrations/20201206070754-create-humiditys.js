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
      userId: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
      },
      deviceId: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
      },
      scheduleId: {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('humiditys');
  }
};
