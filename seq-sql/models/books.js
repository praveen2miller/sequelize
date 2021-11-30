'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Books.init({
    BookId: {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
          },
    BookName:{ 
      type: DataTypes.STRING,
      allowNull:false
    },
    AutherId:{ 
      type: DataTypes.INTEGER,
      allowNull:false
    },
            
  }, {
    sequelize,
    modelName: 'Books',
  });
  Books.associate = function(models){
    Books.belongsTo(models.Authers,{foreignKey:'AutherId', as:'Authers'})
  };
  return Books;
};