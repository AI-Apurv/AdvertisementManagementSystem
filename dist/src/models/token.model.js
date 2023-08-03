"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../core/connection");
const sequelize_1 = require("sequelize");
class Token extends sequelize_1.Model {
    delete() {
        throw new Error('Method not implemented.');
    }
}
Token.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    token: {
        type: sequelize_1.DataTypes.STRING,
        // primaryKey: true,
        // autoIncrement: true,
    },
    // created_at: {
    //     type: DataTypes.DATE
    //   }
}, {
    sequelize: connection_1.sequelize,
    modelName: 'tokens'
});
//Token.sync({ force: true });
exports.default = Token;
//# sourceMappingURL=token.model.js.map