"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../core/connection");
const sequelize_1 = require("sequelize");
class Address extends sequelize_1.Model {
}
Address.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    street1: {
        type: sequelize_1.DataTypes.STRING,
    },
    street2: {
        type: sequelize_1.DataTypes.STRING,
    },
    landmark: {
        type: sequelize_1.DataTypes.STRING,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    zipCode: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    addressType: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    sequelize: connection_1.sequelize,
    tableName: 'addresses'
});
// Address.sync({force:true})
exports.default = Address;
//# sourceMappingURL=address.model.js.map