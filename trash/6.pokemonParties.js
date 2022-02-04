"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    //   await queryInterface.bulkInsert(
    //     "pokemonparties",
    //     [
    //       {
    //         firstPokemon: 25,
    //         secondPokemon: 4,
    //         thirdPokemon: 150,
    //         fourthPokemon: 54,
    //         fifthPokemon: 22,
    //         sixthPokemon: 145,
    //         name:"Cool pokemon",
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //     ],
    //     {}
    //   );
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete("pokemonparties", null, {});
  },
};
