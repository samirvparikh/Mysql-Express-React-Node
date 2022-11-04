//import { Sequelize } from "sequelize";
const Sequelize = require("sequelize");

const db = new Sequelize('auth_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

//export default db;
module.exports = db;