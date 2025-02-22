const db = require('../config/db');
const User = db.Volunteer;
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

        res.status(200).json({ message: "Logged in successfully!" });
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

exports.numOfEventsByVolunteer = async (req, res) => {
    try {
        // count number of events for each user
        const users = await User.findAll();
        const events = await db.Event.findAll();
        const eventVolunteers = await db.EventVolunteer.findAll();
        const numOfEvents = users.map(user => {
            const userEvents = eventVolunteers.filter(eventVolunteer => eventVolunteer.userId === user.id && eventVolunteer.confirmed === true);
            return { user: user.username, numOfEvents: userEvents.length };
        });

        res.status(200).json({ numOfEvents });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

exports.streakCounterByVolunteer = async (req, res) => {
    try {
        // count streak for each user
        const users = await User.findAll();

        let streaks = users.map(async user => {
            ({ user: user, streak: user.streakCounter })
        });

        res.status(200).json({ streaks });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

exports.monthlyReset = async (req, res) => {
    try {
        const users = await User.findAll();
        users.forEach(async user => {
            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);
            const events = await user.getEvents({ where: { date: { [db.Sequelize.Op.gte]: lastMonth } } });
            events = events.filter(async event => {
                const eventVolunteer = await db.EventVolunteer.findOne({ where: { eventId: event.id, userId: user.id } });
                return eventVolunteer.length > 0;
            }
            );
            if (events.length === 0) {
                user.streakCounter = 0;
            }
            user.save();
        });

        res.status(200).json({ message: "Monthly reset completed!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}