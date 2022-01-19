// Import Express router
const { Router } = require("express");
const router = new Router();

const Trainer = require("../models").trainer;
const parties = require("../models").party;

// CREATE A TRAINER
router.post("/", async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      res.status(400).send("missing parameters; email, password or username");
    } else {
      const newTrainer = await Trainer.create({
        email,
        password,
        username,
      });
      res.json(newTrainer);
    }
  } catch (e) {
    next(e);
  }
});

// GET ALL TRAINERS
// router.get("/", async (req, res, next) => {
//   try {
//     console.log(`GET REQUEST - All Trainers:`);
//     const trainers = await Trainer.findAll();
//     res.send(trainers);
//   } catch (e) {
//     res.send("Something went wrong");
//     console.log(`GOT ERROR:`);
//     console.log(e);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
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
    });
    res.status(200).send({ message: "ok", trainers });
  } catch (e) {
    res.send("Something went wrong");
    console.log(`GOT ERROR:`);
    console.log(e);
  }
});

// GET SPECIFIC TRAINER by id
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(`GET REQUEST - Trainer by id:`);
    const trainer = await Trainer.findByPk(id, {
      attributes: { exclude: ["password", "email"] },
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

// GET SPECIFIC TRAINER by username //////////////////////DOESNT WORK YET
// router.get("/trainer/:username", async (req, res) => {
//   try {
//     const username = parseInt(req.params.username);
//     console.log(`GET REQUEST - Trainer by username:`);
//     const trainer = await Trainer.findOne({ where: { username: username } });
//     if (!trainer) {
//       res.status(404).send("Trainer not found");
//     } else {
//       res.send(trainer);
//     }
//   } catch (e) {
//     res.send("Something went wrong");
//     console.log(`GOT ERROR:`);
//     console.log(e);
//   }
// });

module.exports = router;
