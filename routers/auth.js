const { Router } = require("express");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const { SALT_ROUNDS } = require("../config/constants");

const Trainer = require("../models").trainer;
const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const trainer = await Trainer.findOne({
      where: { email },
    });

    if (!trainer || !bcrypt.compareSync(password, trainer.password)) {
      return res.status(400).send({
        message: "Trainer with that email not found or password incorrect",
      });
    }

    delete trainer.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ trainerId: trainer.id });
    return res.status(200).send({ token, ...trainer.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/register", async (req, res) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(400)
    .send("Please provide an email, password and a username");
  }

  try {
    const newTrainer = await Trainer.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      username,
    });

    delete newTrainer.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ trainerId: newTrainer.id });

    res.status(201).json({
      token,
      ...newTrainer.dataValues
    });

  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    console.log(error);

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the trainers email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
    const trainer = await Trainer.findOne({
      where: { trainerId: req.trainer.id },
    });
    // don't send back the password hash
    delete req.trainer.dataValues["password"];
    res.status(200).send({ ...req.trainer.dataValues });
  });

module.exports = router;
