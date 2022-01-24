// Import Express router
const { Router } = require("express");
const router = new Router();

const Trainer = require("../models").trainer;
const parties = require("../models").party;

// CREATE A TRAINER
// router.post("/", async (req, res, next) => {
//   try {
//     const { email, password, username } = req.body;
//     if (!email || !password || !username) {
//       res.status(400).send("missing parameters; email, password or username");
//     } else {
//       const newTrainer = await Trainer.create({
//         email,
//         password,
//         username,
//       });
//       res.json(newTrainer);
//     }
//   } catch (e) {
//     next(e);
//   }
// });

// GET ALL TRAINERS
router.get("/", async (req, res) => {
  try {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
    const order = req.query.order || "DESC";
    const by = req.query.by || "createdAt";
    const trainers = await Trainer.findAndCountAll({
      limit,
      offset,
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
    console.log(`GET REQUEST - Trainer by id:`);
    const trainer = await Trainer.findByPk(id, {
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

module.exports = router;
