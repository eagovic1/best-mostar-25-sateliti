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
const Group = require('../models/group')(sequelize);
const Group_Volunteer = require('../models/group_volunteer')(sequelize);

//relations
Company.hasMany(Event);
Event.hasOne(Company);

Event.hasMany(Prizes);
Prizes.hasOne(Event);

Volunteer.belongsToMany(Event, { through: Event_Volunteer });
Event.belongsToMany(Volunteer, { through: Event_Volunteer });

Group.belongsToMany(Volunteer, {through: Group_Volunteer});
Volunteer.belongsToMany(Group, {through: Group_Volunteer});

const db = {
    sequelize,
    Volunteer,
    Event,
    Company,
    Prizes,
    Event_Volunteer,
    Group,
    Group_Volunteer
};

module.exports = db;