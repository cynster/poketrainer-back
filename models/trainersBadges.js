'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trainersBadges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      trainersBadges.belongsTo(models.trainer);
      trainersBadges.belongsTo(models.badge);
    }
  }
  trainersBadges.init({
    trainerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    badgeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    earned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'trainersBadges',
  });
  return trainersBadges;
};