const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "auth_db"
})
console.log(db);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const sql = "INSERT INTO users (name,email,password,refresh_token,createdAt,updatedAt) VALUES ('SAMIR3','samir3@gmail.com', '123','', now(), now())";
    console.log(sql);
    db.query(sql, (error, result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("1 record insert successfully")
    })
})

app.get("/api/users", (req, res) => {
    const sql = "select * from users";
    db.query(sql, (error, result) => {
        res.send(result);
    })

})
app.listen(`${process.env.PORT}`, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});