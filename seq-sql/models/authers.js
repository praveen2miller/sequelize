'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Authers.init({
    AutherId: {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
          },
    AutherName:{ 
      type: DataTypes.STRING,
      allowNull:false
    },
        
  }
  , {
    sequelize,
    modelName: 'Authers',
  });
  return Authers;
};