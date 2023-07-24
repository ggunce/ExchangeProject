'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Share extends Model {}

  Share.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: {
        args: true,
        msg: 'Share already saved!'
      },
      validate: {
        notNull: {
          msg: "name is required"
        },
        isAlpha: true,
        len: {
          args:[3,3],
          msg: "Share name must be 3 charachters"
        },
      }
    },
    amount: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'Share',
  });
  
  (async () => {
    await sequelize.sync({ force: true });
  })();
  
  return Share;
};