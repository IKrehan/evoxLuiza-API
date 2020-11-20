'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'products',
      'url',
      {
       type: Sequelize.STRING,
       allowNull: true
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'products',
      'url'
    );
  }
};
