const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const Volunteer = require('../models/volunteer')(sequelize);
const Event = require('../models/event')(sequelize);
const Company = require('../models/company')(sequelize);
const Prizes = require('../models/prizes')(sequelize);
const Event_Volunteer = require('../models/event_volunteer')(sequelize);
//relations
Company.hasMany(Event);
Event.hasOne(Company);

Event.hasMany(Prizes);
Prizes.hasOne(Event);

Volunteer.belongsToMany(Event, { through: Event_Volunteer })
Event.belongsToMany(Volunteer, { through: Event_Volunteer } )

const db = {
    sequelize,
    Volunteer,
    Event,
    Company,
    Prizes,
    Event_Volunteer
};

module.exports = db;