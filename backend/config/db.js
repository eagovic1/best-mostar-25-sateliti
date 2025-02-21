const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('testdb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const User = require('../models/user')(sequelize);

const db = {
    sequelize,
    User
};

module.exports = db;
