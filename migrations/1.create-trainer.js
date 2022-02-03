'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trainers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      mainColor: {
        type: Sequelize.STRING
      },
      secondaryColor: {
        type: Sequelize.STRING
      },
      buddy: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      badge1: {
        type: Sequelize.BOOLEAN
      },
      badge2: {
        type: Sequelize.BOOLEAN
      },
      badge3: {
        type: Sequelize.BOOLEAN
      },
      badge4: {
        type: Sequelize.BOOLEAN
      },
      badge5: {
        type: Sequelize.BOOLEAN
      },
      badge6: {
        type: Sequelize.BOOLEAN
      },
      badge7: {
        type: Sequelize.BOOLEAN
      },
      badge8: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('trainers');
  }
};