const axios = require("axios")

// Import Express router
const { Router } = require("express");
const router = new Router();

const Trainer = require("../models").trainer;
const parties = require("../models").party;

router.get("/:id", async (req, res) => {
  try {
    // Making sure that data is integer
    const id = parseInt(req.params.id);
    console.log(`GET REQUEST - Pokemon by id:`);
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    // Creating object with data that is needed
    const pokemon = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.sprites.front_default,
      weight: response.data.weight, // weight in hectograms
      height: response.data.height, // height in decimetres
      type1: response.data.types[0].type.name,
      type2: response.data.types[1].type.name,
    }
 
    console.log("resp", pokemon);
    res.status(200).send({ message: "ok", pokemon });
    if (!response){
      console.log(e.message);
      res.status(404).send("Pokemon not found");
    }else{
      res.status(200).send({ message: "ok", response });
    }

  } catch (e) {
    console.log(e.message);
  }

});

module.exports = router;
