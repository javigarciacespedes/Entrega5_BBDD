'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Scores', [
      {
        wins: '0',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wins: '0',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wins: '0',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Scores', null, {});
  }
};