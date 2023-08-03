"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../core/connection");
const sequelize_1 = require("sequelize");
class Session extends sequelize_1.Model {
}
Session.init({
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        // primaryKey: true,
        // autoIncrement: true,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        // primaryKey: true,
        // autoIncrement: true,
    },
}, {
    sequelize: connection_1.sequelize,
    modelName: 'sessions'
});
// Session.sync({ force: true });
exports.default = Session;
//# sourceMappingURL=session.model.js.map