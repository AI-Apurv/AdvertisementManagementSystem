"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../core/connection");
class User extends sequelize_1.Model {
    static findById(userId) {
        throw new Error('Method not implemented');
    }
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        //  allowNull: false ,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        // allowNull: false,
    },
    profilePic: {
        //  type: DataTypes.BLOB('long'),
        type: sequelize_1.DataTypes.BLOB,
    },
    contactNumber: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull: false,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
    dob: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
}, {
    sequelize: connection_1.sequelize,
    tableName: 'users',
});
//User.sync({force : true});
exports.default = User;
//# sourceMappingURL=user.model.js.map