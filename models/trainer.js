"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      trainer.belongsTo(models.party, {
        through: "trainersParties",
        foreignKey: "trainerId",
      });
      trainer.belongsToMany(models.badge, {
        through: "trainersBadges",
        foreignKey: "trainerId",
      });
    }
  }
  trainer.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mainColor: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      secondaryColor: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      buddy: {
        type: DataTypes.INTEGER, 
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING, 
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "trainer",
    }
  );
  return trainer;
};
