"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class badge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      badge.belongsTo(models.trainer, {
        through: "trainersBadges",
        foreignKey: "badgeId",
      });
    }
  }
  badge.init(
    {
      league: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      leader: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "badge",
    }
  );
  return badge;
};
