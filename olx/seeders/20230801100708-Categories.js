'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [{
      name: 'Electronics',
      parentid: null
    }, {
      name: 'Cars',
      parentid: null
    },
    {
      name: 'Mobile',
      parentid: 1
    },
    {
      name: 'Honda',
      parentid: 2
    },
    {
      name: 'Samsung',
      parentid: 3
    },
    {
      name: 'IPhone',
      parentid: 3
    },
    {
      name: 'Mivi',
      parentid: 3
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});

  }
};