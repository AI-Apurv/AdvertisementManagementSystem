"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    database: 'olxdb',
    username: 'postgres',
    password: '      ',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});
exports.sequelize = sequelize;
// Test the database connection
class Connection {
    static dbconnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield sequelize.authenticate();
                console.log('connection has been established successfully');
            }
            catch (error) {
                console.error('Unable to connect to database', error);
            }
        });
    }
}
exports.Connection = Connection;
// import { Sequelize } from 'sequelize';
// const sequelize = new Sequelize({
//   database: 'olxdb',
//   username: 'postgres',
//   password: '      ',
//   host: 'localhost',
//   dialect: 'postgres', 
//   port: 5432 
// });
// // Test the database connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection to the database has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });
// export { sequelize };
//# sourceMappingURL=connection.js.map