"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      party.belongsTo(models.trainer, {
        through: "trainersParties",
        foreignKey: "partyId",
      });
    }
  }
  party.init(
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
    },
    {
      sequelize,
      modelName: "party",
    }
  );
  return party;
};
