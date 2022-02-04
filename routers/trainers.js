// Import Express router
const { Router } = require("express");
const router = new Router();
const Pokemonparty = require("../models").pokemonparties;
const Trainer = require("../models").trainer;
const Party = require("../models").party;
const TrainersParties = require("../models").trainersParties;

// GET ALL TRAINERS
router.get("/", async (req, res) => {
  try {
    const limit = req.query.limit || 100;
    const offset = req.query.offset || 0;
    const order = req.query.order || "DESC";
    const by = req.query.by || "createdAt";
    const trainers = await Trainer.findAndCountAll({
      limit,
      offset,
      include: [
        {
          model: Party,
          attributes: [
            "firstPokemon",
            "secondPokemon",
            "thirdPokemon",
            "fourthPokemon",
            "fifthPokemon",
            "sixthPokemon",
          ],
        },
      ],
      attributes: { exclude: ["password", "email"] },
      order: [[by, order]],
    });
    res.status(200).send({ message: "ok", trainers });
  } catch (e) {
    res.send("Something went wrong");
    console.log(`GOT ERROR:`);
    console.log(e);
  }
});

// GET SPECIFIC TRAINER by id
router.get("/trainer/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(`GET REQUEST - Trainer by id(${id}):`);
    const trainer = await Trainer.findByPk(id, {
      attributes: { exclude: ["password", "email"] },
      include: [
        {
          model: Party,
          attributes: [
            "firstPokemon",
            "secondPokemon",
            "thirdPokemon",
            "fourthPokemon",
            "fifthPokemon",
            "sixthPokemon",
          ],
        },
      ],
    });
    if (!trainer) {
      res.status(404).send("Trainer not found");
    } else {
      res.status(200).send({ message: "ok", trainer });
    }
  } catch (e) {
    res.send("Something went wrong");
    console.log(`GOT ERROR:`);
    console.log(e);
  }
});

//PATCH - UPDATE BADGES OF A TRAINER
router.patch("/badges/:id", async (req, res) => {
  const { badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8 } =
    req.body;

  const trainer = await Trainer.findByPk(req.params.id);

  await trainer.update({
    badge1,
    badge2,
    badge3,
    badge4,
    badge5,
    badge6,
    badge7,
    badge8,
  });
  delete trainer.dataValues["password"];
  return res.status(200).send({ trainer });
});

//PATCH - UPDATE SPECIFIC TRAINER
router.patch("/:id", async (req, res) => {
  const trainer = await Trainer.findByPk(req.params.id);

  const { image, buddy, mainColor, secondaryColor } = req.body;

  await trainer.update({ image, buddy, mainColor, secondaryColor });
  delete trainer.dataValues["password"];
  return res.status(200).send({ trainer });
});

// POST - CREATE NEW POKEMON PARTY
router.post("/party/:id", async (req, res) => {
  try {
    console.log(
      `POST - CREATE NEW TRAINER PARTY FOR TRAINER (${req.params.id}):`
    );

    // Get random starter
    const starters = [25, 1, 4, 7];
    const randomStarter = starters[Math.floor(Math.random() * starters.length)];

    const newParty = await Party.create({
      firstPokemon: randomStarter,
      secondPokemon: null,
      thirdPokemon: null,
      fourthPokemon: null,
      fifthPokemon: null,
      sixthPokemon: null,
    });

    console.log("newparty", newParty);
    const setRelationsTrainersParties = await TrainersParties.create({
      partyId: newParty.id,
      trainerId: parseInt(req.params.id),
    });
    console.log("jointable", setRelationsTrainersParties);
    res.send(newParty);
  } catch (e) {
    res.send("Something went wrong");
    console.log(`GOT ERROR:`);
    console.log(e);
  }
});

//PATCH - UPDATE EXISTING POKEMON PARTY
router.patch("/party/:id", async (req, res) => {
  if (!firstPokemon) {
    return res.status(400).send("There has to be a pokemon in the first slot");
  }

  try {
    console.log(
      `PATCH REQUEST - UPDATE TRAINER PARTY OF TRAINER (${req.params.id}):`
    );

    const trainer = await Trainer.findByPk(req.params.id, {
      attributes: { exclude: ["password", "email"] },
      include: [
        {
          model: parties,
          attributes: [
            "firstPokemon",
            "secondPokemon",
            "thirdPokemon",
            "fourthPokemon",
            "fifthPokemon",
            "sixthPokemon",
          ],
        },
      ],
    });
  } catch (e) {
    console.log(e.message);
  }

  const {
    firstPokemon,
    secondPokemon,
    thirdPokemon,
    fourthPokemon,
    fifthPokemon,
    sixthPokemon,
  } = req.body;

  await trainer.parties[0].update({
    firstPokemon,
    secondPokemon,
    thirdPokemon,
    fourthPokemon,
    fifthPokemon,
    sixthPokemon,
  });

  return res.status(200).send({ trainer });
});

// GET NUMBER OF TRAINERS //Can be made more efficient useing .count()
router.get("/count", async (req, res) => {
  try {
    const trainersCount = await Trainer.findAll();
    if (!trainersCount.length) {
      return res.status(404).send("None counted");
    } else {
      return res
        .status(200)
        .send({ message: "ok", trainersCount: trainersCount.length });
    }
  } catch (e) {
    res.send("Something went wrong");
    console.log(`GOT ERROR:`);
    console.log(e);
  }
});

// GET ALL TRAINERS
router.get("/pokemonparties", async (req, res) => {
  try {
    const trainers = await Trainer.findAndCountAll({
      include: {
        model: Pokemonparty,
        //where: Trainer.pokemonpartyId === Pokemonparty.id,
        attributes: [
          "firstPokemon",
          "secondPokemon",
          "thirdPokemon",
          "fourthPokemon",
          "fifthPokemon",
          "sixthPokemon",
        ],
      },
      //attributes: { exclude: ["password", "email"] },
    });
    res.status(200).send({ message: "ok", trainers });
  } catch (e) {
    res.send("Something went wrong");
    console.log(`GOT ERROR:`);
    console.log(e);
  }
});

module.exports = router;
