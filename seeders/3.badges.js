"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "badges",
      [
        {
          league: "Indigo",
          name: "Boulder",
          image:
            "https://archives.bulbagarden.net/media/upload/thumb/d/dd/Boulder_Badge.png/50px-Boulder_Badge.png",
          leader: "Brock",
          location: "Pewter City",
          description: "It is a simple gray octagon.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          league: "Indigo",
          name: "Cascade",
          image:
            "https://archives.bulbagarden.net/media/upload/thumb/9/9c/Cascade_Badge.png/50px-Cascade_Badge.png",
          leader: "Misty",
          location: "Cerulean City",
          description: "It is in the shape of a light blue raindrop.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          league: "Indigo",
          name: "Thunder",
          image:
            "https://archives.bulbagarden.net/media/upload/thumb/a/a6/Thunder_Badge.png/50px-Thunder_Badge.png",
          leader: "Lt. Surge",
          location: "Vermilion City",
          description:
            "It is in the shape of an eight-pointed gold star with an orange octagon in the center.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          league: "Indigo",
          name: "Rainbow",
          image:
            "https://archives.bulbagarden.net/media/upload/thumb/b/b5/Rainbow_Badge.png/50px-Rainbow_Badge.png",
          leader: "Erika",
          location: "Celadon City",
          description:
            "It is shaped like a flower, showing grass, with rainbow colored petals.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          league: "Indigo",
          name: "Soul",
          image:
            "https://archives.bulbagarden.net/media/upload/thumb/7/7d/Soul_Badge.png/50px-Soul_Badge.png",
          leader: "Koga",
          location: "Fuchsia City",
          description: "It is in the shape of a fuchsia heart.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          league: "Indigo",
          name: "Marsh",
          image:
            "https://archives.bulbagarden.net/media/upload/thumb/6/6b/Marsh_Badge.png/50px-Marsh_Badge.png",
          leader: "Sabrina",
          location: "Saffron City",
          description: "It is two concentric golden circles.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          league: "Indigo",
          name: "Vulcano",
          image:
            "https://archives.bulbagarden.net/media/upload/thumb/1/12/Volcano_Badge.png/50px-Volcano_Badge.png",
          leader: "Blaine",
          location: "Cinnabar Island",
          description:
            "It is red and shaped like a flame with a small pink diamond in the center.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          league: "Indigo",
          name: "Earth",
          image:
            "https://archives.bulbagarden.net/media/upload/thumb/7/78/Earth_Badge.png/50px-Earth_Badge.png",
          leader: "Giovanni",
          location: "Viridian City",
          description:
            "It is shaped like a plant, most likely a Sakaki tree, which is where Giovanni's Japanese name comes from.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("badges", null, {});
  },
};
