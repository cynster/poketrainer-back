'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('parties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstPokemon: {
        type: Sequelize.INTEGER
      },
      secondPokemon: {
        type: Sequelize.INTEGER
      },
      thirdPokemon: {
        type: Sequelize.INTEGER
      },
      fourthPokemon: {
        type: Sequelize.INTEGER
      },
      fifthPokemon: {
        type: Sequelize.INTEGER
      },
      sixthPokemon: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('parties');
  }
};