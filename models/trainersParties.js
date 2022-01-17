'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trainersParties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      trainersParties.belongsTo(models.trainer);
      trainersParties.belongsTo(models.party);
    }
  }
  trainersParties.init({
    trainerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    partyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Pokemon Party",
    },
  }, {
    sequelize,
    modelName: 'trainersParties',
  });
  return trainersParties;
};