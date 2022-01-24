const express = require("express");
const corsMiddleWare = require("cors");
const authRouter = require("./routers/auth");
const trainerRouter = require("./routers/trainers");
const pokemonRouter = require("./routers/pokemon");

// Create an express app
const app = express();
const { PORT } = require("./config/constants");

// CORS middleware: Since our api is hosted on a different domain than our client
// we are are doing "Cross Origin Resource Sharing" (cors)
// Cross origin resource sharing is disabled by express by default
app.use(corsMiddleWare());

// express.json():be able to read request bodies of JSON requests a.k.a. body-parser
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

// Routes
app.use("/auth", authRouter);
app.use("/trainers", trainerRouter);
app.use("/pokemon", pokemonRouter);

app.listen(PORT, () => {
  console.log(`PokeTrainer server started.`);
  console.log(`Listening on port: ${PORT}`);
  console.log(`To stop the server: Ctrl + C`);
  console.log(`Log:`);
});
