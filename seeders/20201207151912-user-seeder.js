'use strict';
const faker = require('faker/locale/id_ID');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [];
    for (let i = 0; i < 10; i++) {
      let name = faker.name.findName();
      let email = faker.internet.email();
      let password = bcrypt.hashSync('1qaz',saltRounds);
      let role = 'user';
      users.push({
        email: email,
        user_name: name,
        password: password,
        role: role,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    let password = bcrypt.hashSync('1qaz',saltRounds);
    users.push({
      email: 'admin@gmail.com',
      user_name: 'admin',
      password: password,
      role: 'admin',
      created_at: new Date(),
      updated_at: new Date(),
    });
    return queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
