const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ message: "User with this e-mail already exists!" });
        }

        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPass });

        res.status(201).json({ message: "Successfully registered!", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "User with that e-mail doesn't exist!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password!" });
        }

        res.status(200).json({ message: "Logged in successfully!"});
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

exports.edit = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userId = req.params.id || req.user.userId;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.username = username || user.username;
        user.email = email || user.email;
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        await user.save();

        res.status(200).json({ message: "Profile edited!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const userId = req.params.id || req.user.userId;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        await user.destroy();

        res.status(200).json({ message: "User deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
