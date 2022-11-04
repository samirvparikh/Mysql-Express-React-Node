const User = require('../models/userModel')


exports.getUsers = async (req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['id', 'name', 'email', 'password']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            attributes: ['id', 'name', 'email', 'password'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createUser = async (req, res) => {
    res.send("createUser")
}

exports.updateUser = async (req, res) => {
    res.send("updateUser")
}

exports.deleteUser = async (req, res) => {
    res.send("deleteUser")
}
