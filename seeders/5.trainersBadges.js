'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "trainersBadges",
      [
        {
          trainerId: 1,
          badgeId: 1,
          earned: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          trainerId: 1,
          badgeId: 2,
          earned: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          trainerId: 1,
          badgeId: 3,
          earned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          trainerId: 1,
          badgeId: 4,
          earned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          trainerId: 1,
          badgeId: 5,
          earned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          trainerId: 1,
          badgeId: 6,
          earned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          trainerId: 1,
          badgeId: 7,
          earned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          trainerId: 1,
          badgeId: 8,
          earned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("trainersBadges", null, {});
  }
};
