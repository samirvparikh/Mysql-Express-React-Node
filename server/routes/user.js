const express = require("express");
const router = express.Router();
const {
    register,
    getUsers,
    getUserById
} = require("../controllers/user");


router.post("/register", register);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);

module.exports = router;
