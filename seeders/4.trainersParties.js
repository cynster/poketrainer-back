'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "trainersParties",
      [
        {
          trainerId: 1,
          partyId: 1,
          name: "Testers party",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("trainersParties", null, {});
  }
};
