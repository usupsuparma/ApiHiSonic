'use strict';
module.exports = {
		up: async (queryInterface, Sequelize) => {
				await queryInterface.createTable('devices', {
						id: {
								allowNull: false,
								autoIncrement: true,
								primaryKey: true,
								type: Sequelize.INTEGER
						},
						userId: {
								type: Sequelize.INTEGER(10),
						},
						deviceTokenKey: {
								type: Sequelize.STRING,
								allowNull: false,
						},
						deviceType: {
								type: Sequelize.STRING(25),
								allowNull: false,
						},
						deviceName: {
								type: Sequelize.STRING(25),
								allowNull: false,
						},
						deviceStatus: {
								type: Sequelize.ENUM('on', 'off'),
								allowNull: false,
								defaultValue: 'off'
						},
						misdn: {
								type: Sequelize.INTEGER(10),
								allowNull: false,
						},
						network: {
								type: Sequelize.STRING(10),
								allowNull: false,
						},
						createdAt: {
								allowNull: false,
								type: Sequelize.DATE
						},
						updatedAt: {
								allowNull: true,
								type: Sequelize.DATE
						}
				});
		},
		down: async (queryInterface, Sequelize) => {
				await queryInterface.dropTable('devices');
		}
};
