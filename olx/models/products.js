'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    basePrice: DataTypes.INTEGER,
    currentBid: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
    bidderId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};