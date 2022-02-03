"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "trainers",
      [
        {
          username: "tester",
          email: "test@test.nl",
          password: "test",
          mainColor: null,
          secondaryColor: null,
          buddy: 83,
          image:
            "https://archives.bulbagarden.net/media/upload/7/71/Spr_BW_Ace_Trainer_M.png",
          badge1: true,
          badge2: false,
          badge3: false,
          badge4: false,
          badge5: false,
          badge6: false,
          badge7: false,
          badge8: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("trainers", null, {});
  },
};
