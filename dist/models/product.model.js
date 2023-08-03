"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../core/connection");
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    basePrice: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    currentBid: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    ownerId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    bidderId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    addressId: {
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
    tableName: 'products',
});
//Product.sync({force:true})
exports.default = Product;
//# sourceMappingURL=product.model.js.map