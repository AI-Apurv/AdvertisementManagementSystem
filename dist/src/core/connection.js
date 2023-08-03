"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    database: 'olxdb',
    username: 'postgres',
    password: '      ',
    host: '192.168.2.184',
    dialect: 'postgres',
    port: 5432
});
exports.sequelize = sequelize;
// Test the database connection
class Connection {
    static async dbconnection() {
        try {
            await sequelize.authenticate();
            console.log('connection has been established successfully');
        }
        catch (error) {
            console.error('Unable to connect to database', error);
        }
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