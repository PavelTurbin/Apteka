'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Lera',
          login: 'Lerok',
          email: 'lerok@mail.ru',
          password: '1234'
        },
        {
          name: 'Sanya',
          login: 'Sanders',
          email: 'sanders@mail.ru',
          password: '12345'
        },
        {
          name: 'Pasha',
          login: 'Pashok',
          email: 'pashok@mail.ru',
          password: '123456'
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
