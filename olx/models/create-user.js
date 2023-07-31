'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class create - user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  create - user.init({
    id: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    profilePic: DataTypes.BLOB,
    contactNumber: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'create-user',
  });
  return create - user;
};