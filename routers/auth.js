const { Router } = require("express");
const bcrypt = require("bcrypt");

const Trainer = require("../models").trainer;
const router = new Router();

module.exports = router;