'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Maria',
      username: 'maria1234',
      password: 'maria1234',
      car: 'Mercedes cla',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Aly Barakat',
      username: 'aly1234',
      password: 'aly1234',
      car: 'Mitsubishi lancer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
