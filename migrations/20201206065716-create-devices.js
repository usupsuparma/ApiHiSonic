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
            user_id: {
                type: Sequelize.INTEGER(10),
            },
            device_token_key: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            device_type: {
                type: Sequelize.STRING(25),
                allowNull: false,
            },
            device_name: {
                type: Sequelize.STRING(25),
                allowNull: false,
            },
            device_status: {
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
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('devices');
    }
};
