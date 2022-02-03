const axios = require("axios");

// Import Express router
const { Router } = require("express");
const router = new Router();

const Trainer = require("../models").trainer;
const parties = require("../models").party;

router.get("/:id", async (req, res) => {
  try {
    // Making sure that data is integer
    const id = parseInt(req.params.id);
    console.log(`GET REQUEST - Pokemon by id (${id}):`);
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    // Creating object with data that is needed
    // Not all pokemon have 2 types
    const pokemon = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.sprites.front_default,
      weight: response.data.weight, // weight in hectograms
      height: response.data.height, // height in decimetres
      type1: response.data.types[0].type.name,
      type2: response.data.types[1] ? response.data.types[1].type.name : null,
    };
    if (!response) {
      console.log(e.message);
      res.status(404).send("Pokemon not found");
    } else {
      res.status(200).send({ message: "ok", pokemon });
    }
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/all/:number", async (req, res) => {
  try {
    // Making sure that data is integer
    const number = parseInt(req.params.number);
    console.log(`GET REQUEST - ${number} Pokemon with names:`);
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${number}`
    );
    const allPokemon = response.data.results;  

    if (!response) {
      console.log(e.message);
      res.status(404).send("Pokemon not found");
    } else {
      res.status(200).send({ message: "ok", allPokemon });
    }
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
