import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./config/Database.js";
dotenv.config();

const app = express();
/*
//import mysql from "mysql";
//Use with connection.js
const conn = require('./connection');
conn.connect(function (error) {
    if (error) throw error;
    console.log("Database connection successfully....")
});*/

/*const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "auth_db"
})*/

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});