'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {}

  Portfolio.init({
    userId: DataTypes.INTEGER,
    share: DataTypes.STRING,
    amount: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'Portfolio',
  });
  return Portfolio;
};