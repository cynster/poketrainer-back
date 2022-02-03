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
      trainer.belongsToMany(models.party, {
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
        allowNull: true,
      },
      secondaryColor: {
        type: DataTypes.STRING, 
        allowNull: true,
      },
      buddy: {
        type: DataTypes.INTEGER, 
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING, 
        allowNull: true,
      },
      badge1: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
      },
      badge2: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
      },
      badge3: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
      },
      badge4: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
      },
      badge5: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
      },
      badge6: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
      },
      badge7: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
      },
      badge8: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "trainer",
    }
  );
  return trainer;
};
