'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Basket, {
        foreignKey: 'drug_id'
      })
    }
  }
  Drug.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    priceDiscount: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Drug',
  });
  return Drug;
};