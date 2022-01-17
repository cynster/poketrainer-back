'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "trainers",
      [
        {
          username: "tester",
          email: "test@test.nl",
          password: "test",
          mainColor: "#ff0000",
          secondaryColor: "#0000ff",
          buddy: 83,
          image: "https://archives.bulbagarden.net/media/upload/7/71/Spr_BW_Ace_Trainer_M.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("trainers", null, {});
  }
};
