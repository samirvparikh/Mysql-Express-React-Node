const User = require("../models/User");
const db = require("../config/db");
exports.register = async (req, res) => {
    try {
        var user = req.body;
        var userData = [user.name, user.email, 'pass', new Date(), new Date()]
        const sql = "INSER INTO users (name, email, password, createdAt, updatedAt)";
        db.query(sql, [userData], (error, result) => {
            if (error) {
                console.log(error);
            } else {
                res.send(result);
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const sql = "select * from users";
        db.query(sql, (error, result) => {
            res.send(result);
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const sql = "select * from users where id=?";
        db.query(sql, [req.params.id], (error, result) => {
            if (error) {
                return res.status(400).json({
                    message: "User does not exists.",
                });
            }
            //res.send(result);
            return res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};