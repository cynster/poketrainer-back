"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pokemonparty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // pokemonparty.belongsTo(models.trainer)
    }
  }
  pokemonparty.init(
    {
      firstPokemon: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 25,
      },
      secondPokemon: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      thirdPokemon: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fourthPokemon: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fifthPokemon: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sixthPokemon: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      partyName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "pokemonparty",
    }
  );
  return pokemonparty;
};
